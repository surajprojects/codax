import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { Twitter, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="w-full border-t border-gray-300 bg-card/50 p-6 md:px-12">
        <div className="mx-auto w-full xl:max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Tagline */}
            <div className="flex flex-col items-center md:items-start gap-2.5">
              <Link href="/" className="flex items-center gap-1.5">
                <div className="size-5 flex items-center justify-center rounded-lg">
                  <Image src={logo} width={100} height={100} alt="Codax Logo" />
                </div>
                <span className="font-semibold">codax</span>
              </Link>
              <p className="text-xs text-muted-foreground">Growing collection of free web tools</p>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com/TigerXInsights"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-secondary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-xs text-muted-foreground">
            <p>&copy; {currentYear} Codax. Built by TigerxInsights.</p>
            <p className="font-mono">Made with ❤️ shipped from the cloud ☁️</p>
          </div>
        </div>
      </footer>
    </>
  );
}
