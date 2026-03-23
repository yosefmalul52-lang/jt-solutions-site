import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceTemplate from "@/components/templates/ServiceTemplate";
import { Code2, Gauge, LayoutTemplate, Rocket, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "פיתוח אתרים ומערכות מותאמות | JT Solutions - סוכנות דיגיטל",
  description:
    "פיתוח אתרים ומערכות לעסקים עם ארכיטקטורה יציבה, מהירות טעינה גבוהה, התאמה למובייל, אבטחה ותשתית צמיחה שמגדילה פניות ומכירות.",
};

export default function WebDevelopmentPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ServiceTemplate
          badge="שלב הגדילה: הנכסים הדיגיטליים"
          title="פיתוח אתר מתקדם שמוכן לצמיחה אמיתית"
          description="אנחנו מפתחים עבורך נכס דיגיטלי יציב, מהיר ומדויק, כזה שמשרת את היעדים העסקיים שלך ולא רק נראה טוב על המסך."
          targetAudience={[
            "עסקים שצריכים מערכת מותאמת ולא פתרון מדף",
            "עסקים עם דרישות פיתוח מורכבות ותהליכים ייחודיים",
            "עסקים שרוצים בסיס טכנולוגי ארוך טווח",
          ]}
          timeframe="בדרך כלל בין 3 ל-8 שבועות, בהתאם למורכבות הפרויקט והאינטגרציות."
          deliverables={[
            { icon: LayoutTemplate, text: "אפיון מבנה מערכת וזרימות משתמש" },
            { icon: Code2, text: "פיתוח אתר או מערכת בהתאמה מלאה לעסק" },
            { icon: Gauge, text: "אופטימיזציית ביצועים ומהירות טעינה" },
            { icon: ShieldCheck, text: "אבטחה, יציבות ובדיקות לפני השקה" },
            { icon: Rocket, text: "השקה מסודרת ותמיכה ראשונית לאחר עלייה לאוויר" },
          ]}
          faq={[
            { question: "אפשר לשלב עם מערכת קיימת?", answer: "כן. אפשר להתחבר למערכות קיימות ולבצע התאמות לפי הצורך." },
            { question: "הקוד נשאר בבעלות העסק?", answer: "כן. הבעלות המלאה על הקוד והתוצרים נשארת אצלך." },
            { question: "אפשר להמשיך להרחיב את המערכת בעתיד?", answer: "בהחלט. הפיתוח מתוכנן כך שיתמוך בהתרחבות עתידית." },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
