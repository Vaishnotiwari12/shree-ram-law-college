import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { Calendar, MapPin } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Shree Ram Law College" },
      { name: "description", content: "Moot courts, seminars, workshops and cultural events at Shree Ram Law College." },
      { property: "og:title", content: "Events — Shree Ram Law College" },
      { property: "og:description", content: "Moot courts, seminars, workshops and cultural events." },
    ],
  }),
  component: Events,
});

const EVENTS = [
  { date: "15 Aug 2025", title: "Independence Day Celebration", venue: "College Auditorium", tag: "National" },
  { date: "05 Sep 2025", title: "Teachers' Day & Faculty Felicitation", venue: "Main Hall", tag: "Cultural" },
  { date: "20 Sep 2025", title: "Inter-College Moot Court Competition", venue: "Moot Court Room", tag: "Academic" },
  { date: "02 Oct 2025", title: "Gandhi Jayanti — Legal Awareness Rally", venue: "Ghatampur", tag: "Outreach" },
  { date: "10 Nov 2025", title: "Seminar on Constitutional Law", venue: "Seminar Hall", tag: "Seminar" },
  { date: "26 Jan 2026", title: "Republic Day & Annual Prize Distribution", venue: "College Ground", tag: "National" },
];

function Events() {
  return (
    <>
      <PageHero eyebrow="Campus Life" title="Events & Activities" subtitle="A calendar of academic, cultural and outreach activities that shape complete legal professionals." />
      <section className="section-padding">
        <div className="container-page">
          <SectionHeading eyebrow="Upcoming" title="Events Calendar" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {EVENTS.map((e, i) => (
              <article key={i} className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-elegant">
                <div className="inline-flex items-center gap-2 rounded-md bg-navy px-3 py-1.5 text-xs font-semibold text-gold">
                  <Calendar className="h-3.5 w-3.5" /> {e.date}
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-navy">{e.title}</h3>
                <p className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-gold" /> {e.venue}
                </p>
                <span className="mt-4 inline-block rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-navy">{e.tag}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
