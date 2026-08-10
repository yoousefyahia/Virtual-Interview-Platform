import Link from "next/link";
import {
  AuthCard,
  AuthHeader,
  HiringPanel,
} from "@/features/auth/components/AuthShell";
import { SignupProgress } from "@/features/auth/components/SignupProgress";

export default function Signup3Page() {
  return (
      <main className="min-h-screen bg-white px-4 pb-12 pt-4 text-[#121212] sm:px-7 sm:pt-8">
        <div className="w-[min(1202px,100%)] mx-auto">
          <AuthHeader title="Verify Email" signup />
          <SignupProgress step={3} label="Welcome to Hire Company" />
          <AuthCard
            className="mt-[14px] grid max-w-none grid-cols-1 gap-8 px-5 py-[30px] pt-9 sm:px-8 sm:pt-[54px] md:gap-[35px] xl:min-h-[948px] xl:grid-cols-[minmax(0,560px)_minmax(0,466px)] xl:gap-[75px] xl:px-[50px]">
            <div className="min-w-0 self-center">
              <h2 className="h2 text-3xl sm:text-5xl">
                You&apos;re ready to start hiring
              </h2>
              <p className="mt-10 text-xl font-bold text-[#5b5c61] sm:mt-14 sm:text-[32px]">
                ✓　Account Created
              </p>
              <p className="mt-10 text-xl font-bold text-[#5b5c61] sm:mt-16 sm:text-[32px]">
                ✓　Company Profile Completed
              </p>
              <Link
                className="mt-10 grid h-[72px] w-full place-items-center rounded-[21px] border-0 bg-[#225df4] text-[20px] text-white no-underline shadow-[0_3px_2px_rgba(0,0,0,0.03)] transition-colors hover:bg-[#174cda] sm:mt-[60px]"
                href="/login">
                Login　✓
              </Link>
            </div>
            <HiringPanel />
          </AuthCard>
        </div>
      </main>
  );
}
