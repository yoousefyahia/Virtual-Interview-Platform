import Image from "next/image";
import { AuthBrand } from "./AuthBrand";
import styles from "./auth.module.css";

export function AuthHeader({
  title,
  signup = false,
}: {
  title: string;
  signup?: boolean;
}) {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      {signup ? <strong>SignUp</strong> : <AuthBrand />}
    </header>
  );
}

export function AuthCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`${styles.card} ${className}`}>{children}</section>
  );
}

export function HiringPanel({ login = false }: { login?: boolean }) {
  return (
    <aside
      className={`${styles.hiringPanel} ${login ? styles.loginPanel : ""}`}>
      {login ? (
        <>
          <h2>Welcome Back</h2>
          <AuthBrand />
        </>
      ) : (
        <Image
          src="/Frame%2016.png"
          alt="Hire smarter, grow faster"
          fill
          priority
          sizes="(max-width: 800px) 100vw, 466px"
        />
      )}
    </aside>
  );
}

export function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className={styles.primaryButton} type="submit">
      {children}
    </button>
  );
}

export function AuthField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className={styles.field}>
      <span>{label}</span>
      {children}
    </label>
  );
}
