import { BOOKING_URL, LINKEDIN_URL, CONTACT_EMAIL } from "@/lib/booking";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-danube" />
              <span className="font-serif text-xl tracking-tight">DanubeX</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Building trusted business between Austria and Hungary.
            </p>
            <p className="mt-1 max-w-sm text-sm text-muted-foreground">
              An AbilityMatrix initiative.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Connect
              </div>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-foreground hover:text-danube"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-foreground hover:text-danube">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Engage
              </div>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href="#newsletter" className="text-foreground hover:text-danube">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-foreground hover:text-danube"
                  >
                    Book a call
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                Legal
              </div>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href="#" className="text-foreground hover:text-danube">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col justify-between gap-4 border-t border-border/60 pt-8 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} AbilityMatrix GmbH. All rights reserved.</div>
          <div>Austria ↔ Hungary</div>
        </div>
      </div>
    </footer>
  );
}
