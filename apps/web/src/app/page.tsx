import GetUpdates from "@/components/home/getUpdates";
import Hero from "@/components/home/hero";
import HowItWorks from "@/components/home/howItWorks";
import Tools from "@/components/home/tools";
import WhyCodax from "@/components/home/whyCodax";

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
