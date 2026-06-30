import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { emailSchema, submitEmail } from "@/lib/newsletter";

export function NewsletterForm({
  className,
  buttonLabel = "Get the DanubeX Brief",
  placeholder = "Enter your email",
}: {
  className?: string;
  buttonLabel?: string;
  placeholder?: string;
}) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid email");
      return;
    }
    setLoading(true);
    try {
      await submitEmail(parsed.data);
      toast.success("You’re on the list. Talk soon.");
      setEmail("");
    } catch {
      toast.error("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("flex w-full max-w-md flex-col gap-2 sm:flex-row", className)}
    >
      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="h-11 flex-1 bg-background"
        aria-label="Email address"
      />
      <Button type="submit" size="lg" disabled={loading} className="h-11 whitespace-nowrap">
        {loading ? "Subscribing…" : buttonLabel}
      </Button>
    </form>
  );
}
