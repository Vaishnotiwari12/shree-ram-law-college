import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Globe } from "lucide-react";
import crest from "@/assets/crest.png";
import { NAV_LINKS, SITE } from "./../lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-navy text-navy-foreground">
      <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={crest} alt="" width={48} height={48} className="h-12 w-12" />
            <div className="font-serif text-lg font-bold">{SITE.name}</div>
          </div>
          <p className="mt-4 text-sm text-navy-foreground/75">
            An institution committed to shaping ethical, competent and courageous
            legal professionals for a changing world.
          </p>
        </div>

        <div>
          <h4 className="gold-underline text-sm font-semibold uppercase tracking-wider">
            Explore
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-navy-foreground/80 transition hover:text-gold"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="gold-underline text-sm font-semibold uppercase tracking-wider">
            Programmes
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-navy-foreground/80">
            <li>LL.B — 3 Year</li>
            <li>B.A. LL.B — 5 Year Integrated</li>
            {/* <li>Diploma in Cyber Law</li>
            <li>Diploma in Human Rights</li>
            <li>Diploma in Labour Law</li> */}
          </ul>
        </div>

        <div>
          <h4 className="gold-underline text-sm font-semibold uppercase tracking-wider">
            Contact
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/85">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{SITE.phones.join(", ")}</span>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <a href={`mailto:${SITE.email}`} className="hover:text-gold">
                {SITE.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>{SITE.website}</span>
            </li>

            <li>  
            <a href="https://pinweb.in/" target="_blank" rel="noopener noreferrer" className="text-navy-foreground/80 transition hover:text-gold">
            Developed by Pinweb Pvt. Ltd Kanpur
            </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-navy-foreground/60 sm:flex-row">
          <span>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</span>
          <span>Approved by Bar Council of India • Affiliated to CSJM University, Kanpur</span>   
        </div>
      </div>
    </footer>
  );
}
