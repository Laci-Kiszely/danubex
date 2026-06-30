import { BookCallButton } from "@/components/shared/BookCallButton";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#opportunity", label: "Opportunity" },
  { href: "#why", label: "Why DanubeX" },
  { href: "#explorer", label: "Explorer" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-danube" />
          <span className="font-serif text-xl tracking-tight">DanubeX</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <BookCallButton size="sm" label="Book a call" />
      </div>
    </header>
  );
}
