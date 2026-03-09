import InfoCard, { InfoCardTypeList } from "@codax/ui/components/cards/infoCard";
import SectionHeader, { SectionHeaderType } from "@codax/ui/components/ui/sectionHeader";

export default function WhyCodax() {
  const whyCodaxData: SectionHeaderType = {
    title: "Why Codax?",
    description: "Simple philosophy: build useful things, make them free, keep them fast.",
  };

  const infoCardData: InfoCardTypeList = [
    {
      icon: "Zap",
      title: "Instant access",
      description: "No sign-ups, no paywalls. Open a tool and start using it immediately.",
    },
    {
      icon: "Lock",
      title: "Privacy-first",
      description: "Your data stays in your browser. We don't track or store what you create.",
    },
    {
      icon: "Heart",
      title: "Build with care",
      description: "Each tool is crafted to solve a real problem, not to collect users.",
    },
  ];
  return (
    <>
      <section id="whycodax" className="section-wrapper">
        {/* Section Header */}
        <SectionHeader title={whyCodaxData.title} description={whyCodaxData.description} />
        {/* Body */}
        <div className="w-full sm:w-xl md:w-2xl mx-auto flex flex-col sm:flex-row gap-8 mt-10">
          {infoCardData.map((item, idx) => (
            <InfoCard
              key={idx}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}
