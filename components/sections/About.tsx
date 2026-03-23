"use client";

import { motion } from "framer-motion";
import { Braces, Database, MoveLeft, Workflow } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const whyUs = [
  {
    title: "טכנולוגיה בשירות השיווק",
    text: "אנחנו מחברים בין הצד העסקי לצד הטכנולוגי: CRM, פיקסלים, אוטומציות ותשתית מדידה שמאפשרת לקבל החלטות נכונות בזמן אמת.",
    points: ["חיבור CRM ותהליכי לידים", "הטמעות פיקסלים ומעקב", "אוטומציות שחוסכות זמן ידני"],
    icon: Workflow,
  },
  {
    title: "התאמה אישית",
    text: "לא תבניות מדף. כל פתרון נבנה לפי המטרות העסקיות שלך עם קוד מותאם, חוויית משתמש מדויקת ויכולת צמיחה אמיתית.",
    points: ["קוד מותאם לפי הצורך", "ללא תבניות גנריות", "גמישות מלאה לצמיחה עתידית"],
    icon: Braces,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 lg:py-32"
      style={{ background: "linear-gradient(180deg, #F8FAFF 0%, #F9FAFB 60%, #F4F7FF 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-10 md:mb-14"
        >
          <span className="premium-badge mb-4">
            למה אנחנו
          </span>
          <h2 className="premium-title">
            יתרון ה־<span className="gradient-text">Full-Stack Developer</span>
          </h2>
          <p className="text-sm mt-3" style={{ color: "#64748B" }}>
            שילוב נדיר בין פיתוח עמוק לחשיבה שיווקית שמביא תוצאה עסקית ברורה.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="rounded-[var(--radius)] p-5 sm:p-6 md:p-8"
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, #111827 52%, #1e1b4b 100%)",
            border: "1px solid rgba(148,163,184,0.22)",
            boxShadow: "0 20px 46px rgba(15,23,42,0.22)",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {whyUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                  className="rounded-[var(--radius-soft)] p-5 md:p-6"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(148,163,184,0.22)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: "rgba(16,179,231,0.16)", border: "1px solid rgba(16,179,231,0.24)" }}
                    >
                      <Icon size={18} style={{ color: "#67e8f9" }} />
                    </div>
                    <h3 className="text-lg font-extrabold text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: "#CBD5E1" }}>
                    {item.text}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {item.points.map((point) => (
                      <li key={point} className="text-xs flex items-center gap-2" style={{ color: "#E2E8F0" }}>
                        <Database size={13} style={{ color: "#67e8f9" }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-5 rounded-[var(--radius-soft)] p-4 md:p-5 flex flex-col md:flex-row items-center md:justify-between gap-3"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(148,163,184,0.2)" }}>
            <p className="text-sm text-center md:text-right" style={{ color: "#E2E8F0" }}>
              עובדים איתכם שותף טכנולוגי אחד שמחבר שיווק, תשתיות וקוד - בלי פערים בין בעלי מקצוע.
            </p>
            <CtaButton
              className="text-sm shrink-0"
              icon={MoveLeft}
              label="לצפייה בשירותים ובמסלולים"
              href="/#services"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.55, ease: EASE }}
          className="flex flex-col items-center gap-3 mt-8 md:mt-10"
        >
          <p className="text-xs text-center" style={{ color: "#64748B" }}>
            עכשיו נראה הוכחות מהשטח דרך פרויקט אמיתי והמלצות לקוחות
          </p>
          <CtaButton
            variant="secondary"
            className="text-sm"
            icon={MoveLeft}
            label="מעבר להוכחות ותוצאות"
            href="/#proof"
          />
        </motion.div>
      </div>
    </section>
  );
}
