import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function FadeIn({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
}) {

  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShown(true), delay);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const Comp = Tag as any;
  return (
    <Comp
      ref={ref as any}
      className={cn("fade-up", shown && "fade-up-in", className)}
      style={{ transitionDelay: shown ? `${delay}ms` : undefined }}
    >
      {children}
    </Comp>
  );
}
