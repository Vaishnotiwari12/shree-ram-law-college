import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-BFxdvsGC.mjs";
import { o as SquareUserRound } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/faculty-BnlSZnqe.js
var import_jsx_runtime = require_jsx_runtime();
var lawFaculty = [
	{
		name: "Mr. Ashok Kumar Yadav",
		qual: "LL.M., NET Qualified",
		role: "Assistant Professor"
	},
	{
		name: "Mr. Jagesh Kumar",
		qual: "LL.M.",
		role: "Assistant Professor"
	},
	{
		name: "Mr. Kamlesh Kumar Varma",
		qual: "LL.M.",
		role: "Assistant Professor"
	},
	{
		name: "Mr. Parveg Khan",
		qual: "M.A., LL.M.",
		role: "Assistant Professor"
	},
	{
		name: "Mr. Mohammad Faruq",
		qual: "LL.M.",
		role: "Assistant Professor"
	},
	{
		name: "Mr. Lok Nath",
		qual: "LL.M.",
		role: "Assistant Professor"
	},
	{
		name: "Mr. Devendra Dwarg",
		qual: "LL.M., NET Qualified",
		role: "Assistant Professor"
	},
	{
		name: "Mr. Siddhartha Kumar",
		qual: "LL.M., NET Qualified",
		role: "Assistant Professor"
	}
];
var artsFaculty = [
	{
		name: "Mr. Ravindra Kumar Singh",
		qual: "Political Science, NET Qualified",
		role: "Assistant Professor"
	},
	{
		name: "Dr. Ashutosh Kumar Shukla",
		qual: "Sociology, Ph.D., NET Qualified",
		role: "Assistant Professor"
	},
	{
		name: "Dr. Rashmi Saxena",
		qual: "English, Ph.D., NET Qualified",
		role: "Assistant Professor"
	},
	{
		name: "Dr. Vishnu Dev",
		qual: "Economics, Ph.D., NET Qualified",
		role: "Assistant Professor"
	}
];
function Card({ name, qual, role }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "group flex gap-4 rounded-xl border border-border bg-card p-5 transition hover:border-gold/60 hover:shadow-elegant",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid h-14 w-14 shrink-0 place-items-center rounded-full bg-navy text-gold",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquareUserRound, { className: "h-6 w-6" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "min-w-0",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "truncate font-serif text-lg font-bold text-navy",
					children: name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs uppercase tracking-widest text-gold",
					children: role
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 text-sm text-muted-foreground",
					children: qual
				})
			]
		})]
	});
}
function Faculty() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Our Faculty",
			title: "Scholars, practitioners and mentors",
			subtitle: "A team of qualified LL.M, NET and Ph.D. professors, complemented by senior advocates and former judicial officers."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "gold-underline font-serif text-2xl font-bold text-navy sm:text-3xl",
					children: "Faculty of Law"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: lawFaculty.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { ...f }, f.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary/50 section-padding",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "gold-underline font-serif text-2xl font-bold text-navy sm:text-3xl",
					children: "Faculty of Arts (B.A. LL.B)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: artsFaculty.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Card, { ...f }, f.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "gold-underline font-serif text-2xl font-bold text-navy sm:text-3xl",
					children: "Administrative Staff"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
					children: [
						{
							name: "Mr. Ashok Kumar Yadav",
							role: "Head of Department"
						},
						{
							name: "Mrs. Pushpa Pandey",
							role: "Administration"
						},
						{
							name: "Mr. Surendra Singh",
							role: "Administration"
						},
						{
							name: "Mr. Deepak Kumar",
							role: "Administration"
						},
						{
							name: "Mr. Jitendra Khare",
							role: "Administration"
						}
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-border bg-card p-5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-lg font-bold text-navy",
							children: s.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-widest text-gold",
							children: s.role
						})]
					}, s.name))
				})]
			})
		})
	] });
}
//#endregion
export { Faculty as component };
