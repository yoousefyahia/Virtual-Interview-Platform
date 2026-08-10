export function SignupProgress({
  step,
  label,
}: {
  step: 1 | 2 | 3;
  label: string;
}) {
  return (
    <div className="mx-auto mb-4 -mt-[17px] text-center text-[#57585e]">
        <div className="flex items-center justify-center gap-2.5 before:h-0.5 before:w-14 before:bg-[#dddfe5] before:content-[''] after:h-0.5 after:w-14 after:bg-[#dddfe5] after:content-['']">
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
  );
}
