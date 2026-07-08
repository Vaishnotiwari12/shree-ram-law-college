import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Phone, Mail, GraduationCap, ShieldCheck, LogIn, ChevronDown } from "lucide-react";
import crest from "@/assets/crest.png";
import { NAV_LINKS, SITE } from "./../lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [mLoginOpen, setMLoginOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {

    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setLoginOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur">
      {/* top strip */}
      <div className="hidden bg-navy text-navy-foreground text-xs md:block">
        <div className="container-page flex items-center justify-between gap-4 py-2">
          <div className="flex min-w-0 items-center gap-5">
            <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-1.5 truncate hover:text-gold">
              <Mail className="h-3.5 w-3.5 shrink-0" /> {SITE.email}
            </a>
            <a href={`tel:${SITE.phones[0].replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-gold">
              <Phone className="h-3.5 w-3.5" /> {SITE.phones[0]}
            </a>
          </div>
          <div className="shrink-0 text-gold">
            College Code: KN136 &nbsp;|&nbsp; Affiliated to C.S.J.M. University, Kanpur
          </div>
        </div>
      </div>

      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 md:py-4">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img src={crest} alt="Shree Ram Law College crest" width={48} height={48} className="h-11 w-11 shrink-0 md:h-12 md:w-12" />
          <div className="min-w-0">
            <div className="truncate font-serif text-lg font-bold leading-tight text-navy md:text-xl">
              {SITE.name}
            </div>
            <div className="truncate text-[11px] uppercase tracking-wider text-muted-foreground md:text-xs">
              Nandana • Ghatampur • Kanpur Nagar
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="rounded-md px-2.5 py-2 text-sm font-medium text-foreground/80 transition hover:bg-secondary hover:text-navy"
              activeProps={{ className: "text-navy bg-secondary" }}
            >
              {l.label}
            </Link>
          ))}
          <div ref={ref} className="relative ml-2">
            <button
              onClick={() => setLoginOpen((v) => !v)}
              className="inline-flex items-center gap-1.5 rounded-md border border-gold/70 px-3 py-2 text-xs font-semibold text-navy transition hover:bg-gold/10"
            >
              <LogIn className="h-3.5 w-3.5" /> Login
              <ChevronDown className={"h-3.5 w-3.5 transition " + (loginOpen ? "rotate-180" : "")} />
            </button>
            {loginOpen && (
              <div className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-lg border border-border bg-card shadow-elegant animate-scale-in">
                <Link
                  to="/login/student"
                  onClick={() => setLoginOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-3 text-sm font-medium text-navy transition hover:bg-secondary"
                >
                  <GraduationCap className="h-4 w-4 text-gold" /> Student Login
                </Link>
                <div className="h-px bg-border" />
                <Link
                  to="/login/teacher"
                  onClick={() => setLoginOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-3 text-sm font-medium text-navy transition hover:bg-secondary"
                >
                  <ShieldCheck className="h-4 w-4 text-gold" /> Teacher Login
                </Link>
              </div>
            )}
          </div>
          <Link
            to="/admissions"
            className="ml-1 inline-flex items-center rounded-md bg-gold px-4 py-2 text-xs font-bold text-gold-foreground shadow-gold transition hover:brightness-105"
          >
            Apply Now
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border xl:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background xl:hidden">
          <nav className="container-page flex flex-col py-3">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-secondary hover:text-navy"
                activeProps={{ className: "text-navy bg-secondary" }}
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => setMLoginOpen((v) => !v)}
              className="mt-1 flex items-center justify-between rounded-md px-3 py-3 text-sm font-medium text-foreground/85 hover:bg-secondary"
            >
              <span className="inline-flex items-center gap-2"><LogIn className="h-4 w-4" /> Login</span>
              <ChevronDown className={"h-4 w-4 transition " + (mLoginOpen ? "rotate-180" : "")} />
            </button>
            {mLoginOpen && (
              <div className="ml-4 flex flex-col border-l-2 border-gold/40 pl-3">
                <Link to="/login/student" onClick={() => setOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium text-navy hover:bg-secondary">
                  <GraduationCap className="mr-2 inline h-4 w-4" /> Student Login
                </Link>
                <Link to="/login/teacher" onClick={() => setOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium text-navy hover:bg-secondary">
                  <ShieldCheck className="mr-2 inline h-4 w-4" /> Teacher Login
                </Link>
              </div>
            )}
            <Link
              to="/admissions"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-gold px-4 py-3 text-sm font-bold text-gold-foreground"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
