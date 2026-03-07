import Link from "next/link";
import { ArrowRight, Dot, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center gap-4 sm:gap-6 my-16 sm:my-20 px-4">
        {/* Tag */}
        <span className="flex items-center text-xs bg-gray-100 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-gray-200 text-gray-600/80 gap-2">
          <Sparkles className="size-3.5 text-primary" /> Free tools, no sign-up needed
        </span>

        {/* Tagline & Description */}
        <div className="w-full sm:w-xl flex flex-col items-center justify-center  gap-4 sm:gap-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold">
            Small tools that <span className="text-primary">actually help</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            A growing collection of free web tools for students, developers, and creators. No
            accounts, no bloat—just open and use.
          </p>
        </div>

        {/* CTA */}
        <div className="mx-auto w-full max-w-xs grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="#"
            className="flex items-center justify-center gap-1.5 text-xs sm:text-sm bg-primary text-white py-2.5 sm:py-3 w-full rounded-xl font-semibold btn shadow-xs hover:shadow-sm"
          >
            Browser tools <ArrowRight className="size-4" strokeWidth={2.5} />
          </Link>
          <Link
            href="#"
            className="flex items-center justify-center border border-gray-200 gap-1.5 text-xs sm:text-sm py-2.5 sm:py-3 w-full rounded-xl font-semibold btn shadow-xs hover:shadow-sm"
          >
            Learn more
          </Link>
        </div>

        {/* Points */}
        <ul className="flex items-center justify-center text-xs gap-x-4 sm:gap-x-8 text-gray-500 flex-wrap">
          <li className="flex items-center">
            <Dot className="text-primary size-7" />
            Always free
          </li>
          <li className="flex items-center">
            <Dot className="text-primary size-7" />
            No sign-up
          </li>
          <li className="flex items-center">
            <Dot className="text-primary size-7" />
            Open source friendly
          </li>
        </ul>
      </div>
    </>
  );
}
