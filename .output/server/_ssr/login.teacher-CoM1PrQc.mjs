import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-BFxdvsGC.mjs";
import { j as Briefcase, r as User, v as Lock } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login.teacher-CoM1PrQc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TeacherLogin() {
	const [form, setForm] = (0, import_react.useState)({
		id: "",
		password: ""
	});
	const [msg, setMsg] = (0, import_react.useState)("");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
		eyebrow: "Faculty Portal",
		title: "Teacher Login",
		subtitle: "Manage classes, upload notes, mark attendance and share results with students."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section-padding",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-10 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl border border-gold/40 bg-navy p-8 text-navy-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "h-10 w-10 text-gold" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-4 font-serif text-2xl font-bold",
						children: "Welcome, faculty member."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-navy-foreground/85",
						children: "Log in with the faculty ID and password issued by the administration to access the teacher dashboard."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-6 space-y-2 text-sm text-navy-foreground/85",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Mark daily attendance" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Upload notes, syllabus & moot briefs" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Publish internal test results" })
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: (e) => {
					e.preventDefault();
					setMsg("Faculty portal is not active yet. Please contact the Principal's office for access.");
				},
				className: "rounded-2xl border border-border bg-card p-6 shadow-elegant",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-serif text-2xl font-bold text-navy",
					children: "Sign in"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 space-y-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold uppercase tracking-widest text-navy",
							children: "Faculty ID"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex items-center rounded-md border border-input bg-background px-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								value: form.id,
								onChange: (e) => setForm({
									...form,
									id: e.target.value
								}),
								className: "ml-2 w-full bg-transparent py-2.5 text-sm outline-none",
								placeholder: "e.g. FAC-2024-07"
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-xs font-semibold uppercase tracking-widest text-navy",
							children: "Password"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-1 flex items-center rounded-md border border-input bg-background px-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "h-4 w-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								required: true,
								type: "password",
								value: form.password,
								onChange: (e) => setForm({
									...form,
									password: e.target.value
								}),
								className: "ml-2 w-full bg-transparent py-2.5 text-sm outline-none",
								placeholder: "••••••••"
							})]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "inline-flex w-full items-center justify-center rounded-md bg-navy px-4 py-3 text-sm font-semibold text-navy-foreground transition hover:bg-navy/90",
							children: "Sign in"
						}),
						msg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "rounded-md bg-secondary p-3 text-xs text-muted-foreground",
							children: msg
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center text-xs text-muted-foreground",
							children: [
								"Are you a student?",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login/student",
									className: "text-navy underline",
									children: "Student login"
								})
							]
						})
					]
				})]
			})]
		})
	})] });
}
//#endregion
export { TeacherLogin as component };
