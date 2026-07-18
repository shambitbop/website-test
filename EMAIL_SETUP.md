# Setting up email delivery

Contact, careers, and quote submissions are sent with Resend to the fixed recipient in
`lib/contact-details.ts` (`ehtishamulhassanmalik@gmail.com`).

## Required Vercel configuration

1. Create a Resend account and API key at <https://resend.com/api-keys>.
2. In Resend, add and verify the `decrypt-ai.tech` sending domain.
3. In the Vercel project, open **Settings > Environment Variables** and add:

   ```text
   RESEND_API_KEY=re_your_real_key
   RESEND_FROM=Decrypt AI Technologies <info@decrypt-ai.tech>
   ```

4. Apply the variables to Production and any Preview environments that should send email.
5. Redeploy after adding or changing environment variables.

Do not commit the real API key. `.env.local.example` contains safe placeholders only.

## Local development

Copy `.env.local.example` to `.env.local`, replace the placeholder key, and run the development
server. When `RESEND_API_KEY` is absent, development logs the submission instead of sending it.
In production, the API returns `503 Email service unavailable` so the UI cannot report a false
success.

## Sender requirements

`RESEND_FROM` must use a domain verified in the same Resend account as the API key. If it is
omitted, the code falls back to `onboarding@resend.dev`. That testing sender can only deliver to
the email address associated with the Resend account, so it is not suitable for normal production
delivery unless that account email is also the fixed recipient.

## Variables

| Variable | Production requirement | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Required | Authorizes the server-side Resend request. |
| `RESEND_FROM` | Required for normal production delivery | Verified sender, for example `Decrypt AI Technologies <info@decrypt-ai.tech>`. |

There is no `RESEND_ACCOUNT_EMAIL` variable in the application.
