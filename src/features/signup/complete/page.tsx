import Link from "next/link";
import { AuthCard, AuthHeader, HiringPanel } from "@/features/signup/components/AuthShell";
import { SignupProgress } from "@/features/signup/components/SignupProgress";
import styles from "@/features/signup/components/auth.module.css";
export default function SignupCompletePage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <AuthHeader title="Verify Email" signup />
        <SignupProgress step={3} label="Welcome to Hire Company" />
        <AuthCard className={styles.signupCard}>
          <div style={{ alignSelf: "center" }}>
            <h2 style={{ fontSize: 48, lineHeight: 1.5 }}>
              You&apos;re ready to
              <br />
              start hiring
            </h2>
            <p
              style={{
                marginTop: 55,
                color: "#5b5c61",
                fontSize: 32,
                fontWeight: 700,
              }}>
              ✓　Account Created
            </p>
            <p
              style={{
                marginTop: 65,
                color: "#5b5c61",
                fontSize: 32,
                fontWeight: 700,
              }}>
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
