import Link from "next/link";
import {
  AuthCard,
  AuthHeader,
  HiringPanel,
} from "@/features/auth/components/AuthShell";
import { SignupProgress } from "@/features/auth/components/SignupProgress";

export default function Signup3Page() {
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
          <AuthHeader title="Verify Email" signup />
          <SignupProgress step={3} label="Welcome to Hire Company" />
          <AuthCard
            className="signup-page-card mt-[14px] px-[50px] py-[30px] pt-[54px] grid gap-[75px] max-w-none"
            style={{ gridTemplateColumns: "560px 466px", minHeight: "948px" }}>
            <div className="self-center">
              <h2 className="h2 text-3xl sm:text-5xl ">
                You&apos;re ready to start hiring
              </h2>
              <p className="mt-14 text-[#5b5c61] text-xl sm:text-[32px] font-bold">
                ✓　Account Created
              </p>
              <p className="mt-16 text-[#5b5c61] text-xl sm:text-[32px] font-bold">
                ✓　Company Profile Completed
              </p>
              <Link
                className="grid place-items-center w-full h-[72px] mt-[60px] border-0 rounded-[21px] bg-[#225df4] hover:bg-[#174cda] shadow-[0_3px_2px_rgba(0,0,0,0.03)] text-white text-[20px] cursor-pointer no-underline"
                href="/login">
                Login　✓
              </Link>
            </div>
            <HiringPanel />
          </AuthCard>
        </div>
      </main>
    </>
  );
}
