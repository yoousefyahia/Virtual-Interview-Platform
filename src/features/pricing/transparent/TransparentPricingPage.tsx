import { ChevronDown } from "lucide-react";
import { Check } from "lucide-react";
import Link from "next/link";
 export const plans = [
    {
      name: "Basic",
      price: "2K",
      frequency: "/month",
      features: [
        "Up to 5 job announcements",
        "500 interview credits/mo",
        "Basic AI evaluation",
        "Standard reports",
        "Email support",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
    },
    {
      name: "Premium",
      price: "10K",
      frequency: "/month",
      badge: "Most Popular",
      features: [
        "Unlimited job announcements",
        "3,000 interview credits/mo",
        "Advanced analytics",
        "Team collaboration",
        "Priority support",
        "API access",
      ],
      buttonText: "Get Started",
      buttonVariant: "solid",
    },
    {
      name: "Enterprise",
      price: "Custom",
      frequency: "",
      features: [
        "Everything in Growth",
        "Dedicated account manager",
        "Custom integrations",
        "SLA & on-site training",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
    },
  ];
  export  const compareRows = [
    { label: "AI VIDEO INTERVIEWS", values: [true, true, true] },
    { label: "REAL-TIME PROCTORING", values: [true, true, true] },
    { label: "ADVANCED ANALYTICS", values: [true, true, true] },
    { label: "TEAM COLLABORATION", values: [false, true, true] },
    { label: "BULK CANDIDATE ACTIONS", values: [false, true, true] },
    { label: "API ACCESS", values: [false, true, true] },
    { label: "DEDICATED SUPPORT", values: [false, true, true] },
  ];

function TransparentPricingPage() {
 

 
  const faqs = [
    {
      question: "Can I switch plans later?",
      answer:
        "Yes. You can upgrade or downgrade your plan anytime through your account settings or by contacting support.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No. Our pricing is transparent and all core features are included as shown. Any custom services will be agreed upon up front.",
    },
    {
      question: "What counts as an interview credit?",
      answer:
        "Each completed interview session uses one credit. Credits refresh according to the plan terms.",
    },
  ];

  return (
   
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <section className="text-center">
        <h1 className="mt-4 text-4xl lg:text-6xl font-bold text-primary sm:text-5xl">
          Simple, transparent pricing
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg lg:text-2xl leading-8 text-neutral-700 ">
          Choose the plan that fits your hiring needs
        </p>
      </section>
      <section className="mt-14 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => {
          const isPremium = plan.name === "Premium";
          return (
            <div
              key={plan.name}
              className={`relative rounded-3xl hover:shadow-hover text-black bg-white p-8  ${
                isPremium ? "border-4 border-primary " : ""
              }`}>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className={`text-lg font-semibold `}>{plan.name}</p>
                  <div className="mt-6 flex items-end gap-2">
                    <span className={`text-5xl font-bold `}>{plan.price}</span>
                    <span className={`pb-1 text-sm `}>{plan.frequency}</span>
                  </div>
                </div>
                {plan.badge ? (
                  <span className="rounded-full bg-primary px-3 py-1 text-base font-semibold absolute top-0 left-1/2  -translate-1/2 uppercase text-white">
                    {plan.badge}
                  </span>
                ) : null}
              </div>

              <ul className={`mt-8 space-y-3 text-sm leading-6 `}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check/>

                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

          <Link href={`/pricing/transparent/confirm?plan=${plan.name.toLowerCase()}`}>
                <button
                  type="button"
                  className={`mt-10 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    plan.buttonVariant === "solid"
                      ? "bg-primary text-white hover:bg-blue-800"
                      : !isPremium
                        ? "border-3 border-primary bg-white text-primary hover:bg-blue-50"
                        : ""
                  }`}>
                  {plan.buttonText}
                </button>
          </Link >
            </div>
          );
        })}
      </section>

      <section className="mt-16 overflow-hidden">
        <div className="grid gap-px text-center uppercase grid-cols-4 px-6 py-4  font-bold text-xl">
          <div className=" sm:col-span-1">Compare Plans</div>
          <div>Basic</div>
          <div>Premium</div>
          <div>Enterprise</div>
        </div>

        <div className="divide-y gap-y-8">
          {compareRows.map((row) => (
            <div
              key={row.label}
              className="flex justify-between items-center bg-white px-6 py-5 mb-3 rounded-3xl ">
              <div className="text-center text-lg font-medium  w-1/4">
                {row.label}
              </div>
              {row.values.map((value, index) => (
                <div
                  key={`${row.label}-${index}`}
                  className="flex items-center justify-center w-1/4 ">
                  {value ? (
                 
                                        <Check className=" h-7 w-7 p-1  rounded-full bg-primary text-white"/>
                  ) : (
                    <span className="inline-flex items-center justify-center text-neutral-800 text-2xl font-extrabold">
                      —
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-slate-950">
          Frequently Asked Questions
        </h2>
        <div className="mt-6 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-300">
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none text-base font-medium text-slate-900">
                {faq.question}
                <ChevronDown />
              </summary>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}

export default TransparentPricingPage;
