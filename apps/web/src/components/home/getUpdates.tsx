import GetUpdatesForm from "../form/getUpdatesForm";
import SectionHeader, { SectionHeaderType } from "@codax/ui/components/ui/sectionHeader";

export default function GetUpdates() {
  const getUpdatesData: SectionHeaderType = {
    title: "Stay in the loop",
    description: "Get notified when new tools launch. No spam, just updates.",
  };
  return (
    <>
      <section id="getupdates" className="section-wrapper">
        {/* Section Header */}
        <SectionHeader title={getUpdatesData.title} description={getUpdatesData.description} />
        {/* Body */}
        <GetUpdatesForm />
        <p className="text-center text-xs text-muted">
          Unsubscribe anytime. We respect your inbox.
        </p>
      </section>
    </>
  );
}
