import express from 'express';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;
const IS_PROD = process.env.NODE_ENV === 'production';
const ROOT_DIR = process.cwd();
const ENQUIRIES_DIR = path.join(ROOT_DIR, 'data');
const ENQUIRIES_FILE = path.join(ENQUIRIES_DIR, 'enquiries.json');

interface ContactPayload {
  fullName: string;
  companyName?: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

async function persistEnquiry(entry: ContactPayload & { id: string; submittedAt: string }) {
  await fs.promises.mkdir(ENQUIRIES_DIR, { recursive: true });
  let existing: Array<ContactPayload & { id: string; submittedAt: string }> = [];
  try {
    const raw = await fs.promises.readFile(ENQUIRIES_FILE, 'utf-8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      existing = parsed;
    }
  } catch {
    existing = [];
  }
  existing.push(entry);
  await fs.promises.writeFile(ENQUIRIES_FILE, JSON.stringify(existing, null, 2), 'utf-8');
}

async function sendEnquiryEmail(entry: ContactPayload & { id: string; submittedAt: string }) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!host || !user || !pass) {
    return false;
  }
  const port = Number(process.env.SMTP_PORT) || 587;
  const recipient = process.env.CONTACT_RECIPIENT || 'sales@ambilux.in';

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"AMBILUX Website" <${user}>`,
    to: recipient,
    replyTo: entry.email,
    subject: `[AMBILUX Enquiry ${entry.id}] ${entry.subject}`,
    text: [
      `Reference: ${entry.id}`,
      `Date: ${entry.submittedAt}`,
      `Full Name: ${entry.fullName}`,
      `Company: ${entry.companyName || 'Not specified'}`,
      `Email: ${entry.email}`,
      `Phone: ${entry.phone || 'Not specified'}`,
      `Subject: ${entry.subject}`,
      '',
      'Message:',
      entry.message,
    ].join('\n'),
  });

  return true;
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '1mb' }));

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true, service: 'ambilux-web' });
  });

  app.post('/api/contact', async (req, res) => {
    try {
      const body = (req.body || {}) as Partial<ContactPayload>;
      const fullName = String(body.fullName || '').trim();
      const companyName = String(body.companyName || '').trim();
      const email = String(body.email || '').trim();
      const phone = String(body.phone || '').trim();
      const subject = String(body.subject || '').trim();
      const message = String(body.message || '').trim();

      const errors: Record<string, string> = {};
      if (fullName.length < 2) errors.fullName = 'Please enter your full name.';
      if (!isValidEmail(email)) errors.email = 'Please enter a valid email address.';
      if (subject.length < 2) errors.subject = 'Please specify a subject for your enquiry.';
      if (message.length < 10) errors.message = 'Please include a short description of your project or enquiry.';

      if (Object.keys(errors).length > 0) {
        return res.status(400).json({ ok: false, errors, message: 'Please review the highlighted fields.' });
      }

      const id = `AMB-${Date.now().toString(36).toUpperCase()}`;
      const submittedAt = new Date().toISOString();
      const record = {
        id,
        submittedAt,
        fullName,
        companyName,
        email,
        phone,
        subject,
        message,
      };

      await persistEnquiry(record);

      let emailSent = false;
      try {
        emailSent = await sendEnquiryEmail(record);
      } catch (mailError) {
        console.error('SMTP dispatch warning:', mailError);
      }

      return res.status(200).json({
        ok: true,
        referenceId: id,
        emailDispatched: emailSent,
        message: 'Your enquiry has been received. Our architectural lighting team will respond shortly.',
      });
    } catch (error) {
      console.error('Contact submission error:', error);
      return res.status(500).json({
        ok: false,
        message: 'We could not process your enquiry at the moment. Please contact sales@ambilux.in directly.',
      });
    }
  });

  if (!IS_PROD) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.join(ROOT_DIR, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`AMBILUX server running at http://localhost:${PORT}`);
  });
}

startServer();
