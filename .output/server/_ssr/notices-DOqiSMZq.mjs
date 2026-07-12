import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-BFxdvsGC.mjs";
import { A as Calendar, C as FileText, m as Megaphone } from "../_libs/lucide-react.mjs";
import { t as SectionHeading } from "./SectionHeading-D8V_dPWO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/notices-DOqiSMZq.js
var import_jsx_runtime = require_jsx_runtime();
var NOTICES = [
	{
		date: "12 Jul 2025",
		tag: "Admission",
		title: "Admission Open 2025-26 for LL.B and B.A. LL.B programmes"
	},
	{
		date: "28 Jun 2025",
		tag: "Academic",
		title: "Bar Council of India Approval Renewed for the academic session"
	},
	{
		date: "10 Jun 2025",
		tag: "Event",
		title: "Moot Court Competition 2025 — Registration open for all semesters"
	},
	{
		date: "02 Jun 2025",
		tag: "Outreach",
		title: "Legal Aid Camp at Ghatampur — Volunteers required"
	},
	{
		date: "15 May 2025",
		tag: "Workshop",
		title: "Workshop on Cyber Law — Guest lecture by Sr. Advocate"
	},
	{
		date: "01 May 2025",
		tag: "Exam",
		title: "End-Semester Examination Schedule released"
	}
];
function Notices() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Announcements",
		title: "Notices & Circulars",
		subtitle: "Stay updated with the latest from the College office."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Recent",
				title: "Latest Notices"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 divide-y divide-border overflow-hidden rounded-xl border border-border bg-card",
				children: NOTICES.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-3 p-5 transition hover:bg-secondary/50 sm:flex-row sm:items-center sm:gap-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-3 text-xs",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "inline-flex items-center gap-1 text-muted-foreground",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "h-3.5 w-3.5" }),
										" ",
										n.date
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-gold/20 px-2 py-0.5 font-semibold text-navy",
									children: n.tag
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-1 font-serif text-lg font-semibold text-navy",
								children: n.title
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#",
							className: "inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-gold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-4 w-4" }), " Read"]
						})
					]
				}, i))
			})]
		})
	})] });
}
//#endregion
export { Notices as component };
