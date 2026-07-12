import { r as __toESM } from "../_runtime.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as students_default } from "./students-XhgEUEpS.mjs";
import { n as manager_default, r as principal_default, t as chairman_default } from "./principal-BCJHMVFd.mjs";
import { D as ChevronRight, M as BookOpen, N as ArrowRight, O as ChevronLeft, S as Gavel, b as GraduationCap, c as ShieldCheck, d as Phone, f as MessageCircle, g as Mail, h as MapPin, k as ChevronDown, l as Send, m as Megaphone, n as Users, u as ScrollText, x as Globe, y as Library } from "../_libs/lucide-react.mjs";
import { n as SITE } from "./site-BJKeN1d-.mjs";
import { t as SectionHeading } from "./SectionHeading-D8V_dPWO.mjs";
import { n as moot_court_default, t as law_books_default } from "./law-books-B61B2GCa.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-2QagkA2Q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SLIDES = [
	{
		img: "/assets/College-photo-C6Zfj3tg2.jpg",
		eyebrow: "College Code: KN136",
		title: "Shree Ram Law College",
		text: "Approved by Bar Council of India · Affiliated to C.S.J.M. University, Kanpur."
	},
	{
		img: moot_court_default,
		eyebrow: "Practical Training",
		title: "Moot Court Inside Campus",
		text: "A dedicated moot court room where students argue real briefs and sharpen advocacy skills."
	},
	{
		img: students_default,
		eyebrow: "Admissions Open 2025-26",
		title: "Learn Law With Purpose",
		text: "LL.B (3 Year) and B.A. LL.B (5 Year Integrated) programmes with 100% result track record."
	},
	{
		img: law_books_default,
		eyebrow: "Rich Legal Library",
		title: "A Foundation Built on Depth",
		text: "Well-stocked traditional library with online & offline legal databases and study spaces."
	}
];
function HeroSlider() {
	const [i, setI] = (0, import_react.useState)(0);
	const n = SLIDES.length;
	(0, import_react.useEffect)(() => {
		const t = setInterval(() => setI((v) => (v + 1) % n), 5e3);
		return () => clearInterval(t);
	}, [n]);
	const go = (d) => setI((v) => (v + d + n) % n);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative isolate overflow-hidden bg-navy",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative h-[520px] w-full sm:h-[600px] lg:h-[680px]",
				children: SLIDES.map((s, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-0 transition-opacity duration-700 " + (idx === i ? "opacity-100" : "opacity-0"),
					"aria-hidden": idx !== i,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: s.img,
							alt: s.title,
							className: "absolute inset-0 h-full w-full object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/75 to-navy/60" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "container-page relative flex h-full items-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "max-w-2xl text-navy-foreground animate-fade-in",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "inline-flex items-center rounded-full bg-gold px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-foreground shadow-gold",
										children: s.eyebrow
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "mt-5 font-serif text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/85 sm:text-lg",
										children: s.text
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 flex flex-wrap gap-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "/admissions",
											className: "inline-flex items-center rounded-md bg-gold px-6 py-3 text-sm font-bold text-gold-foreground shadow-gold transition hover:brightness-105",
											children: "Apply Now"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "/courses",
											className: "inline-flex items-center rounded-md border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-navy-foreground backdrop-blur transition hover:bg-white/10",
											children: "Explore Programmes"
										})]
									})
								]
							})
						})
					]
				}, idx))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => go(-1),
				"aria-label": "Previous slide",
				className: "absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur transition hover:bg-black/50 md:left-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: () => go(1),
				"aria-label": "Next slide",
				className: "absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white backdrop-blur transition hover:bg-black/50 md:right-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-6 w-6" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 gap-2",
				children: SLIDES.map((_, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setI(idx),
					"aria-label": `Slide ${idx + 1}`,
					className: "h-2 rounded-full transition-all " + (idx === i ? "w-8 bg-gold" : "w-2 bg-white/60 hover:bg-white")
				}, idx))
			})
		]
	});
}
var NOTICES = [
	{
		tag: "NEW",
		text: "Admission Open 2025-26"
	},
	{
		tag: "NEW",
		text: "Bar Council of India Approval Renewed"
	},
	{ text: "Moot Court Competition 2025" },
	{ text: "Legal Aid Camp — Ghatampur" },
	{ text: "Workshop on Cyber Law" }
];
function NoticesTicker() {
	const items = [...NOTICES, ...NOTICES];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "border-y border-border bg-secondary/70",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-page flex items-center gap-4 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "inline-flex shrink-0 items-center gap-2 rounded-md bg-navy px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-gold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Megaphone, { className: "h-3.5 w-3.5" }), "Latest Notices"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex-1 overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex min-w-max animate-[marquee_40s_linear_infinite] gap-8 whitespace-nowrap",
					children: items.map((n, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2 text-sm text-navy",
						children: [
							n.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded bg-gold/90 px-1.5 py-0.5 text-[10px] font-bold text-gold-foreground",
								children: n.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: n.text }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gold",
								children: "•"
							})
						]
					}, i))
				})
			})]
		})
	});
}
var features = [
	{
		icon: ShieldCheck,
		title: "Approved by BCI",
		text: "Recognised by the Bar Council of India with a rigorous curriculum."
	},
	{
		icon: GraduationCap,
		title: "CSJM Affiliated",
		text: "Affiliated to Chhatrapati Shahu Ji Maharaj University, Kanpur."
	},
	{
		icon: Gavel,
		title: "Moot Court Inside Campus",
		text: "A dedicated moot court room for real-world advocacy practice."
	},
	{
		icon: Library,
		title: "Rich Legal Library",
		text: "Well-stocked traditional library with online & offline databases."
	},
	{
		icon: Users,
		title: "Experienced Faculty",
		text: "LL.M, NET, Ph.D. qualified professors and senior advocates."
	},
	{
		icon: ScrollText,
		title: "100% Result",
		text: "Successfully completed one year LL.B 3 Year course with 100% result."
	}
];
var courses = [{
	title: "LL.B — 3 Year",
	tag: "Undergraduate",
	text: "Semester-based programme designed for graduates seeking a professional law degree.",
	to: "/courses"
}, {
	title: "B.A. LL.B (Hons.) — 5 Year",
	tag: "Integrated",
	text: "Five-year integrated programme combining arts foundations with legal specialisation.",
	to: "/courses"
}];
var LEADERSHIP = [
	{
		photo: chairman_default,
		name: "Mr. Manoj Bhadauria (Advocate)",
		role: "Chairman",
		eyebrow: "CHAIRMAN'S MESSAGE",
		heading: "From The Chairman's Desk",
		quote: [
			"Welcome to Shree Ram Law College. We believe that education is the ultimate cornerstone of a thriving and just society. Our mission is to cultivate minds that are not only academically proficient but deeply rooted in integrity and discipline.",
			"We are dedicated to providing a dynamic learning environment where future leaders can confidently hone their skills. With our exceptional faculty, rigorous academic standards, and modern infrastructure, we ensure that every student is equipped to navigate the complexities of the modern legal profession.",
			"We aim to empower you to seek justice, uphold the truth, and lead with purpose. Your journey towards becoming a distinguished legal professional starts here, and we are committed to supporting you every step of the way."
		]
	},
	{
		photo: manager_default,
		name: "Vijay Laxmi Singh",
		role: "Manager",
		eyebrow: "MANAGER'S MESSAGE",
		heading: "From The Manager's Desk",
		quote: [
			"Law is much more than a career path; it is a profound societal responsibility. At Shree Ram Law College, we aim to nurture individuals who view their legal education as a powerful instrument for positive community change.",
			"We focus on bridging the gap between theoretical knowledge and practical execution, ensuring our students are truly prepared for the real-world challenges of the judicial system. Our unwavering commitment is to foster an inclusive, disciplined, and forward-thinking campus culture.",
			"When you step into our college, you are stepping into a future where your knowledge and voice can champion the rights of the unheard."
		]
	},
	{
		photo: principal_default,
		name: "Shiv Pratap Singh Raghav",
		role: "Principal — M.A., LLM, M.Phil, Ph.D",
		eyebrow: "PRINCIPAL'S MESSAGE",
		heading: "From The Principal's Desk",
		quote: [
			"As the Principal of Shree Ram Law College, it is my privilege to guide our students through a rigorous, comprehensive, and transformative academic curriculum.",
			"We place a strong emphasis on critical analysis, extensive legal research, and the practical application of constitutional principles. Our core goal is to demystify complex legal frameworks and teach our students how to effectively use the law as a shield for the vulnerable.",
			"We are committed to shaping not just highly competent lawyers, but ethical advocates who will uphold the dignity of the legal system, challenge injustices, and serve our nation with unwavering pride."
		]
	}
];
function Home() {
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
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSlider, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NoticesTicker, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "border-y border-border bg-secondary/60",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-5 text-center text-sm font-medium text-navy/80",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "h-4 w-4 text-gold" }), " Approved by Bar Council of India"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden h-4 w-px bg-border sm:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "h-4 w-4 text-gold" }), " Affiliated to CSJM University, Kanpur"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hidden h-4 w-px bg-border sm:block" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-4 w-4 text-gold" }), " Part of Purshottam Shri Ram Degree College"]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					eyebrow: "Why Shree Ram Law College",
					title: "A foundation built on discipline, depth and purpose",
					subtitle: "We prepare complete professionals — grounded in ethics, sharpened by practice, and ready to serve society through law."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "group rounded-xl border border-border bg-card p-6 transition hover:-translate-y-0.5 hover:border-gold/60 hover:shadow-elegant",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "inline-flex h-11 w-11 items-center justify-center rounded-lg bg-navy text-gold",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, { className: "h-5 w-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-serif text-lg font-semibold text-navy",
								children: f.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed text-muted-foreground",
								children: f.text
							})
						]
					}, f.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-gray-50/50 section-padding py-16",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page max-w-6xl mx-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: true,
					eyebrow: "Voices",
					title: "Message from Leadership",
					subtitle: "Guiding wisdom from our Chairman, Manager & Principal."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 space-y-10",
					children: LEADERSHIP.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "bg-white rounded-[1.5rem] shadow-sm border border-gray-100 p-8 md:p-10 flex flex-col md:flex-row gap-8 lg:gap-12 transition hover:shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center w-full md:w-[260px] shrink-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "rounded-2xl border-[3px] border-[#ff7a00] p-1 mb-5 overflow-hidden w-full max-w-[220px]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										src: p.photo,
										alt: p.name,
										loading: "lazy",
										className: "w-full aspect-square object-cover object-top rounded-xl bg-gray-100"
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "text-[#990000] font-bold text-[1.1rem] text-center leading-snug",
									children: p.name
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-gray-500 text-sm text-center mt-1.5",
									children: p.role
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 flex flex-col justify-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[#ff7a00] text-xs font-extrabold uppercase tracking-widest mb-3",
									children: p.eyebrow
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-[#0b132b] text-3xl md:text-4xl font-bold mb-6 tracking-tight",
									children: p.heading
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-gray-600 text-[15px] leading-[1.8] space-y-3",
									children: p.quote.map((paragraph, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, i))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										className: "inline-flex items-center gap-1.5 text-sm font-medium text-[#db4a4a] border border-[#db4a4a]/40 rounded-full px-5 py-2 hover:bg-red-50 hover:border-[#db4a4a] transition-all duration-200",
										children: ["Read More ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { size: 16 })]
									})
								})
							]
						})]
					}, p.name))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: true,
					eyebrow: "Programmes",
					title: "Courses we offer",
					subtitle: "Semester-based curricula aligned to the Bar Council of India and CSJM University, Kanpur."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12 grid gap-6 md:grid-cols-3",
					children: courses.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: c.to,
						className: "group flex flex-col rounded-xl border border-border bg-card p-7 transition hover:-translate-y-0.5 hover:border-navy hover:shadow-elegant",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-fit rounded-full bg-secondary px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-navy",
								children: c.tag
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-4 font-serif text-2xl font-bold text-navy",
								children: c.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 flex-1 text-sm leading-relaxed text-muted-foreground",
								children: c.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy transition group-hover:gap-3 group-hover:text-gold",
								children: ["Read more ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})
						]
					}, c.title))
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "bg-navy text-navy-foreground section-padding",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page grid items-center gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold",
						children: "Campus & Practice"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 font-serif text-3xl font-bold sm:text-4xl",
						children: ["A campus that teaches law ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-gold",
							children: "the way it is practised."
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3 text-navy-foreground/85",
						children: [
							"Moot Court Room inside the college for practical training",
							"Regular court visits as part of practical training",
							"Monthly seminars, mock trials and debates",
							"Legal aid clinic and awareness programmes",
							"Computer lab and language lab for spoken English",
							"Teaching available after college hours if required"
						].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t })]
						}, t))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: moot_court_default,
							width: 1280,
							height: 960,
							loading: "lazy",
							alt: "Moot court",
							className: "col-span-2 rounded-xl object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: students_default,
							width: 1280,
							height: 960,
							loading: "lazy",
							alt: "Students",
							className: "h-full rounded-xl object-cover"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: law_books_default,
							width: 1280,
							height: 960,
							loading: "lazy",
							alt: "Library",
							className: "h-full rounded-xl object-cover"
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "section-padding",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "container-page",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative overflow-hidden rounded-2xl border border-gold/40 bg-gradient-to-br from-secondary to-background p-8 shadow-elegant sm:p-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid items-center gap-6 md:grid-cols-[1fr_auto]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-semibold uppercase tracking-[0.2em] text-gold",
								children: "Admissions Open"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-serif text-2xl font-bold text-navy sm:text-3xl",
								children: "Begin your journey in law at Shree Ram Law College"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-2 flex items-center gap-2 text-sm text-muted-foreground",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-4 w-4 text-gold" }),
									" ",
									SITE.address
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/admissions",
								className: "inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-semibold text-navy-foreground transition hover:bg-navy/90",
								children: ["Apply Now ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#contact-section",
								className: "inline-flex items-center rounded-md border border-navy/20 px-6 py-3 text-sm font-semibold text-navy transition hover:bg-secondary",
								children: "Contact Office"
							})]
						})]
					})
				})
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			id: "contact-section",
			className: "section-padding bg-secondary/30",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "container-page",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeading, {
					center: true,
					eyebrow: "Contact Us",
					title: "Get in touch with us",
					subtitle: "Reach out for admissions, campus visits, or any general query. We usually respond within a day."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12 grid gap-8 lg:grid-cols-2",
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
							className: "inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:brightness-105",
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
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "pb-20 bg-secondary/30",
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
export { Home as component };
