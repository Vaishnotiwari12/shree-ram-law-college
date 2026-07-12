import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as LogIn, b as GraduationCap, c as ShieldCheck, d as Phone, g as Mail, h as MapPin, k as ChevronDown, p as Menu, t as X, x as Globe } from "../_libs/lucide-react.mjs";
import { n as SITE, t as NAV_LINKS } from "./site-BJKeN1d-.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CXLRbcX9.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-DuslxxmJ.css";
var crest_default = "/assets/crest-DuKRLwdn.png";
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [loginOpen, setLoginOpen] = (0, import_react.useState)(false);
	const [mLoginOpen, setMLoginOpen] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const onDoc = (e) => {
			if (ref.current && !ref.current.contains(e.target)) setLoginOpen(false);
		};
		document.addEventListener("mousedown", onDoc);
		return () => document.removeEventListener("mousedown", onDoc);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "bg-white shadow",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden md:block bg-[#1a1b41] text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page flex items-center justify-between py-1.5 text-xs font-medium",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 truncate pr-4 text-gray-200 flex items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "inline mr-2 h-4 w-4 text-gray-400" }), "Admission Open Session 2026-27 | All courses affiliated with CSJM University Kanpur | Code: KN127"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-6 text-yellow-400 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "tel:9415067926",
							className: "flex items-center hover:text-yellow-300 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "inline mr-2 h-3.5 w-3.5" }), "9415067926"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: `mailto:${SITE.email}`,
							className: "flex items-center hover:text-yellow-300 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "inline mr-2 h-4 w-4" }), "Email Us"]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex flex-wrap items-center justify-between gap-4 py-3 md:py-4 border-b-4 border-red-700",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: crest_default,
						alt: "College Crest",
						className: "h-20 w-20 md:h-24 md:w-24 rounded-full"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col justify-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-2xl md:text-4xl font-extrabold text-[#990000]",
								children: "Shree Ram Law College"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-xl md:text-3xl font-bold text-green-700 mt-1",
								children: "श्री राम लॉ कॉलेज"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2 mt-2 text-sm text-gray-500 font-medium",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center text-gray-600",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "inline mr-1 h-4 w-4 text-red-600" }), "Nandana-Ghatampur, Kanpur Nagar-209206"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded bg-green-700 px-2 py-0.5 text-white font-bold ml-2",
										children: "CSJM Affiliated"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded bg-[#1a1b41] px-2 py-0.5 text-white font-bold",
										children: "Code: KN127"
									})
								]
							})
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/admissions",
					className: "hidden xl:flex flex-col items-center justify-center rounded-3xl bg-gradient-to-r from-[#ff7a00] to-[#ff5000] px-10 py-3 text-white shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-2xl hover:from-[#e65c00] hover:to-[#cc4000]",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2 text-sm font-bold uppercase tracking-widest",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { size: 16 }), " ADMISSION OPEN"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-3xl font-extrabold my-1",
							children: "2026-27"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-semibold",
							children: "Session Starting Now"
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "bg-[#0b132b] text-white",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "container-page flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden xl:flex items-center w-full",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1",
							children: [NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: l.to,
								className: "flex items-center gap-2 px-4 py-4 text-sm font-bold uppercase tracking-wider hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 border-b-2 border-transparent transition-all",
								children: l.label
							}, l.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								ref,
								className: "relative ml-2 flex items-center",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setLoginOpen(!loginOpen),
									className: "flex items-center gap-1 px-4 py-4 text-sm font-bold uppercase tracking-wider hover:text-yellow-400 transition-colors",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogIn, { size: 16 }),
										"Login",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, {
											size: 14,
											className: `transition-transform duration-200 ${loginOpen ? "rotate-180" : ""}`
										})
									]
								}), loginOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "absolute top-[100%] right-0 w-52 rounded-b-lg border border-t-0 bg-white shadow-xl text-gray-800 z-50 animate-in fade-in slide-in-from-top-2 duration-200",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/login/student",
										className: "flex items-center gap-3 px-4 py-3 hover:bg-gray-100 font-medium transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { size: 18 }), "Student Login"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/login/teacher",
										className: "flex items-center gap-3 px-4 py-3 hover:bg-gray-100 font-medium transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 18 }), "Teacher Login"]
									})]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ml-4 flex items-center py-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "tel:9415067926",
								className: "flex items-center gap-2 rounded-full bg-[#ff6b00] hover:bg-[#e65c00] px-6 py-2 text-sm font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-md",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { size: 16 }), "9415067926"]
							})
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => setOpen(!open),
						className: "xl:hidden p-4 text-white hover:text-yellow-400 transition-colors",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 28 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 28 })
					})]
				})
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "xl:hidden bg-white border-t shadow-lg text-gray-800 animate-in slide-in-from-top-2 duration-200",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-col",
					children: [
						NAV_LINKS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.to,
							onClick: () => setOpen(false),
							className: "px-5 py-4 border-b font-medium hover:bg-gray-50 transition-colors",
							children: item.label
						}, item.to)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/login/student",
							onClick: () => setOpen(false),
							className: "px-5 py-4 border-b font-medium hover:bg-gray-50 flex items-center gap-2 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { size: 18 }), "Student Login"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/login/teacher",
							onClick: () => setOpen(false),
							className: "px-5 py-4 border-b font-medium hover:bg-gray-50 flex items-center gap-2 transition-colors",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { size: 18 }), "Teacher Login"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/admissions",
							onClick: () => setOpen(false),
							className: "m-4 rounded-lg bg-gradient-to-r from-[#ff7a00] to-[#ff5000] py-3 text-center font-bold text-white shadow-md transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:-translate-y-0.5 hover:shadow-lg",
							children: "Apply Now"
						})
					]
				})
			})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
		className: "mt-16 bg-navy text-navy-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: crest_default,
						alt: "",
						width: 48,
						height: 48,
						className: "h-12 w-12"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-serif text-lg font-bold",
						children: SITE.name
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm text-navy-foreground/75",
					children: "An institution committed to shaping ethical, competent and courageous legal professionals for a changing world."
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "gold-underline text-sm font-semibold uppercase tracking-wider",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2 text-sm",
					children: NAV_LINKS.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: l.to,
						className: "text-navy-foreground/80 transition hover:text-gold",
						children: l.label
					}) }, l.to))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "gold-underline text-sm font-semibold uppercase tracking-wider",
					children: "Programmes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-2 text-sm text-navy-foreground/80",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "LL.B — 3 Year" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "B.A. LL.B — 5 Year Integrated" })]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "gold-underline text-sm font-semibold uppercase tracking-wider",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-4 space-y-3 text-sm text-navy-foreground/85",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: SITE.address })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: SITE.phones.join(", ") })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: `mailto:${SITE.email}`,
								className: "hover:text-gold",
								children: SITE.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "mt-0.5 h-4 w-4 shrink-0 text-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: SITE.website })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "https://pinweb.in/",
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-navy-foreground/80 transition hover:text-gold",
							children: "Developed by Pinweb Pvt. Ltd Kanpur"
						}) })
					]
				})] })
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-white/10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-navy-foreground/60 sm:flex-row",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					SITE.name,
					". All rights reserved."
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Approved by Bar Council of India • Affiliated to CSJM University, Kanpur" })]
			})
		})]
	});
}
function WhatsAppButton() {
	const msg = encodeURIComponent("Hello Shree Ram Law College, I would like to know more about admissions.");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
		href: `https://wa.me/${SITE.whatsapp}?text=${msg}`,
		target: "_blank",
		rel: "noopener noreferrer",
		"aria-label": "Chat with us on WhatsApp",
		className: "group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] transition hover:scale-105 sm:bottom-7 sm:right-7",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
			xmlns: "http://www.w3.org/2000/svg",
			viewBox: "0 0 32 32",
			className: "h-6 w-6 fill-white",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.11 17.28c-.29-.15-1.7-.84-1.96-.93-.26-.1-.45-.15-.64.15-.19.29-.74.93-.9 1.12-.17.19-.33.22-.62.07-.29-.15-1.22-.45-2.32-1.43-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.44.13-.59.13-.13.29-.34.44-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.55-.88-2.12-.23-.55-.47-.47-.64-.48h-.55c-.19 0-.51.07-.78.36-.26.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.02.15.19 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.71.23 1.35.19 1.86.12.57-.09 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM16.02 5.33c-5.87 0-10.65 4.78-10.66 10.66 0 1.88.5 3.72 1.44 5.34l-1.52 5.54 5.68-1.49c1.56.85 3.32 1.3 5.06 1.3h.01c5.87 0 10.65-4.78 10.66-10.66 0-2.85-1.11-5.53-3.12-7.54a10.6 10.6 0 0 0-7.55-3.15zm0 19.5h-.01a8.83 8.83 0 0 1-4.5-1.24l-.32-.19-3.36.88.9-3.28-.21-.34a8.85 8.85 0 0 1-1.36-4.71c0-4.89 3.98-8.86 8.87-8.86 2.37 0 4.6.92 6.27 2.6a8.8 8.8 0 0 1 2.6 6.27c0 4.89-3.98 8.86-8.88 8.86z" })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "hidden text-sm font-semibold sm:inline",
			children: "Chat on WhatsApp"
		})]
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-navy",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-navy px-4 py-2 text-sm font-medium text-navy-foreground transition hover:opacity-90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-navy px-4 py-2 text-sm font-medium text-navy-foreground transition hover:opacity-90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium transition hover:bg-accent hover:text-accent-foreground",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$12 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Shree Ram Law College | LL.B & B.A. LL.B in Kanpur" },
			{
				name: "description",
				content: "Shree Ram Law College, Nandana, Ghatampur, Kanpur. Approved by Bar Council of India, affiliated to CSJM University. Offering LL.B (3 Year) and B.A. LL.B (5 Year Integrated) programmes."
			},
			{
				name: "author",
				content: "Shree Ram Law College"
			},
			{
				property: "og:title",
				content: "Shree Ram Law College | LL.B & B.A. LL.B in Kanpur"
			},
			{
				property: "og:description",
				content: "Premier law college in Kanpur offering LL.B and B.A. LL.B programmes. Approved by BCI, affiliated to CSJM University."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "Shree Ram Law College | LL.B & B.A. LL.B in Kanpur"
			},
			{
				name: "description",
				content: "Shree Ram Law College, Nandana, Ghatampur, Kanpur. Approved by Bar Council of India, affiliated to CSJM University. Offering LL.B (3 Year) and B.A. LL.B (5 Year Integrated) programmes."
			},
			{
				property: "og:description",
				content: "Shree Ram Law College, Nandana, Ghatampur, Kanpur. Approved by Bar Council of India, affiliated to CSJM University. Offering LL.B (3 Year) and B.A. LL.B (5 Year Integrated) programmes."
			},
			{
				name: "twitter:description",
				content: "Shree Ram Law College, Nandana, Ghatampur, Kanpur. Approved by Bar Council of India, affiliated to CSJM University. Offering LL.B (3 Year) and B.A. LL.B (5 Year Integrated) programmes."
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "public\\crest.png",
				type: "image/x-icon"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: ""
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$12.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
					className: "flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsAppButton, {})
			]
		})
	});
}
var BASE_URL = "";
var Route$11 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const xml = [
		`<?xml version="1.0" encoding="UTF-8"?>`,
		`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
		...[
			{
				path: "/",
				changefreq: "weekly",
				priority: "1.0"
			},
			{
				path: "/about",
				changefreq: "monthly",
				priority: "0.8"
			},
			{
				path: "/courses",
				changefreq: "monthly",
				priority: "0.9"
			},
			{
				path: "/faculty",
				changefreq: "monthly",
				priority: "0.7"
			},
			{
				path: "/admissions",
				changefreq: "weekly",
				priority: "0.9"
			},
			{
				path: "/contact",
				changefreq: "monthly",
				priority: "0.6"
			}
		].map((e) => [
			`  <url>`,
			`    <loc>${BASE_URL}${e.path}</loc>`,
			e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
			e.priority ? `    <priority>${e.priority}</priority>` : null,
			`  </url>`
		].filter(Boolean).join("\n")),
		`</urlset>`
	].join("\n");
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
var $$splitComponentImporter$10 = () => import("./notices-DOqiSMZq.mjs");
var Route$10 = createFileRoute("/notices")({
	head: () => ({ meta: [
		{ title: "Notices — Shree Ram Law College" },
		{
			name: "description",
			content: "Latest notices, circulars and announcements from Shree Ram Law College."
		},
		{
			property: "og:title",
			content: "Notices — Shree Ram Law College"
		},
		{
			property: "og:description",
			content: "Latest notices, circulars and announcements."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./gallery-BT4ztyU7.mjs");
var Route$9 = createFileRoute("/gallery")({
	head: () => ({ meta: [
		{ title: "Gallery — Shree Ram Law College" },
		{
			name: "description",
			content: "Photo gallery of campus, moot court, library and student life at Shree Ram Law College."
		},
		{
			property: "og:title",
			content: "Gallery — Shree Ram Law College"
		},
		{
			property: "og:description",
			content: "Campus, moot court, library and student life."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./faculty-BnlSZnqe.mjs");
var Route$8 = createFileRoute("/faculty")({
	head: () => ({ meta: [
		{ title: "Faculty | Shree Ram Law College" },
		{
			name: "description",
			content: "Meet the qualified and experienced faculty at Shree Ram Law College, Kanpur."
		},
		{
			property: "og:title",
			content: "Faculty of Shree Ram Law College"
		},
		{
			property: "og:description",
			content: "LL.M, NET and Ph.D. qualified professors."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./events-D_5ActeM.mjs");
var Route$7 = createFileRoute("/events")({
	head: () => ({ meta: [
		{ title: "Events — Shree Ram Law College" },
		{
			name: "description",
			content: "Moot courts, seminars, workshops and cultural events at Shree Ram Law College."
		},
		{
			property: "og:title",
			content: "Events — Shree Ram Law College"
		},
		{
			property: "og:description",
			content: "Moot courts, seminars, workshops and cultural events."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./courses-Cf7JzMfo.mjs");
var Route$6 = createFileRoute("/courses")({
	head: () => ({ meta: [
		{ title: "Courses | Shree Ram Law College" },
		{
			name: "description",
			content: "Explore LL.B (3 Year), B.A. LL.B (5 Year Integrated) and diploma programmes offered at Shree Ram Law College, Kanpur."
		},
		{
			property: "og:title",
			content: "Courses at Shree Ram Law College"
		},
		{
			property: "og:description",
			content: "LL.B, B.A. LL.B and diploma programmes."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./contact-RjvIJIfM.mjs");
var Route$5 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact | Shree Ram Law College" },
		{
			name: "description",
			content: "Contact Shree Ram Law College, Nandana, Ghatampur, Kanpur — phone, email, WhatsApp and directions."
		},
		{
			property: "og:title",
			content: "Contact Shree Ram Law College"
		},
		{
			property: "og:description",
			content: "Address, phone, email and map."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./admissions-CeZKoxMJ.mjs");
var Route$4 = createFileRoute("/admissions")({
	head: () => ({ meta: [
		{ title: "Admissions | Shree Ram Law College" },
		{
			name: "description",
			content: "How to apply for LL.B and B.A. LL.B admissions at Shree Ram Law College, Kanpur."
		},
		{
			property: "og:title",
			content: "Admissions — Shree Ram Law College"
		},
		{
			property: "og:description",
			content: "Prospectus, admission form, documents and rules."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./about-D-8eo_51.mjs");
var Route$3 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About | Shree Ram Law College" },
		{
			name: "description",
			content: "About Shree Ram Law College — a BCI-approved, CSJM-affiliated institution in Nandana, Ghatampur, Kanpur committed to quality legal education."
		},
		{
			property: "og:title",
			content: "About Shree Ram Law College"
		},
		{
			property: "og:description",
			content: "Vision, mission and message from the leadership of Shree Ram Law College."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./routes-2QagkA2Q.mjs");
var Route$2 = createFileRoute("/")({
	head: () => ({}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./login.teacher-CoM1PrQc.mjs");
var Route$1 = createFileRoute("/login/teacher")({
	head: () => ({ meta: [{ title: "Teacher Login | Shree Ram Law College" }, {
		name: "description",
		content: "Faculty portal login for Shree Ram Law College — manage classes, attendance and student records."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./login.student-DruWwSmQ.mjs");
var Route = createFileRoute("/login/student")({
	head: () => ({ meta: [{ title: "Student Login | Shree Ram Law College" }, {
		name: "description",
		content: "Student portal login for Shree Ram Law College — access your attendance, notes and results."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var SitemapDotxmlRoute = Route$11.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$12
});
var NoticesRoute = Route$10.update({
	id: "/notices",
	path: "/notices",
	getParentRoute: () => Route$12
});
var GalleryRoute = Route$9.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$12
});
var FacultyRoute = Route$8.update({
	id: "/faculty",
	path: "/faculty",
	getParentRoute: () => Route$12
});
var EventsRoute = Route$7.update({
	id: "/events",
	path: "/events",
	getParentRoute: () => Route$12
});
var CoursesRoute = Route$6.update({
	id: "/courses",
	path: "/courses",
	getParentRoute: () => Route$12
});
var ContactRoute = Route$5.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$12
});
var AdmissionsRoute = Route$4.update({
	id: "/admissions",
	path: "/admissions",
	getParentRoute: () => Route$12
});
var AboutRoute = Route$3.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$12
});
var IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$12
});
var LoginTeacherRoute = Route$1.update({
	id: "/login/teacher",
	path: "/login/teacher",
	getParentRoute: () => Route$12
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	AdmissionsRoute,
	ContactRoute,
	CoursesRoute,
	EventsRoute,
	FacultyRoute,
	GalleryRoute,
	NoticesRoute,
	SitemapDotxmlRoute,
	LoginStudentRoute: Route.update({
		id: "/login/student",
		path: "/login/student",
		getParentRoute: () => Route$12
	}),
	LoginTeacherRoute
};
var routeTree = Route$12._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
