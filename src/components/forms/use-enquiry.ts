"use client";

import { useState } from "react";
import type { EnquirySource } from "@/lib/enquiry";

export type EnquiryStatus = "idle" | "sending" | "sent" | "error";

const FIELDS = ["name", "email", "website", "phone", "industry", "message", "hp"] as const;

// Shared by the three enquiry forms: reads the form, posts it to /api/enquiry, and tracks the result.
export function useEnquiry(source: EnquirySource, onSent?: () => void) {
  const [status, setStatus] = useState<EnquiryStatus>("idle");
  const [note, setNote] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>, services: string[] = []) {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload: Record<string, unknown> = { source, services };
    for (const f of FIELDS) payload[f] = String(data.get(f) ?? "");

    setStatus("sending");
    setNote("");
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const out = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string; clientCopy?: boolean };
      if (!res.ok || !out.ok) throw new Error(out.error || "Something went wrong. Please try again or call us.");
      const first = String(payload.name).split(" ")[0];
      setNote(`Thanks, ${first}. ${out.clientCopy === false ? "We got your enquiry." : "We have emailed you a copy."} Your audit is back within 24 hours.`);
      setStatus("sent");
      form.reset();
      onSent?.();
    } catch (err) {
      setNote(err instanceof Error ? err.message : "Something went wrong. Please try again or call us.");
      setStatus("error");
    }
  }

  return { status, note, submit, sending: status === "sending" };
}
