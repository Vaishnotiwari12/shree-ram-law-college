import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-BFxdvsGC.mjs";
import { A as Calendar, h as MapPin } from "../_libs/lucide-react.mjs";
import { t as SectionHeading } from "./SectionHeading-D8V_dPWO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/events-D_5ActeM.js
var import_jsx_runtime = require_jsx_runtime();
var EVENTS = [
	{
		date: "15 Aug 2025",
		title: "Independence Day Celebration",
		venue: "College Auditorium",
		tag: "National"
	},
	{
		date: "05 Sep 2025",
		title: "Teachers' Day & Faculty Felicitation",
		venue: "Main Hall",
		tag: "Cultural"
	},
	{
		date: "20 Sep 2025",
		title: "Inter-College Moot Court Competition",
		venue: "Moot Court Room",
		tag: "Academic"
	},
	{
		date: "02 Oct 2025",
		title: "Gandhi Jayanti — Legal Awareness Rally",
		venue: "Ghatampur",
		tag: "Outreach"
	},
	{
		date: "10 Nov 2025",
		title: "Seminar on Constitutional Law",
		venue: "Seminar Hall",
		tag: "Seminar"
	},
	{
		date: "26 Jan 2026",
		title: "Republic Day & Annual Prize Distribution",
		venue: "College Ground",
		tag: "National"
	}
];
function Events() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Campus Life",
		title: "Events & Activities",
		subtitle: "A calendar of academic, cultural and outreach activities that shape complete legal professionals."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Upcoming",
				title: "Events Calendar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
				children: EVENTS.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-elegant",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-md bg-navy px-3 py-1.5 text-xs font-semibold text-gold",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5" }),
								" ",
								e.date
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-serif text-lg font-bold text-navy",
							children: e.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-gold" }),
								" ",
								e.venue
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-4 inline-block rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-navy",
							children: e.tag
						})
					]
				}, i))
			})]
		})
	})] });
}
//#endregion
export { Events as component };
