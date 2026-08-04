import Link from "next/link";
import {
  AuthCard,
  AuthHeader,
  HiringPanel,
} from "@/features/auth/components/AuthShell";
import { SignupProgress } from "@/features/auth/components/SignupProgress";
import styles from "@/features/auth/components/auth.module.css";
export default function Signup3Page() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <AuthHeader title="Verify Email" signup />
        <SignupProgress step={3} label="Welcome to Hire Company" />
        <AuthCard className={styles.signupCard}>
          <div className="self-center">
            <h2 className="h2 text-3xl sm:text-5xl ">You&apos;re ready to start hiring</h2>
            <p className="mt-14 text-[#5b5c61] text-xl sm:text-[32px] font-bold">
              ✓　Account Created
            </p>
            <p className="mt-16 text-[#5b5c61] text-xl sm:text-[32px] font-bold">
              ✓　Company Profile Completed
            </p>
            <Link
              className={styles.primaryButton}
              style={{
                display: "grid",
                placeItems: "center",
                marginTop: 60,
                textDecoration: "none",
              }}
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
