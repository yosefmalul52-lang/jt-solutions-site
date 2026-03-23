"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon } from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const techChips = ["Next.js", "Node.js", "Custom Dashboard", "Automations"];

export default function CaseStudy() {
  return (
    <section
      id="case-study"
      className="py-16 md:py-24 lg:py-32 section-shell"
      style={{ background: "linear-gradient(180deg, #F8FAFF 0%, #F9FAFB 65%, #F6F8FF 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.6fr_0.4fr] gap-8 md:gap-10 items-center" dir="ltr">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, ease: EASE }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 rounded-3xl aspect-[4/3] shadow-premium flex items-center justify-center border border-white/40">
              <div className="flex flex-col items-center gap-3 text-center px-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.72)", border: "1px solid rgba(148,163,184,0.28)" }}
                >
                  <ImageIcon size={24} style={{ color: "#64748B" }} />
                </div>
                <p className="text-xs sm:text-sm font-medium" style={{ color: "#64748B" }}>
                  אזור מוקאפ מוכן לתמונת פלטפורמת מגדים באיכות גבוהה
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.65, delay: 0.05, ease: EASE }}
            className="order-1 lg:order-2 text-right"
            dir="rtl"
          >
            <span
              className="inline-flex px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4"
              style={{
                color: "#0F172A",
                background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(148,163,184,0.26)",
                backdropFilter: "blur(6px)",
              }}
            >
              מקרה בוחן: איקומרס ואוטומציה
            </span>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight text-slate-900">
              מגדים קייטרינג: מניהול ידני למערכת הזמנות ולוגיסטיקה אוטומטית
            </h2>

            <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed" style={{ color: "#475569" }}>
              <p>
                <strong className="text-slate-900">האתגר:</strong> העסק התבסס על תיאום ידני, מעקב מבוזר וחוסר שקיפות בתהליך ההזמנה,
                מה שיצר עומס תפעולי והאט את קצב המכירה.
              </p>
              <p>
                <strong className="text-slate-900">הפתרון הטכנולוגי:</strong> פיתחנו מערכת מלאה עם Frontend מותאם לקהל היעד, Backend
                לניהול הזמנות דרך דשבורד אדמין ייעודי, ואוטומציות ללוגיסטיקת משלוחים שמפחיתות עבודה ידנית.
              </p>
              <p>
                <strong className="text-slate-900">התוצאה:</strong> מעבר לתהליך עבודה רציף ומדיד, שיפור מהירות התפעול, וחוויית הזמנה
                מקצועית שמאפשרת לעסק לצמוח בלי עומס מיותר.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2.5 justify-end">
              {techChips.map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 text-xs font-semibold rounded-full"
                  style={{
                    color: "#334155",
                    background: "rgba(255,255,255,0.68)",
                    border: "1px solid rgba(148,163,184,0.24)",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
