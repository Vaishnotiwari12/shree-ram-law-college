import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "../components/PageHero";
import { Briefcase, Lock, User } from "lucide-react";

export const Route = createFileRoute("/login/teacher")({
  head: () => ({
    meta: [
      { title: "Teacher Login | Shree Ram Law College" },
      {
        name: "description",
        content:
          "Faculty portal login for Shree Ram Law College — manage classes, attendance and student records.",
      },
    ],
  }),
  component: TeacherLogin,
});

function TeacherLogin() {
  const [form, setForm] = useState({ id: "", password: "" });
  const [msg, setMsg] = useState("");

  return (
    <>
      <PageHero
        eyebrow="Faculty Portal"
        title="Teacher Login"
        subtitle="Manage classes, upload notes, mark attendance and share results with students."
      />
      <section className="section-padding">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-gold/40 bg-navy p-8 text-navy-foreground">
            <Briefcase className="h-10 w-10 text-gold" />
            <h2 className="mt-4 font-serif text-2xl font-bold">
              Welcome, faculty member.
            </h2>
            <p className="mt-3 text-sm text-navy-foreground/85">
              Log in with the faculty ID and password issued by the
              administration to access the teacher dashboard.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-navy-foreground/85">
              <li>• Mark daily attendance</li>
              <li>• Upload notes, syllabus &amp; moot briefs</li>
              <li>• Publish internal test results</li>
            </ul>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setMsg(
                "Faculty portal is not active yet. Please contact the Principal's office for access.",
              );
            }}
            className="rounded-2xl border border-border bg-card p-6 shadow-elegant"
          >
            <h3 className="font-serif text-2xl font-bold text-navy">Sign in</h3>

            <div className="mt-5 space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-navy">
                  Faculty ID
                </label>
                <div className="mt-1 flex items-center rounded-md border border-input bg-background px-3">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <input
                    required
                    value={form.id}
                    onChange={(e) => setForm({ ...form, id: e.target.value })}
                    className="ml-2 w-full bg-transparent py-2.5 text-sm outline-none"
                    placeholder="e.g. FAC-2024-07"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-widest text-navy">
                  Password
                </label>
                <div className="mt-1 flex items-center rounded-md border border-input bg-background px-3">
                  <Lock className="h-4 w-4 text-muted-foreground" />
                  <input
                    required
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="ml-2 w-full bg-transparent py-2.5 text-sm outline-none"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-md bg-navy px-4 py-3 text-sm font-semibold text-navy-foreground transition hover:bg-navy/90"
              >
                Sign in
              </button>
              {msg && (
                <p className="rounded-md bg-secondary p-3 text-xs text-muted-foreground">
                  {msg}
                </p>
              )}
              <div className="text-center text-xs text-muted-foreground">
                Are you a student?{" "}
                <Link to="/login/student" className="text-navy underline">
                  Student login
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
