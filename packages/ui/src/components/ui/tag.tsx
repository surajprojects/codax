import clsx from "clsx";
import { getIcon, IconName } from "@codax/ui/lib/getIcon";

export interface TagType {
  name: string;
  icon: IconName;
}

export type TagTypeList = TagType[];

export default function Tag({
  icon = "LayoutGrid",
  name = "all tools",
  selected = false,
}: Partial<TagType> & { selected?: boolean }) {
  const currentIcon = getIcon(icon);
  return (
    <>
      <span
        className={clsx(
          "text-xs  py-1.5 px-3.5 rounded-2xl font-medium flex items-center justify-center gap-1.5 capitalize cursor-pointer transition-effect shadow-none hover:shadow-xs",
          selected ? "bg-primary text-white" : "bg-muted/5",
        )}
      >
        {currentIcon && <currentIcon.icon className="size-3.5" />} {name}
      </span>
    </>
  );
}
