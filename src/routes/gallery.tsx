import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react"; // Added useState
import { X } from "lucide-react"; // Added X icon for the close button
import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";

import hero from "./../assets/college-photo.jpg";
import moot from "./../assets/moot-court.jpg";
import students from "./../assets/students.jpg";
import Classroom  from "./../assets/reading-hall.jpg";
import hero1 from "./../assets/collegeimage.jpeg";
import books from "./../assets/law-books.jpg";
import Classroom1  from "./../assets/reading-hall2.jpg";
import Classroom2  from "./../assets/reading-hall3.jpg";

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
  { src: Classroom, caption: "Classroom Session " },
  { src: Classroom1, caption: "Classroom Session " },
  { src: Classroom2, caption: "Classroom Session " },
];

function Gallery() {
  // State to track which image is currently open in full screen
  const [selectedImg, setSelectedImg] = useState<null | typeof IMAGES[0]>(null);

  return (
    <>
      <PageHero eyebrow="Moments" title="Campus Gallery" subtitle="A glimpse into life at Shree Ram Law College." />
      
      <section className="section-padding min-h-screen">
        <div className="container-page">
          <SectionHeading eyebrow="Photos" title="Campus & Activities" />
          
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {IMAGES.map((img, i) => (
              <figure 
                key={i} 
                // Added cursor-pointer to show it's clickable
                className="group relative overflow-hidden rounded-xl border border-border bg-card cursor-pointer"
                // On click, save this image to our state
                onClick={() => setSelectedImg(img)}
              >
                <img 
                  src={img.src} 
                  alt={img.caption} 
                  loading="lazy" 
                  className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" 
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-4 text-sm font-semibold text-white">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FULLSCREEN MODAL OVERLAY */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 p-4 backdrop-blur-sm animate-in fade-in duration-200"
          // Clicking the dark background closes the modal
          onClick={() => setSelectedImg(null)}
        >
          {/* Close Button */}
          <button 
            className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white/70 transition hover:bg-white/20 hover:text-white"
            onClick={() => setSelectedImg(null)}
          >
            <X size={32} />
          </button>

          {/* Image Container */}
          <div 
            className="relative flex w-full max-w-6xl flex-col items-center"
            // This prevents clicking on the image itself from closing the modal
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={selectedImg.src} 
              alt={selectedImg.caption} 
              className="max-h-[80vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
            <p className="mt-6 text-center text-lg font-bold tracking-wide text-white">
              {selectedImg.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}