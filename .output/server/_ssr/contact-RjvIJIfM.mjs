import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-BFxdvsGC.mjs";
import { d as Phone, f as MessageCircle, g as Mail, h as MapPin, l as Send, x as Globe } from "../_libs/lucide-react.mjs";
import { n as SITE } from "./site-BJKeN1d-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-RjvIJIfM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Contact() {
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		phone: "",
		message: ""
	});
	const openWhatsApp = (e) => {
		e.preventDefault();
		const text = `Hello Shree Ram Law College,%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0A%0A${encodeURIComponent(form.message)}`;
		window.open(`https://wa.me/${SITE.whatsapp}?text=${text}`, "_blank");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Contact",
			title: "Get in touch with us",
			subtitle: "Reach out for admissions, campus visits, or any general query. We usually respond within a day."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid gap-8 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-4",
					children: [[
						{
							icon: MapPin,
							title: "Address",
							value: SITE.address
						},
						{
							icon: Phone,
							title: "Phone",
							value: SITE.phones.join("  •  ")
						},
						{
							icon: Mail,
							title: "Email",
							value: SITE.email,
							href: `mailto:${SITE.email}`
						},
						{
							icon: Globe,
							title: "Website",
							value: SITE.website
						}
					].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4 rounded-xl border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-navy text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-widest text-gold",
								children: c.title
							}), c.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: c.href,
								className: "mt-1 block break-words text-navy hover:underline",
								children: c.value
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 break-words text-foreground/85",
								children: c.value
							})]
						})]
					}, c.title)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: `https://wa.me/${SITE.whatsapp}`,
						target: "_blank",
						rel: "noreferrer",
						className: "inline-flex w-full items-center justify-center gap-2 rounded-md bg-whatsapp px-4 py-3 text-sm font-semibold text-white transition hover:brightness-105",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "h-4 w-4" }), " Chat on WhatsApp"]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: openWhatsApp,
					className: "rounded-2xl border border-border bg-card p-6 shadow-elegant",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-serif text-2xl font-bold text-navy",
							children: "Send us a message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Fill in your details — we'll continue the conversation on WhatsApp."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-navy",
									children: "Full Name"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									value: form.name,
									onChange: (e) => setForm({
										...form,
										name: e.target.value
									}),
									className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none ring-ring/20 transition focus:border-gold focus:ring-2",
									placeholder: "Your name"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-navy",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									required: true,
									value: form.phone,
									onChange: (e) => setForm({
										...form,
										phone: e.target.value
									}),
									className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none ring-ring/20 transition focus:border-gold focus:ring-2",
									placeholder: "+91"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-navy",
									children: "Message"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									required: true,
									rows: 4,
									value: form.message,
									onChange: (e) => setForm({
										...form,
										message: e.target.value
									}),
									className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none ring-ring/20 transition focus:border-gold focus:ring-2",
									placeholder: "How can we help?"
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "submit",
									className: "inline-flex w-full items-center justify-center gap-2 rounded-md bg-navy px-4 py-3 text-sm font-semibold text-navy-foreground transition hover:bg-navy/90",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), " Send via WhatsApp"]
								})
							]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-20",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-2xl border border-border shadow-elegant",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
						title: "Shree Ram Law College location",
						src: "https://www.google.com/maps?q=Nandana,+Ghatampur,+Kanpur&output=embed",
						className: "h-[420px] w-full",
						loading: "lazy",
						referrerPolicy: "no-referrer-when-downgrade"
					})
				})
			})
		})
	] });
}
//#endregion
export { Contact as component };
