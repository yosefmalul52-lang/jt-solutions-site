"use client";

import { motion } from "framer-motion";
import { BarChart3, Clock3, Image as ImageIcon, MoveLeft, ShieldCheck } from "lucide-react";
import CtaButton from "@/components/ui/CtaButton";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const pillars = [
  {
    icon: BarChart3,
    title: "תוצאות מדודות",
    text: "כל החלטה מבוססת נתונים ברורים ולא תחושות בטן.",
  },
  {
    icon: Clock3,
    title: "זמינות גבוהה",
    text: "מענה מהיר ועדכונים שוטפים לאורך כל התהליך.",
  },
  {
    icon: ShieldCheck,
    title: "ליווי אחראי",
    text: "שותף אחד שמחזיק את התמונה המלאה מקצה לקצה.",
  },
];

const trustStats = [
  { value: "50+", label: "פרויקטים שעלו לאוויר", sub: "בסטנדרט גבוה" },
  { value: "24h", label: "מענה אישי ראשוני", sub: "בימי עסקים" },
  { value: "1:1", label: "ליווי ישיר מול יוסף", sub: "ללא תיווך" },
];

const testimonials = [
  {
    quote:
      "השירות האישי הורגש מהשיחה הראשונה. קיבלנו זמינות גבוהה, פתרונות מהירים וביצוע מדויק בלי לרדוף אחרי כמה ספקים במקביל.",
    name: "אורי כהן",
    role: "בעלים, חנות איקומרס",
  },
  {
    quote:
      "המעבר היה מהיר וחלק - מתהליך ידני למערכת מסודרת. זמן הטיפול ירד משמעותית והלקוחות מרגישים את הרמה המקצועית מיד.",
    name: "מיכל לוי",
    role: "מנכ\"לית, עסק לשירותי מזון",
  },
  {
    quote:
      "יש כאן שילוב חזק של מומחיות טכנית עם הבנה שיווקית. כל החלטה קודמה עם חשיבה עסקית ותוצאה שמורגשת בשטח.",
    name: "דניאל פרץ",
    role: "מנהל שיווק, חברת שירותים",
  },
  {
    quote:
      "הזמינות והאחריות היו יוצאות דופן. כל שאלה קיבלה מענה מהיר, והפרויקט התקדם בקצב גבוה עם שקיפות מלאה לכל אורך הדרך.",
    name: "נועה אברג'יל",
    role: "בעלים, סטודיו לעיצוב",
  },
  {
    quote:
      "מה שאהבנו במיוחד זה היכולת לקחת מורכבות טכנולוגית ולהפוך אותה למערכת פשוטה לתפעול יומיומי. מקצוענות ברמה גבוהה מאוד.",
    name: "רועי חדד",
    role: "שותף, מותג קמעונאות דיגיטלית",
  },
];

const techChips = ["Next.js", "Node.js", "Custom Dashboard", "Automations"];

export default function Proof() {
  return (
    <section
      id="proof"
      className="py-16 md:py-24 lg:py-32 section-shell"
      style={{ background: "linear-gradient(180deg, #F8FAFF 0%, #F9FAFB 55%, #F6F8FF 100%)" }}
    >
      <div
        aria-hidden
        className="absolute top-10 right-[8%] w-36 h-36 rounded-full pointer-events-none"
        style={{ background: "rgba(91,33,182,0.07)", filter: "blur(36px)" }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.65, ease: EASE }}
          className="text-center mb-14"
        >
          <span className="premium-badge mb-4">
            למה בוחרים בנו
          </span>
          <h2 className="premium-title">
            אתר שנראה מעולה.
            <br />
            <span className="gradient-text">וחשוב יותר — עובד מעולה.</span>
          </h2>
          <p className="text-sm mt-4" style={{ color: "#64748B" }}>
            פחות ניחושים, יותר תהליך מסודר שמוביל לפניות איכותיות.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-5">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-70px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
                className="p-5 md:p-6 flex-1 bg-white/80 backdrop-blur-md border border-white/40 shadow-premium hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out rounded-[var(--radius)]"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(79,70,229,0.08)", border: "1px solid rgba(79,70,229,0.15)" }}
                  >
                    <Icon size={18} style={{ color: "#4f46e5" }} />
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-slate-900">{pillar.title}</h3>
                    <p className="text-sm leading-relaxed mt-1" style={{ color: "#64748B" }}>
                      {pillar.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-10 rounded-[var(--radius)] p-6 sm:p-8 bg-white/90 backdrop-blur-md border border-white/40 shadow-premium"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.88), rgba(248,250,252,0.9))",
          }}
        >
          <div className="text-center mb-7">
            <p className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#64748B" }}>
              נתוני אמון
            </p>
            <p className="text-sm mt-2" style={{ color: "#475569" }}>
              אינדיקציות עבודה עקביות שמבוססות על תהליך מסודר
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 text-center rounded-[var(--radius-soft)] overflow-hidden border border-white/40 divide-y sm:divide-y-0 sm:divide-x divide-white/40 bg-white/70 backdrop-blur-md">
            {trustStats.map((stat) => (
              <div
                key={stat.label}
                className="py-5 px-4 bg-white"
              >
                <div className="text-3xl font-extrabold tracking-tight text-slate-900">{stat.value}</div>
                <div className="text-xs mt-1 font-semibold" style={{ color: "#334155" }}>{stat.label}</div>
                <div className="text-[11px] mt-1" style={{ color: "#64748B" }}>{stat.sub}</div>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col items-center gap-3">
            <CtaButton icon={MoveLeft} label="המשך להכיר את הדרך שבה אנחנו עובדים" href="/#about" />
            <p className="text-xs text-center" style={{ color: "#64748B" }}>
              מאחורי התהליך עומד שותף אחד שמוביל את הכל מקצה לקצה
            </p>
          </div>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-8 rounded-[var(--radius)] p-6 sm:p-8 bg-white/90 backdrop-blur-md border border-white/40 shadow-premium"
          style={{
            backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.88), rgba(248,250,252,0.9))",
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[0.6fr_0.4fr] gap-8 md:gap-10 items-center" dir="ltr">
            <div className="order-2 lg:order-1">
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
            </div>

            <div className="order-1 lg:order-2 text-right" dir="rtl">
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

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight text-slate-900">
                מגדים קייטרינג: מניהול ידני למערכת הזמנות ולוגיסטיקה אוטומטית
              </h3>

              <div className="mt-5 space-y-3.5 text-sm sm:text-base leading-relaxed" style={{ color: "#475569" }}>
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

              <div className="mt-5 flex flex-wrap gap-2.5 justify-end">
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
            </div>
          </div>
        </motion.article>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mt-8"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight text-slate-900 text-center mb-6">
            מה אומרים העסקים שעשו את הקפיצה?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5" dir="rtl">
            {testimonials.map((item, index) => (
              <article
                key={`${item.name}-${index}`}
                className="rounded-[var(--radius)] p-5 sm:p-6 bg-white/70 backdrop-blur-md border border-white/40 shadow-premium hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-out"
                style={{
                  backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.78), rgba(248,250,252,0.8))",
                }}
              >
                <div className="flex items-center justify-end gap-1.5 text-yellow-400 text-base" aria-label="5 כוכבים">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <p className="text-sm leading-relaxed mt-3 text-right" style={{ color: "#475569" }}>
                  "{item.quote}"
                </p>
                <div className="mt-4 pt-3 border-t border-white/40 text-right">
                  <p className="text-sm font-semibold" style={{ color: "#334155" }}>{item.name}</p>
                  <p className="text-xs mt-1" style={{ color: "#64748B" }}>{item.role}</p>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
