import { useState, type ReactNode } from "react";
import { Button, type ButtonProps } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { BOOKING_URL } from "@/lib/booking";

interface Props extends Omit<ButtonProps, "children"> {
  children?: ReactNode;
  label?: string;
}

export function BookCallButton({
  children,
  label = "Book a 30-minute Conversation",
  ...buttonProps
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button {...buttonProps}>{children ?? label}</Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl p-0 overflow-hidden sm:max-w-3xl">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle className="font-serif text-2xl">Book a 30-minute call</DialogTitle>
          <DialogDescription>
            A practical conversation. No pitch.
          </DialogDescription>
        </DialogHeader>
        <div className="h-[70vh] w-full">
          <iframe
            src={BOOKING_URL}
            title="Book a call with DanubeX"
            className="h-full w-full border-0"
            loading="lazy"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
