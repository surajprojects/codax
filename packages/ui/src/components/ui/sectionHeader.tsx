export interface SectionHeaderType {
  title: string;
  description: string;
}

export type SectionHeaderTypeList = SectionHeaderType[];

export default function SectionHeader({
  title = "title",
  description = "description",
}: Partial<SectionHeaderType>) {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-3.5">
        <h4 className="text-[1.975rem] font-bold text-center">{title}</h4>
        <p className="text-sm text-gray-500 text-center">{description}</p>
      </div>
    </>
  );
}
