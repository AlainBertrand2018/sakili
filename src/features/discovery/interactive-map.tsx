"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

export function InteractiveMap({ onHover }: { onHover?: (code: string | null) => void }) {
  const router = useRouter();
  const containerRef = React.useRef<HTMLDivElement>(null);
  const svgWrapperRef = React.useRef<HTMLDivElement>(null);
  const svgRef = React.useRef<SVGSVGElement | null>(null);
  const [loaded, setLoaded] = React.useState(false);
  const onHoverRef = React.useRef(onHover);
  onHoverRef.current = onHover;

  React.useEffect(() => {
    if (!svgWrapperRef.current) return;
    let cancelled = false;

    fetch("/images/africa_mu.svg")
      .then((r) => r.text())
      .then((text) => {
        if (cancelled) return;
        const parser = new DOMParser();
        const svgDoc = parser.parseFromString(text, "image/svg+xml");
        const svgRoot = svgDoc.documentElement;

        svgRoot.style.width = "100%";
        svgRoot.style.height = "100%";
        svgRoot.style.display = "block";
        svgRoot.setAttribute("preserveAspectRatio", "xMidYMid meet");

        svgWrapperRef.current!.appendChild(svgRoot);
        svgRef.current = svgRoot as unknown as SVGSVGElement;
        setLoaded(true);
      });

    return () => {
      cancelled = true;
      if (svgRef.current && svgRef.current.parentNode) {
        svgRef.current.parentNode.removeChild(svgRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    if (!loaded || !svgRef.current || !containerRef.current) return;

    const svgEl = svgRef.current;

    const paths = Array.from(svgEl.querySelectorAll<SVGElement>("[data-id]"));
    const circle = svgEl.querySelector<SVGElement>("#circle13");
    if (circle) {
      circle.setAttribute("data-id", "MU");
      circle.setAttribute("data-name", "Mauritius");
      circle.style.cursor = "pointer";
      paths.push(circle);
    }

    paths.forEach((el) => {
      el.style.cursor = "pointer";

      const enter = () => {
        el.style.fill = "var(--primary)";
        el.style.fillOpacity = "0.35";
        const code = el.getAttribute("data-id") || "";
        onHoverRef.current?.(code);
      };

      const leave = () => {
        el.style.fill = "";
        el.style.fillOpacity = "";
        onHoverRef.current?.(null);
      };

      const click = () => {
        const code = el.getAttribute("data-id") || "";
        router.push(`/ecosystem/${code}`);
      };

      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      el.addEventListener("click", click);
    });
  }, [loaded, router]);

  return (
    <div className="relative h-full" ref={containerRef}>
      <div className="relative w-full h-full rounded-2xl flex items-center justify-center overflow-hidden" style={{ backgroundColor: "#1a0f0a" }} ref={svgWrapperRef}>
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #d4a843 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center text-text-muted">
            <div className="flex flex-col items-center gap-3">
              <div className="h-8 w-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
              <span className="text-sm">Loading map...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
