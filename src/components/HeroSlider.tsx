import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import hero from "./../assets/College-photo.jpg";
import moot from "./../assets/moot-court.jpg";
import students from "./../assets/students.jpg";
import books from "./../assets/law-books.jpg";

const SLIDES = [
  {
    img: hero,
    eyebrow: "College Code: KN136",
    title: "Shree Ram Law College",
    text: "Approved by Bar Council of India · Affiliated to C.S.J.M. University, Kanpur.",
  },
  {
    img: moot,
    eyebrow: "Practical Training",
    title: "Moot Court Inside Campus",
    text: "A dedicated moot court room where students argue real briefs and sharpen advocacy skills.",
  },
  {
    img: students,
    eyebrow: "Admissions Open 2025-26",
    title: "Learn Law With Purpose",
    text: "LL.B (3 Year) and B.A. LL.B (5 Year Integrated) programmes with 100% result track record.",
  },
  {
    img: books,
    eyebrow: "Rich Legal Library",
    title: "A Foundation Built on Depth",
    text: "Well-stocked traditional library with online & offline legal databases and study spaces.",
  },
];

export function HeroSlider() {
  const [i, setI] = useState(0);
  const n = SLIDES.length;

  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % n), 5000);
    return () => clearInterval(t);
  }, [n]);

  const go = (d: number) => setI((v) => (v + d + n) % n);

  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <div className="relative h-[520px] w-full sm:h-[600px] lg:h-[680px]">
        {SLIDES.map((s, idx) => (
          <div
            key={idx}
            className={
              "absolute inset-0 transition-opacity duration-700 " +
              (idx === i ? "opacity-100" : "opacity-0")
            }
            aria-hidden={idx !== i}
          >
            <img
              src={s.img}
              alt={s.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/75 to-navy/60" />
            <div className="container-page relative flex h-full items-center">
              <div className="max-w-2xl text-navy-foreground animate-fade-in">
                <span className="inline-flex items-center rounded-full bg-gold px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-foreground shadow-gold">
                  {s.eyebrow}
                </span>
                <h1 className="mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  {s.title}
                </h1>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/85 sm:text-lg">
                  {s.text}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/admissions"
                    className="inline-flex items-center rounded-md bg-gold px-6 py-3 text-sm font-bold text-gold-foreground shadow-gold transition hover:brightness-105"
                  >
                    Apply Now
                  </a>
                  <a
                    href="/courses"
                    className="inline-flex items-center rounded-md border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-navy-foreground backdrop-blur transition hover:bg-white/10"
                  >
                    Explore Programmes
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={() => go(-1)}
        aria-label="Previous slide"
        className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur transition hover:bg-black/50 md:left-6"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Next slide"
        className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur transition hover:bg-black/50 md:right-6"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={
              "h-2 rounded-full transition-all " +
              (idx === i ? "w-8 bg-gold" : "w-2 bg-white/60 hover:bg-white")
            }
          />
        ))}
      </div>
    </section>
  );
}
