import styles from "./auth.module.css";

export function SignupProgress({
  step,
  label,
}: {
  step: 1 | 2 | 3;
  label: string;
}) {
  return (
    <div className={styles.progress}>
      <div>
        {[1, 2, 3].map((number) => (
          <span
            key={number}
            className={number <= step ? styles.progressActive : ""}>
            {number}
          </span>
        ))}
      </div>
      <p>
        Step {step} of 3 — {label}
      </p>
    </div>
  );
}
