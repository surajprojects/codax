import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { Twitter, Github } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="border-t border-border bg-card/50 px-6 md:px-20 lg:px-32 xl:px-96">
            <div className="container py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & attribution */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <a href="/" className="flex items-center gap-2">
                            <div className="size-6 flex items-center justify-center rounded-lg">
                                <Image
                                    src={logo}
                                    width={100}
                                    height={100}
                                    alt="Codax Logo"
                                />
                            </div>
                            <span className="font-semibold">codax</span>
                        </a>
                        <p className="text-sm text-muted-foreground">
                            Growing collection of free web tools
                        </p>
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <a href="#tools" className="hover:text-foreground transition-colors">
                            Tools
                        </a>
                        <a href="#about" className="hover:text-foreground transition-colors">
                            About
                        </a>
                        <a href="#subscribe" className="hover:text-foreground transition-colors">
                            Updates
                        </a>
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
                <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
                    <p>&copy; {currentYear} Codax. Built by TigerxInsights.</p>
                    <p className="font-mono">Made with ❤️ shipped from the cloud ☁️</p>
                </div>
            </div>
        </footer>
    );
};