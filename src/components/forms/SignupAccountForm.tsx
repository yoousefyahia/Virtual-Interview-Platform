"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AuthField, PrimaryButton } from "@/features/auth/components/AuthShell";
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
    <form
      className="w-full max-w-[560px]"
      noValidate
      onSubmit={handleSubmit(submit)}>
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
      <label className="flex items-center justify-center gap-2 my-[15px] text-[#b6b6ba] text-[15px]">
        <input
          {...register("terms")}
          type="checkbox"
          className="w-[15px] h-[15px]"
        />
        I agree to the Terms & Privacy Policy
      </label>
      <Error message={errors.terms?.message} />
      <PrimaryButton>Create Account　→</PrimaryButton>
    </form>
  );
}
function Error({ message }: { message?: string }) {
  return message ? (
    <p className="text-[#c63232] text-xs -mt-[14px] mb-3">{message}</p>
  ) : null;
}
