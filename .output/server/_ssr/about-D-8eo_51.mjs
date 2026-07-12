import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as PageHero } from "./PageHero-BFxdvsGC.mjs";
import { t as students_default } from "./students-XhgEUEpS.mjs";
import { n as manager_default, r as principal_default, t as chairman_default } from "./principal-BCJHMVFd.mjs";
import { T as Eye, a as Target, s as Sparkles } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-D-8eo_51.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function FlipCard({ photo, name, role, subtitle, message }) {
	const [flipped, setFlipped] = (0, import_react.useState)(false);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "group [perspective:1200px]",
		onMouseEnter: () => setFlipped(true),
		onMouseLeave: () => setFlipped(false),
		onClick: () => setFlipped((v) => !v),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative h-[440px] w-full rounded-2xl shadow-elegant transition-transform duration-700 [transform-style:preserve-3d]",
			style: { transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 overflow-hidden rounded-2xl border border-border bg-card [backface-visibility:hidden]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-[78%] w-full overflow-hidden bg-secondary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: photo,
						alt: name,
						className: "h-full w-full object-cover object-top",
						loading: "lazy"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold uppercase tracking-widest text-gold",
							children: role
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 font-serif text-lg font-bold text-navy",
							children: name
						}),
						subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-0.5 text-xs text-muted-foreground",
							children: subtitle
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 flex flex-col justify-center rounded-2xl border border-gold bg-navy p-6 text-navy-foreground [backface-visibility:hidden]",
				style: { transform: "rotateY(180deg)" },
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-xs font-semibold uppercase tracking-widest text-gold",
						children: ["Message from ", role]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-2 font-serif text-xl font-bold",
						children: name
					}),
					subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs text-navy-foreground/70",
						children: subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-navy-foreground/90",
						children: message
					})
				]
			})]
		})
	});
}
var LEADERSHIP = [
	{
		photo: chairman_default,
		name: "Manoj Singh Bhadauria",
		role: "Chairman",
		subtitle: "Advocate",
		message: "Legal education must equip lawyers, law officers and teachers who can serve the different social and economic problems faced by the people of India. We choose our students carefully — and we welcome you to choose your institution just as carefully."
	},
	{
		photo: manager_default,
		name: "Vijay Laxmi Singh",
		role: "Manager",
		subtitle: "",
		message: "At Shree Ram Law College, our aim is to nurture disciplined, compassionate and knowledgeable law professionals. We are committed to providing a safe, inclusive and academically rich environment where every student can grow with confidence."
	},
	{
		photo: principal_default,
		name: "Shiv Pratap Singh Raghav",
		role: "Principal",
		subtitle: "M.A., LL.M., M.Phil., Ph.D. | Former Prof. of Law",
		message: "Law is slowly revealing itself as a constructive mechanism for economic policy. At Shree Ram Law College we aspire to strengthen democratic values through research and simplification of legal language — so that law becomes a real, effective tool for the empowerment of people."
	}
];
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "About Us",
			title: "An institution built on values, purpose and legal excellence",
			subtitle: "Shree Ram Law College is an integral part of the Purshottam Shri Ram Degree College, drawing on decades of academic tradition to shape complete legal professionals."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid items-start gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: students_default,
					width: 1280,
					height: 960,
					loading: "lazy",
					alt: "Students at Shree Ram Law College",
					className: "rounded-xl shadow-elegant"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "gold-underline font-serif text-3xl font-bold text-navy",
						children: "Our Story"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 leading-relaxed text-foreground/85",
						children: "When you step into Shree Ram Law College, you become part of an institution that believes legal studies are the means to an end — lawyers have the power to transform society through their knowledge, skills and sense of purpose."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 leading-relaxed text-foreground/85",
						children: "Whichever branch of law interests you, at Shree Ram Law College you will gain a foundation that marks you out as a complete professional — nurturing ideals and values that enable you to play a positive role in creating a better world, whether in corporate boardrooms, environmental law, social justice or human rights."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 leading-relaxed text-foreground/85",
						children: [
							"We are proud to have successfully completed the first year of our LL.B (3 Year) course with a",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-navy",
								children: "100% result"
							}),
							"."
						]
					})
				] })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-secondary/50 section-padding",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page grid gap-6 md:grid-cols-3",
				children: [
					{
						icon: Eye,
						title: "Vision",
						text: "To develop the college into a centre of excellence and a world-class learning space for legal education."
					},
					{
						icon: Target,
						title: "Mission",
						text: "To strive for continuous improvement and provide value-based, quality education in law."
					},
					{
						icon: Sparkles,
						title: "Purpose",
						text: "To create professionals, entrepreneurs and leaders with a global outlook and human values."
					}
				].map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border bg-card p-7 shadow-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-gold",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(v.icon, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 font-serif text-xl font-bold text-navy",
							children: v.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm leading-relaxed text-muted-foreground",
							children: v.text
						})
					]
				}, v.title))
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-semibold uppercase tracking-widest text-gold",
							children: "Our Leadership"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "gold-underline-center mt-2 font-serif text-3xl font-bold text-navy md:text-4xl",
							children: "Meet our team"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-3 max-w-2xl text-sm text-muted-foreground",
							children: "Hover over a card to read a personal message from our leaders."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3",
					children: LEADERSHIP.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FlipCard, { ...p }, p.name))
				})]
			})
		})
	] });
}
//#endregion
export { About as component };
