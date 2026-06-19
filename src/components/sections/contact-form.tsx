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

    // Simulate send
    await new Promise((r) => setTimeout(r, 1500));
    setState("sent");
  };

  const inputClasses =
    "w-full rounded-lg border bg-background px-4 py-2.5 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all duration-200";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {state === "sent" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center rounded-xl border bg-card py-16 text-center"
        >
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-green-500/10">
            <Check className="h-6 w-6 text-green-500" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Message Sent!</h3>
          <p className="text-sm text-muted-foreground">
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
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-medium"
              >
                Name
              </label>
              <input
                id="name"
                required
                className={inputClasses}
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-medium"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                className={inputClasses}
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="mb-1.5 block text-sm font-medium"
            >
              Subject
            </label>
            <input
              id="subject"
              required
              className={inputClasses}
              placeholder="What's this about?"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="mb-1.5 block text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              className={`${inputClasses} resize-y min-h-[120px]`}
              placeholder="Your message..."
            />
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={state === "sending"}
            className="w-full sm:w-auto"
          >
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
