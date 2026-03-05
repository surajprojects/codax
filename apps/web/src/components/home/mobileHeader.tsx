"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { HeaderLinksTypeList } from "@/utils/types/headerLinksType";

export default function MobileHeader({ navLinks }: { navLinks: HeaderLinksTypeList }) {
  const [showMenu, setShowMenu] = useState<boolean>(true);
  return (
    <>
      <button
        onClick={() => setShowMenu((prevData) => !prevData)}
        className="block sm:hidden transition-effect btn hover:bg-gray-200/75 p-1 rounded-lg"
      >
        {showMenu ? <X className="size-4" /> : <Menu className="size-4" />}
      </button>
      {/* Nav Links */}
      {showMenu && (
        <div
          onClick={() => setShowMenu((prevData) => !prevData)}
          className="absolute w-screen h-screen  top-0 left-0"
        >
          <div className="absolute top-10 right-8 bg-white transition-effect border border-gray-200 shadow-sm hover:shadow-md rounded-lg py-2.5 px-4 grid grid-cols-1 md:hidden text-muted text-xs gap-1.5">
            {navLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.path}
                className="hover:text-muted/90 transition-effect capitalize"
              >
                {item.name}
              </Link>
            ))}

            {/* CTA */}
            <Link
              href="#getupdates"
              className="text-primary rounded-lg btn hover:text-primary/90 capitalize"
            >
              get updates
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
