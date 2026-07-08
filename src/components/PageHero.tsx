import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div
        className="absolute inset-0 opacity-25"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, oklch(0.76 0.14 82 / 0.4), transparent 40%), radial-gradient(circle at 85% 80%, oklch(0.55 0.12 265 / 0.5), transparent 45%)",
        }}
      />
      <div className="container-page relative py-16 md:py-24">
        {eyebrow && (
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            {eyebrow}
          </div>
        )}
        <h1 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base text-navy-foreground/80 sm:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
