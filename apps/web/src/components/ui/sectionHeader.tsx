import { SectionHeaderType } from "@/utils/types/sectionHeaderType";

export default function SectionHeader({
  title = "title",
  description = "description",
}: Partial<SectionHeaderType>) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2">
        <h4 className="text-3xl font-bold">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </>
  );
}
