import Link from "next/link";
import type { PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<{
  href: string;
  variant?: "primary" | "secondary";
}>;

export function Button({ href, variant = "primary", children }: ButtonProps) {
  const classes =
    variant === "primary"
      ? "bg-olive-deep text-cream-light hover:bg-graphite"
      : "bg-transparent border border-olive-deep/40 text-graphite hover:bg-olive-deep/5";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors ${classes}`}
    >
      {children}
    </Link>
  );
}
