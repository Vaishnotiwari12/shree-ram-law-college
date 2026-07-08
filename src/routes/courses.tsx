import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { BookOpen, GraduationCap, FileText } from "lucide-react";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Courses | Shree Ram Law College" },
      {
        name: "description",
        content:
          "Explore LL.B (3 Year), B.A. LL.B (5 Year Integrated) and diploma programmes offered at Shree Ram Law College, Kanpur.",
      },
      { property: "og:title", content: "Courses at Shree Ram Law College" },
      { property: "og:description", content: "LL.B, B.A. LL.B and diploma programmes." },
    ],
  }),
  component: Courses,
});

const llbSyllabus = [
  { sem: "Semester I", papers: ["Jurisprudence", "Law of Contract – I", "Law of Crimes", "Family Law – I", "Law of Torts, MV Accident & Consumer Protection"] },
  { sem: "Semester II", papers: ["Constitutional Law – I", "Social Science", "Public International Law", "Law of Contract – II", "Professional Accounting"] },
  { sem: "Semester III", papers: ["Administrative Law", "Environmental Law", "Company Law", "Property Law", "Labour Law – I"] },
  { sem: "Semester IV", papers: ["Law of Evidence", "Constitutional Law – II", "Family Law – II", "Labour Law – II", "Interpretation of Statutes"] },
  { sem: "Semester V", papers: ["Jurisprudence", "Optional Group A/B/C", "Human Rights", "Investment Law", "Land Laws"] },
  { sem: "Semester VI", papers: ["Principles of Taxation Law", "Legal Language", "IPR / Copyright", "Trade Mark", "Insurance / Refugee Law"] },
];

function Courses() {
  return (
    <>
      <PageHero
        eyebrow="Programmes"
        title="Courses & Curriculum"
        subtitle="A semester-based curriculum aligned to the Bar Council of India and CSJM University, Kanpur — with moot courts, seminars and court visits woven into practice."
      />

      <section className="section-padding">
        <div className="container-page grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-gold/40 bg-card p-8 shadow-elegant">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-navy text-gold">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h2 className="mt-4 font-serif text-2xl font-bold text-navy">LL.B — 3 Year</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Professional law degree for graduates. Semester system with
              practical training, moot courts and court visits.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-foreground/85">
              <li>• 6 Semesters over 3 years</li>
              <li>• Approved by Bar Council of India</li>
              <li>• Affiliated to CSJM University, Kanpur</li>
              <li>• Practical papers with real courtroom exposure</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-navy/30 bg-navy p-8 text-navy-foreground shadow-elegant">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gold text-navy">
              <BookOpen className="h-6 w-6" />
            </div>
            <h2 className="mt-4 font-serif text-2xl font-bold">B.A. LL.B (Hons.) — 5 Year Integrated</h2>
            <p className="mt-2 text-sm text-navy-foreground/80">
              Integrated undergraduate programme combining Political Science,
              Sociology, Economics and English with a full legal curriculum.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-navy-foreground/85">
              <li>• 10 Semesters over 5 years</li>
              <li>• B.A. subjects + LL.B honours specialisation</li>
              <li>• Family Law, Jurisprudence, Public International Law</li>
              <li>• Honours: Interpretation of Statutes & Principles of Legislation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 section-padding">
        <div className="container-page">
          <h2 className="gold-underline font-serif text-3xl font-bold text-navy">
            LL.B Syllabus Overview
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {llbSyllabus.map((s) => (
              <div key={s.sem} className="rounded-xl border border-border bg-card p-6">
                <div className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {s.sem}
                </div>
                <ul className="mt-3 space-y-1.5 text-sm text-foreground/85">
                  {s.papers.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-navy" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <h2 className="gold-underline font-serif text-3xl font-bold text-navy">Diploma Programmes</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Diploma in Cyber Law", text: "Digital regulation, data protection and IT law foundations." },
              { title: "Diploma in Human Rights", text: "Frameworks, treaties and enforcement of human rights." },
              { title: "Diploma in Labour Law Management", text: "Employment, industrial relations and labour welfare." },
            ].map((d) => (
              <div key={d.title} className="rounded-xl border border-border bg-card p-6">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-navy">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-bold text-navy">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
