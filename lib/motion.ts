import type { Transition, Variants } from "framer-motion";

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Viewport presets for `whileInView` — keep `once` to avoid replay on scroll-back. */
export const viewport = {
  section: { once: true as const, margin: "-80px" },
  sectionLoose: { once: true as const, margin: "-50px" },
  sectionTight: { once: true as const, margin: "-60px" },
  sectionProof: { once: true as const, margin: "-90px" },
  sectionPillar: { once: true as const, margin: "-70px" },
  /** No margin — element may be large (e.g. contact form column). */
  inView: { once: true as const },
} as const;

export type ViewportKey = keyof typeof viewport;

export function motionTransition(
  prefersReducedMotion: boolean | null,
  full: { duration: number; delay?: number; ease?: typeof EASE },
): Transition {
  if (prefersReducedMotion) {
    return { duration: 0.01, delay: 0, ease: EASE };
  }
  return {
    duration: full.duration,
    delay: full.delay ?? 0,
    ease: full.ease ?? EASE,
  };
}

/** Staggered lists (Hero, Services timeline, Pricing cards). */
export function staggerVariants(prefersReducedMotion: boolean | null): {
  container: Variants;
  item: Variants;
} {
  if (prefersReducedMotion) {
    return {
      container: {
        hidden: {},
        show: { transition: { staggerChildren: 0 } },
      },
      item: {
        hidden: { opacity: 1, y: 0 },
        show: { opacity: 1, y: 0, transition: { duration: 0.01, ease: EASE } },
      },
    };
  }
  return {
    container: {
      hidden: {},
      show: {
        transition: { staggerChildren: 0.1, duration: 0.6, ease: EASE },
      },
    },
    item: {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
    },
  };
}

export function pageEnterTransition(prefersReducedMotion: boolean | null): Transition {
  return motionTransition(prefersReducedMotion, { duration: 0.5, delay: 0 });
}
