## Goal
When someone submits the DanubeX newsletter form, send an email to `kiszely@abilitymatrix.com` with their address. No database, no confirmation email to the subscriber (yet).

## Approach
Reuse the same pattern as your `bizdevbuddy` project: direct Resend API call from the server, using a `RESEND_API_KEY` secret and your verified `kiszely.app` domain as sender.

## Steps

1. **Secret**
   - Add `RESEND_API_KEY` (I'll prompt for it — reuse the same key from bizdevbuddy or create a new one at resend.com/api-keys).

2. **Server function** — `src/lib/newsletter.functions.ts`
   - `subscribeToNewsletter({ email })` using `createServerFn`
   - Zod validation
   - POST to `https://api.resend.com/emails`:
     - `from`: `DanubeX <noreply@kiszely.app>`
     - `to`: `kiszely@abilitymatrix.com`
     - `reply_to`: subscriber's email (so you can reply directly)
     - `subject`: `New DanubeX subscriber: <email>`
     - Body: email + timestamp + user-agent
   - Returns `{ success: true }`; on failure, surfaces a generic error and logs details server-side.

3. **Wire the form** — `src/lib/newsletter.ts`
   - Replace the current stub with a call to the new server function via `useServerFn` in `NewsletterForm.tsx` (or keep the `submitNewsletter` helper and have it invoke the server fn).

## Notes
- No DB table for now; if you later want a subscriber list, we can add a Cloud table and insert alongside the email send.
- No changes to UI copy or layout.
- Nothing else in the app is touched.

Confirm and I'll implement.
