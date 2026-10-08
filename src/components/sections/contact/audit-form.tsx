"use client";

import { useState } from "react";
import FieldRow from "@/components/ui/field-row";
import Pill from "@/components/ui/pill";
import SolidButton from "@/components/ui/solid-button";

// ───────── Copy for this section: edit the words here ─────────
const HEADER = { title: "Free audit / 24h", time: "30 seconds" };
const FIELDS = [
  { id: "f-name", name: "name", label: "Your name", type: "text", placeholder: "Jane Smith", autoComplete: "name" },
  { id: "f-site", name: "website", label: "Website", type: "text", placeholder: "yourco.com", autoComplete: "url" },
  { id: "f-phone", name: "phone", label: "Phone", type: "tel", placeholder: "(214) 000-0000", autoComplete: "tel" },
  { id: "f-email", name: "email", label: "Email", type: "email", placeholder: "you@yourco.com", autoComplete: "email" },
];
const SERVICES_TITLE = "What do you need?";
const SERVICES_HINT = "Pick any";
const SERVICES = ["Local SEO", "Web design", "Paid ads", "Brand", "Not sure"];
const SUBMIT = "Send my free audit";
const REASSURANCE = ["24-hour response", "No commitment", "Your data stays yours"];

export default function AuditForm() {
  const [picked, setPicked] = useState<string[]>([SERVICES[0]]);
  const toggle = (s: string) => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  return (
    <form
      id="audit"
      onSubmit={(e) => e.preventDefault()}
      className="m-0 box-border flex scroll-mt-24 flex-col rounded-2xl border border-[#DADCE1] bg-white p-5 md:p-8"
    >
      <div className="mb-[22px] flex items-center justify-between gap-3 font-mono text-[12px] uppercase tracking-[.1em]">
        <span className="flex items-center gap-[10px]">
          <span className="pulse inline-block size-[9px] rounded-full bg-accent" />
          {HEADER.title}
        </span>
        <span className="text-[#5C5F66]">{HEADER.time}</span>
      </div>

      <div className="border-t border-dashed border-[#A9ACB4]" />
      {FIELDS.map((f) => (
        <FieldRow key={f.id} htmlFor={f.id} label={f.label}>
          <input
            id={f.id}
            name={f.name}
            type={f.type}
            placeholder={f.placeholder}
            autoComplete={f.autoComplete}
            className="min-w-0 flex-1 border-0 bg-transparent p-0 text-right text-[14px] text-ink"
          />
        </FieldRow>
      ))}

      <div className="pb-1.5 pt-6">
        <div id="f-service" className="mb-3 font-mono text-[12px] uppercase leading-normal tracking-[.1em]">
          {SERVICES_TITLE} <span className="text-[#5C5F66]">{SERVICES_HINT}</span>
        </div>
        <div role="group" aria-labelledby="f-service" className="flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <Pill key={s} active={picked.includes(s)} onClick={() => toggle(s)} className="min-h-11 px-4 md:py-[10px]">
              {s}
            </Pill>
          ))}
        </div>
      </div>

      <SolidButton type="submit" className="mt-[26px] h-14 md:h-[60px]">
        {SUBMIT}
      </SolidButton>

      <div className="mt-[18px] flex flex-wrap gap-x-[18px] gap-y-2 font-mono text-[10px] uppercase tracking-[.08em] text-[#4B4E55] md:text-[11px]">
        {REASSURANCE.map((r, i) => (
          <span key={r} className="contents">
            {i > 0 && <span>/</span>}
            <span>{r}</span>
          </span>
        ))}
      </div>
    </form>
  );
}
