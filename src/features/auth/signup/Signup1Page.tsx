import {
  AuthCard,
  AuthHeader,
  HiringPanel,
} from "@/features/auth/components/AuthShell";
import { SignupProgress } from "@/features/auth/components/SignupProgress";
import { SignupAccountForm } from "@/components/forms/SignupAccountForm";
import styles from "@/features/auth/components/auth.module.css";

function Signup1Page() {
  return (
    <div className={styles.shell}>
      <AuthHeader title="Create Your Account" signup />
      <SignupProgress step={1} label="Company details" />
      <AuthCard className={styles.signupCard}>
        <SignupAccountForm />
        <HiringPanel />
      </AuthCard>
    </div>
  );
}

export default Signup1Page;
