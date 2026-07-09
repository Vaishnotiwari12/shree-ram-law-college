import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
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
  Phone,
  Mail,
  Globe,
  MessageCircle,
  Send,
  ChevronDown,
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
  head: () => ({}),
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
];

// Updated LEADERSHIP data with new titles and newly generated messages
const LEADERSHIP = [
  {
    photo: chairmanPhoto,
    name: "Mr. Manoj Bhadauria (Advocate)",
    role: "Chairman",
    eyebrow: "CHAIRMAN'S MESSAGE",
    heading: "From The Chairman's Desk",
    quote: [
      "Welcome to Shree Ram Law College. We believe that education is the ultimate cornerstone of a thriving and just society. Our mission is to cultivate minds that are not only academically proficient but deeply rooted in integrity and discipline.",
      "We are dedicated to providing a dynamic learning environment where future leaders can confidently hone their skills. With our exceptional faculty, rigorous academic standards, and modern infrastructure, we ensure that every student is equipped to navigate the complexities of the modern legal profession.",
      "We aim to empower you to seek justice, uphold the truth, and lead with purpose. Your journey towards becoming a distinguished legal professional starts here, and we are committed to supporting you every step of the way."
    ],
  },
  {
    photo: managerPhoto,
    name: "Vijay Laxmi Singh",
    role: "Manager",
    eyebrow: "MANAGER'S MESSAGE",
    heading: "From The Manager's Desk",
    quote: [
      "Law is much more than a career path; it is a profound societal responsibility. At Shree Ram Law College, we aim to nurture individuals who view their legal education as a powerful instrument for positive community change.",
      "We focus on bridging the gap between theoretical knowledge and practical execution, ensuring our students are truly prepared for the real-world challenges of the judicial system. Our unwavering commitment is to foster an inclusive, disciplined, and forward-thinking campus culture.",
      "When you step into our college, you are stepping into a future where your knowledge and voice can champion the rights of the unheard."
    ],
  },
  {
    photo: principalPhoto,
    name: "Shiv Pratap Singh Raghav",
    role: "Principal — M.A., LLM, M.Phil, Ph.D",
    eyebrow: "PRINCIPAL'S MESSAGE",
    heading: "From The Principal's Desk",
    quote: [
      "As the Principal of Shree Ram Law College, it is my privilege to guide our students through a rigorous, comprehensive, and transformative academic curriculum.",
      "We place a strong emphasis on critical analysis, extensive legal research, and the practical application of constitutional principles. Our core goal is to demystify complex legal frameworks and teach our students how to effectively use the law as a shield for the vulnerable.",
      "We are committed to shaping not just highly competent lawyers, but ethical advocates who will uphold the dignity of the legal system, challenge injustices, and serve our nation with unwavering pride."
    ],
  },
];

function Home() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const openWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Shree Ram Law College,%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0A%0A${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${text}`, "_blank");
  };

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
      <section className="bg-gray-50/50 section-padding py-16">
        <div className="container-page max-w-6xl mx-auto">
          <SectionHeading
            center
            eyebrow="Voices"
            title="Message from Leadership"
            subtitle="Guiding wisdom from our Chairman, Manager & Principal."
          />
          <div className="mt-14 space-y-10">
            {LEADERSHIP.map((p) => (
              <div
                key={p.name}
                className="bg-white rounded-[1.5rem] shadow-sm border border-gray-100 p-8 md:p-10 flex flex-col md:flex-row gap-8 lg:gap-12 transition hover:shadow-md"
              >
                {/* Left Column: Photo & Name */}
                <div className="flex flex-col items-center w-full md:w-[260px] shrink-0">
                  <div className="rounded-2xl border-[3px] border-[#ff7a00] p-1 mb-5 overflow-hidden w-full max-w-[220px]">
                    <img
                      src={p.photo}
                      alt={p.name}
                      loading="lazy"
                      className="w-full aspect-square object-cover object-top rounded-xl bg-gray-100"
                    />
                  </div>
                  <h4 className="text-[#990000] font-bold text-[1.1rem] text-center leading-snug">
                    {p.name}
                  </h4>
                  <p className="text-gray-500 text-sm text-center mt-1.5">{p.role}</p>
                </div>

                {/* Right Column: Message Content */}
                <div className="flex-1 flex flex-col justify-center">
                  <div className="text-[#ff7a00] text-xs font-extrabold uppercase tracking-widest mb-3">
                    {p.eyebrow}
                  </div>
                  <h3 className="text-[#0b132b] text-3xl md:text-4xl font-bold mb-6 tracking-tight">
                    {p.heading}
                  </h3>
                  <div className="text-gray-600 text-[15px] leading-[1.8] space-y-3">
                    {p.quote.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <button className="inline-flex items-center gap-1.5 text-sm font-medium text-[#db4a4a] border border-[#db4a4a]/40 rounded-full px-5 py-2 hover:bg-red-50 hover:border-[#db4a4a] transition-all duration-200">
                      Read More <ChevronDown size={16} />
                    </button>
                  </div>
                </div>
              </div>
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
                <a
                  href="#contact-section"
                  className="inline-flex items-center rounded-md border border-navy/20 px-6 py-3 text-sm font-semibold text-navy transition hover:bg-secondary"
                >
                  Contact Office
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact-section" className="section-padding bg-secondary/30">
        <div className="container-page">
          <SectionHeading
            center
            eyebrow="Contact Us"
            title="Get in touch with us"
            subtitle="Reach out for admissions, campus visits, or any general query. We usually respond within a day."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              {[
                { icon: MapPin, title: "Address", value: SITE.address },
                { icon: Phone, title: "Phone", value: SITE.phones.join("  •  ") },
                { icon: Mail, title: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: Globe, title: "Website", value: SITE.website },
              ].map((c) => (
                <div key={c.title} className="flex gap-4 rounded-xl border border-border bg-card p-5">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy text-gold">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-widest text-gold">
                      {c.title}
                    </div>
                    {c.href ? (
                      <a href={c.href} className="mt-1 block break-words text-navy hover:underline">
                        {c.value}
                      </a>
                    ) : (
                      <div className="mt-1 break-words text-foreground/85">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}

              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:brightness-105"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>

            <form
              onSubmit={openWhatsApp}
              className="rounded-2xl border border-border bg-card p-6 shadow-elegant"
            >
              <h3 className="font-serif text-2xl font-bold text-navy">Send us a message</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill in your details — we'll continue the conversation on WhatsApp.
              </p>

              <div className="mt-5 space-y-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-navy">Full Name</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none ring-ring/20 transition focus:border-gold focus:ring-2"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-navy">Phone</label>
                  <input
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none ring-ring/20 transition focus:border-gold focus:ring-2"
                    placeholder="+91"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-widest text-navy">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none ring-ring/20 transition focus:border-gold focus:ring-2"
                    placeholder="How can we help?"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-navy px-4 py-3 text-sm font-semibold text-navy-foreground transition hover:bg-navy/90"
                >
                  <Send className="h-4 w-4" /> Send via WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="pb-20 bg-secondary/30">
        <div className="container-page">
          <div className="overflow-hidden rounded-2xl border border-border shadow-elegant">
            <iframe
              title="Shree Ram Law College location"
              src="https://www.google.com/maps?q=Nandana,+Ghatampur,+Kanpur&output=embed"
              className="h-[420px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}