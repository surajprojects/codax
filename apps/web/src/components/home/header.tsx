import Image from "next/image";
import logo from "@/assets/images/logo.png";
import { Menu } from "lucide-react";

export default function Header() {
    return (
        <>
            <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md px-6 md:px-20 lg:px-32 xl:px-96 flex justify-center items-center">
                <div className="container flex h-14 md:h-16 items-center justify-between">
                    {/* Logo */}
                    <a href="/" className="flex items-center gap-2.5 group">
                        <div className="size-6 flex items-center justify-center rounded-lg">
                            <Image
                                src={logo}
                                width={100}
                                height={100}
                                alt="Codax Logo"
                            />
                        </div>
                        <span className="text-xl font-semibold tracking-tight">
                            codax
                        </span>
                    </a>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#tools" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            Tools
                        </a>
                        <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                            About
                        </a>
                        <a
                            href="#subscribe"
                            className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                        >
                            Get updates
                        </a>
                    </nav>

                    {/* Mobile menu placeholder */}
                    <button className="md:hidden hover:bg-secondary rounded-lg transition-colors p-1.5 cursor-pointer">
                        <Menu className="size-5" />
                    </button>
                </div>
            </header>
        </>
    );
};