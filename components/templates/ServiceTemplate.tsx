import { type LucideIcon } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export interface ServiceDeliverableItem {
  icon: LucideIcon;
  text: string;
}

export interface ServiceFaqItem {
  question: string;
  answer: string;
}

export interface ServiceTemplateProps {
  title: string;
  badge: string;
  description: string;
  targetAudience: string[];
  deliverables: ServiceDeliverableItem[];
  timeframe: string;
  faq?: ServiceFaqItem[];
}

export default function ServiceTemplate({
  title,
  badge,
  description,
  targetAudience,
  deliverables,
  timeframe,
  faq,
}: ServiceTemplateProps) {
  return (
    <div className="bg-[#F9FAFB]">
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span
            className="inline-flex p-[1px] rounded-full mb-5"
            style={{ background: "var(--gradient-cta)" }}
          >
            <span className="inline-flex px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/85 backdrop-blur-md text-slate-700">
              {badge}
            </span>
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900 max-w-4xl mx-auto">
            {title}
          </h1>
          <p className="text-base sm:text-lg leading-[1.7] text-slate-500 max-w-3xl mx-auto mt-6">
            {description}
          </p>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-5">
            <article className="rounded-[var(--radius)] p-6 bg-white/70 backdrop-blur-md border border-white/40 shadow-premium">
              <h2 className="text-xl font-extrabold tracking-tight leading-tight text-slate-900 mb-4">למי זה מתאים</h2>
              <ul className="space-y-2.5">
                {targetAudience.map((point) => (
                  <li key={point} className="text-sm leading-[1.7] text-slate-500">
                    • {point}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[var(--radius)] p-6 bg-white/70 backdrop-blur-md border border-white/40 shadow-premium">
              <h2 className="text-xl font-extrabold tracking-tight leading-tight text-slate-900 mb-3">זמן עבודה</h2>
              <p className="text-sm leading-[1.7] text-slate-500">{timeframe}</p>
            </article>
          </div>

          <article className="rounded-[var(--radius)] p-6 bg-white/70 backdrop-blur-md border border-white/40 shadow-premium">
            <h2 className="text-xl font-extrabold tracking-tight leading-tight text-slate-900 mb-4">מה מקבלים בפועל</h2>
            <ul className="space-y-3">
              {deliverables.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.text} className="flex items-start gap-3">
                    <div
                      className="w-9 h-9 rounded-[var(--radius-soft)] flex items-center justify-center shrink-0"
                      style={{ background: "rgba(79,70,229,0.1)", border: "1px solid rgba(79,70,229,0.18)" }}
                    >
                      <Icon size={16} style={{ color: "#4f46e5" }} />
                    </div>
                    <span className="text-sm leading-[1.7] text-slate-500">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </article>
        </div>
      </section>

      {faq && faq.length > 0 && (
        <section className="pb-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-[var(--radius)] p-6 bg-white/70 backdrop-blur-md border border-white/40 shadow-premium">
              <h2 className="text-2xl font-extrabold tracking-tight leading-tight text-slate-900 mb-5 text-center">שאלות נפוצות</h2>
              <div className="space-y-3">
                {faq.map((item) => (
                  <article
                    key={item.question}
                    className="rounded-[var(--radius-soft)] px-4 py-3 bg-white/70 backdrop-blur-md border border-white/40"
                  >
                    <h3 className="text-sm font-semibold text-slate-900">{item.question}</h3>
                    <p className="text-sm leading-[1.7] text-slate-500 mt-1.5">{item.answer}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="pb-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-[var(--radius)] p-8 sm:p-10 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(15,23,42,0.95), rgba(30,41,59,0.95))",
              border: "1px solid rgba(148,163,184,0.22)",
              boxShadow: "0 20px 46px rgba(15,23,42,0.24)",
            }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-white mb-3">מוכן להתחיל?</h2>
            <p className="text-sm sm:text-base leading-[1.7] mb-6" style={{ color: "#CBD5E1" }}>
              בשיחה קצרה נמפה את הצרכים ונמליץ על המסלול המדויק לעסק שלך.
            </p>
            <div className="flex justify-center">
              <CtaButton>אני רוצה אבחון לעסק שלי</CtaButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
