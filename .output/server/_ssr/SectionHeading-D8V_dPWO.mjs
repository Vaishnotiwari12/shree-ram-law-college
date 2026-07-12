import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SectionHeading-D8V_dPWO.js
var import_jsx_runtime = require_jsx_runtime();
function SectionHeading({ eyebrow, title, subtitle, center }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: center ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
		children: [
			eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-serif text-3xl font-bold text-navy sm:text-4xl " + (center ? "gold-underline-center" : "gold-underline"),
				children: title
			}),
			subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-base leading-relaxed text-muted-foreground",
				children: subtitle
			})
		]
	});
}
//#endregion
export { SectionHeading as t };
