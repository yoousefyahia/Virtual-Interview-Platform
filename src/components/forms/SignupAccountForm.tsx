"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AuthField, PrimaryButton } from "@/features/auth/components/AuthShell";
import styles from "@/features/auth/components/auth.module.css";
import { useRouter } from "next/navigation";

const schema = z
  .object({
    name: z.string().min(2, "Enter your name."),
    company: z.string().min(2, "Enter your company name."),
    email: z.string().email("Enter a valid work email."),
    password: z.string().min(8, "Use at least 8 characters."),
    confirmPassword: z.string(),
    terms: z.literal(true, {
      errorMap: () => ({ message: "Accept the terms to continue." }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords must match.",
  });
type Values = z.infer<typeof schema>;

export function SignupAccountForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { terms: false } as never,
  });
  const router = useRouter();
  function submit(_: Values) {
    /* (Backend): Call company account creation API here. */
    router.push("signup/signup2");
  }
  return (
    <form className={styles.form} noValidate onSubmit={handleSubmit(submit)}>
      <AuthField label="Your Name">
        <input {...register("name")} placeholder="Enter your name" />
      </AuthField>
      <Error message={errors.name?.message} />
      <AuthField label="Company Name">
        <input {...register("company")} placeholder="Enter your company name" />
      </AuthField>
      <Error message={errors.company?.message} />
      <AuthField label="Work Email">
        <input
          {...register("email")}
          type="email"
          placeholder="Enter your work email"
        />
      </AuthField>
      <Error message={errors.email?.message} />
      <AuthField label="Create Password">
        <input
          {...register("password")}
          type="password"
          placeholder="Enter password"
        />
      </AuthField>
      <Error message={errors.password?.message} />
      <AuthField label="Confirm Password">
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm password"
        />
      </AuthField>
      <Error message={errors.confirmPassword?.message} />
      <AuthField label="Industry">
        <select defaultValue="technology">
          <option value="technology">Technology</option>
          <option value="finance">Finance</option>
          <option value="healthcare">Healthcare</option>
        </select>
      </AuthField>
      <label className={styles.agreement}>
        <input {...register("terms")} type="checkbox" />I agree to the Terms &
        Privacy Policy
      </label>
      <Error message={errors.terms?.message} />
      <PrimaryButton>Create Account　→</PrimaryButton>
    </form>
  );
}
function Error({ message }: { message?: string }) {
  return message ? (
    <p style={{ color: "#c63232", fontSize: 13, margin: "-14px 0 12px" }}>
      {message}
    </p>
  ) : null;
}
