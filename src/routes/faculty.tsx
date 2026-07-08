import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { UserSquare2 } from "lucide-react";

export const Route = createFileRoute("/faculty")({
  head: () => ({
    meta: [
      { title: "Faculty | Shree Ram Law College" },
      { name: "description", content: "Meet the qualified and experienced faculty at Shree Ram Law College, Kanpur." },
      { property: "og:title", content: "Faculty of Shree Ram Law College" },
      { property: "og:description", content: "LL.M, NET and Ph.D. qualified professors." },
    ],
  }),
  component: Faculty,
});

const lawFaculty = [
  { name: "Mr. Ashok Kumar Yadav", qual: "LL.M., NET Qualified", role: "Assistant Professor" },
  { name: "Mr. Jagesh Kumar", qual: "LL.M.", role: "Assistant Professor" },
  { name: "Mr. Kamlesh Kumar Varma", qual: "LL.M.", role: "Assistant Professor" },
  { name: "Mr. Parveg Khan", qual: "M.A., LL.M.", role: "Assistant Professor" },
  { name: "Mr. Mohammad Faruq", qual: "LL.M.", role: "Assistant Professor" },
  { name: "Mr. Lok Nath", qual: "LL.M.", role: "Assistant Professor" },
  { name: "Mr. Devendra Dwarg", qual: "LL.M., NET Qualified", role: "Assistant Professor" },
  { name: "Mr. Siddhartha Kumar", qual: "LL.M., NET Qualified", role: "Assistant Professor" },
];

const artsFaculty = [
  { name: "Mr. Ravindra Kumar Singh", qual: "Political Science, NET Qualified", role: "Assistant Professor" },
  { name: "Dr. Ashutosh Kumar Shukla", qual: "Sociology, Ph.D., NET Qualified", role: "Assistant Professor" },
  { name: "Dr. Rashmi Saxena", qual: "English, Ph.D., NET Qualified", role: "Assistant Professor" },
  { name: "Dr. Vishnu Dev", qual: "Economics, Ph.D., NET Qualified", role: "Assistant Professor" },
];

function Card({ name, qual, role }: { name: string; qual: string; role: string }) {
  return (
    <div className="group flex gap-4 rounded-xl border border-border bg-card p-5 transition hover:border-gold/60 hover:shadow-elegant">
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-navy text-gold">
        <UserSquare2 className="h-6 w-6" />
      </div>
      <div className="min-w-0">
        <div className="truncate font-serif text-lg font-bold text-navy">{name}</div>
        <div className="text-xs uppercase tracking-widest text-gold">{role}</div>
        <div className="mt-1 text-sm text-muted-foreground">{qual}</div>
      </div>
    </div>
  );
}

function Faculty() {
  return (
    <>
      <PageHero
        eyebrow="Our Faculty"
        title="Scholars, practitioners and mentors"
        subtitle="A team of qualified LL.M, NET and Ph.D. professors, complemented by senior advocates and former judicial officers."
      />

      <section className="section-padding">
        <div className="container-page">
          <h2 className="gold-underline font-serif text-2xl font-bold text-navy sm:text-3xl">
            Faculty of Law
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lawFaculty.map((f) => (
              <Card key={f.name} {...f} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 section-padding">
        <div className="container-page">
          <h2 className="gold-underline font-serif text-2xl font-bold text-navy sm:text-3xl">
            Faculty of Arts (B.A. LL.B)
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {artsFaculty.map((f) => (
              <Card key={f.name} {...f} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <h2 className="gold-underline font-serif text-2xl font-bold text-navy sm:text-3xl">
            Administrative Staff
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Mr. Ashok Kumar Yadav", role: "Head of Department" },
              { name: "Mrs. Pushpa Pandey", role: "Administration" },
              { name: "Mr. Surendra Singh", role: "Administration" },
              { name: "Mr. Deepak Kumar", role: "Administration" },
              { name: "Mr. Jitendra Khare", role: "Administration" },
            ].map((s) => (
              <div key={s.name} className="rounded-xl border border-border bg-card p-5">
                <div className="font-serif text-lg font-bold text-navy">{s.name}</div>
                <div className="text-xs uppercase tracking-widest text-gold">{s.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
