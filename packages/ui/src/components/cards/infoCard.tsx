import { getIcon, IconName } from "@codax/ui/lib/getIcon";

export interface InfoCardType {
  icon: IconName;
  title: string;
  description: string;
}

export type InfoCardTypeList = InfoCardType[];

export default function InfoCard({
  icon = "BookOpen",
  title = "title",
  description = "description",
}: Partial<InfoCardType>) {
  const currentIcon = getIcon(icon);
  return (
    <>
      <div className="p-1 rounded-2xl flex flex-col items-center gap-2.5">
        {/* Icon */}
        {currentIcon && (
          <currentIcon.icon className="size-10 bg-primary/10 text-primary rounded-xl p-3" />
        )}
        {/* Title */}
        <p className="text-sm font-semibold text-center">{title}</p>
        {/* Description */}
        <p className="text-xs text-muted text-center">{description}</p>
      </div>
    </>
  );
}
