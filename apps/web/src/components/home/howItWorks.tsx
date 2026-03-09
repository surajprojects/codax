import SectionHeader, { SectionHeaderType } from "@codax/ui/components/ui/sectionHeader";

export default function HowItWorks() {
  const howItWorksData: SectionHeaderType = {
    title: "How it works",
    description: "Three steps. That's it.",
  };
  return (
    <>
      <section id="howitworks" className="bg-secondary/50">
        <div className="section-wrapper">
          {/* Section Header */}
          <SectionHeader title={howItWorksData.title} description={howItWorksData.description} />
        </div>
      </section>
    </>
  );
}
