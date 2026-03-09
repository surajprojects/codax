import Link from "next/link";
import Image from "next/image";
import MobileHeader from "./mobileHeader";
import logo from "@/assets/images/logo.png";
import { HeaderLinksTypeList } from "@/utils/types/headerLinksType";

export default function Header() {
  const navLinks: HeaderLinksTypeList = [
    {
      name: "tools",
      path: "#tools",
    },
    {
      name: "about",
      path: "#whycodax",
    },
  ];
  return (
    <>
      <header className="fixed top-0 z-50 w-full glass">
        <nav className="flex justify-between items-center px-6 md:px-12 py-3 mx-auto w-full xl:max-w-7xl">
          {/* Logo & Title */}
          <div className="text-md font-semibold tracking-tight whitespace-nowrap shrink flex items-center">
            <div className="size-5 rounded-full mr-1.5">
              <Image src={logo} width={700} height={700} alt="logo" preload={true} />
            </div>
            <Link href={"/"}>codax</Link>
          </div>

          {/* Nav Links */}
          <div className="hidden sm:flex text-muted text-xs font-medium items-center gap-x-4">
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
              className="flex justify-center items-center text-primary rounded-lg btn hover:text-primary/90 capitalize"
            >
              get updates
            </Link>
          </div>

          {/* Mobile Header */}
          <MobileHeader navLinks={navLinks} />
        </nav>
      </header>
    </>
  );
}
