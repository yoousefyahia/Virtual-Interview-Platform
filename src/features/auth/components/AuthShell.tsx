import Image from "next/image";
import image from "@/assets/images/Frame16.png";

export function AuthHeader({ title }: { title: string; signup?: boolean }) {
  return (
    <header className="flex items-start justify-between gap-4 p-4 text-xl font-bold sm:p-8 sm:text-3xl">
      <h1 className="min-w-0">{title}</h1>
      <span className="shrink-0">SignUp</span>
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
    <section
      className={`mt-8 rounded-[24px] bg-[#f6f6f6] px-5 py-9 shadow-[0_2px_2px_rgba(0,0,0,0.02)] sm:mt-[75px] sm:rounded-[33px] sm:px-[51px] sm:py-[112px] ${className}`}>
      {children}
    </section>
  );
}

export function HiringPanel() {
  return (
    <section className="relative hidden aspect-[466/720] w-full overflow-hidden rounded-[20px] md:block xl:aspect-auto">
      <Image
        src={image}
        alt="Hire smarter, grow faster"
        fill
        className="object-cover"
      />
    </section>
  );
}

export function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="h-[72px] w-full rounded-[21px] border-0 bg-[#225df4] text-[20px] text-white shadow-[0_3px_2px_rgba(0,0,0,0.03)] transition-colors hover:bg-[#174cda]"
      type="submit">
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
    <label className="mb-5 block text-xl font-bold text-[#5a5a5f] sm:text-[25px]">
        <span className="block mb-[15px]">{label}</span>
        <div className="[&_input]:h-14 [&_input]:w-full [&_input]:rounded-full [&_input]:border [&_input]:border-[#e5e5e5] [&_input]:bg-white [&_input]:px-[13px] [&_input]:text-base [&_input]:font-normal [&_input]:text-[#52525a] [&_input]:shadow-[0_1px_1px_rgba(0,0,0,0.02)] [&_input]:outline-none [&_input:focus]:border-[#225df4] [&_select]:h-14 [&_select]:w-full [&_select]:rounded-full [&_select]:border [&_select]:border-[#e5e5e5] [&_select]:bg-white [&_select]:px-[13px] [&_select]:text-base [&_select]:font-normal [&_select]:text-[#52525a] [&_select]:shadow-[0_1px_1px_rgba(0,0,0,0.02)] [&_select]:outline-none [&_select:focus]:border-[#225df4] [&_textarea]:h-[101px] [&_textarea]:w-full [&_textarea]:resize-y [&_textarea]:rounded-[28px] [&_textarea]:border [&_textarea]:border-[#e5e5e5] [&_textarea]:bg-white [&_textarea]:px-[13px] [&_textarea]:pt-[14px] [&_textarea]:text-base [&_textarea]:font-normal [&_textarea]:text-[#52525a] [&_textarea]:shadow-[0_1px_1px_rgba(0,0,0,0.02)] [&_textarea]:outline-none [&_textarea:focus]:border-[#225df4]">
          {children}
        </div>
      </label>
  );
}
