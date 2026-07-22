// import { createFileRoute, Link } from "@tanstack/react-router";
// import { useState } from "react";
// import { PageHero } from "../components/PageHero";
// import { GraduationCap, Lock, User } from "lucide-react";

// export const Route = createFileRoute("/login/student")({
//   head: () => ({
//     meta: [
//       { title: "Student Login | Shree Ram Law College" },
//       {
//         name: "description",
//         content:
//           "Student portal login for Shree Ram Law College — access your attendance, notes and results.",
//       },
//     ],
//   }),
//   component: StudentLogin,
// });

// function StudentLogin() {
//   const [form, setForm] = useState({ id: "", password: "" });
//   const [msg, setMsg] = useState("");

//   return (
//     <>
//       <PageHero
//         eyebrow="Student Portal"
//         title="Student Login"
//         subtitle="Access your academic dashboard, notes, notices and results."
//       />
//       <section className="section-padding">
//         <div className="container-page grid gap-10 lg:grid-cols-2">
//           <div className="rounded-2xl border border-gold/40 bg-navy p-8 text-navy-foreground">
//             <GraduationCap className="h-10 w-10 text-gold" />
//             <h2 className="mt-4 font-serif text-2xl font-bold">Welcome, student.</h2>
//             <p className="mt-3 text-sm text-navy-foreground/85">
//               Log in with the enrolment ID and password issued by the college
//               administration. If you have forgotten your credentials, please
//               contact the office.
//             </p>
//             <ul className="mt-6 space-y-2 text-sm text-navy-foreground/85">
//               <li>• Class schedule &amp; attendance</li>
//               <li>• Study material and moot court notes</li>
//               <li>• Internal test results &amp; notices</li>
//             </ul>
//             <p className="mt-6 text-xs text-navy-foreground/60">
//               New here?{" "}
//               <Link to="/admissions" className="text-gold underline">
//                 Apply for admission
//               </Link>
//             </p>
//           </div>

//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               setMsg(
//                 "Portal login is not active yet. Please contact the college office for access.",
//               );
//             }}
//             className="rounded-2xl border border-border bg-card p-6 shadow-elegant"
//           >
//             <h3 className="font-serif text-2xl font-bold text-navy">Sign in</h3>

//             <div className="mt-5 space-y-4">
//               <div>
//                 <label className="text-xs font-semibold uppercase tracking-widest text-navy">
//                   Enrolment ID
//                 </label>
//                 <div className="mt-1 flex items-center rounded-md border border-input bg-background px-3">
//                   <User className="h-4 w-4 text-muted-foreground" />
//                   <input
//                     required
//                     value={form.id}
//                     onChange={(e) => setForm({ ...form, id: e.target.value })}
//                     className="ml-2 w-full bg-transparent py-2.5 text-sm outline-none"
//                     placeholder="e.g. LLB2025-014"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="text-xs font-semibold uppercase tracking-widest text-navy">
//                   Password
//                 </label>
//                 <div className="mt-1 flex items-center rounded-md border border-input bg-background px-3">
//                   <Lock className="h-4 w-4 text-muted-foreground" />
//                   <input
//                     required
//                     type="password"
//                     value={form.password}
//                     onChange={(e) => setForm({ ...form, password: e.target.value })}
//                     className="ml-2 w-full bg-transparent py-2.5 text-sm outline-none"
//                     placeholder="••••••••"
//                   />
//                 </div>
//               </div>
//               <button
//                 type="submit"
//                 className="inline-flex w-full items-center justify-center rounded-md bg-navy px-4 py-3 text-sm font-semibold text-navy-foreground transition hover:bg-navy/90"
//               >
//                 Sign in
//               </button>
//               {msg && (
//                 <p className="rounded-md bg-secondary p-3 text-xs text-muted-foreground">
//                   {msg}
//                 </p>
//               )}
//               <div className="text-center text-xs text-muted-foreground">
//                 Are you a faculty member?{" "}
//                 <Link to="/login/teacher" className="text-navy underline">
//                   Teacher login/Admin login
//                 </Link>
//               </div>
//             </div>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// }
