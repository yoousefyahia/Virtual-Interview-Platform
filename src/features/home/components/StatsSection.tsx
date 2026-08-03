const stats = [
  { value: "12,400+", label: "Interviews Conducted" },
  { value: "98.2%", label: "Platform Uptime" },
  { value: "340+", label: "Companies Trust Us" },
  { value: "4.8 / 5", label: "Avg. Satisfaction" },
];

export default function StatsSection() {
  return (
<section className="container mb-8 max-w-6xl">
  <div className="rounded-2xl border  border-border bg-card
                  px-6 py-6
                  sm:px-10
                  md:px-16
                  lg:px-28">
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
  </div>
</section>
  );
}