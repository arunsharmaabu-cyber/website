// What the enquiry forms send, and the checks the server runs on it.

export const SOURCES = ["hero", "contact-section", "contact-page"] as const;
export type EnquirySource = (typeof SOURCES)[number];

export const SOURCE_LABEL: Record<EnquirySource, string> = {
  hero: "Home page, top form",
  "contact-section": "Contact form at the bottom of the page",
  "contact-page": "Contact page, audit form",
};

export type Enquiry = {
  name: string;
  email: string;
  website: string;
  phone: string;
  industry: string;
  message: string;
  services: string[];
  source: EnquirySource;
};

const LIMITS = { name: 120, email: 200, website: 200, phone: 40, industry: 120, message: 2000, service: 60, services: 10 };
const EMAIL = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]{2,}$/;

const clean = (v: unknown, max: number) => (typeof v === "string" ? v.replace(/\s+/g, " ").trim().slice(0, max) : "");

// message keeps its line breaks, only trimmed
const cleanMessage = (v: unknown, max: number) => (typeof v === "string" ? v.replace(/\r\n/g, "\n").trim().slice(0, max) : "");

export type Parsed = { ok: true; data: Enquiry; spam: boolean } | { ok: false; error: string };

export function parseEnquiry(input: unknown): Parsed {
  if (!input || typeof input !== "object") return { ok: false, error: "That did not look like a form submission." };
  const o = input as Record<string, unknown>;

  const name = clean(o.name, LIMITS.name);
  const email = clean(o.email, LIMITS.email).toLowerCase();
  if (!name) return { ok: false, error: "Please add your name." };
  if (!EMAIL.test(email)) return { ok: false, error: "Please check your email address." };

  const source = SOURCES.includes(o.source as EnquirySource) ? (o.source as EnquirySource) : "contact-section";
  const services = Array.isArray(o.services)
    ? o.services.map((s) => clean(s, LIMITS.service)).filter(Boolean).slice(0, LIMITS.services)
    : [];

  return {
    ok: true,
    // a real person leaves the hidden field empty; a bot fills it in
    spam: clean(o.hp, 50).length > 0,
    data: {
      name,
      email,
      website: clean(o.website, LIMITS.website),
      phone: clean(o.phone, LIMITS.phone),
      industry: clean(o.industry, LIMITS.industry),
      message: cleanMessage(o.message, LIMITS.message),
      services,
      source,
    },
  };
}

// A very small per-IP limit (best effort: it lives in one server instance's memory).
const hits = new Map<string, number[]>();
export function tooManyRequests(ip: string, max = 5, windowMs = 10 * 60 * 1000) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < windowMs);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > max;
}
