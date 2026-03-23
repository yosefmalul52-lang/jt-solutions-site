import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceTemplate from "@/components/templates/ServiceTemplate";
import { Bot, Database, Workflow, TimerReset, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "אוטומציה עסקית עם AI | JT Solutions - סוכנות דיגיטל",
  description:
    "אוטומציה עסקית עם AI לעסקים: חיבור מערכות, בניית תהליכים חכמים, סוכני AI, צמצום עבודה ידנית ושיפור יעילות תפעולית ושירות לקוחות.",
};

export default function AIAutomationPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ServiceTemplate
          badge="שלב הניהול: שיווק ותחזוקה"
          title="אוטומציה עסקית חכמה שמפנה זמן לצמיחה"
          description="אנחנו הופכים תהליכים ידניים ומעייפים לזרימות אוטומטיות חכמות, כדי שהצוות שלך יתמקד במכירות, שירות וצמיחה במקום בתפעול חוזר."
          targetAudience={[
            "עסקים עם עומס תפעולי גבוה במשימות חוזרות",
            "עסקים שרוצים לשפר יעילות בלי להגדיל כוח אדם",
            "עסקים שצריכים חיבור חכם בין מערכות ומידע",
          ]}
          timeframe="בדרך כלל בין 2 ל-6 שבועות עד הטמעה מלאה והדרכת צוות."
          deliverables={[
            { icon: Workflow, text: "מיפוי תהליכים ובחירת נקודות אוטומציה" },
            { icon: Bot, text: "בניית תרחישי אוטומציה וסוכני AI לפי צורך" },
            { icon: Database, text: "חיבור מערכות וזרימת נתונים רציפה" },
            { icon: TimerReset, text: "הקמת ניטור, בקרה והתראות שוטפות" },
            { icon: Sparkles, text: "תיעוד והדרכה להפעלה יומיומית בטוחה" },
          ]}
          faq={[
            { question: "צריך צוות טכני כדי להפעיל את זה?", answer: "לא. הפתרון נבנה כך שיהיה נוח להפעלה גם בלי צוות פיתוח פנימי." },
            { question: "אפשר להטמיע על מערכות שכבר קיימות אצלנו?", answer: "כן. התכנון מותאם לכלים שכבר עובדים בעסק." },
            { question: "מה קורה אחרי ההשקה?", answer: "מקבלים ליווי ראשוני ודיוקים עד שהתהליך יציב ועובד חלק." },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
