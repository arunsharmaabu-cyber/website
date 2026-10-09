"use client";

import { useState } from "react";
import Pill from "@/components/ui/pill";
import SolidButton from "@/components/ui/solid-button";

// ───────── Copy for this section: edit the words here ─────────
const FIELDS = [
  { id: "f-name", name: "name", label: "Your name", type: "text", autoComplete: "name" },
  { id: "f-site", name: "website", label: "Website", type: "text", autoComplete: "url" },
  { id: "f-industry", name: "industry", label: "Industry", type: "text", autoComplete: "organization-title" },
  { id: "f-phone", name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { id: "f-email", name: "email", label: "Email", type: "email", autoComplete: "email" },
];
const SERVICES_TITLE = "What do you need?";
const SERVICES_HINT = "Pick any";
const SERVICES = ["Local SEO", "Web design", "Paid ads", "Brand", "Not sure"];
// The dashed line under each field IS the input: type right on top of it.
const fieldCls =
  "block w-full border-0 border-b border-dashed border-[#A9ACB4] bg-transparent px-0 pb-3 pt-2 text-[17px] text-ink outline-none transition-colors focus:border-solid focus:border-ink";
const SUBMIT = "Send my free audit";

export default function AuditForm() {
  const [picked, setPicked] = useState<string[]>([SERVICES[0]]);
  const toggle = (s: string) => setPicked((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  return (
    <form
      id="audit"
      onSubmit={(e) => e.preventDefault()}
      className="m-0 box-border flex scroll-mt-24 flex-col"
    >
      <div className="flex flex-col gap-6 md:gap-7">
        {FIELDS.map((f) => (
          <div key={f.id}>
            <label htmlFor={f.id} className="block font-mono text-[11px] uppercase tracking-[.1em] text-[#5C5F66]">
              {f.label}
            </label>
            <input id={f.id} name={f.name} type={f.type} autoComplete={f.autoComplete} className={fieldCls} />
          </div>
        ))}
      </div>

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

    </form>
  );
}
