import { ArrowRight } from "lucide-react";
import { getIcon, IconName } from "@codax/ui/lib/getIcon";

export interface ToolCardType {
  icon: IconName;
  title: string;
  description: string;
  link: string;
}

export type ToolCardTypeList = ToolCardType[];

export default function ToolCard({
  icon = "BookOpen",
  title = "title",
  description = "description",
  link = "#",
}: Partial<ToolCardType>) {
  const currentIcon = getIcon(icon);
  return (
    <>
      <div className="bg-white border border-muted/20 shadow-xs hover:shadow-sm transition-effect cursor-pointer p-6 rounded-xl w-full h-full flex flex-col gap-2.5 group transition-effect hover:-translate-y-1">
        {/* Icon */}
        <div className="flex items-center justify-between">
          {currentIcon && (
            <currentIcon.icon className="size-10 bg-muted/10 group-hover:bg-primary/15 group-hover:text-primary rounded-md p-3 transition-effect" />
          )}
          <span className="text-[0.60rem] bg-primary/10 border border-primary/20 text-primary py-[0.050rem] px-2 rounded-2xl font-medium group-hover:shadow-xs">
            Free
          </span>
        </div>
        {/* Title */}
        <p className="text-sm font-semibold capitalize group-hover:text-primary transition-effect">
          {title}
        </p>
        {/* Description */}
        <p className="text-xs text-muted">{description}</p>
        {/* Link */}
        <a
          href={link}
          className="transition-effect text-xs text-white group-hover:text-primary font-medium flex items-center gap-1.5 my-1"
        >
          Open tool <ArrowRight className="size-3.5" />
        </a>
      </div>
    </>
  );
}
