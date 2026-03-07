import { getIcon } from "@/utils/iconsData";
import { TagType } from "@/utils/types/tagType";

export default function Tag({ icon = "LayoutGrid", name = "all tools" }: Partial<TagType>) {
  const currentIcon = getIcon(icon);
  return (
    <>
      <span className="text-sm bg-gray-200/75 py-1.5 px-3.5 rounded-2xl font-medium flex items-center justify-center gap-1.5 capitalize cursor-pointer transition-effect shadow-none hover:shadow-xs">
        {currentIcon && <currentIcon.icon className="size-3.5" />} {name}
      </span>
    </>
  );
}
