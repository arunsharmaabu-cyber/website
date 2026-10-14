import { SOURCE_LABEL, type Enquiry } from "@/lib/enquiry";

// ───────── Copy for the enquiry emails: edit the words here ─────────
const BRAND = "TechX Media";
const LOCATION = "Dallas–Fort Worth, TX";
const PHONE = "(214) 000-0000";
const PHONE_HREF = "tel:+12140000000";
const CLIENT_STEPS = [
  { title: "We look at your site", text: "We check your website, your Google profile and who is winning your searches today." },
  { title: "Your audit is in your inbox within 24 hours", text: "Real numbers, in plain English, so you can see what is costing you calls." },
  { title: "You decide", text: "No contract and no pushy sales call. Use it yourself or let us fix it." },
];

// Colours (the same ones the site uses)
const C = { page: "#F1EDE7", card: "#FBFBF9", ink: "#0B0B0C", body: "#3A3C42", muted: "#5C5F66", line: "#DADCE1", accent: "#FF4D00" };
const FONT = "-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif";

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const nl2br = (s: string) => esc(s).replace(/\n/g, "<br>");
const firstName = (name: string) => name.split(" ")[0] || name;

// A shell shared by both emails: cream page, white card, wordmark on top, small footer.
function shell(preheader: string, inner: string, footer: string) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light only">
<meta name="supported-color-schemes" content="light only">
<title>${esc(BRAND)}</title>
</head>
<body style="margin:0;padding:0;background:${C.page};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:${C.page};">${esc(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.page};">
  <tr><td align="center" style="padding:32px 16px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;">
      <tr><td style="padding:0 4px 18px 4px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
          <td style="font-family:${FONT};font-size:20px;font-weight:700;letter-spacing:.14em;color:${C.ink};">TECHX<span style="font-size:11px;vertical-align:top;">&reg;</span></td>
          <td align="right" style="font-family:'SFMono-Regular',Menlo,Consolas,monospace;font-size:11px;letter-spacing:.1em;color:${C.muted};">/DFW_TX</td>
        </tr></table>
      </td></tr>
      <tr><td style="background:${C.card};border:1px solid ${C.line};border-radius:16px;padding:36px 32px;font-family:${FONT};color:${C.body};">
        ${inner}
      </td></tr>
      <tr><td style="padding:18px 8px 0 8px;font-family:${FONT};font-size:12px;line-height:1.6;color:${C.muted};">${footer}</td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;
}

const label = (t: string) =>
  `<div style="font-family:'SFMono-Regular',Menlo,Consolas,monospace;font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:${C.muted};padding-bottom:4px;">${esc(t)}</div>`;

// One row of the summary table: small label, then the value.
const row = (l: string, v: string, html = false) =>
  v
    ? `<tr><td style="padding:12px 0;border-top:1px dashed #A9ACB4;">${label(l)}<div style="font-size:16px;line-height:1.5;color:${C.ink};">${html ? v : esc(v)}</div></td></tr>`
    : "";

function summaryRows(e: Enquiry, withEmail = false) {
  return [
    row("Name", e.name),
    withEmail ? row("Email", e.email) : "",
    row("Website", e.website),
    row("Phone", e.phone),
    row("Industry", e.industry),
    row("Needs", e.services.join(", ")),
    row("Message", e.message ? nl2br(e.message) : "", true),
  ].join("");
}

// ─── to the client: "We got your enquiry" ───
export function clientEmail(e: Enquiry) {
  const first = firstName(e.name);
  const steps = CLIENT_STEPS.map(
    (s, i) => `<tr>
      <td width="40" valign="top" style="padding:0 14px 18px 0;">
        <div style="width:28px;height:28px;background:${C.ink};color:#F7F7F8;font-family:${FONT};font-size:13px;font-weight:700;line-height:28px;text-align:center;">${i + 1}</div>
      </td>
      <td valign="top" style="padding:0 0 18px 0;font-family:${FONT};">
        <div style="font-size:16px;font-weight:600;color:${C.ink};line-height:1.35;">${esc(s.title)}</div>
        <div style="font-size:14px;line-height:1.55;color:${C.body};padding-top:2px;">${esc(s.text)}</div>
      </td>
    </tr>`,
  ).join("");

  const inner = `
    <div style="font-size:32px;line-height:1.1;font-weight:700;letter-spacing:-0.03em;color:${C.ink};">We got your enquiry<span style="color:${C.accent};">.</span></div>
    <p style="margin:14px 0 0 0;font-size:16px;line-height:1.6;color:${C.body};">Hi ${esc(first)}, thanks for reaching out. A real person on our team will look at this. Here is what you sent us, and what happens next.</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:26px;background:${C.page};border-radius:12px;">
      <tr><td style="padding:6px 20px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
        ${summaryRows(e).replace("border-top:1px dashed #A9ACB4;", "")}
      </table></td></tr>
    </table>

    <div style="margin-top:32px;font-size:18px;font-weight:700;letter-spacing:-0.02em;color:${C.ink};">What happens next</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:16px;">${steps}</table>

    <p style="margin:6px 0 0 0;font-size:15px;line-height:1.6;color:${C.body};">Need to add something? Just reply to this email, or call us on <a href="${PHONE_HREF}" style="color:${C.ink};font-weight:600;">${esc(PHONE)}</a>.</p>
    <p style="margin:22px 0 0 0;font-size:15px;line-height:1.6;color:${C.ink};">Talk soon,<br><b>The ${esc(BRAND)} team</b></p>`;

  const html = shell(
    `Thanks ${first}, your audit is back within 24 hours.`,
    inner,
    `${esc(BRAND)} &middot; ${esc(LOCATION)}<br>You are getting this because you sent an enquiry on our website. We will not add you to any list.`,
  );

  const text = [
    `We got your enquiry.`,
    ``,
    `Hi ${first}, thanks for reaching out. A real person on our team will look at this.`,
    ``,
    `What you sent us`,
    `Name: ${e.name}`,
    e.website && `Website: ${e.website}`,
    e.phone && `Phone: ${e.phone}`,
    e.industry && `Industry: ${e.industry}`,
    e.services.length && `Needs: ${e.services.join(", ")}`,
    e.message && `Message: ${e.message}`,
    ``,
    `What happens next`,
    ...CLIENT_STEPS.map((s, i) => `${i + 1}. ${s.title}. ${s.text}`),
    ``,
    `Need to add something? Reply to this email or call ${PHONE}.`,
    ``,
    `The ${BRAND} team`,
  ]
    .filter((l): l is string => typeof l === "string" && l.length > 0)
    .join("\n");

  return { subject: `We got your enquiry, ${first}`, html, text };
}

// ─── to the team: "New enquiry" ───
export function teamEmail(e: Enquiry) {
  const reply = `mailto:${encodeURIComponent(e.email)}?subject=${encodeURIComponent("Re: your enquiry to " + BRAND)}`;
  const call = e.phone ? `tel:${e.phone.replace(/[^\d+]/g, "")}` : "";

  const inner = `
    <div style="display:inline-block;background:${C.accent};color:${C.ink};font-family:'SFMono-Regular',Menlo,Consolas,monospace;font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;padding:5px 10px;border-radius:4px;">New enquiry</div>
    <div style="margin-top:16px;font-size:30px;line-height:1.15;font-weight:700;letter-spacing:-0.03em;color:${C.ink};">${esc(e.name)}</div>
    <div style="margin-top:6px;font-size:15px;color:${C.muted};">${esc(SOURCE_LABEL[e.source])}</div>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:22px;">
      ${row("Email", `<a href="${reply}" style="color:${C.ink};">${esc(e.email)}</a>`, true)}
      ${summaryRows({ ...e, name: "" })}
    </table>

    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:28px;"><tr>
      <td style="padding-right:10px;"><a href="${reply}" style="display:inline-block;background:${C.ink};color:#F7F7F8;font-size:14px;font-weight:600;text-decoration:none;padding:14px 22px;border-radius:4px;">Reply to ${esc(firstName(e.name))}</a></td>
      ${call ? `<td><a href="${esc(call)}" style="display:inline-block;border:1px solid ${C.ink};color:${C.ink};font-size:14px;font-weight:600;text-decoration:none;padding:13px 21px;border-radius:4px;">Call ${esc(e.phone)}</a></td>` : ""}
    </tr></table>
    <p style="margin:22px 0 0 0;font-size:13px;line-height:1.6;color:${C.muted};">The client has been sent a confirmation. Replying to this email goes straight to them.</p>`;

  const html = shell(`New enquiry from ${e.name}${e.website ? " (" + e.website + ")" : ""}`, inner, `${esc(BRAND)} &middot; internal notification`);

  const text = [
    `New enquiry: ${e.name}`,
    `From: ${SOURCE_LABEL[e.source]}`,
    ``,
    `Email: ${e.email}`,
    e.website && `Website: ${e.website}`,
    e.phone && `Phone: ${e.phone}`,
    e.industry && `Industry: ${e.industry}`,
    e.services.length && `Needs: ${e.services.join(", ")}`,
    e.message && `Message: ${e.message}`,
  ]
    .filter((l): l is string => typeof l === "string" && l.length > 0)
    .join("\n");

  return { subject: `New enquiry: ${e.name}${e.website ? ", " + e.website : ""}`, html, text };
}
