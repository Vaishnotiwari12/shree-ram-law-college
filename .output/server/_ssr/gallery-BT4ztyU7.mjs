import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-BFxdvsGC.mjs";
import { t as students_default } from "./students-XhgEUEpS.mjs";
import { t as SectionHeading } from "./SectionHeading-D8V_dPWO.mjs";
import { n as moot_court_default, t as law_books_default } from "./law-books-B61B2GCa.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-BT4ztyU7.js
var import_jsx_runtime = require_jsx_runtime();
var IMAGES = [
	{
		src: "/assets/College-photo-C6Zfj3tg2.jpg",
		caption: "Main Campus"
	},
	{
		src: moot_court_default,
		caption: "Moot Court Room"
	},
	{
		src: students_default,
		caption: "Student Life"
	},
	{
		src: law_books_default,
		caption: "Legal Library"
	},
	{
		src: "/assets/college-photo2-C3T0hTwC.jpg",
		caption: "College Building"
	},
	{
		src: moot_court_default,
		caption: "Advocacy Training"
	},
	{
		src: "/assets/reading-hall-XFT8rmdp.jpg",
		caption: "Classroom Session "
	},
	{
		src: "/assets/reading-hall2-CzQBa03w.jpg",
		caption: "Classroom Session "
	},
	{
		src: "/assets/reading-hall3-De26LbI0.jpg",
		caption: "Classroom Session "
	}
];
function Gallery() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Moments",
		title: "Campus Gallery",
		subtitle: "A glimpse into life at Shree Ram Law College."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
				eyebrow: "Photos",
				title: "Campus & Activities"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
				children: IMAGES.map((img, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "group relative overflow-hidden rounded-xl border border-border bg-card",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img.src,
						alt: img.caption,
						loading: "lazy",
						className: "aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-4 text-sm font-semibold text-navy-foreground",
						children: img.caption
					})]
				}, i))
			})]
		})
	})] });
}
//#endregion
export { Gallery as component };
