<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/6754879b-6769-4845-a9b9-c521c304305b

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and
   `VITE_EMAILJS_PUBLIC_KEY` in `.env` if you use different EmailJS settings.
   The enquiry form falls back to the public settings in `.env.example`.
3. Run the app:
   `npm run dev`

For production builds, configure those `VITE_EMAILJS_*` variables in the
hosting provider's build environment when overriding the defaults. Vite embeds
them into the client bundle at build time.
