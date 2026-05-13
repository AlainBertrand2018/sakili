import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ showText = true, size = "md", href = "/", className, boxless }: { showText?: boolean; size?: "sm" | "md" | "lg"; href?: string; className?: string; boxless?: boolean }) {
  const sizes = {
    sm: { box: "h-6 w-6", img: "h-5", text: "text-lg" },
    md: { box: "h-8 w-8", img: "h-7", text: "text-2xl" },
    lg: { box: "h-10 w-10", img: "h-9", text: "text-3xl" },
  };

  const s = sizes[size];

  return (
    <Link href={href} className={cn("flex items-center gap-2 group", className)}>
      {boxless ? (
        <img
          src="/images/woodmark_logo.svg"
          alt="SAKILI"
          className={cn(s.img, "w-auto object-contain")}
        />
      ) : (
        <div className={cn(s.box, "rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-105 shrink-0 p-0.5")}>
          <img
            src="/images/woodmark_logo.svg"
            alt="SAKILI"
            className="h-full w-full object-contain"
          />
        </div>
      )}
      {showText && (
        <span className={cn(s.text, "font-bold tracking-tight text-foreground")}>
          SAKILI
        </span>
      )}
    </Link>
  );
}
