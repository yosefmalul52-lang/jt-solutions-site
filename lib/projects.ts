export type ProjectItem = {
  id: string;
  title: string;
  shortDescription: string;
  simpleTerms: string;
  problem: string;
  processPoints: [string, string, string];
  businessValue: string;
  technologies: string[];
  image: {
    src: string;
    alt: string;
  };
};

export const projects: ProjectItem[] = [
  {
    id: "magadim",
    title: "Magadim",
    shortDescription:
      "חנות דיגיטלית מהירה עם ניהול הזמנות אוטומטי ודשבורד ברור לצוות.",
    simpleTerms:
      "לקחנו תהליך הזמנות מבולגן והפכנו אותו למערכת אחת שעובדת חלק - כדי שהעסק ימכור יותר ויתעסק פחות בכיבוי שריפות.",
    problem:
      "לפני השדרוג, הזמנות טופלו ידנית ובכמה מקומות שונים. זה יצר בלגן, עיכובים, וטעויות שעלו בזמן ובכסף.",
    processPoints: [
      "בנינו חנות מהירה ונעימה לשימוש, שמקלה על הלקוח להשלים קנייה.",
      "חיברנו את כל ההזמנות לדשבורד אחד ברור, כך שכל הצוות רואה בדיוק מה קורה.",
      "הטמענו אוטומציות שמעדכנות סטטוסים וחוסכות עבודה ידנית בכל יום.",
    ],
    businessValue:
      "יותר הזמנות נסגרות בלי תקיעות, זמן הטיפול יורד משמעותית, והעסק יכול לצמוח בלי להגדיל עומס תפעולי.",
    technologies: ["E-commerce", "Vercel Hosting", "Dashboard", "Automation"],
    image: {
      src: "/opengraph-image.png",
      alt: "Magadim ecommerce dashboard preview",
    },
  },
  {
    id: "eb-hair",
    title: "EB Hair",
    shortDescription:
      "מיתוג יוקרתי ודף נחיתה ממוקד שממיר יותר מתעניינות לפגישות.",
    simpleTerms:
      "בנינו נראות יוקרתית שמרגישה מקצועית מהשנייה הראשונה, יחד עם דף שמוביל את הלקוחה בצורה טבעית להשארת פרטים.",
    problem:
      "המותג לא שידר מספיק יוקרה אונליין, ודף הפנייה לא יצר מספיק אמון כדי להפוך כניסות לפניות איכותיות.",
    processPoints: [
      "חידדנו שפה מותגית יוקרתית ואחידה שמדברת לקהל הנכון.",
      "עיצבנו UX/UI נקי וברור, עם מסר חד וזרימה פשוטה של קריאה לפעולה.",
      "בנינו דף נחיתה ממוקד לידים עם מבנה שמקטין חיכוך ומעלה המרות.",
    ],
    businessValue:
      "העסק נראה יוקרתי ומדויק יותר, איכות הפניות עלתה, ונוצרה תחושת אמון שמקצרת את הדרך מסקרנות לקביעת תור.",
    technologies: ["Branding", "UX/UI", "Landing Page", "Lead Generation"],
    image: {
      src: "/opengraph-image.png",
      alt: "EB Hair luxury landing page preview",
    },
  },
  {
    id: "ai-automation",
    title: "Business Automation",
    shortDescription:
      "אוטומציה עסקית שמחברת לידים, CRM ותהליכי המשך בזמן אמת.",
    simpleTerms:
      "הפסקנו מצב שבו לידים 'נופלים בין הכיסאות' - ועברנו לתהליך אוטומטי שמחבר הכל למקום אחד ופועל לבד.",
    problem:
      "לידים הגיעו מכמה מקורות שונים בלי סדר, תגובות התעכבו, והצוות איבד הזדמנויות כי המידע לא זרם בזמן.",
    processPoints: [
      "חיברנו את מקורות הלידים למערכת מרכזית אחת, כדי שכל פנייה תתועד מיד.",
      "בנינו תהליכי n8n שמעבירים את הנתונים אוטומטית ל-CRM בלי עבודה ידנית.",
      "יצרנו תצוגת מצב בזמן אמת שמאפשרת להגיב מהר ולנהל המשך מעקב מסודר.",
    ],
    businessValue:
      "פחות לידים הולכים לאיבוד, זמן התגובה מתקצר, ותהליך המכירה נהיה צפוי, מדיד ויעיל הרבה יותר.",
    technologies: ["n8n", "CRM Integration", "Real-time Data", "Automation Flows"],
    image: {
      src: "/opengraph-image.png",
      alt: "AI automation workflow and CRM integration preview",
    },
  },
];

export function getProjectById(id: string) {
  return projects.find((project) => project.id === id);
}

