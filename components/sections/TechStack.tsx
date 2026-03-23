"use client";

import { motion } from "framer-motion";
import { MoveLeft } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const retainers = [
  {
    title: "ניהול קמפיינים ממומנים",
    text: "אופטימיזציה שבועית, A/B Testing למודעות ודוח ביצועים חודשי.",
  },
  {
    title: "ניהול רשתות חברתיות",
    text: "גאנט תוכן חודשי (10 פוסטים/סטוריז), עיצוב גרפי, קופי ותזמון.",
  },
  {
    title: "תחזוקת אתר ואחסון",
    text: "אחסון פרימיום, גיבויים יומיים, עדכוני אבטחה ותוספים.",
  },
];

export default function TechStack() {
  return (
    <section
      id="tech-stack"
      className="py-16 md:py-24 lg:py-32 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F5F7FF 0%, #F9FAFB 58%, #F1F5FF 100%)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="text-center mb-16"
        >
          <span className="premium-badge mb-4">
            ליווי שוטף
          </span>
          <h2 className="premium-title mb-4">
            העסק לא נעצר אחרי העלייה לאוויר
          </h2>
          <p className="premium-subtitle max-w-3xl mx-auto">
            ליווי שוטף וניהול קמפיינים: אנחנו דואגים שהאתר ימשיך לעבוד בשבילכם עם אופטימיזציה שבועית, ניהול רשתות חברתיות ותחזוקה טכנית מלאה.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {retainers.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.08 * i, ease: EASE }}
              className="rounded-[28px] p-6 border border-white/80"
              style={{ background: "rgba(255,255,255,0.84)", boxShadow: "0 16px 38px rgba(15,23,42,0.08)" }}
            >
              <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
              <p className="text-sm leading-relaxed mt-2" style={{ color: "#6B7280" }}>{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, ease: EASE }}
          className="mt-10 flex flex-col items-center gap-3"
        >
          <CtaButton icon={MoveLeft} label="קובעים שיחת התאמה" href="/#contact" />
          <p className="text-xs text-center" style={{ color: "#64748B" }}>
            נשאר רק צעד אחד: להשאיר פרטים ולקבל מפת דרך לעסק שלך
          </p>
        </motion.div>
      </div>
    </section>
  );
}
