import SectionHeader, { SectionHeaderType } from "@codax/ui/components/ui/sectionHeader";
import InfoCardSecond, { InfoCardSecondTypeList } from "@codax/ui/components/cards/infoCardSecond";

export default function HowItWorks() {
  const howItWorksData: SectionHeaderType = {
    title: "How it works",
    description: "Three steps. That's it.",
  };

  const infoCardSecondData: InfoCardSecondTypeList = [
    {
      cardNo: "01",
      icon: "MousePointer",
      title: "Choose a tool",
      description: "Browse the collection and pick what you need.",
    },
    {
      cardNo: "02",
      icon: "CirclePlay",
      title: "Use instantly",
      description: "No setup required. Tools work right in your browser.",
    },
    {
      cardNo: "03",
      icon: "MessageSquare",
      title: "Share feedback",
      description: "Found a bug or want a feature? Let us know.",
    },
  ];
  return (
    <>
      <section id="howitworks" className="bg-secondary/50">
        <div className="section-wrapper">
          {/* Section Header */}
          <SectionHeader title={howItWorksData.title} description={howItWorksData.description} />
          {/* Body */}
          <div className="w-full flex flex-col items-center justify-center mt-10">
            <div className="border-t hidden sm:block w-xl md:w-2xl lg:w-3xl border-muted/20 translate-y-8"></div>
            <div className="w-full sm:w-xl md:w-2xl lg:w-3xl mx-auto flex flex-col sm:flex-row gap-8 relative">
              {infoCardSecondData.map((item, idx) => (
                <InfoCardSecond
                  key={idx}
                  icon={item.icon}
                  title={item.title}
                  cardNo={item.cardNo}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
