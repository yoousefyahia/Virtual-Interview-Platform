import Image from "next/image";
import image from "@/assets/images/Frame16.png";

export function AuthHeader({ title }: { title: string; signup?: boolean }) {
  return (
    <header
      className={"flex justify-between text-lg sm:text-3xl font-bold p-8"}>
      <h1>{title}</h1>
      SignUp
    </header>
  );
}

export function AuthCard({
  children,
  className = "",
  style = {},
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section
      className={`max-h-screen mt-[75px] px-[51px] py-[112px] rounded-[33px] bg-[#f6f6f6] shadow-[0_2px_2px_rgba(0,0,0,0.02)] ${className}`}
      style={style}>
      {children}
    </section>
  );
}

export function HiringPanel() {
  return (
    <section
      className={`relative overflow-hidden rounded-[20px] bg-[#111b72] hidden md:block`}>
      <Image
        src={image}
        alt="Hire smarter, grow faster"
        fill
        priority
        sizes="(max-width: 200px) 5y0vw, 200px"
        className="hidden md:block "
      />
    </section>
  );
}

export function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="w-full h-[72px] border-0 rounded-[21px] bg-[#225df4] hover:bg-[#174cda] shadow-[0_3px_2px_rgba(0,0,0,0.03)] text-white text-[20px] cursor-pointer"
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
    <>
      <style>{`
        .auth-field-input input,
        .auth-field-input select,
        .auth-field-input textarea {
          width: 100%;
          border: 1px solid #e5e5e5;
          border-radius: 9999px;
          background-color: white;
          box-shadow: 0 1px 1px rgba(0, 0, 0, 0.02);
          padding: 0 13px;
          color: #52525a;
          font-size: 16px;
          font-weight: 400;
          outline: none;
        }

        .auth-field-input input,
        .auth-field-input select {
          height: 56px;
        }

        .auth-field-input textarea {
          height: 101px;
          border-radius: 28px;
          padding-top: 14px;
          resize: vertical;
        }

        .auth-field-input input:focus,
        .auth-field-input select:focus,
        .auth-field-input textarea:focus {
          border-color: #225df4;
        }
      `}</style>
      <label className="block mb-5 text-[#5a5a5f] text-[25px] font-bold">
        <span className="block mb-[15px]">{label}</span>
        <div className="auth-field-input">{children}</div>
      </label>
    </>
  );
}
