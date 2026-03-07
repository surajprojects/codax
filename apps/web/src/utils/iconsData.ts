import { LayoutGrid, BookOpen, CodeXml, Sparkles, RefreshCcw } from "lucide-react";

export type IconName = "LayoutGrid" | "BookOpen" | "CodeXml" | "Sparkles" | "RefreshCcw";

export const iconsData = [
  { label: "LayoutGrid", icon: LayoutGrid },
  { label: "BookOpen", icon: BookOpen },
  { label: "CodeXml", icon: CodeXml },
  { label: "Sparkles", icon: Sparkles },
  { label: "RefreshCcw", icon: RefreshCcw },
];

export const getIcon = (icon: IconName) => {
  return iconsData.find((item) => item.label === icon);
};
