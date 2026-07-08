import { Megaphone } from "lucide-react";

const NOTICES = [
  { tag: "NEW", text: "Admission Open 2025-26" },
  { tag: "NEW", text: "Bar Council of India Approval Renewed" },
  { text: "Moot Court Competition 2025" },
  { text: "Legal Aid Camp — Ghatampur" },
  { text: "Workshop on Cyber Law" },
];

export function NoticesTicker() {
  const items = [...NOTICES, ...NOTICES];
  return (
    <div className="border-y border-border bg-secondary/70">
      <div className="container-page flex items-center gap-4 py-3">
        <div className="inline-flex shrink-0 items-center gap-2 rounded-md bg-navy px-3 py-1.5 text-[11px] font-bold uppercase tracking-widest text-gold">
          <Megaphone className="h-3.5 w-3.5" />
          Latest Notices
        </div>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex min-w-max animate-[marquee_40s_linear_infinite] gap-8 whitespace-nowrap">
            {items.map((n, i) => (
              <span key={i} className="inline-flex items-center gap-2 text-sm text-navy">
                {n.tag && (
                  <span className="rounded bg-gold/90 px-1.5 py-0.5 text-[10px] font-bold text-gold-foreground">
                    {n.tag}
                  </span>
                )}
                <span>{n.text}</span>
                <span className="text-gold">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
