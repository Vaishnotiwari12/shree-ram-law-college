// Production starter SiteHeader
// Sections:
// 1. TOP BAR
// 2. COLLEGE HEADER
// 3. NAVBAR

import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import {
  Menu,
  X,
  Mail,
  Phone,
  LogIn,
  GraduationCap,
  ShieldCheck,
  ChevronDown,
  MapPin,
} from "lucide-react";

import crest from "@/assets/crest.png";
import { NAV_LINKS, SITE } from "./../lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  
  const [mLoginOpen, setMLoginOpen] = useState(false); 

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setLoginOpen(false);
      }
    };

    document.addEventListener("mousedown", onDoc);

    return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  return (
    <header className="bg-white shadow">
      {/* 1. TOP BAR */}
      <div className="hidden md:block bg-[#1a1b41] text-white">
        <div className="container-page flex items-center justify-between py-1.5 text-xs font-medium">
          <div className="flex-1 truncate pr-4 text-gray-200 flex items-center">
            <GraduationCap className="inline mr-2 h-4 w-4 text-gray-400" />
            Admission Open Session 2026-27 | All courses affiliated with CSJM University Kanpur | Code: KN127 
          </div>
          <div className="flex gap-6 text-yellow-400 shrink-0">
            <a href="tel:9415067926" className="flex items-center hover:text-yellow-300 transition-colors">
              <Phone className="inline mr-2 h-3.5 w-3.5" />
              9415067926
            </a>
            <a href={`mailto:${SITE.email}`} className="flex items-center hover:text-yellow-300 transition-colors">
              <Mail className="inline mr-2 h-4 w-4" />
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* 2. COLLEGE HEADER */}
      <div className="container-page flex flex-wrap items-center justify-between gap-4 py-3 md:py-4 border-b-4 border-red-700">
        <Link to="/" className="flex items-center gap-5">
         {/* NEW CODE */}
     <img 
  src={crest} 
  alt="College Crest" 
  className="-ml-4 h-28 w-28 md:h-36 md:w-36 lg:h-40 lg:w-40 rounded-full object-contain" 
/>
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl md:text-4xl font-extrabold text-[#990000]">
              Shree Ram Law College
            </h1>
            <h2 className="text-xl md:text-3xl font-bold text-green-700 mt-1">
              श्री राम लॉ कॉलेज
            </h2>
            <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-gray-500 font-medium">
              <span className="flex items-center text-gray-600">
                <MapPin className="inline mr-1 h-4 w-4 text-red-600" />
                Nandana-Ghatampur, Kanpur Nagar-209206
              </span>
              <span className="rounded bg-green-700 px-2 py-0.5 text-white font-bold ml-2">
                CSJM Affiliated
              </span>
              <span className="rounded bg-[#1a1b41] px-2 py-0.5 text-white font-bold">
                Code: KN127
              </span>
            </div>
          </div>
        </Link>

        {/* Responsive Hover Admission Button (Desktop) */}
        <Link
          to="/admissions"
          className="hidden xl:flex flex-col items-center justify-center rounded-3xl bg-gradient-to-r from-[#ff7a00] to-[#ff5000] px-10 py-3 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:from-[#e65c00] hover:to-[#cc4000]"
        >
          <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest">
            <GraduationCap size={16} /> ADMISSION OPEN
          </span>
          <span className="text-3xl font-extrabold my-1">2026-27</span>
          <span className="text-sm font-semibold">Session Starting Now</span>
        </Link>
      </div>

      {/* 3. NAVBAR */}
      <nav className="bg-[#0b132b] text-white">
        <div className="container-page flex items-center justify-between">
          <div className="hidden xl:flex items-center w-full">
            <div className="flex flex-1">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="flex items-center gap-2 px-4 py-4 text-sm font-bold uppercase tracking-wider hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 border-b-2 border-transparent transition-all"
                >
                  {l.label}
                </Link>
              ))}

                        {/* ERP Portal Login Link */}
              <div className="relative ml-2 flex items-center">
                <a
                  href="https://erp.shreeramlawcollege.in/site/userlogin"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open ERP Portal Login in a new tab"
                  className="flex items-center gap-2 px-4 py-4 text-sm font-bold uppercase tracking-wider hover:text-yellow-400 transition-colors"
                >
                  <LogIn size={16} />
                  Login
                </a>
              </div>              
            </div>


            {/* Right Side Phone Button */}
            <div className="ml-4 flex items-center py-2">
              <a
                href="tel:9415067926"
                className="flex items-center gap-2 rounded-full bg-[#ff6b00] hover:bg-[#e65c00] px-6 py-2 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                <Phone size={16} />
                9415067926
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="xl:hidden p-4 text-white hover:text-yellow-400 transition-colors"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="xl:hidden bg-white border-t shadow-lg text-gray-800 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="px-5 py-4 border-b font-medium hover:bg-gray-50 transition-colors"
              >
                {item.label}
              </Link>
            ))}

            

            {/* ERP Portal Login Link */}
            <a
              href="https://erp.shreeramlawcollege.in/site/userlogin"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open ERP Portal Login in a new tab"
              className="px-5 py-4 border-b font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <LogIn size={16} />
              Login
            </a>

            {/* Right Side Phone Button */}
            <a
              href="tel:9415067926"
              className="px-5 py-4 border-b font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              9415067926
            </a>


            

            {/* Responsive Hover Admission Button (Mobile) */}
            <Link
              to="/admissions"
              onClick={() => setOpen(false)}
              className="m-4 rounded-lg bg-gradient-to-r from-[#ff7a00] to-[#ff5000] py-3 text-center font-bold text-white shadow-md transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-lg"
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}