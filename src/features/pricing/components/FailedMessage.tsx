import {
  XCircle
} from "lucide-react";
import Link from "next/link";
function FailedMessage() {
  return (
   <div className="flex flex-col m-auto text-center rounded-2xl min-h-140 w-4/5 items-center justify-center bg-white p-6">
          <div className=" mb-4 flex items-center justify-center rounded-full bg-emerald-50">
            <XCircle
              className=" text-red-500"
              strokeWidth={2}
              size={100}
            />
          </div>
          <h2 className="text-4xl font-bold ">
            Payment Failed
          </h2>
          <p className="mt-1.5 text-base font-bold text-[#B0B0B0]">
We couldn’t process your payment          </p>
          <Link href="/" className="mt-6 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
              Go Home
          </Link>
      </div>  )
}

export default FailedMessage