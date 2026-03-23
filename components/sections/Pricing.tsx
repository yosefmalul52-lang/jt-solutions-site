"use client";

import { motion } from "framer-motion";
import { Check, MoveLeft } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const tiersStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      duration: 0.6,
      ease: EASE,
    },
  },
};

const tierItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const tiers = [
  {
    id: "quick-start",
    name: "התחלה מהירה",
    subtitle: "Quick Start",
    description: "מתאים לעסק שרוצה לצאת לדרך מהר עם נכס דיגיטלי ברור וממיר.",
    items: ["מיתוג בסיסי", "דף נחיתה ממיר", "חיבור לטפסים/וואטסאפ", "השקה מהירה"],
  },
  {
    id: "growing-business",
    name: "עסק בצמיחה",
    subtitle: "Growing Business",
    description: "מעטפת מלאה לעסק שרוצה נוכחות מקצועית וצמיחה עקבית לאורך זמן.",
    items: ["מיתוג מלא", "אתר תדמית עד 10 עמודים", "אוטומציות ותשתית מדידה", "ליווי חודשי ממוקד תוצאות"],
    popular: true,
  },
  {
    id: "enterprise-smb",
    name: "Enterprise SMB",
    subtitle: "Enterprise SMB",
    description: "פתרון מתקדם לעסקים שרוצים תשתית סקייל רחבה ויכולות ניהול מתקדמות.",
    items: ["E-commerce / מערכת מורכבת", "אינטגרציות CRM מתקדמות", "תשתית אוטומציה מלאה", "ניהול שיווק ותפעול שוטף"],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-16 md:py-24 lg:py-32 section-shell"
      style={{ background: "linear-gradient(180deg, #F7FAFF 0%, #F9FAFB 56%, #F4F7FF 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-14"
        >
          <span className="premium-badge mb-4">מסלולים</span>
          <h2 className="premium-title mb-4">
            בוחרים את המסלול
            {" "}
            <span className="gradient-text">שמתאים לשלב העסק</span>
          </h2>
          <p className="premium-subtitle max-w-2xl mx-auto">
            שלוש רמות שירות ברורות, כדי לדעת בדיוק מאיפה להתחיל ולאן מתקדמים.
          </p>
        </motion.div>

        <motion.div
          variants={tiersStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-5"
        >
          {tiers.map((tier) => (
            <motion.article
              variants={tierItem}
              key={tier.id}
              className={`relative isolate rounded-[var(--radius)] p-6 bg-white/80 backdrop-blur-md border border-white/40 shadow-premium hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out ${
                tier.popular ? "ring-1 ring-violet-300/40" : ""
              }`}
              style={{
                boxShadow: tier.popular
                  ? "0 20px 40px -15px rgba(15, 23, 42, 0.07), 0 0 22px rgba(124,58,237,0.16)"
                  : "0 20px 40px -15px rgba(15, 23, 42, 0.05)",
              }}
            >
              {tier.popular && (
                <div
                  aria-hidden
                  className="absolute -inset-1 rounded-[calc(var(--radius)+4px)] pointer-events-none -z-10"
                  style={{
                    background: "linear-gradient(120deg, #10b3e7, #7c3aed)",
                    opacity: 0.18,
                    filter: "blur(14px)",
                  }}
                />
              )}

              {tier.popular && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs tracking-wider font-semibold px-3.5 py-1.5 rounded-[var(--radius-soft)]"
                  style={{ color: "#ffffff", background: "#0f172a", border: "1px solid rgba(255,255,255,0.16)" }}
                >
                  Most Popular (המסלול הנבחר)
                </span>
              )}

              <p className="text-xs font-semibold" style={{ color: "#64748B" }}>{tier.subtitle}</p>
              <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{tier.name}</h3>
              <p className="text-sm leading-relaxed mt-3" style={{ color: "#64748B" }}>{tier.description}</p>

              <ul className="mt-5 space-y-2.5">
                {tier.items.map((item) => (
                  <li key={item} className="text-sm flex items-start gap-2.5" style={{ color: "#475569" }}>
                    <Check size={15} className="shrink-0 mt-0.5" style={{ color: "#4f46e5" }} />
                    {item}
                  </li>
                ))}
              </ul>

              <CtaButton
                className="mt-6 w-full"
                icon={MoveLeft}
                label="בחר תוכנית"
                href="/#contact"
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
