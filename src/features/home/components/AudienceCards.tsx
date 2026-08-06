"use client";

import Link from "next/link";
import { Building2, UserRound, Check, ArrowRight } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ─── data ─────────────────────────────────────────────────────────── */
const companiesFeatures = [
  "Post unlimited job announcements",
  "AI-generated interview questions",
  "Real-time candidate monitoring",
  "Detailed evaluation reports",
  "Bulk candidate filtering by score",
];

const candidatesFeatures = [
  "Browse curated job opportunities",
  "Take AI video interviews anytime",
  "Fair & transparent AI evaluation",
  "Instant feedback after completion",
  "Track all your applications",
];

/* ─── sub-components ────────────────────────────────────────────────── */
interface AudienceCardProps {
  icon: React.ReactNode;
  title: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  variant: "primary" | "default";
}

function AudienceCard({
  icon,
  title,
  features,
  ctaLabel,
  ctaHref,
  variant,
}: AudienceCardProps) {
  const isPrimary = variant === "primary";

  return (
    <Card
      className={`
        flex flex-col gap-6 rounded-2xl p-8 transition-default hover:-translate-y-1
        ${
          isPrimary
            ? "bg-primary text-primary-foreground shadow-primary border-transparent"
            : "card-default hover:shadow-hover"
        }
      `}
    >
      <CardContent className="flex flex-col gap-6 p-0">
        {/* Icon */}
        <div
          className={`
            flex size-12 items-center justify-center rounded-xl
            
          `}
        >
          <span className={isPrimary ? "text-primary-foreground" : "text-primary"}>
            {icon}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`text-2xl font-bold ${
            isPrimary ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {title}
        </h3>

        {/* Feature list */}
        <ul className="flex flex-col gap-3">
          {features.map((feat) => (
            <li key={feat} className="flex items-center gap-3">
              <span className="flex size-5 shrink-0 items-center justify-center">
                <Check
                  className={`size-4 ${
                    isPrimary ? "text-primary-foreground" : "text-primary"
                  }`}
                />
              </span>
              <span
                className={`text-sm leading-relaxed ${
                  isPrimary ? "text-primary-foreground/85" : "text-muted-foreground"
                }`}
              >
                {feat}
              </span>
            </li>
          ))}
        </ul>

        {/* CTA */}
          <Link
            href={ctaHref}
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-auto flex h-15 w-full items-center justify-center gap-2.5 rounded-xl border px-6 py-3 font-semibold transition-default",
              isPrimary
                ? "border-white/30 bg-white/15 text-primary-foreground hover:bg-white/25"
                : "border-primary bg-primary text-primary-foreground hover:bg-primary/90",
            )}
            >
            {ctaLabel}
            <ArrowRight className="size-4" />
       </Link>
      </CardContent>
    </Card>
  );
}

/* ─── section ───────────────────────────────────────────────────────── */
export default function AudienceCards() {
  return (
    <section className=" bg-background">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2">
          <AudienceCard
            icon={<Building2 className="size-6" />}
            title="For Companies"
            features={companiesFeatures}
            ctaLabel="Hire Smarter"
            ctaHref="/signup?role=company"
            variant="primary"
          />

          <AudienceCard
            icon={<UserRound className="size-6" />}
            title="For Candidates"
            features={candidatesFeatures}
            ctaLabel="Start Your Journey"
            ctaHref="/signup?role=candidate"
            variant="default"
          />
        </div>
      </div>
    </section>
  );
}
