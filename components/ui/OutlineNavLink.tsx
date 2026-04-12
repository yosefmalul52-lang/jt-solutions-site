import type { ComponentProps, ReactNode } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

const baseClass =
  "inline-flex items-center gap-2 rounded-[var(--radius-soft)] border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-700";

type OutlineNavLinkProps = {
  href: string;
  children: ReactNode;
  icon?: LucideIcon;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export default function OutlineNavLink({
  href,
  children,
  icon: Icon,
  className = "",
  ...rest
}: OutlineNavLinkProps) {
  return (
    <Link href={href} className={`${baseClass} ${className}`.trim()} {...rest}>
      {Icon ? <Icon size={16} className="shrink-0" aria-hidden /> : null}
      {children}
    </Link>
  );
}
