"use client";
import {
  AuthCard,
  AuthHeader,
  AuthField,
  HiringPanel,
  PrimaryButton,
} from "@/features/auth/components/AuthShell";
import { SignupProgress } from "@/features/auth/components/SignupProgress";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import * as z from "zod";

function Error({ message }: { message?: string }) {
  return message ? (
    <p className="text-[#c63232] text-xs -mt-[14px] mb-3">{message}</p>
  ) : null;
}
const phoneRegex = /^\+?[1-9]\d{1,14}$/;
const schema = z.object({
  aboutCompany: z.string().min(2, "Please enter a brief about your company"),
  location: z.string().min(2, "Please enter your location company"),
  phone: z.string().regex(phoneRegex, "Please enter a valid phone number"),
  website: z.string().url("Please enter your website url"),
  logo: z.instanceof(File, {
    message: "please select logo",
  }),
});

type Values = z.infer<typeof schema>;

export default function Signup2Page() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<Values>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();
  function submit() {
    router.push("signup3");
  }

  return (
      <main className="min-h-screen bg-white px-4 pb-12 pt-4 text-[#121212] sm:px-7 sm:pt-8">
        <div className="w-[min(1202px,100%)] mx-auto">
          <AuthHeader title="Create Your Account" signup />
          <SignupProgress step={2} label="Company details" />
          <AuthCard
            className="mt-[14px] grid max-w-none grid-cols-1 gap-8 px-5 py-[30px] pt-9 sm:px-8 sm:pt-[54px] md:gap-[35px] xl:min-h-[948px] xl:grid-cols-[minmax(0,560px)_minmax(0,466px)] xl:gap-[75px] xl:px-[50px]">
            <form
              className="w-full min-w-0 max-w-[560px] xl:max-w-none"
              noValidate
              onSubmit={handleSubmit(submit)}>
              <AuthField label="About Company">
                <textarea
                  {...register("aboutCompany")}
                  placeholder="A brief overview of your company"
                />
              </AuthField>
              <Error message={errors.aboutCompany?.message} />
              <AuthField label="Location">
                <input
                  {...register("location")}
                  placeholder="Enter your location company"
                />
              </AuthField>
              <Error message={errors.location?.message} />
              <AuthField label="Phone Number">
                <input {...register("phone")} placeholder="🇪🇬  20+" />
              </AuthField>
              <Error message={errors.phone?.message} />

              <AuthField label="Website">
                <input {...register("website")} placeholder="https:\\" />
              </AuthField>
              <Error message={errors.website?.message} />

              <AuthField label="Company Size">
                <select defaultValue="1–10 Employees">
                  <option value="1–10 Employees">1–10 Employees</option>
                  <option value="11–50 Employees">11–50 Employees</option>
                </select>
              </AuthField>
              <AuthField label="Logo">
                <input
                  type="file"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setValue("logo", file, { shouldValidate: true });
                    }
                  }}
                />
              </AuthField>
              <Error message={errors.logo?.message} />
              <div className="mt-[14px] flex flex-col gap-4 sm:flex-row sm:gap-[116px]">
                <Link className="w-full sm:w-[222px] sm:shrink-0" href={"/signup"}>
                  <button
                    className="h-[72px] w-full rounded-[20px] border border-[#d6d6d6] bg-transparent text-[20px] text-[#55565a] transition-colors hover:bg-[#dbdbdb]"
                    type="button">
                    Back
                  </button>
                </Link>
                <PrimaryButton>Continue　→</PrimaryButton>
              </div>
              {/* (Backend): Upload the company logo and save company profile here. */}
            </form>
            <HiringPanel />
          </AuthCard>
        </div>
      </main>
  );
}
