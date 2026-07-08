import { useState } from "react";

interface FlipCardProps {
  photo: string;
  name: string;
  role: string;
  subtitle?: string;
  message: string;
}

export function FlipCard({ photo, name, role, subtitle, message }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="group [perspective:1200px]"
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onClick={() => setFlipped((v) => !v)}
    >
      <div
        className="relative h-[440px] w-full rounded-2xl shadow-elegant transition-transform duration-700 [transform-style:preserve-3d]"
        style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front */}
        <div className="absolute inset-0 overflow-hidden rounded-2xl border border-border bg-card [backface-visibility:hidden]">
          <div className="h-[78%] w-full overflow-hidden bg-secondary">
            <img
              src={photo}
              alt={name}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <div className="p-4 text-center">
            <div className="text-xs font-semibold uppercase tracking-widest text-gold">
              {role}
            </div>
            <h3 className="mt-1 font-serif text-lg font-bold text-navy">{name}</h3>
            {subtitle && (
              <div className="mt-0.5 text-xs text-muted-foreground">{subtitle}</div>
            )}
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 flex flex-col justify-center rounded-2xl border border-gold bg-navy p-6 text-navy-foreground [backface-visibility:hidden]"
          style={{ transform: "rotateY(180deg)" }}
        >
          <div className="text-xs font-semibold uppercase tracking-widest text-gold">
            Message from {role}
          </div>
          <h3 className="mt-2 font-serif text-xl font-bold">{name}</h3>
          {subtitle && (
            <div className="text-xs text-navy-foreground/70">{subtitle}</div>
          )}
          <p className="mt-4 text-sm leading-relaxed text-navy-foreground/90">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
}
