import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "secondary" | "ghost" | "dark";

type CommonProps = {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
};

const VARIANT: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary:
    "border-2 border-white text-white hover:bg-white hover:text-ink",
  dark: "bg-ink text-white hover:bg-brand",
  ghost: "border-2 border-ink text-ink hover:bg-ink hover:text-white",
};

const BASE =
  "relative inline-flex items-center justify-center overflow-hidden px-7 py-3.5 font-semibold uppercase tracking-wider text-sm transition-colors duration-300 group select-none";

function Inner({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block overflow-hidden leading-none">
      <span className="block transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0">
        {children}
      </span>
    </span>
  );
}

type LinkBtnProps = CommonProps &
  Omit<ComponentProps<typeof Link>, "className" | "children">;

export function RollLink({
  children,
  variant = "primary",
  className = "",
  ...rest
}: LinkBtnProps) {
  return (
    <Link className={`${BASE} ${VARIANT[variant]} ${className}`} {...rest}>
      <Inner>{children}</Inner>
    </Link>
  );
}

type AnchorBtnProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children">;

export function RollAnchor({
  children,
  variant = "primary",
  className = "",
  ...rest
}: AnchorBtnProps) {
  return (
    <a className={`${BASE} ${VARIANT[variant]} ${className}`} {...rest}>
      <Inner>{children}</Inner>
    </a>
  );
}

type BtnProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function RollButton({
  children,
  variant = "primary",
  className = "",
  ...rest
}: BtnProps) {
  return (
    <button className={`${BASE} ${VARIANT[variant]} ${className}`} {...rest}>
      <Inner>{children}</Inner>
    </button>
  );
}
