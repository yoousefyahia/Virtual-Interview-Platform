import {
  AuthCard,
  AuthHeader,
  HiringPanel,
} from "@/features/auth/components/AuthShell";
import { SignupProgress } from "@/features/auth/components/SignupProgress";
import { SignupAccountForm } from "@/components/forms/SignupAccountForm";

function Signup1Page() {
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
          <AuthHeader title="Create Your Account" />
          <SignupProgress step={1} label="Company details" />
          <AuthCard
            className="signup-page-card mt-[14px] px-[50px] py-[30px] pt-[54px] grid gap-[75px] max-w-none"
            style={{ gridTemplateColumns: "560px 466px", minHeight: "948px" }}>
            <SignupAccountForm />
            <HiringPanel />
          </AuthCard>
        </div>
      </main>
    </>
  );
}

export default Signup1Page;
