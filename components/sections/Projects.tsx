"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpLeft, MoveLeft } from "lucide-react";
import Reveal from "@/components/motion/Reveal";
import CtaButton from "@/components/ui/CtaButton";
import { motionTransition, viewport as motionViewport } from "@/lib/motion";
import { projects } from "@/lib/projects";

export default function Projects() {
  const reduce = useReducedMotion();

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-16 md:py-24 lg:py-32 section-shell"
      style={{ background: "linear-gradient(180deg, #F8FAFF 0%, #F9FAFB 52%, #F6F8FF 100%)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-[9%] top-14 h-36 w-36 rounded-full"
        style={{ background: "rgba(91,33,182,0.08)", filter: "blur(38px)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[7%] bottom-10 h-32 w-32 rounded-full"
        style={{ background: "rgba(14,165,233,0.08)", filter: "blur(34px)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mb-12 text-center" viewportKey="section" y={22} duration={0.62}>
          <span className="premium-badge mb-4">פרויקטים נבחרים</span>
          <h2 className="premium-title mt-1">
            פרויקטים שמייצרים צמיחה אמיתית
          </h2>
          <p className="premium-subtitle mx-auto mt-3 max-w-2xl">
            עיצוב נקי, חוויית משתמש מדויקת ותהליך ברור שמחבר בין נראות גבוהה לתוצאות עסקיות.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={reduce === true ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={motionViewport.section}
              transition={motionTransition(reduce, { duration: 0.62, delay: index * 0.09 })}
              whileHover={reduce ? undefined : { y: -6 }}
            >
              <Link
                href={`/projects/${project.id}`}
                className="group relative block h-full overflow-hidden rounded-[var(--radius)] border border-white/40 bg-white/88 backdrop-blur-md shadow-premium transition-all duration-300 hover:shadow-xl"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(91,33,182,0.22), transparent)" }}
                />

                <div className="relative aspect-[16/10] overflow-hidden border-b border-white/40">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/32 via-slate-900/8 to-transparent" />
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-extrabold tracking-tight text-slate-900">{project.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{project.shortDescription}</p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tag) => (
                      <span
                        key={`${project.id}-${tag}`}
                        className="rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-semibold tracking-wide text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 inline-flex items-center gap-2 rounded-[var(--radius-soft)] border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-indigo-200 group-hover:text-indigo-700">
                    לצפייה בפרויקט
                    <ArrowUpLeft
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <Reveal className="mt-10 flex flex-col items-center gap-2" viewportKey="sectionTight" y={14} duration={0.5}>
          <p className="text-xs text-center max-w-md" style={{ color: "#64748B" }}>
            רוצים לדעת איך זה מתורגם למסלול ברור לפי שלב העסק?
          </p>
          <CtaButton variant="secondary" className="text-sm" icon={MoveLeft} label="למחירים ולחבילות" href="/#pricing" />
        </Reveal>
      </div>
    </section>
  );
}
