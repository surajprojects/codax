import Hero from "@/components/home/hero";
import Tools from "@/components/home/tools";

export default function Home() {
  return (
    <>
      <section className="w-full pt-[3.8rem]">
        {/* Hero */}
        <Hero />
        {/* Tools */}
        <Tools />
      </section>
    </>
  );
}
