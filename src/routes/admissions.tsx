import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { SITE } from "../lib/site";
import { CheckCircle2, AlertTriangle, FileCheck2, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: [
      { title: "Admissions | Shree Ram Law College" },
      { name: "description", content: "How to apply for LL.B and B.A. LL.B admissions at Shree Ram Law College, Kanpur." },
      { property: "og:title", content: "Admissions — Shree Ram Law College" },
      { property: "og:description", content: "Prospectus, admission form, documents and rules." },
    ],
  }),
  component: Admissions,
});

function Admissions() {
  const waHref = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
    "Hello, I am interested in applying to Shree Ram Law College. Please share admission details.",
  )}`;

  return (
    <>
      <PageHero
        eyebrow="Admissions Open"
        title="Begin your legal journey"
        subtitle="Apply for LL.B (3 Year) or B.A. LL.B (5 Year Integrated). Prospectus and admission form available at the college counter or on request."
      />

      <section className="section-padding">
        <div className="container-page grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="gold-underline font-serif text-2xl font-bold text-navy sm:text-3xl">
                How to Apply
              </h2>
              <ol className="mt-6 space-y-4">
                {[
                  {
                    t: "Obtain the Prospectus & Admission Form",
                    d: "Available at the college counter for ₹300 (all candidates). Also available on the college website.",
                  },
                  {
                    t: "Attach Required Documents",
                    d: "Self-attested copies of High School, Intermediate and Graduation (10+2+) mark sheets and certificates/degrees.",
                  },
                  {
                    t: "Reservation Category (if applicable)",
                    d: "OBC/SC/ST candidates must submit a caste certificate attested by a gazetted officer.",
                  },
                  {
                    t: "Payment",
                    d: "Enclose a demand draft of ₹300 in favour of “Shri Ram Law College”, Village Nandana with the admission form.",
                  },
                  {
                    t: "Submit",
                    d: "Submit your completed form to the college office along with all enclosures.",
                  },
                ].map((s, i) => (
                  <li key={s.t} className="flex gap-4 rounded-lg border border-border bg-card p-5">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-navy font-serif text-gold">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-serif text-lg font-bold text-navy">{s.t}</div>
                      <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="gold-underline font-serif text-2xl font-bold text-navy sm:text-3xl">
                College Rules & Discipline
              </h2>
              <ul className="mt-6 space-y-3">
                {[
                  "All students shall follow the directions and rules of the Bar Council of India and CSJM University, Kanpur.",
                  "Admission may be cancelled at any time before examinations on grounds of indiscipline, misconduct or immorality. Fees will not be refunded.",
                  "Candidates having criminal records are not eligible for admission.",
                  "Ragging is a criminal offence and is strictly prohibited on campus.",
                  "Students must carry their identity card on campus at all times.",
                  "Students must follow all library rules.",
                  "Demand for a students' union is treated as indiscipline on campus.",
                  "Guardians are requested to meet college authorities twice within six months to review progress.",
                ].map((r) => (
                  <li key={r} className="flex gap-3 text-sm text-foreground/85">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-navy" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-3 rounded-lg border-l-4 border-destructive bg-destructive/5 p-5 text-sm">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
              <div>
                <div className="font-semibold text-destructive">Ragging is strictly prohibited</div>
                <p className="mt-1 text-foreground/85">
                  Any incident of ragging will be dealt with strictly as per the
                  orders of the Hon'ble Supreme Court of India.
                </p>
              </div>
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-xl border border-gold/40 bg-card p-6 shadow-elegant">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy text-gold">
                <FileCheck2 className="h-5 w-5" />
              </div>
              <h3 className="mt-3 font-serif text-xl font-bold text-navy">
                Quick Enquiry
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Chat with our admissions team on WhatsApp — the fastest way to
                get your questions answered.
              </p>
              <a
                href={waHref}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-4 py-3 text-sm font-semibold text-white transition hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Admissions
              </a>
              <a
                href={`tel:${SITE.phones[0].replace(/\s/g, "")}`}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md border border-navy/20 px-4 py-3 text-sm font-semibold text-navy transition hover:bg-secondary"
              >
                Call {SITE.phones[0]}
              </a>
            </div>

            <div className="rounded-xl border border-border bg-secondary/50 p-6">
              <h4 className="font-serif text-lg font-bold text-navy">Programme Fees</h4>
              <div className="mt-3 space-y-2 text-sm text-foreground/85">
                <div className="flex justify-between border-b border-border/60 pb-2">
                  <span>Prospectus & Form</span><span className="font-semibold">₹300</span>
                </div>
                <p className="pt-2 text-xs text-muted-foreground">
                  Programme fee details are shared with the prospectus. Please
                  contact the office for the latest fee structure.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
