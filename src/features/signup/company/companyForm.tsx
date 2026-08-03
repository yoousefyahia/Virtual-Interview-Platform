"use client";
import {
  AuthCard,
  AuthHeader,
  AuthField,
  HiringPanel,
  PrimaryButton,
} from "@/components/auth/AuthShell";
import { SignupProgress } from "@/features/signup/components/SignupProgress";
import styles from "@/components/auth/auth.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import * as z from "zod";

function Error({ message }: { message?: string }) {
  return message ? (
    <p style={{ color: "#c63232", fontSize: 13, margin: "-14px 0 12px" }}>
      {message}
    </p>
  ) : null;
}
const phoneRegex = /^\+?[1-9]\d{1,14}$/;
const schema = z.object({
  aboutCompany: z.string().min(2, "Please enter a brief about your company"),
  location: z.string().min(2, "Please enter your location company"),
  phone: z.string().regex(phoneRegex, "Please enter a valid phone number"),
  website: z.string().url("Please enter your website url"),
  logo: z
    .instanceof(File, {
      message: "please select logo",
    })
});

type Values = z.infer<typeof schema>;

export default function CompanyForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue
  } = useForm<Values>({
    resolver: zodResolver(schema),
  });
  const router = useRouter();
  function submit(_: Values) {
    router.push("complete");
  }

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <AuthHeader title="Create Your Account" signup />
        <SignupProgress step={2} label="Company details" />
        <AuthCard className={styles.signupCard}>
          <form
            className={styles.form}
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
                onChange={(e)=>{
                    const file = e.target.files?.[0]
                    if(file){
                    setValue("logo",file,{shouldValidate:true})
                    }
                }}
              />
            </AuthField>
            <Error message={errors.logo?.message} />
            <div className={styles.splitActions}>
              <Link href={"/signup"}>
                <button className={styles.backButton} type="button">
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
