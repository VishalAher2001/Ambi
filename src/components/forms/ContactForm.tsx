// import { FormEvent, useState } from 'react';
// import { CheckCircle2, AlertCircle } from 'lucide-react';
// import { CtaButton } from '../common/CtaButton';

// interface FormValues {
//   fullName: string;
//   companyName: string;
//   email: string;
//   phone: string;
//   subject: string;
//   message: string;
// }

// const INITIAL_VALUES: FormValues = {
//   fullName: '',
//   companyName: '',
//   email: '',
//   phone: '',
//   subject: '',
//   message: '',
// };

// export function ContactForm() {
//   const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
//   const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
//   const [submitting, setSubmitting] = useState(false);
//   const [serverError, setServerError] = useState<string | null>(null);
//   const [successInfo, setSuccessInfo] = useState<{
//     referenceId: string;
//     message: string;
//   } | null>(null);

//   const validate = (v: FormValues) => {
//     const next: Partial<Record<keyof FormValues, string>> = {};
//     if (v.fullName.trim().length < 2) {
//       next.fullName = 'Full name is required.';
//     }
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) {
//       next.email = 'Please provide a valid email address.';
//     }
//     if (v.subject.trim().length < 2) {
//       next.subject = 'Please enter a subject.';
//     }
//     if (v.message.trim().length < 10) {
//       next.message = 'Please enter at least 10 characters describing your enquiry.';
//     }
//     return next;
//   };

//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     setServerError(null);
//     setSuccessInfo(null);

//     const clientErrors = validate(values);
//     if (Object.keys(clientErrors).length > 0) {
//       setErrors(clientErrors);
//       return;
//     }

//     setErrors({});
//     setSubmitting(true);

//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(values),
//       });

//       const data = await response.json();

//       if (!response.ok || !data.ok) {
//         if (data.errors) {
//           setErrors(data.errors);
//         }
//         setServerError(
//           data.message || 'Unable to submit your enquiry. Please check your details and try again.'
//         );
//         return;
//       }

//       setSuccessInfo({
//         referenceId: data.referenceId,
//         message: data.message,
//       });
//       setValues(INITIAL_VALUES);
//     } catch {
//       setServerError(
//         'Network error while sending your enquiry. Please try again or email sales@ambilux.in directly.'
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   const fieldBase =
//     'w-full border border-[#aeb0b1] bg-white px-4 py-3 text-[15px] text-[#555555] placeholder:text-[#aeb0b1] transition-colors focus:border-[#00943e] focus:outline-none';

//   return (
//     <form onSubmit={handleSubmit} noValidate className="space-y-6">
//       {successInfo ? (
//         <div
//           role="status"
//           className="flex items-start gap-3 border border-[#00943e] bg-[#00943e]/8 p-5 text-sm text-[#555555]"
//         >
//           <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#00943e]" aria-hidden="true" />
//           <div className="space-y-1">
//             <p className="font-medium text-[#00943e]">Enquiry received ({successInfo.referenceId})</p>
//             <p className="text-[#555555]">{successInfo.message}</p>
//           </div>
//         </div>
//       ) : null}

//       {serverError ? (
//         <div
//           role="alert"
//           className="flex items-start gap-3 border border-[#e10020] bg-[#e10020]/6 p-4 text-sm text-[#555555]"
//         >
//           <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#e10020]" aria-hidden="true" />
//           <p>{serverError}</p>
//         </div>
//       ) : null}

//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//         <div className="space-y-2">
//           <label htmlFor="fullName" className="block text-xs font-medium uppercase tracking-[0.1em] text-[#555555]">
//             Full Name *
//           </label>
//           <input
//             id="fullName"
//             name="fullName"
//             type="text"
//             required
//             value={values.fullName}
//             onChange={(e) => setValues({ ...values, fullName: e.target.value })}
//             placeholder="Your full name"
//             className={fieldBase}
//           />
//           {errors.fullName ? (
//             <p className="text-xs text-[#e10020]">{errors.fullName}</p>
//           ) : null}
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="companyName" className="block text-xs font-medium uppercase tracking-[0.1em] text-[#555555]">
//             Company Name
//           </label>
//           <input
//             id="companyName"
//             name="companyName"
//             type="text"
//             value={values.companyName}
//             onChange={(e) => setValues({ ...values, companyName: e.target.value })}
//             placeholder="Architecture practice or organization"
//             className={fieldBase}
//           />
//         </div>
//       </div>

//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//         <div className="space-y-2">
//           <label htmlFor="email" className="block text-xs font-medium uppercase tracking-[0.1em] text-[#555555]">
//             Email Address *
//           </label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             required
//             value={values.email}
//             onChange={(e) => setValues({ ...values, email: e.target.value })}
//             placeholder="name@company.com"
//             className={fieldBase}
//           />
//           {errors.email ? (
//             <p className="text-xs text-[#e10020]">{errors.email}</p>
//           ) : null}
//         </div>

//         <div className="space-y-2">
//           <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-[0.1em] text-[#555555]">
//             Phone Number
//           </label>
//           <input
//             id="phone"
//             name="phone"
//             type="tel"
//             value={values.phone}
//             onChange={(e) => setValues({ ...values, phone: e.target.value })}
//             placeholder="+91 98..."
//             className={fieldBase}
//           />
//         </div>
//       </div>

//       <div className="space-y-2">
//         <label htmlFor="subject" className="block text-xs font-medium uppercase tracking-[0.1em] text-[#555555]">
//           Subject *
//         </label>
//         <input
//           id="subject"
//           name="subject"
//           type="text"
//           required
//           value={values.subject}
//           onChange={(e) => setValues({ ...values, subject: e.target.value })}
//           placeholder="e.g. Customised lighting schedule, Product enquiry, Light planning"
//           className={fieldBase}
//         />
//         {errors.subject ? (
//           <p className="text-xs text-[#e10020]">{errors.subject}</p>
//         ) : null}
//       </div>

//       <div className="space-y-2">
//         <label htmlFor="message" className="block text-xs font-medium uppercase tracking-[0.1em] text-[#555555]">
//           Message *
//         </label>
//         <textarea
//           id="message"
//           name="message"
//           rows={5}
//           required
//           value={values.message}
//           onChange={(e) => setValues({ ...values, message: e.target.value })}
//           placeholder="Share project scope, fixture categories of interest, or timeline..."
//           className={fieldBase}
//         />
//         {errors.message ? (
//           <p className="text-xs text-[#e10020]">{errors.message}</p>
//         ) : null}
//       </div>

//       <div className="pt-2">
//         <CtaButton
//           type="submit"
//           label={submitting ? 'Submitting enquiry...' : 'Submit enquiry'}
//           disabled={submitting}
//           size="lg"
//         />
//       </div>
//     </form>
//   );
// }

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { CtaButton } from "../common/CtaButton";

interface FormValues {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const INITIAL_VALUES: FormValues = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

const EMAILJS_SERVICE_ID =
  import.meta.env.VITE_EMAILJS_SERVICE_ID || "service_8k7sf4l";
const EMAILJS_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_lpcggt7";
const EMAILJS_PUBLIC_KEY =
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "KRRLzkNI_CLYgchaZ";

export function ContactForm() {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);

  const [errors, setErrors] = useState<
    Partial<Record<keyof FormValues, string>>
  >({});

  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const [successInfo, setSuccessInfo] = useState<{
    referenceId: string;
    message: string;
  } | null>(null);

  const validate = (v: FormValues) => {
    const next: Partial<Record<keyof FormValues, string>> = {};

    if (v.fullName.trim().length < 2) {
      next.fullName = "Full name is required.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email.trim())) {
      next.email = "Please provide a valid email address.";
    }

    if (v.subject.trim().length < 2) {
      next.subject = "Please enter a subject.";
    }

    if (v.message.trim().length < 10) {
      next.message =
        "Please enter at least 10 characters describing your enquiry.";
    }

    return next;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setServerError(null);
    setSuccessInfo(null);

    const clientErrors = validate(values);

    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          full_name: values.fullName,
          company_name: values.companyName,
          email_address: values.email,
          phone_number: values.phone,
          subject: values.subject,
          message: values.message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      );

      setSuccessInfo({
        referenceId: `AMB-${Date.now().toString().slice(-6)}`,
        message:
          "Thank you! Your enquiry has been successfully sent. Our team will contact you soon.",
      });

      setValues(INITIAL_VALUES);
    } catch (error) {
      console.error("EmailJS Error:", error);

      setServerError(
        "Unable to send your enquiry right now. Please try again or email sales@ambilux.in directly.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  const fieldBase =
    "w-full border border-[#aeb0b1] bg-white px-4 py-3 text-[15px] text-[#555555] placeholder:text-[#aeb0b1] transition-colors focus:border-[#00943e] focus:outline-none";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {successInfo ? (
        <div
          role="status"
          className="flex items-start gap-3 border border-[#00943e] bg-[#00943e]/8 p-5 text-sm text-[#555555]"
        >
          <CheckCircle2
            className="mt-0.5 h-5 w-5 shrink-0 text-[#00943e]"
            aria-hidden="true"
          />

          <div className="space-y-1">
            <p className="font-medium text-[#00943e]">
              Enquiry received ({successInfo.referenceId})
            </p>

            <p className="text-[#555555]">{successInfo.message}</p>
          </div>
        </div>
      ) : null}

      {serverError ? (
        <div
          role="alert"
          className="flex items-start gap-3 border border-[#e10020] bg-[#e10020]/6 p-4 text-sm text-[#555555]"
        >
          <AlertCircle
            className="mt-0.5 h-5 w-5 shrink-0 text-[#e10020]"
            aria-hidden="true"
          />

          <p>{serverError}</p>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="fullName"
            className="block text-xs font-medium uppercase tracking-[0.1em] text-[#555555]"
          >
            Full Name *
          </label>

          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={values.fullName}
            onChange={(e) => setValues({ ...values, fullName: e.target.value })}
            placeholder="Your full name"
            className={fieldBase}
          />

          {errors.fullName ? (
            <p className="text-xs text-[#e10020]">{errors.fullName}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="companyName"
            className="block text-xs font-medium uppercase tracking-[0.1em] text-[#555555]"
          >
            Company Name
          </label>

          <input
            id="companyName"
            name="companyName"
            type="text"
            value={values.companyName}
            onChange={(e) =>
              setValues({ ...values, companyName: e.target.value })
            }
            placeholder="Architecture practice or organization"
            className={fieldBase}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label
            htmlFor="email"
            className="block text-xs font-medium uppercase tracking-[0.1em] text-[#555555]"
          >
            Email Address *
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            placeholder="name@company.com"
            className={fieldBase}
          />

          {errors.email ? (
            <p className="text-xs text-[#e10020]">{errors.email}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="phone"
            className="block text-xs font-medium uppercase tracking-[0.1em] text-[#555555]"
          >
            Phone Number
          </label>

          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            placeholder="+91 98..."
            className={fieldBase}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="subject"
          className="block text-xs font-medium uppercase tracking-[0.1em] text-[#555555]"
        >
          Subject *
        </label>

        <input
          id="subject"
          name="subject"
          type="text"
          required
          value={values.subject}
          onChange={(e) => setValues({ ...values, subject: e.target.value })}
          placeholder="e.g. Customised lighting schedule, Product enquiry, Light planning"
          className={fieldBase}
        />

        {errors.subject ? (
          <p className="text-xs text-[#e10020]">{errors.subject}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <label
          htmlFor="message"
          className="block text-xs font-medium uppercase tracking-[0.1em] text-[#555555]"
        >
          Message *
        </label>

        <textarea
          id="message"
          name="message"
          rows={5}
          required
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          placeholder="Share project scope, fixture categories of interest, or timeline..."
          className={fieldBase}
        />

        {errors.message ? (
          <p className="text-xs text-[#e10020]">{errors.message}</p>
        ) : null}
      </div>

      <div className="pt-2">
        <CtaButton
          type="submit"
          label={submitting ? "Sending enquiry..." : "Submit enquiry"}
          disabled={submitting}
          size="lg"
        />
      </div>
    </form>
  );
}
