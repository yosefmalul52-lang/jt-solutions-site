import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceTemplate from "@/components/templates/ServiceTemplate";
import { FileText, MessageSquare, MonitorSmartphone, Target, Workflow } from "lucide-react";

export const metadata: Metadata = {
  title: "בניית דף נחיתה ממיר | JT Solutions - סוכנות דיגיטל",
  description:
    "בניית דפי נחיתה ממירים לעסקים עם אפיון שיווקי, כתיבה מכירתית, עיצוב רספונסיבי, חיבור טפסים ווואטסאפ, והטמעת פיקסלים למדידה ושיפור המרות.",
};

export default function LandingPagesServicePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ServiceTemplate
          badge="שלב ההקמה: מיתוג ונוכחות"
          title="דף נחיתה שממיר התעניינות לפנייה אמיתית"
          description="אנחנו בונים דף נחיתה מדויק שמציג את הערך שלך בצורה חדה, יוצר אמון מיידי ומכוון את הלקוח לפעולה אחת ברורה."
          targetAudience={[
            "עסקים שרוצים להגדיל כמות פניות איכותיות בזמן קצר",
            "עסקים שמתחילים קמפיינים וצריכים עמוד ממיר ומדויק",
            "עסקים עם שירות מוביל שרוצים להציג אותו בצורה ברורה",
          ]}
          timeframe="בדרך כלל בין 7 ל-14 ימי עבודה מרגע סגירת התוכן."
          deliverables={[
            { icon: Target, text: "אפיון שיווקי ממוקד קהל ומסר" },
            { icon: MonitorSmartphone, text: "עיצוב רספונסיבי מלא למובייל ולדסקטופ" },
            { icon: MessageSquare, text: "חיבור לטפסים, וואטסאפ ומנגנוני פנייה" },
            { icon: Workflow, text: "הטמעת פיקסלים ומדידה לקבלת נתונים אמיתיים" },
            { icon: FileText, text: "דף ביקורות ותוכן מחזק אמון" },
          ]}
          faq={[
            { question: "כמה זמן לוקח לעלות עם דף חדש?", answer: "בדרך כלל עד שבועיים, תלוי בחומרים ובמורכבות." },
            { question: "הדף מתאים לקמפיינים ממומנים?", answer: "כן. הדף נבנה במיוחד כדי לתמוך בפרסום ולהמיר תנועה לפניות." },
            { question: "אפשר לבצע שיפורים אחרי העלייה לאוויר?", answer: "כן. מבצעים התאמות לפי נתוני התנהגות ושיפור המרות." },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
