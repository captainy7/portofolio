"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, Check, Loader2 } from "lucide-react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("sending");
    await new Promise((r) => setTimeout(r, 1500));
    setState("sent");
  };

  const inputClasses =
    "w-full rounded-base border-2 border-border bg-secondary-background px-4 py-2.5 text-sm font-base placeholder:text-muted-foreground/60 focus:outline-hidden focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {state === "sent" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center rounded-base border-2 border-border bg-secondary-background py-16 text-center shadow-shadow"
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-base bg-main text-main-foreground border-2 border-border shadow-shadow">
            <Check className="h-6 w-6" />
          </div>
          <h3 className="mb-2 text-xl font-heading">Message Sent!</h3>
          <p className="text-sm font-base text-muted-foreground">
            Thanks for reaching out. I&apos;ll get back to you soon.
          </p>
          <Button
            variant="outline"
            className="mt-6"
            onClick={() => setState("idle")}
          >
            Send another
          </Button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-base font-semibold">
                Name
              </label>
              <input id="name" required className={inputClasses} placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-base font-semibold">
                Email
              </label>
              <input id="email" type="email" required className={inputClasses} placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="mb-1.5 block text-sm font-base font-semibold">
              Subject
            </label>
            <input id="subject" required className={inputClasses} placeholder="What's this about?" />
          </div>
          <div>
            <label htmlFor="message" className="mb-1.5 block text-sm font-base font-semibold">
              Message
            </label>
            <textarea id="message" required rows={5} className={`${inputClasses} resize-y min-h-[120px]`} placeholder="Your message..." />
          </div>
          <Button type="submit" size="lg" disabled={state === "sending"}>
            {state === "sending" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      )}
    </motion.div>
  );
}
