"use client";
import React, { useMemo, useState, ChangeEvent, FormEvent } from "react";
import {
  ArrowLeft,
  CreditCard,
  ChevronDown,
  Loader2,
} from "lucide-react";
import { z } from "zod";
import { getData } from "country-list";
import visa from "@/assets/images/visa.png";
import mastercard from "@/assets/images/master-card.png";
import americanExpress from "@/assets/images/american-express.png";
import Image, { StaticImageData } from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import SuccessMessage from "../components/SuccessMessage";

// ---------- Types ----------
type CardTypeId = "visa" | "mastercard" | "amex";

interface CardTypeOption {
  id: CardTypeId;
  img: StaticImageData;
  cvvLength: 3 | 4;
}

interface FormValues {
  companyName: string;
  billingEmail: string;
  country: string;
  cardType: CardTypeId;
  cardholderName: string;
  expiry: string;
  cardNumber: string;
  cvv: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;
type TouchedFields = Partial<Record<keyof FormValues, boolean>>;

// ---------- Static data ----------
const CARD_TYPES: CardTypeOption[] = [
  { id: "visa", img: visa, cvvLength: 3 },
  { id: "mastercard", img: mastercard, cvvLength: 3 },
  { id: "amex", img: americanExpress, cvvLength: 4 },
];

const billingSchema = z
  .object({
    companyName: z.string().trim().min(1, "Company name is required"),
    billingEmail: z
      .string()
      .trim()
      .min(1, "Billing email is required")
      .email("Enter a valid email address"),
    country: z.string().min(1, "Country is required"),
    cardType: z.enum(["visa", "mastercard", "amex"]),
    cardholderName: z.string().trim().min(1, "Cardholder name is required"),
    cardNumber: z
      .string()
      .transform((val) => val.replace(/\s/g, ""))
      .pipe(z.string().regex(/^\d{16}$/, "Card number must be 16 digits")),
    expiry: z
      .string()
      .regex(/^\d{2}\/\d{2}$/, "Use MM/YY format")
      .refine((val) => {
        const month = Number(val.split("/")[0]);
        return month >= 1 && month <= 12;
      }, "Invalid month")
      .refine((val) => {
        const [mm, yy] = val.split("/").map(Number);
        const expiryDate = new Date(2000 + yy, mm, 0);
        const now = new Date();
        return expiryDate >= new Date(now.getFullYear(), now.getMonth(), 1);
      }, "Card has expired"),
    cvv: z.string().regex(/^\d{3,4}$/, "CVV must be numeric"),
  })
  .superRefine((data, ctx) => {
    const expectedLength =
      CARD_TYPES.find((c) => c.id === data.cardType)?.cvvLength ?? 3;
    if (data.cvv.length !== expectedLength) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `CVV must be ${expectedLength} digits`,
        path: ["cvv"],
      });
    }
  });

function getFormErrors(values: FormValues): FormErrors {
  const result = billingSchema.safeParse(values);
  if (result.success) return {};

  const errors: FormErrors = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0] as keyof FormValues;
    if (!errors[key]) errors[key] = issue.message;
  }
  return errors;
}

// ---------- Formatting helpers ----------
function formatCardNumber(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

function formatExpiry(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) return digits;
  return `${digits.slice(0, 2)}/${digits.slice(2)}`;
}

// ---------- Small presentational pieces ----------
interface FieldProps {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}

function Field({ label, error, children, className = "" }: FieldProps) {
  return (
    <div className={className}>
      <label className="mb-1.5 block text-sm font-semibold text-slate-900">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs font-medium text-red-600">{error}</p>
      )}
    </div>
  );
}

const inputBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:ring-4";

function inputClasses(hasError: boolean): string {
  return `${inputBase} ${
    hasError
      ? "border-red-300 focus:border-red-400 focus:ring-red-100"
      : "border-slate-200 focus:border-indigo-500 focus:ring-indigo-100"
  }`;
}

export default function BillingInformation() {
  const countries = getData();
  const [fields, setFields] = useState<FormValues>({
    companyName: "",
    billingEmail: "",
    country: "Egypt",
    cardType: "visa",
    cardholderName: "",
    expiry: "",
    cardNumber: "",
    cvv: "",
  });
  const [touched, setTouched] = useState<TouchedFields>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const activeCard =
    CARD_TYPES.find((c) => c.id === fields.cardType) ?? CARD_TYPES[0];
  const errors = useMemo(() => getFormErrors(fields), [fields]);
  const hasErrors = Object.keys(errors).length > 0;

  function update<K extends keyof FormValues>(name: K, value: FormValues[K]) {
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  function markTouched(name: keyof FormValues) {
    setTouched((prev) => ({ ...prev, [name]: true }));
  }

  function showError(name: keyof FormValues): string | undefined {
    return touched[name] ? errors[name] : undefined;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setTouched({
      companyName: true,
      billingEmail: true,
      cardholderName: true,
      cardNumber: true,
      expiry: true,
      cvv: true,
    });
    if (hasErrors) return;

    setSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1400));
    setSubmitting(false);
    setSuccess(true);
  }

  if (success) {
    return (
   <SuccessMessage />
    );
  }

  return (
    <div className="min-h-225 bg-slate-50 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="mb-8 flex items-start gap-4">
          <button
            type="button"
            aria-label="Go back"
            className="mt-1.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-200/70 hover:text-slate-900">
            <ArrowLeft className="h-5 w-5" />
          </button>
          <div className="flex-1 text-center">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Billing Information
            </h1>
            <p className="mt-2 text-sm text-slate-500">
              Add your billing details to continue
            </p>
          </div>
          <div className="w-9" />
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">
          {/* Payment method card */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
            <div className="mb-6 flex items-center gap-2.5">
              <CreditCard className="h-5 w-5 text-[#292d3284] " />
              <h2 className="text-base font-bold text-slate-900">
                Add New Payment Method
              </h2>
            </div>

            <div className="space-y-5">
              <Field label="Company Name" error={showError("companyName")}>
                <input
                  className={inputClasses(Boolean(showError("companyName")))}
                  placeholder="e.g. Tech Solutions"
                  value={fields.companyName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    update("companyName", e.target.value)
                  }
                  onBlur={() => markTouched("companyName")}
                />
              </Field>

              <Field label="Billing Email" error={showError("billingEmail")}>
                <input
                  type="email"
                  className={inputClasses(Boolean(showError("billingEmail")))}
                  placeholder="billing@company.com"
                  value={fields.billingEmail}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    update("billingEmail", e.target.value)
                  }
                  onBlur={() => markTouched("billingEmail")}
                />
              </Field>

              <Field label="Country">
                <div className="relative">
                  <select className="w-full rounded-full border p-3 appearance-none">
                    <option value="egypt">Egypt</option>
                    {countries.map((country) => (
                      <option key={country.code} value={country.code}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                </div>
              </Field>

              <div>
                <label className="mb-2.5 block text-sm font-semibold text-slate-900">
                  Card Type
                </label>
                <div className="flex flex-col gap-3"> 
                   <RadioGroup 
                          defaultValue="visa"
                          className="w-fit">
                  {CARD_TYPES.map((c) => {
                    return (
                          <div key={c.id} className="flex items-center gap-3">
                            <RadioGroupItem value={c.id} id={c.id} />
                            <Label htmlFor={c.id}>
                               <Image src={c.img} alt={c.id} className=" w-10" />
                            </Label>
                          </div>   
                    );
                  })} 
                  </RadioGroup>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  label="Cardholder Name"
                  error={showError("cardholderName")}>
                  <input
                    className={inputClasses(
                      Boolean(showError("cardholderName")),
                    )}
                    placeholder="Enter your name on card"
                    value={fields.cardholderName}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      update("cardholderName", e.target.value)
                    }
                    onBlur={() => markTouched("cardholderName")}
                  />
                </Field>

                <Field label="Card Number" error={showError("cardNumber")}>
                  <input
                    inputMode="numeric"
                    className={inputClasses(Boolean(showError("cardNumber")))}
                    placeholder="1234 5678 9012 3456"
                    value={fields.cardNumber}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      update("cardNumber", formatCardNumber(e.target.value))
                    }
                    onBlur={() => markTouched("cardNumber")}
                  />
                </Field>

                <Field label="Expiration Date" error={showError("expiry")}>
                  <input
                    inputMode="numeric"
                    className={inputClasses(Boolean(showError("expiry")))}
                    placeholder="MM/YY"
                    value={fields.expiry}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      update("expiry", formatExpiry(e.target.value))
                    }
                    onBlur={() => markTouched("expiry")}
                  />
                </Field>

                <Field label="CVV/CVC" error={showError("cvv")}>
                  <input
                    inputMode="numeric"
                    type="password"
                    className={inputClasses(Boolean(showError("cvv")))}
                    placeholder={activeCard.cvvLength === 4 ? "1234" : "123"}
                    value={fields.cvv}
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      update(
                        "cvv",
                        e.target.value
                          .replace(/\D/g, "")
                          .slice(0, activeCard.cvvLength),
                      )
                    }
                    onBlur={() => markTouched("cvv")}
                  />
                </Field>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
            <h2 className="mb-5 text-base font-bold text-slate-900">
              Order Summary
            </h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-slate-800">
                  Premium Plan
                </p>
                <p className="text-xs text-slate-400">Billed Monthly</p>
              </div>
              <p className="text-sm font-semibold text-slate-800">EGP 10,000</p>
            </div>
            <div className="my-5 h-px bg-slate-100" />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-bold text-slate-900">Total</p>
                <p className="text-xs text-slate-400">Taxes may apply</p>
              </div>
              <p className="text-base font-extrabold text-slate-900">
                EGP 10,000
              </p>
            </div>
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 text-sm font-bold text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-70">
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Processing…
              </>
            ) : (
              "Pay"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
