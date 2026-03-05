import "@codax/ui/globals.css";
import { Metadata } from "next";
import { inter } from "@/assets/fonts/fonts";

import Header from "@/components/home/header";
import Footer from "@/components/home/footer";
import { Toaster } from "@codax/ui/components/sonner";
import RootWrapper from "@/components/home/rootWrapper";

export const metadata: Metadata = {
  title: "Codax",
  description: "A growing collection of free web tools for students, developers, and creators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={`${inter.className} flex flex-col min-h-screen`}>
          <RootWrapper>
            <Header />
            {children}
            <Footer />
          </RootWrapper>
          <Toaster position="bottom-right" />
        </body>
      </html>
    </>
  );
}
