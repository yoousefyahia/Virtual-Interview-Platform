"use client";

import { useHomeStats } from "@/features/home/hooks/useHomeStats";

export default function StatsSection() {
  const { data, isLoading, isError } = useHomeStats();

  const stats = [
    {
      value: `${data?.total_candidates_hired ?? 0}+`,
      label: "Interviews Conducted",
    },
    {
      value: `${data?.success_rate ?? 0}%`,
      label: "Platform Uptime",
    },
    {
      value: `${data?.active_companies ?? 0}+`,
      label: "Companies Trust Us",
    },
    {
      value: "4.8 / 5",
      label: "Avg. Satisfaction",
    },
  ];

  return (
    <section className="container mb-8">
      <div
        className="rounded-2xl border border-border bg-card
          px-6 py-6
          sm:px-10
          md:px-16
          lg:px-28"
      >
        {isLoading ? (
          <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="animate-pulse text-center">
                <div className="mx-auto h-6 w-20 rounded bg-neutral-200" />
                <div className="mx-auto mt-2 h-4 w-24 rounded bg-neutral-100" />
              </div>
            ))}
          </div>
        ) : isError ? (
          <p className="text-center text-neutral-700">
            Failed to load stats
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <h4 className="h4 text-neutral-1100">
                  {stat.value}
                </h4>
                <p className="caption mt-1 text-neutral-700">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}