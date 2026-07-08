import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "./../components/PageHero";
import { FlipCard } from "./../components/FlipCard";
import students from "./../assets/students.jpg";
import chairmanPhoto from "./../assets/team/chairman.png";
import managerPhoto from "./../assets/team/manager.png";
import principalPhoto from "./../assets/team/principal.png";
import { Target, Eye, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Shree Ram Law College" },
      {
        name: "description",
        content:
          "About Shree Ram Law College — a BCI-approved, CSJM-affiliated institution in Nandana, Ghatampur, Kanpur committed to quality legal education.",
      },
      { property: "og:title", content: "About Shree Ram Law College" },
      {
        property: "og:description",
        content: "Vision, mission and message from the leadership of Shree Ram Law College.",
      },
    ],
  }),
  component: About,
});

const LEADERSHIP = [
  {
    photo: chairmanPhoto,
    name: "Manoj Singh Bhadauria",
    role: "Chairman",
    subtitle: "Advocate",
    message:
      "Legal education must equip lawyers, law officers and teachers who can serve the different social and economic problems faced by the people of India. We choose our students carefully — and we welcome you to choose your institution just as carefully.",
  },
  {
    photo: managerPhoto,
    name: "Vijay Laxmi Singh",
    role: "Manager",
    subtitle: "",
    message:
      "At Shree Ram Law College, our aim is to nurture disciplined, compassionate and knowledgeable law professionals. We are committed to providing a safe, inclusive and academically rich environment where every student can grow with confidence.",
  },
  {
    photo: principalPhoto,
    name: "Shiv Pratap Singh Raghav",
    role: "Principal",
    subtitle: "M.A., LL.M., M.Phil., Ph.D. | Former Prof. of Law",
    message:
      "Law is slowly revealing itself as a constructive mechanism for economic policy. At Shree Ram Law College we aspire to strengthen democratic values through research and simplification of legal language — so that law becomes a real, effective tool for the empowerment of people.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="An institution built on values, purpose and legal excellence"
        subtitle="Shree Ram Law College is an integral part of the Purshottam Shri Ram Degree College, drawing on decades of academic tradition to shape complete legal professionals."
      />

      <section className="section-padding">
        <div className="container-page grid items-start gap-10 lg:grid-cols-2">
          <img
            src={students}
            width={1280}
            height={960}
            loading="lazy"
            alt="Students at Shree Ram Law College"
            className="rounded-xl shadow-elegant"
          />
          <div>
            <h2 className="gold-underline font-serif text-3xl font-bold text-navy">
              Our Story
            </h2>
            <p className="mt-5 leading-relaxed text-foreground/85">
              When you step into Shree Ram Law College, you become part of an
              institution that believes legal studies are the means to an end —
              lawyers have the power to transform society through their
              knowledge, skills and sense of purpose.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/85">
              Whichever branch of law interests you, at Shree Ram Law College
              you will gain a foundation that marks you out as a complete
              professional — nurturing ideals and values that enable you to
              play a positive role in creating a better world, whether in
              corporate boardrooms, environmental law, social justice or
              human rights.
            </p>
            <p className="mt-4 leading-relaxed text-foreground/85">
              We are proud to have successfully completed the first year of our
              LL.B (3 Year) course with a{" "}
              <strong className="text-navy">100% result</strong>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 section-padding">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Eye,
              title: "Vision",
              text: "To develop the college into a centre of excellence and a world-class learning space for legal education.",
            },
            {
              icon: Target,
              title: "Mission",
              text: "To strive for continuous improvement and provide value-based, quality education in law.",
            },
            {
              icon: Sparkles,
              title: "Purpose",
              text: "To create professionals, entrepreneurs and leaders with a global outlook and human values.",
            },
          ].map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-card p-7 shadow-sm">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-gold">
                <v.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-serif text-xl font-bold text-navy">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-page">
          <div className="text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold">
              Our Leadership
            </div>
            <h2 className="gold-underline-center mt-2 font-serif text-3xl font-bold text-navy md:text-4xl">
              Meet our team
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">
              Hover over a card to read a personal message from our leaders.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP.map((p) => (
              <FlipCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
