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
    <>
      <style>{`
        @media (max-width: 900px) {
          .signup-page-card {
            grid-template-columns: 1fr !important;
            gap: 35px !important;
            padding: 45px !important;
          }
          .signup-page-card .hiring-panel {
            width: 100%;
            height: auto;
            aspect-ratio: 466/720;
            margin: 0 !important;
          }
        }
        @media (max-width: 600px) {
          .signup-page-card {
            padding: 20px !important;
          }
        }
      `}</style>
      <main className="min-h-screen pt-8 px-7 pb-12 bg-white text-[#121212]">
        <div className="w-[min(1202px,100%)] mx-auto">
          <AuthHeader title="Create Your Account" signup />
          <SignupProgress step={2} label="Company details" />
          <AuthCard
            className="signup-page-card mt-[14px] px-[50px] py-[30px] pt-[54px] grid gap-[75px] max-w-none"
            style={{ gridTemplateColumns: "560px 466px", minHeight: "948px" }}>
            <form
              className="w-full max-w-[560px]"
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
              <div className="flex gap-[116px] mt-[14px]">
                <Link href={"/signup"}>
                  <button
                    className="w-[222px] h-[72px] border border-[#d6d6d6] rounded-[20px] bg-transparent text-[#55565a] text-[20px] cursor-pointer transition-all hover:bg-[#dbdbdb]"
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
    </>
  );
}
