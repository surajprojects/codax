import { getIcon, IconName } from "@codax/ui/lib/getIcon";

export interface InfoCardSecondType {
  icon: IconName;
  cardNo: string;
  title: string;
  description: string;
}

export type InfoCardSecondTypeList = InfoCardSecondType[];

export default function InfoCardSecond({
  icon = "BookOpen",
  cardNo = "01",
  title = "title",
  description = "description",
}: Partial<InfoCardSecondType>) {
  const currentIcon = getIcon(icon);
  return (
    <>
      <div className="p-1 w-full rounded-2xl flex flex-col items-center gap-2.5">
        <div className="bg-primary size-[1.70rem] rounded-full flex items-center justify-center absolute translate-x-6">
          {currentIcon && <currentIcon.icon className="size-5 text-white absolute" />}
        </div>
        <div className="bg-white rounded-full p-2 border-2 border-muted/20 flex items-center justify-center size-14">
          <p className="absolute text-primary font-bold font-mono text-lg">{cardNo}</p>
        </div>
        {/* Title */}
        <p className="text-sm font-semibold text-center">{title}</p>
        {/* Description */}
        <p className="text-xs text-muted text-center">{description}</p>
      </div>
    </>
  );
}
