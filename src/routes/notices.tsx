import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { Megaphone, FileText, Calendar } from "lucide-react";

export const Route = createFileRoute("/notices")({
  head: () => ({
    meta: [
      { title: "Notices — Shree Ram Law College" },
      { name: "description", content: "Latest notices, circulars and announcements from Shree Ram Law College." },
      { property: "og:title", content: "Notices — Shree Ram Law College" },
      { property: "og:description", content: "Latest notices, circulars and announcements." },
    ],
  }),
  component: Notices,
});

const NOTICES = [
  { date: "12 Jul 2025", tag: "Admission", title: "Admission Open 2025-26 for LL.B and B.A. LL.B programmes" },
  { date: "28 Jun 2025", tag: "Academic", title: "Bar Council of India Approval Renewed for the academic session" },
  { date: "10 Jun 2025", tag: "Event", title: "Moot Court Competition 2025 — Registration open for all semesters" },
  { date: "02 Jun 2025", tag: "Outreach", title: "Legal Aid Camp at Ghatampur — Volunteers required" },
  { date: "15 May 2025", tag: "Workshop", title: "Workshop on Cyber Law — Guest lecture by Sr. Advocate" },
  { date: "01 May 2025", tag: "Exam", title: "End-Semester Examination Schedule released" },
];

function Notices() {
  return (
    <>
      <PageHero eyebrow="Announcements" title="Notices & Circulars" subtitle="Stay updated with the latest from the College office." />
      <section className="section-padding">
        <div className="container-page">
          <SectionHeading eyebrow="Recent" title="Latest Notices" />
          <div className="mt-10 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
            {NOTICES.map((n, i) => (
              <div key={i} className="flex flex-col gap-3 p-5 transition hover:bg-secondary/50 sm:flex-row sm:items-center sm:gap-5">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-gold">
                  <Megaphone className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="inline-flex items-center gap-1 text-muted-foreground"><Calendar className="h-3.5 w-3.5" /> {n.date}</span>
                    <span className="rounded-full bg-gold/20 px-2 py-0.5 font-semibold text-navy">{n.tag}</span>
                  </div>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-navy">{n.title}</h3>
                </div>
                <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold">
                  <FileText className="h-4 w-4" /> Read
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
