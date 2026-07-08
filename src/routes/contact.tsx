import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { SITE } from "../lib/site";
import { MapPin, Phone, Mail, Globe, MessageCircle, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Shree Ram Law College" },
      { name: "description", content: "Contact Shree Ram Law College, Nandana, Ghatampur, Kanpur — phone, email, WhatsApp and directions." },
      { property: "og:title", content: "Contact Shree Ram Law College" },
      { property: "og:description", content: "Address, phone, email and map." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const openWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Shree Ram Law College,%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0A%0A${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with us"
        subtitle="Reach out for admissions, campus visits, or any general query. We usually respond within a day."
      />

      <section className="section-padding">
        <div className="container-page grid gap-8 lg:grid-cols-2">
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
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-4 py-3 text-sm font-semibold text-white transition hover:brightness-105"
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
      </section>

      <section className="pb-20">
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
