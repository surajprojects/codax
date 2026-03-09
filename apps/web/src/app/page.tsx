import Hero from "@/components/home/hero";
import Tools from "@/components/home/tools";
import WhyCodax from "@/components/home/whyCodax";
import GetUpdates from "@/components/home/getUpdates";
import HowItWorks from "@/components/home/howItWorks";

export default function Home() {
  return (
    <>
      <section className="w-full pt-[3.8rem]">
        {/* Hero */}
        <Hero />
        {/* Tools */}
        <Tools />
        {/* Why Codax */}
        <WhyCodax />
        {/* How it works */}
        <HowItWorks />
        {/* Stay in the loop */}
        <GetUpdates />
      </section>
    </>
  );
}
