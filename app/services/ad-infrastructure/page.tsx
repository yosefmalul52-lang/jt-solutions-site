import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceTemplate from "@/components/templates/ServiceTemplate";
import { BarChart3, Megaphone, MousePointerClick, Radar, Target } from "lucide-react";

export const metadata: Metadata = {
  title: "ניהול קמפיינים ותשתית פרסום | JT Solutions - סוכנות דיגיטל",
  description:
    "ניהול קמפיינים ממומנים ותשתית פרסום דיגיטלית: אסטרטגיית מדיה, הטמעת מדידה, אופטימיזציה שוטפת, בדיקות A/B ודוחות ביצועים לשיפור ROI.",
};

export default function AdInfrastructurePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ServiceTemplate
          badge="שלב הניהול: שיווק ותחזוקה"
          title="ניהול קמפיינים ותשתית פרסום שמובילה תוצאות"
          description="אנחנו מנהלים את מערך הפרסום שלך מקצה לקצה - עם אסטרטגיה ברורה, בקרה יומית ואופטימיזציה קבועה שמטרתה להגדיל החזר השקעה."
          targetAudience={[
            "עסקים שכבר מפרסמים ורוצים לשפר ביצועים",
            "עסקים שרוצים שקיפות מלאה על מה עובד ומה לא",
            "עסקים שצריכים ניהול רציף ולא רק הקמה חד-פעמית",
          ]}
          timeframe="תוצאות ראשוניות רואים לרוב בתוך 2 עד 4 שבועות, ושיפור יציב לאורך החודשים הבאים."
          deliverables={[
            { icon: Target, text: "אסטרטגיית קמפיין ותכנון קהלים מדויק" },
            { icon: Radar, text: "הטמעת מדידה מלאה בכל שלבי המשפך" },
            { icon: Megaphone, text: "ניהול קמפיינים שוטף ב-Meta וב-Google" },
            { icon: MousePointerClick, text: "בדיקות A/B רציפות לשיפור ביצועים" },
            { icon: BarChart3, text: "דוח חודשי ברור עם המלצות להמשך" },
          ]}
          faq={[
            { question: "כמה תקציב צריך כדי להתחיל?", answer: "מגדירים תקציב ריאלי לפי התחום, היעדים וקצב הצמיחה הרצוי." },
            { question: "אפשר לנהל כמה ערוצי פרסום במקביל?", answer: "כן. בונים תמהיל ערוצים שמתאים לעסק ולמטרות." },
            { question: "איך עוקבים אחרי התוצאות?", answer: "מקבלים דוחות ברורים ותמונת מצב רציפה לאורך כל החודש." },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
