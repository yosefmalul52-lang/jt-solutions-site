"use client";

import { motion } from "framer-motion";
import { CheckCircle, MoveLeft } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const heroStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      duration: 0.6,
      ease: EASE,
    },
  },
};
const heroItemUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const trustItems = [
  { text: "מענה אישי תוך 24 שעות" },
  { text: "ליווי ישיר 1:1" },
  { text: "תהליך ברור מהיום הראשון" },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative -mt-[90px] sm:-mt-[102px] pt-[90px] sm:pt-[102px] min-h-screen flex flex-col items-center justify-center overflow-hidden section-shell"
      style={{ background: "linear-gradient(180deg, #F7F9FF 0%, #F9FAFB 70%, #F4F7FF 100%)" }}
    >
      <div
        aria-hidden
        className="absolute top-[10%] right-[6%] w-72 h-72 rounded-full pointer-events-none"
        style={{ background: "rgba(91,33,182,0.2)", filter: "blur(54px)" }}
      />
      <div
        aria-hidden
        className="absolute bottom-[12%] left-[4%] w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "rgba(16,179,231,0.18)", filter: "blur(58px)" }}
      />
      <div
        aria-hidden
        className="absolute top-[28%] left-[12%] w-52 h-52 rounded-full pointer-events-none"
        style={{ background: "rgba(124,58,237,0.13)", filter: "blur(40px)" }}
      />
      <div
        aria-hidden
        className="absolute bottom-[26%] right-[16%] w-48 h-48 rounded-full pointer-events-none"
        style={{ background: "rgba(56,189,248,0.13)", filter: "blur(38px)" }}
      />
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-24 lg:py-32">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-[0.9fr_1.1fr] items-center gap-10 md:gap-14"
          dir="ltr"
        >
          <motion.div variants={heroItemUp} className="order-2 md:order-1">
            <div className="relative px-1 sm:px-2 py-2" dir="rtl">
              <div
                aria-hidden
                className="absolute -top-8 right-8 w-28 h-28 rounded-full pointer-events-none"
                style={{ background: "rgba(124,58,237,0.12)", filter: "blur(34px)" }}
              />
              <div
                aria-hidden
                className="absolute -bottom-6 left-6 w-32 h-32 rounded-full pointer-events-none"
                style={{ background: "rgba(16,179,231,0.12)", filter: "blur(34px)" }}
              />

              <div className="relative z-10 mb-3 text-right">
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-semibold px-2 py-1 rounded-full"
                    style={{ color: "#0369A1", background: "rgba(14,165,233,0.12)", border: "1px solid rgba(14,165,233,0.2)" }}
                  >
                    LIVE
                  </span>
                  <div className="text-[11px] font-semibold" style={{ color: "#475569" }}>
                    לוח צמיחה עסקית
                  </div>
                </div>
                <p className="text-[11px] mt-1.5" style={{ color: "#64748B" }}>
                  קצב עלייה עקבי בפניות ובהמרות לאורך 4 חודשי עבודה
                </p>
              </div>

              <div className="relative z-10 h-60 md:h-64">
                <svg viewBox="0 0 360 220" className="w-full h-full" preserveAspectRatio="none" aria-hidden>
                  <defs>
                    <linearGradient id="heroLineRtl" x1="100%" y1="0%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#10b3e7" />
                      <stop offset="100%" stopColor="#7c3aed" />
                    </linearGradient>
                    <linearGradient id="heroAreaRtl" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#10b3e7" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.04" />
                    </linearGradient>
                  </defs>

                  <path d="M20 176 L340 176" stroke="rgba(100,116,139,0.24)" strokeWidth="1.2" />
                  <path d="M20 136 L340 136" stroke="rgba(100,116,139,0.16)" strokeWidth="1" />
                  <path d="M20 96 L340 96" stroke="rgba(100,116,139,0.12)" strokeWidth="1" />
                  <path d="M20 56 L340 56" stroke="rgba(100,116,139,0.1)" strokeWidth="1" />

                  <text x="348" y="58" fontSize="9.5" textAnchor="end" fill="#64748B">גבוה</text>
                  <text x="348" y="178" fontSize="9.5" textAnchor="end" fill="#64748B">נמוך</text>

                  <path
                    d="M340 170 C316 164, 294 151, 268 138 C238 123, 214 115, 184 106 C150 96, 118 76, 84 62 C58 51, 36 42, 20 34 L20 176 L340 176 Z"
                    fill="url(#heroAreaRtl)"
                  />
                  <path
                    d="M340 170 C316 164, 294 151, 268 138 C238 123, 214 115, 184 106 C150 96, 118 76, 84 62 C58 51, 36 42, 20 34"
                    fill="none"
                    stroke="url(#heroLineRtl)"
                    strokeWidth="3.8"
                    strokeLinecap="round"
                    style={{ filter: "drop-shadow(0 6px 10px rgba(124,58,237,0.2))" }}
                  />

                  {[
                    { x: 268, y: 138 },
                    { x: 184, y: 106 },
                    { x: 84, y: 62 },
                    { x: 20, y: 34 },
                  ].map((point, idx) => (
                    <circle
                      key={idx}
                      cx={point.x}
                      cy={point.y}
                      r="5.2"
                      fill="#ffffff"
                      stroke="#7c3aed"
                      strokeWidth="2"
                    />
                  ))}
                </svg>
              </div>

              <div className="relative z-10 mt-0.5 h-5 text-[10px] font-semibold" style={{ color: "#64748B" }}>
                {[
                  { label: "חודש 1", x: 332 },
                  { label: "חודש 2", x: 244 },
                  { label: "חודש 3", x: 136 },
                  { label: "חודש 4", x: 28 },
                ].map((month) => (
                  <span
                    key={month.label}
                    className="absolute -translate-x-1/2 whitespace-nowrap"
                    style={{ left: `${(month.x / 360) * 100}%` }}
                  >
                    {month.label}
                  </span>
                ))}
              </div>

              <div className="relative z-10 mt-3 grid grid-cols-3 gap-2.5" dir="rtl">
                {[
                  { label: "פניות", value: "+62%" },
                  { label: "המרה", value: "4.8x" },
                  { label: "ROI", value: "+189%" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-xl px-3 py-2.5 text-right"
                    style={{ background: "rgba(255,255,255,0.74)", border: "1px solid rgba(148,163,184,0.16)" }}
                  >
                    <div className="text-[10px] font-semibold" style={{ color: "#64748B" }}>
                      {metric.label}
                    </div>
                    <div className="text-sm font-extrabold mt-1" style={{ color: "#0F172A" }}>
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative z-10 mt-3 text-[11px]" style={{ color: "#64748B" }}>
                צמיחה עקבית לאורך זמן עם תהליך מדיד וברור
              </div>
            </div>
          </motion.div>

          <div className="order-1 md:order-2 text-center md:text-right" dir="rtl">
            <motion.h1
              variants={heroItemUp}
              className="display-title max-w-4xl mx-auto lg:mx-0"
            >
              פתרונות דיגיטל מקצה לקצה:{" "}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b3e7] to-[#7c3aed]"
              >
                מהמיתוג ועד המכירה הראשונה
              </span>
              .
            </motion.h1>

            <motion.h2
              variants={heroItemUp}
              className="max-w-3xl mx-auto lg:mx-0 text-lg sm:text-2xl font-medium leading-relaxed mt-6"
              style={{ color: "#6B7280" }}
            >
              בונים עבורך את התשתית הטכנולוגית שתעבוד בשבילך – אפיון חכם, עיצוב מנצח ואוטומציות שחוסכות זמן.
            </motion.h2>

            <motion.div variants={heroItemUp} className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 mt-8">
              <CtaButton
                id="hero-main-cta"
                onClick={() => scrollTo("#contact")}
                icon={MoveLeft}
                label="אני רוצה אבחון לעסק שלי"
              />
              <CtaButton
                onClick={() => scrollTo("#services")}
                icon={MoveLeft}
                variant="secondary"
                label="איך זה עובד?"
              />
            </motion.div>

            <motion.div variants={heroItemUp} className="mt-5 flex flex-wrap items-center justify-center md:justify-start gap-2.5">
              {trustItems.map((item) => {
                return (
                <span
                  key={item.text}
                  className="text-xs font-semibold px-3 py-1.5 rounded-[var(--radius-soft)] inline-flex items-center gap-1.5 border border-gray-200 bg-white"
                  style={{
                    color: "#475569",
                    boxShadow: "0 2px 8px rgba(15,23,42,0.04)",
                  }}
                >
                  <CheckCircle className="h-4 w-4" style={{ color: "#4f46e5" }} />
                  {item.text}
                </span>
              );
            })}
            </motion.div>

            <motion.p variants={heroItemUp} className="text-sm mt-4" style={{ color: "#64748B" }}>
              בשיחת התאמה של כ-15 דקות תקבלו החלטה ברורה מה הצעד הבא לעסק שלכם.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
