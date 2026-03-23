"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  FileText,
  Megaphone,
  Palette,
  Share2,
  ShieldCheck,
  ShoppingCart,
  MoveLeft,
} from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const timelineStagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      duration: 0.6,
      ease: EASE,
    },
  },
};

const phaseItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

const phases = [
  {
    id: "phase-a",
    step: "A",
    title: "שלב ההקמה: מיתוג ונוכחות",
    summary: "בשלב הזה בונים את היסודות שמציגים את העסק בצורה מקצועית ומדויקת.",
    services: [
      { title: "חבילת מיתוג", href: "/services/branding", icon: Palette },
      { title: "דף נחיתה", href: "/services/landing-pages", icon: FileText },
    ],
  },
  {
    id: "phase-b",
    step: "B",
    title: "שלב הגדילה: הנכסים הדיגיטליים",
    summary: "כאן בונים את הנכסים המרכזיים שיתמכו בצמיחה וייצרו אמון ומכירה.",
    services: [
      { title: "אתר תדמית (עד 10 עמודים)", href: "/services/business-websites", icon: Building2 },
      { title: "חנות איקומרס", href: "/services/ecommerce", icon: ShoppingCart },
    ],
  },
  {
    id: "phase-c",
    step: "C",
    title: "שלב הניהול והפריצה: שיווק ותחזוקה",
    summary: "אחרי ההקמה, מפעילים שיווק מתמשך ומחזיקים את המערכת יציבה ומתקדמת.",
    services: [
      { title: "ניהול קמפיינים", href: "/services/ad-infrastructure", icon: Megaphone },
      { title: "ניהול רשתות חברתיות", href: "/#contact", icon: Share2 },
      { title: "תחזוקה ושקט נפשי", href: "/#contact", icon: ShieldCheck },
    ],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 lg:py-32 section-shell"
      style={{ background: "linear-gradient(180deg, #F9FAFB 0%, #F5F7FF 58%, #F7F9FF 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-16"
        >
          <span className="premium-badge mb-4">
            מה אנחנו מציעים
          </span>
          <h2 className="premium-title mb-4">
            <span className="gradient-text">מסלול צמיחה</span> בשלושה שלבים
          </h2>
          <p className="premium-subtitle max-w-2xl mx-auto">
            במקום אוסף שירותים - תהליך ברור שמוביל מהקמה ועד מכירות שוטפות.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="relative"
        >
          <div
            aria-hidden
            className="hidden lg:block absolute top-[38px] left-[16.5%] right-[16.5%] h-px"
            style={{ background: "linear-gradient(90deg, rgba(16,179,231,0.2), rgba(124,58,237,0.24), rgba(16,179,231,0.2))" }}
          />

          <motion.div
            variants={timelineStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-6"
          >
            {phases.map((phase) => (
              <motion.article
                variants={phaseItem}
                key={phase.id}
                className="relative rounded-[var(--radius)] p-5 sm:p-6 bg-white/80 backdrop-blur-md border border-white/40 shadow-premium hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-[var(--radius-soft)] flex items-center justify-center text-sm font-extrabold"
                    style={{
                      color: "#4f46e5",
                      background: "rgba(79,70,229,0.08)",
                      border: "1px solid rgba(79,70,229,0.2)",
                    }}
                  >
                    {phase.step}
                  </div>
                  <p className="text-sm font-semibold" style={{ color: "#4f46e5" }}>
                    שלב {phase.step}
                  </p>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 leading-snug">{phase.title}</h3>
                <p className="text-sm mt-2 leading-relaxed" style={{ color: "#64748B" }}>
                  {phase.summary}
                </p>

                <div className="mt-5 space-y-3">
                  {phase.services.map((service) => {
                    const Icon = service.icon;
                    return (
                      <Link
                        key={service.title}
                        href={service.href}
                        className="group flex items-center justify-between rounded-[var(--radius-soft)] px-3.5 py-3 bg-white/70 backdrop-blur-md border border-white/40 shadow-premium hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out"
                      >
                        <div className="flex items-center gap-2.5">
                          <div
                            className="w-8 h-8 rounded-[12px] flex items-center justify-center"
                            style={{ background: "rgba(79,70,229,0.08)", border: "1px solid rgba(79,70,229,0.14)" }}
                          >
                            <Icon size={16} style={{ color: "#4f46e5" }} />
                          </div>
                          <span className="text-sm font-semibold text-slate-800">{service.title}</span>
                        </div>
                        <ArrowLeft
                          size={15}
                          className="scale-x-[-1] transition-transform duration-200 group-hover:-translate-x-0.5"
                          style={{ color: "#64748B" }}
                        />
                      </Link>
                    );
                  })}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-8 rounded-[var(--radius)] p-6 sm:p-8 bg-white/90 backdrop-blur-md border border-white/40 shadow-premium"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(16,179,231,0.06), rgba(124,58,237,0.06), rgba(255,255,255,0.86))",
          }}
        >
          <div className="text-xs font-semibold mb-2" style={{ color: "#4f46e5" }}>מעטפת Growth מלאה</div>
          <h3 className="text-2xl font-extrabold text-gray-900">רוצים שננהל את זה יחד איתכם מקצה לקצה?</h3>
          <p className="text-sm sm:text-base mt-2 leading-relaxed" style={{ color: "#4B5563" }}>
            בשיחת התאמה קצרה נגדיר איפה אתם נמצאים עכשיו, ונבנה מסלול ברור לפי שלב העסק - הקמה, גדילה או פריצה.
          </p>
          <CtaButton
            className="mt-5"
            icon={MoveLeft}
            label="קובעים שיחת התאמה"
            href="/#contact"
          />
          <p className="text-xs mt-4" style={{ color: "#64748B" }}>
            שלב אחר שלב - עם אחריות מלאה על התוצאה
          </p>
        </motion.div>
      </div>
    </section>
  );
}
