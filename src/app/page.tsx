import { AuthCard, AuthHeader, HiringPanel } from "@/components/auth/AuthShell";
import { SignupProgress } from "@/components/auth/SignupProgress";
import { SignupAccountForm } from "@/components/forms/SignupAccountForm";
import styles from "@/components/auth/auth.module.css";

export default function SignupPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <AuthHeader title="Create Your Account" signup />
        <SignupProgress step={1} label="Company details" />
        <AuthCard className={styles.signupCard}>
          <SignupAccountForm />
          <HiringPanel />
        </AuthCard>
      </div>
    </main>
  );
}
