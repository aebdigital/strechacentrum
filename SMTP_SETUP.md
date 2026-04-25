# SMTP2GO Configuration Guide

This project uses **SMTP2GO** to handle email submissions from the contact form.

## Prerequisites

1.  An active **SMTP2GO** account.
2.  A verified **Sender Domain** or **Sender Email** in SMTP2GO (Settings → Senders).
3.  An **API Key** with "Send Email" permissions (Settings → API Keys).

## Environment Variables

The following environment variables must be configured in your deployment platform (e.g., Netlify Dashboard):

| Variable | Description | Example |
| :--- | :--- | :--- |
| `SMTP2GO_API_KEY` | Your SMTP2GO API Key | `api-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` |
| `SMTP2GO_SENDER` | A verified sender email | `no-reply@yourdomain.sk` |
| `CONTACT_FORM_RECIPIENT` | Where to send form submissions | `info@yourdomain.sk` |

## Implementation Details

The contact form is handled by two redundant endpoints:

1.  **Next.js API Route**: `app/api/contact/route.ts`
    *   Used during standard Next.js execution (SSR/ISR).
    *   Uses the `sendContactEmail` helper in `lib/sendContactEmail.ts`.
2.  **Netlify Function**: `netlify/functions/contact.js`
    *   Used as a fallback or in static export scenarios.
    *   Configured via `netlify.toml`.

## Testing

To test the integration locally:
1.  Copy `.env.example` to `.env.local`.
2.  Fill in your valid SMTP2GO credentials.
3.  Run `npm run dev`.
4.  Submit the contact form and check the console/inbox.
