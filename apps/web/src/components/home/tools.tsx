import Tag from "../ui/tag";
import SectionHeader from "../ui/sectionHeader";
import { TagTypeList } from "@/utils/types/tagType";
import { SectionHeaderType } from "@/utils/types/sectionHeaderType";

export default function Tools() {
  const toolsData: SectionHeaderType = {
    title: "Pick a tool, get things done",
    description: "No downloads, no installations. Just click and start using.",
  };

  const tagsData: TagTypeList = [
    {
      icon: "LayoutGrid",
      name: "all tools",
    },
    {
      icon: "BookOpen",
      name: "exam tools",
    },
    {
      icon: "CodeXml",
      name: "developer",
    },
    {
      icon: "Sparkles",
      name: "AI generators",
    },
    {
      icon: "RefreshCcw",
      name: "converters",
    },
  ];
  return (
    <>
      <section className="bg-secondary">
        <div className="section-wrapper">
          {/* Section Header */}
          <SectionHeader title={toolsData.title} description={toolsData.description} />
          {/* Tags */}
          <div className="flex items-center justify-center gap-3.5 my-5">
            {tagsData.map((item, idx) => (
              <Tag key={idx} icon={item.icon} name={item.name} />
            ))}
          </div>
          {/* Body */}
          <div></div>
        </div>
      </section>
    </>
  );
}
