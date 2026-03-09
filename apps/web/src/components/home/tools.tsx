import Tag, { TagTypeList } from "@codax/ui/components/ui/tag";
import ToolCard, { ToolCardTypeList } from "@codax/ui/components/cards/toolCard";
import SectionHeader, { SectionHeaderType } from "@codax/ui/components/ui/sectionHeader";

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

  const toolCardData: ToolCardTypeList = [
    {
      icon: "ClipboardList",
      title: "MCQ quiz generator",
      description: "Create multiple choice quizzes from your notes or text. Perfect for exam prep.",
      link: "#",
    },
    {
      icon: "Timer",
      title: "pomodoro timer",
      description: "Stay focused with customizable work and break intervals.",
      link: "#",
    },
    {
      icon: "FileCode",
      title: "JSON formatter",
      description: "Beautify, minify, and validate JSON with syntax highlighting.",
      link: "#",
    },
    {
      icon: "Hash",
      title: "UUID generator",
      description: "Generator unique identifiers in various formats instantly.",
      link: "#",
    },
    {
      icon: "Braces",
      title: "regex tester",
      description: "Test and debug regular expressions with real-time matching.",
      link: "#",
    },
    {
      icon: "FileText",
      title: "AI text summarizer",
      description: "Get concise summaries of long articles and documents.",
      link: "#",
    },
    {
      icon: "Shuffle",
      title: "random data generator",
      description: "Generate take names, emails, addresses for testing.",
      link: "#",
    },
    {
      icon: "Image",
      title: "image compressor",
      description: "Reduce image file sizes without losing quality.",
      link: "#",
    },
    {
      icon: "Calculator",
      title: "unit converter",
      description: "Convert between common units of measurement.",
      link: "#",
    },
  ];
  return (
    <>
      <section id="tools" className="bg-secondary/50">
        <div className="section-wrapper">
          {/* Section Header */}
          <SectionHeader title={toolsData.title} description={toolsData.description} />
          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 my-10 mb-12">
            {tagsData.map((item, idx) => (
              <Tag
                key={idx}
                icon={item.icon}
                name={item.name}
                selected={item.name === "all tools"}
              />
            ))}
          </div>
          {/* Body */}
          <div className="w-full lg:w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolCardData.map((item, idx) => (
              <ToolCard
                key={idx}
                icon={item.icon}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
