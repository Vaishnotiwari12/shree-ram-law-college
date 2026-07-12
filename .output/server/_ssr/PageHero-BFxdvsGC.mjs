import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/PageHero-BFxdvsGC.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, subtitle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden bg-navy text-navy-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-0 opacity-25",
			style: { background: "radial-gradient(circle at 15% 20%, oklch(0.76 0.14 82 / 0.4), transparent 40%), radial-gradient(circle at 85% 80%, oklch(0.55 0.12 265 / 0.5), transparent 45%)" }
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page relative py-16 md:py-24",
			children: [
				eyebrow && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-xs font-semibold uppercase tracking-[0.25em] text-gold",
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-3 font-serif text-4xl font-bold sm:text-5xl",
					children: title
				}),
				subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-2xl text-base text-navy-foreground/80 sm:text-lg",
					children: subtitle
				})
			]
		})]
	});
}
//#endregion
export { PageHero as t };
