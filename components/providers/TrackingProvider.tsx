"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export default function TrackingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Meta Pixel — replace 'YOUR_PIXEL_ID' with real pixel ID
    if (!window.fbq) {
      type FbqFn = {
        (...args: unknown[]): void;
        callMethod?: (...args: unknown[]) => void;
        queue: unknown[][];
        push: FbqFn;
        loaded: boolean;
        version: string;
      };

      const n: FbqFn = ((...args: unknown[]) => {
        if (n.callMethod) {
          n.callMethod(...args);
          return;
        }
        n.queue.push(args);
      }) as FbqFn;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      window._fbq = n;
      window.fbq = n;

      const t = document.createElement("script") as HTMLScriptElement;
      t.async = true;
      t.src = "https://connect.facebook.net/en_US/fbevents.js";
      const s = document.getElementsByTagName("script")[0];
      if (s && s.parentNode) s.parentNode.insertBefore(t, s);
    }

    if (window.fbq) {
      window.fbq("init", "YOUR_PIXEL_ID");
      window.fbq("track", "PageView");
    }

    // GTM — replace 'YOUR_GTM_ID' with real GTM ID
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

    const gtmScript = document.createElement("script");
    gtmScript.async = true;
    gtmScript.src = "https://www.googletagmanager.com/gtm.js?id=YOUR_GTM_ID";
    document.head.appendChild(gtmScript);
  }, []);

  return <>{children}</>;
}
