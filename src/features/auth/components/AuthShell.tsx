import Image from "next/image";
import { AuthBrand } from "./AuthBrand";
import styles from "./auth.module.css";
import image from "@/assets/images/Frame16.png"
export function AuthHeader({
  title,
  signup = false,
}: {
  title: string;
  signup?: boolean;
}) {
  return (
    <header
      className={"flex justify-between text-lg sm:text-3xl font-bold p-8"}>
      <h1>{title}</h1>
      {signup ? "SignUp" : <AuthBrand />}
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
          src={image}
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
