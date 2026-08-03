import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import wave from "@/assets/images/wave.png";

export default function HeroSection() {
  return (
    <section className="relative bg-background pt-12 pb-20 md:pt-16 md:pb-28">
      <Image
        src={wave}
        alt="Wave background"
        fill
        className="absolute inset-0 object-cover "
        priority
      />

      <div className="container relative z-10">
        <div className="relative mx-auto flex max-w-5xl flex-col items-center justify-start gap-6">
          <div className="bg-primary-p rounded-corner-radius-xxl border-primary-p-25 flex h-16 w-130 max-w-full items-center gap-2 border-[0.8px] p-4 backdrop-blur-md">
            <Sparkles className="size-6 shrink-0 text-primary-p-500" />

            <div className="body-bold text-primary-p-500 w-full text-center font-semibold">
              Now with Real-Time Proctoring &amp; AI Evaluation
            </div>
          </div>

          <div className="flex justify-center self-stretch p-2.5">
            <h1 className="h1 text-center tracking-tight">
              <span className="text-foreground">
                Technical Interviews,
                <br />
              </span>

              <span className="text-primary-p-500">
                Reimagined with AI
              </span>
            </h1>
          </div>

          <div className="flex justify-center self-stretch p-2.5">
              <p className="text-neutral-gery-700 h5 max-w-full text-center">
                Post job announcements, conduct AI-powered video interviews with
                real-time body &amp;
                <br />
                eye tracking, and receive detailed candidate evaluations — all in one
                platform.
              </p>
          </div>

          <div className="flex gap-3">
            <Link
              href="#tour"
              className={cn(
                buttonVariants({ size: "lg" }),
                "w-50 h-15"
              )}
            >
              Take a Tour
            </Link>

            <Link
              href="/signup"
              className={cn(
                buttonVariants({
                  size: "lg",
                  variant: "outline",
                }),
                "w-50 h-15"
              )}
            >
              Find a Job
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}