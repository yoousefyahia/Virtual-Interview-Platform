"use client";

import {
  BadgeCheck,
  Brain,
  Eye,
  Shield,
  Target,
  Zap,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const capabilities = [
  {
    icon: Brain,
    title: "AI-Generated Questions",
    description:
      "Dynamic question banks tailored to each role and seniority level.",
    bg: "bg-primary-25",
    color: "text-primary",
  },
  {
    icon: Eye,
    title: "Eye & Body Tracking",
    description:
      "Real-time monitoring ensures interview integrity and authenticity.",
    bg: "bg-purple-light",
    color: "text-purple",
  },
  {
    icon: Shield,
    title: "Anti-Cheat Engine",
    description:
      "Flags suspicious behavior with timestamped evidence for review.",
    bg: "bg-red-light",
    color: "text-red",
  },
  {
    icon: Target,
    title: "Automated Scoring",
    description:
      "Each candidate scored out of 100% with detailed AI reasoning.",
    bg: "bg-green-light",
    color: "text-green",
  },
  {
    icon: BadgeCheck,
    title: "Strengths & Weaknesses",
    description:
      "Detailed insights into every candidate's performance.",
    bg: "bg-orange-light",
    color: "text-orange",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description:
      "Receive complete reports immediately after each interview.",
    bg: "bg-turquoise-light",
    color: "text-turquoise",
  },
];

export default function PlatformCapabilities() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="text-center text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Platform Capabilities
          </h2>

          <p className="mt-4 text-lg text-muted-foreground text-sm">
            Everything you need for modern AI-powered technical interviews.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="card-default h-52 hover:-translate-y-1 hover:shadow-hover"
              >
                <CardContent className="flex h-full flex-col p-6">
                  <div
                    className={`flex size-14 items-center justify-center rounded-full ${item.bg}`}
                  >
                    <Icon className={`size-6 ${item.color}`} />
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-neutral-1100">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}