import Link from "next/link";
import { plans } from "@/features/pricing/PricingPage";
import { compareRows } from "@/features/pricing/PricingPage";

import { ArrowLeft, ArrowRight, Check } from "lucide-react";

type Props = {
  searchParams: Promise<{
    plan: string;
  }>;
};

async function ConfirmUpgradePage({ searchParams }: Props) {
  const { plan } = await searchParams;
  const selectedPlan = plans.find(
    (p) => p.name.toLowerCase() === plan.toLowerCase(),
  );
  const selectedPlanIndex = plans.findIndex(
    (p) => p.name.toLowerCase() === plan.toLowerCase(),
  );
  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-xl w-full bg-white rounded-lg shadow p-8">
          <h2 className="text-2xl font-semibold">Plan not found</h2>
          <p className="mt-2 text-sm text-gray-600">
            Please go back and choose a valid plan.
          </p>
          <div className="mt-6">
            <Link
              href="/pricing"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md">
              Back to Pricing
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <Link href="/pricing" className="text-gray-700 text-2xl">
            <ArrowLeft/>
          </Link>
          <div className="m-auto">
            <h1 className="text-4xl font-semibold mb-2">Confirm Your Upgrade</h1>
            <p className="text-sm text-center text-gray-500">
              Review your new plan details before continuing
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-2xl font-bold mb-4">Plan Summary</h3>

            <div className="flex items-baseline justify-between">
              <div>
                <p className="text-sm text-gray-500">{selectedPlan.name}</p>
                <div className="flex items-end gap-2">
                  <span className="text-4xl font-extrabold">
                    {selectedPlan.price}
                  </span>
                  <span className="text-sm text-gray-500">/month</span>
                </div>
              </div>
              <Link href="/pricing" className="text-primary font-bold  text-sm">
                Change
              </Link>
            </div>

            <ul className="mt-6 space-y-2 text-sm text-gray-700">
              {selectedPlan.features?.map((f: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex items-center justify-center w-6 h-6 bg-blue-50 text-primary rounded">
                    <Check size={16} />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-gray-100 mt-6 pt-6">
              <h4 className="font-semibold">Billing</h4>
              <div className="flex items-center justify-between mt-2">
                <div>
                  <p className="text-sm text-gray-500">Billing Monthly</p>
                  <p className="font-semibold mt-1">EGP 10.000</p>
                  <p className="text-xs text-gray-400">Cancel anytime</p>
                </div>
                <Link href="/pricing" className="text-primary font-bold text-sm">
                  Change
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-2xl font-bold mb-4">What&apos;s Included</h3>
            <ul className="space-y-3">
              {compareRows.map((row, i) => (
                <li key={i} className="flex items-center gap-3">
                  {row.values[selectedPlanIndex] === true ? (
                    <div className="flex justify-center items-center gap-2">
                      {" "}
                      <Check
                        size={28}
                        className="p-1 bg-blue-50 text-primary rounded"
                      />
                      <span className="text-gray-700">{row.label}</span>{" "}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-2xl p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold">Total</p>
            <p className="text-xs font-semibold">Taxes may apply</p>
          </div>
          <div className="text-right">
            <div className="font-semibold">EGP 10.000</div>
          </div>
        </div>

        <div className="mt-6 w-full">
          <Link
            href="/pricing/confirm/billing"
            className="w-full text-center flex items-center justify-center hover:bg-blue-800 py-3 bg-primary text-white rounded-full text-sm ">
            Continue to Billing <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ConfirmUpgradePage;
