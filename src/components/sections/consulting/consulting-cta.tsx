import CtaPanel from "@/components/ui/cta-panel";

// ───────── Copy for this section: edit the words here ─────────
export default function ConsultingCta() {
  return (
    <CtaPanel
      label={{ n: "S/06", name: "Free audit" }}
      heading={["Not sure where", "to start?"]}
      text="Start with the free audit. We will tell you straight which of the three, if any, fits."
      cta={{ label: "Get my free audit", href: "/contact#audit" }}
    />
  );
}
