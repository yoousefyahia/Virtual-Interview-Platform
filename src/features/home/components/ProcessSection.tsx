"use client";

import { useState } from "react";
import { ArrowRight, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSubscribe } from "@/features/home/hooks/useSubscribe";

/* ─── data ─────────────────────────────────────────────────────────── */
const steps = [
  {
    number: "01",
    title: "Post Job",
    description: "Create announcement with AI-selected questions",
  },
  {
    number: "02",
    title: "Candidates Apply",
    description: "Applicants submit CV & take AI interview",
  },
  {
    number: "03",
    title: "AI Evaluates",
    description: "System scores each answer with tracking data",
  },
  {
    number: "04",
    title: "You Decide",
    description: "Review full report and accept the best",
  },
];

/* ─── component ─────────────────────────────────────────────────────── */
export default function ProcessSection() {
  const [email, setEmail] = useState("");
  const { mutate: subscribe, isPending, isSuccess, isError ,reset } = useSubscribe();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    subscribe(
      { email },
      {
        onSuccess: () => setEmail(""),

      }
    );
  }

  return (
    <section className="py-12 bg-background">
      <div className="container">
        {/* ── Header ── */}
        <div className="section-header mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Process
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            From announcement to hire in 4 steps
          </p>
        </div>

        {/* ── Steps ── */}
        <div className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => {
            const isLast = idx === steps.length - 1;

            return (
              <div key={step.number} className="relative flex flex-col items-center text-center">
                {!isLast && (
                  <div
                    aria-hidden
                    className="absolute top-10 left-[calc(50%+80px)] right-[calc(-50%+80px)] hidden h-1 rounded-full lg:block"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(to right, var(--primary) 0, var(--primary) 4px, transparent 6px, transparent 12px)",
                    }}
                  />
                )}

                {/* Step badge */}
                <div className="relative z-10 flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-sm shadow-primary">
                  {step.number}
                </div>

                {/* Text */}
                <h3 className="mt-5 text-base font-bold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-md text-xs leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── CTA / Newsletter ── */}
        <div className="mt-20 flex flex-col items-center gap-8 text-center">
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-3xl lg:text-5xl">
            Join our circle — get early access to our latest work, launches, and
            Platform announcements
          </h2>

        <form
        onSubmit={handleSubmit}
        className="mx-auto flex w-full max-w-lg flex-col items-center gap-6 px-4 sm:px-0"      >
        <div className="w-full">
          <Input
            id="newsletter-email"
            type="email"
            placeholder="example@gmail.com"
            value={email}
              onChange={(e) => {
                if (isSuccess || isError) {
                  reset();
                }
                setEmail(e.target.value);
              }}            
              className="h-14 w-full border-0 border-b rounded-none bg-transparent text-center focus-visible:ring-0"
          />
        </div>

              <>
          {isSuccess && (
            <p className="text-sm font-medium text-green-500">
              You're on the list! We'll be in touch.
            </p>
          )}

          {isError && (
            <p className="text-sm font-medium text-red-500">
              Something went wrong. Please try again.
            </p>
          )}

          <button
            id="newsletter-submit"
            type="submit"
            disabled={isPending}
            className={cn(
              buttonVariants(),
              "flex h-14 w-full max-w-[320px] items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground"
            )}
          >
            {isPending ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Contact us
                <ArrowRight className="size-4" />
              </>
            )}
          </button>
        </>
        
      </form>
        </div>
      </div>
    </section>
  );
}
