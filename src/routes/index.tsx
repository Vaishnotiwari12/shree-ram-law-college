import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Gavel,
  GraduationCap,
  Library,
  ScrollText,
  ShieldCheck,
  Users,
  MapPin,
  Quote,
} from "lucide-react";
import books from "@/assets/law-books.jpg";
import { HeroSlider } from "./../components/HeroSlider";
import students from "./../assets/students.jpg";
import moot from "./../assets/moot-court.jpg";
import chairmanPhoto from "./../assets/team/chairman.png";
import managerPhoto from "./../assets/team/manager.png";
import principalPhoto from "./../assets/team/principal.png";
import { SectionHeading } from "./../components/SectionHeading";
import { NoticesTicker } from "./../components/NoticesTicker";
import { SITE } from "./../lib/site";

export const Route = createFileRoute("/")({
 head: () => ({
}),
  component: Home,
});

const features = [
  { icon: ShieldCheck, title: "Approved by BCI", text: "Recognised by the Bar Council of India with a rigorous curriculum." },
  { icon: GraduationCap, title: "CSJM Affiliated", text: "Affiliated to Chhatrapati Shahu Ji Maharaj University, Kanpur." },
  { icon: Gavel, title: "Moot Court Inside Campus", text: "A dedicated moot court room for real-world advocacy practice." },
  { icon: Library, title: "Rich Legal Library", text: "Well-stocked traditional library with online & offline databases." },
  { icon: Users, title: "Experienced Faculty", text: "LL.M, NET, Ph.D. qualified professors and senior advocates." },
  { icon: ScrollText, title: "100% Result", text: "Successfully completed one year LL.B 3 Year course with 100% result." },
];

const courses = [
  {
    title: "LL.B — 3 Year",
    tag: "Undergraduate",
    text: "Semester-based programme designed for graduates seeking a professional law degree.",
    to: "/courses",
  },
  {
    title: "B.A. LL.B (Hons.) — 5 Year",
    tag: "Integrated",
    text: "Five-year integrated programme combining arts foundations with legal specialisation.",
    to: "/courses",
  },
  {
    title: "Diplomas",
    tag: "Specialisation",
    text: "Diplomas in Cyber Law, Human Rights and Labour Law Management.",
    to: "/courses",
  },
];

const LEADERSHIP = [
  {
    photo: chairmanPhoto,
    name: "Manoj Singh Bhadauria",
    role: "Chairman (Advocate)",
    quote:
      "I am confident that pursuing your higher legal education through Shree Ram Law College would be one of the most exciting and rewarding professional experiences of your life. The road to success has no milestone.",
  },
  {
    photo: managerPhoto,
    name: "Vijay Laxmi Singh",
    role: "Manager",
    quote:
      "When you step into Shree Ram Law College, you become part of an institution that believes legal studies are the means to an end — lawyers have the power to transform society with their knowledge, skills and sense of purpose.",
  },
  {
    photo: principalPhoto,
    name: "Shiv Pratap Singh Raghav",
    role: "Principal — M.A., LLM, M.Phil, Ph.D",
    quote:
      "Shree Ram Law College aspires to strengthen the foundation of democratic values by encouraging research aimed at simplifying the language of law and legal procedure — so law becomes a real tool for the empowerment of people.",
  },
];

function Home() {
  return (
    <>
      {/* HERO SLIDER */}
      <HeroSlider />

      {/* NOTICES TICKER */}
      <NoticesTicker />


      {/* MARQUEE / AFFILIATIONS */}
      <section className="border-y border-border bg-secondary/60">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-center text-sm font-medium text-navy/80">
          <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> Approved by Bar Council of India</span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span className="inline-flex items-center gap-2"><GraduationCap className="h-4 w-4 text-gold" /> Affiliated to CSJM University, Kanpur</span>
          <span className="hidden h-4 w-px bg-border sm:block" />
          <span className="inline-flex items-center gap-2"><BookOpen className="h-4 w-4 text-gold" /> Part of Purshottam Shri Ram Degree College</span>
        </div>
      </section>

      {/* WHY US */}
      <section className="section-padding">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Shree Ram Law College"
            title="A foundation built on discipline, depth and purpose"
            subtitle="We prepare complete professionals — grounded in ethics, sharpened by practice, and ready to serve society through law."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-elegant"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-gold">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-lg font-semibold text-navy">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP MESSAGES */}
      <section className="bg-secondary/40 section-padding">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Voices"
            title="Message from Leadership"
            subtitle="Guiding wisdom from our Chairman, Manager & Principal."
          />
          <div className="mt-14 space-y-16">
            {LEADERSHIP.map((p, idx) => (
              <article
                key={p.name}
                className="grid gap-8 md:grid-cols-[320px_1fr] md:gap-12 lg:grid-cols-[380px_1fr]"
              >
                <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                  <div className="relative mx-auto w-full max-w-sm">
                    <div className="absolute -inset-2 rounded-2xl bg-gold/30 blur-sm" aria-hidden />
                    <div className="relative overflow-hidden rounded-2xl border-4 border-gold bg-card shadow-elegant">
                      <img
                        src={p.photo}
                        alt={p.name}
                        loading="lazy"
                        className="aspect-[3/4] w-full object-cover object-top"
                      />
                    </div>
                    <div className="mt-4 text-center">
                      <div className="font-serif text-xl font-bold text-navy">{p.name}</div>
                      <div className="mt-1 text-sm font-semibold uppercase tracking-wider text-gold">
                        {p.role}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                    Message from {p.role.split("—")[0].split("(")[0].trim()}
                  </div>
                  <h3 className="mt-3 font-serif text-3xl font-bold text-navy sm:text-4xl">
                    <span className="gold-underline">{p.name}</span>
                  </h3>
                  <Quote className="mt-6 h-10 w-10 text-gold" />
                  <p className="mt-3 text-base leading-relaxed text-foreground/85 sm:text-lg">
                    {p.quote}
                  </p>
                  <div className="mt-6 text-sm font-semibold text-navy">— {p.name}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>



      {/* COURSES */}
      <section className="section-padding">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Programmes"
            title="Courses we offer"
            subtitle="Semester-based curricula aligned to the Bar Council of India and CSJM University, Kanpur."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {courses.map((c) => (
              <Link
                key={c.title}
                to={c.to}
                className="group flex flex-col rounded-xl border border-border bg-card p-7 transition hover:-translate-y-0.5 hover:border-navy hover:shadow-elegant"
              >
                <span className="w-fit rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-navy">
                  {c.tag}
                </span>
                <h3 className="mt-4 font-serif text-2xl font-bold text-navy">
                  {c.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition group-hover:gap-3 group-hover:text-gold">
                  Read more <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPUS LIFE */}
      <section className="bg-navy text-navy-foreground section-padding">
        <div className="container-page grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Campus & Practice</div>
            <h2 className="mt-3 font-serif text-3xl font-bold sm:text-4xl">
              A campus that teaches law <span className="text-gold">the way it is practised.</span>
            </h2>
            <ul className="mt-6 space-y-3 text-navy-foreground/85">
              {[
                "Moot Court Room inside the college for practical training",
                "Regular court visits as part of practical training",
                "Monthly seminars, mock trials and debates",
                "Legal aid clinic and awareness programmes",
                "Computer lab and language lab for spoken English",
                "Teaching available after college hours if required",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src={moot} width={1280} height={960} loading="lazy" alt="Moot court" className="col-span-2 rounded-xl object-cover" />
            <img src={students} width={1280} height={960} loading="lazy" alt="Students" className="h-full rounded-xl object-cover" />
            <img src={books} width={1280} height={960} loading="lazy" alt="Library" className="h-full rounded-xl object-cover" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-br from-secondary to-background p-8 shadow-elegant sm:p-12">
            <div className="grid items-center gap-6 md:grid-cols-[1fr_auto]">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Admissions Open</div>
                <h3 className="mt-2 font-serif text-2xl font-bold text-navy sm:text-3xl">
                  Begin your journey in law at Shree Ram Law College
                </h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-gold" /> {SITE.address}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/admissions"
                  className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground transition hover:bg-navy/90"
                >
                  Apply Now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-md border border-navy/20 px-6 py-3 text-sm font-semibold text-navy transition hover:bg-secondary"
                >
                  Contact Office
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
