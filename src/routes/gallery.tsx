import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import hero from "./../assets/college-photo.jpeg";
import moot from "./../assets/moot-court.jpg";
import students from "./../assets/students.jpg";
import Classroom  from "./../assets/Reading-Hall.jpeg";
import hero1 from "./../assets/college-photo2.jpeg";
import books from "./../assets/law-books.jpg";
import Classroom1  from "./../assets/Reading-Hall2.jpeg";

import Classroom2  from "./../assets/Reading-Hall3.jpeg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Shree Ram Law College" },
      { name: "description", content: "Photo gallery of campus, moot court, library and student life at Shree Ram Law College." },
      { property: "og:title", content: "Gallery — Shree Ram Law College" },
      { property: "og:description", content: "Campus, moot court, library and student life." },
    ],
  }),
  component: Gallery,
});

const IMAGES = [
  { src: hero, caption: "Main Campus" },
  { src: moot, caption: "Moot Court Room" },
  { src: students, caption: "Student Life" },
  { src: books, caption: "Legal Library" },
  { src: hero1, caption: "College Building" },
  { src: moot, caption: "Advocacy Training" },    
 
 
   { src:Classroom, caption: "Classroom Session " },
   { src:Classroom1, caption: "Classroom Session " },
   { src:Classroom2, caption: "Classroom Session " },
];

function Gallery() {
  return (
    <>
      <PageHero eyebrow="Moments" title="Campus Gallery" subtitle="A glimpse into life at Shree Ram Law College." />
      <section className="section-padding">
        <div className="container-page">
          <SectionHeading eyebrow="Photos" title="Campus & Activities" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {IMAGES.map((img, i) => (
              <figure key={i} className="group relative overflow-hidden rounded-xl border border-border bg-card">
                <img src={img.src} alt={img.caption} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-4 text-sm font-semibold text-navy-foreground">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
