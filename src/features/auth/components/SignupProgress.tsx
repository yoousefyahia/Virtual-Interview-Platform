export function SignupProgress({
  step,
  label,
}: {
  step: 1 | 2 | 3;
  label: string;
}) {
  return (
    <>
      <style>{`
        .signup-progress-container::before,
        .signup-progress-container::after {
          content: "";
          width: 56px;
          height: 2px;
          background: #dddfe5;
        }
      `}</style>
      <div className="-mt-[17px] mx-auto mb-4 text-center text-[#57585e]">
        <div className="flex items-center justify-center gap-2.5 signup-progress-container">
          {[1, 2, 3].map((number) => (
            <span
              key={number}
              className={`grid place-items-center w-9 h-9 rounded-full ${
                number <= step
                  ? "bg-[#1818d7] text-white"
                  : "bg-[#e3e4eb] text-[#55565b]"
              }`}>
              {number}
            </span>
          ))}
        </div>
        <p className="mt-4 text-base">
          Step {step} of 3 — {label}
        </p>
      </div>
    </>
  );
}
