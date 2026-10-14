import { Resend } from "resend";
import { clientEmail, teamEmail } from "@/emails/enquiry";
import { parseEnquiry, tooManyRequests } from "@/lib/enquiry";

const json = (body: Record<string, unknown>, status = 200) => Response.json(body, { status });

// POST /api/enquiry: one enquiry in, two emails out (one to the team, one to the client).
// Needs RESEND_API_KEY, ENQUIRY_TO_EMAIL and ENQUIRY_FROM_EMAIL in .env.
// With ENQUIRY_DRY_RUN=1 nothing is sent; the rendered emails come back instead (for testing).
export async function POST(req: Request) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  // (the limit is skipped in dry-run test mode, so repeated test submissions are not blocked)
  if (process.env.ENQUIRY_DRY_RUN !== "1" && tooManyRequests(ip)) return json({ ok: false, error: "Too many requests. Please try again in a few minutes." }, 429);

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return json({ ok: false, error: "That did not look like a form submission." }, 400);
  }

  const parsed = parseEnquiry(body);
  if (!parsed.ok) return json({ ok: false, error: parsed.error }, 400);
  // a bot filled the hidden field: pretend it worked, send nothing
  if (parsed.spam) return json({ ok: true, clientCopy: false });

  const e = parsed.data;
  const team = teamEmail(e);
  const client = clientEmail(e);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO_EMAIL;
  const from = process.env.ENQUIRY_FROM_EMAIL;

  if (process.env.ENQUIRY_DRY_RUN === "1") {
    return json({ ok: true, dryRun: true, clientCopy: true, team, client, config: { hasKey: !!apiKey, to: !!to, from: !!from } });
  }

  if (!apiKey || !to || !from) {
    console.error("[enquiry] missing env: RESEND_API_KEY / ENQUIRY_TO_EMAIL / ENQUIRY_FROM_EMAIL");
    return json({ ok: false, error: "Our form is not set up yet. Please call us instead." }, 500);
  }

  const resend = new Resend(apiKey);

  // to the team first: this one must not be lost
  const teamSend = await resend.emails.send({ from, to, replyTo: e.email, subject: team.subject, html: team.html, text: team.text });
  if (teamSend.error) {
    console.error("[enquiry] team email failed:", teamSend.error);
    return json({ ok: false, error: "We could not send that just now. Please try again or call us." }, 502);
  }

  // then the client's copy; if it fails the enquiry still counts
  const clientSend = await resend.emails.send({ from, to: e.email, replyTo: to, subject: client.subject, html: client.html, text: client.text });
  if (clientSend.error) console.error("[enquiry] client email failed:", clientSend.error);

  return json({ ok: true, clientCopy: !clientSend.error });
}
