import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import { Heebo } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import TrackingProvider from "@/components/providers/TrackingProvider";
import MetaPixel from "@/components/analytics/MetaPixel";

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["hebrew", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JT Solutions — מעטפת דיגיטלית חכמה לעסקים",
  description: "מעטפת דיגיטלית מלאה תחת קורת גג אחת: אתר ממיר, מיתוג מדויק וליווי שוטף לצמיחה עסקית ברורה.",
  keywords: ["סוכנות דיגיטל", "פיתוח אתרים", "מיתוג", "שיווק דיגיטלי", "דפי נחיתה", "אתרי תדמית"],
  icons: { icon: "/j-t-logo.PNG" },
};

export const viewport: Viewport = { themeColor: "#F9FAFB" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F9FAFB] text-gray-900">
        <TrackingProvider>{children}</TrackingProvider>
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
      </body>
    </html>
  );
}
