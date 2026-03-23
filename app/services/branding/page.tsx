import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceTemplate from "@/components/templates/ServiceTemplate";
import { FileText, Palette, PenTool, Sparkles, SwatchBook } from "lucide-react";

export const metadata: Metadata = {
  title: "מיתוג וזהות עסקית | JT Solutions - סוכנות דיגיטל",
  description:
    "שירות מיתוג וזהות לעסקים: עיצוב לוגו, שפה חזותית, בחירת צבעים ופונטים, ספר מותג וחומרי שיווק לבניית בידול ואמון.",
};

export default function BrandingPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ServiceTemplate
          badge="שלב ההקמה: מיתוג ונוכחות"
          title="חבילת מיתוג שבונה זיהוי, אמון ובידול ברור"
          description="אנחנו מגדירים לעסק שלך שפה מותגית מלאה - מהלוגו ועד הקווים הגרפיים - כדי שכל מפגש עם הלקוח ייראה מקצועי, אחיד ובלתי נשכח."
          targetAudience={[
            "עסקים חדשים שצריכים זהות ברורה כבר מהיום הראשון",
            "עסקים קיימים שרוצים לעלות מדרגה בנראות ובתדמית",
            "עסקים שרוצים שפה אחידה בכל הערוצים הדיגיטליים והפיזיים",
          ]}
          timeframe="בדרך כלל בין 3 ל-5 שבועות, כולל סבבי דיוק ומסירה מלאה."
          deliverables={[
            { icon: PenTool, text: "עיצוב לוגו כולל 3 כיוונים ראשוניים" },
            { icon: SwatchBook, text: "בחירת פונטים ופלטת צבעים מותאמת למותג" },
            { icon: Palette, text: "שפה ויזואלית אחידה לדיגיטל ולפרינט" },
            { icon: FileText, text: "מסמך הנחיות מותג לשימוש שוטף" },
            { icon: Sparkles, text: "פורמטים מוכנים לרשתות, מצגות וחומרי שיווק" },
          ]}
          faq={[
            { question: "אפשר לעשות רענון למותג קיים ולא להתחיל מאפס?", answer: "כן. אפשר לבצע מיתוג מחדש מדורג ולשמור על מה שכבר עובד." },
            { question: "כמה סבבי תיקונים כלולים?", answer: "התהליך כולל סבבי דיוק מסודרים עד הגעה לתוצאה מדויקת." },
            { question: "מקבלים קבצים לעבודה שוטפת?", answer: "כן. מקבלים חבילת קבצים מלאה לשימוש בדיגיטל, פרינט ורשתות." },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
