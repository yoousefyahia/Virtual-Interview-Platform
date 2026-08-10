import {
  AuthCard,
  AuthHeader,
  HiringPanel,
} from "@/features/auth/components/AuthShell";
import { SignupProgress } from "@/features/auth/components/SignupProgress";
import { SignupAccountForm } from "@/components/forms/SignupAccountForm";

function Signup1Page() {
  return (
      <main className="min-h-screen bg-white px-4 pb-12 pt-4 text-[#121212] sm:px-7 sm:pt-8">
        <div className="w-[min(1202px,100%)] mx-auto">
          <AuthHeader title="Create Your Account" />
          <SignupProgress step={1} label="Company details" />
          <AuthCard
            className="mt-[14px] grid max-w-none grid-cols-1 gap-8 px-5 py-[30px] pt-9 sm:px-8 sm:pt-[54px] md:gap-[35px] xl:min-h-[948px] xl:grid-cols-[minmax(0,560px)_minmax(0,466px)] xl:gap-[75px] xl:px-[50px]">
            <SignupAccountForm />
            <HiringPanel />
          </AuthCard>
        </div>
      </main>
  );
}

export default Signup1Page;
