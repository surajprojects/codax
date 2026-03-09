import type { LucideIcon } from "lucide-react";
import {
  Zap,
  Hash,
  Lock,
  Heart,
  Timer,
  Image,
  Braces,
  CodeXml,
  Shuffle,
  BookOpen,
  Sparkles,
  FileCode,
  FileText,
  LayoutGrid,
  RefreshCcw,
  Calculator,
  CirclePlay,
  MousePointer,
  ClipboardList,
  MessageSquare,
} from "lucide-react";

export interface IconData {
  label: IconName;
  icon: LucideIcon;
}

export type IconDataList = IconData[];

export const getIcon = (icon: IconName): IconData | undefined => {
  return iconsData.find((item) => item.label === icon);
};

export type IconName =
  | "Zap"
  | "Hash"
  | "Lock"
  | "Timer"
  | "Heart"
  | "Image"
  | "Braces"
  | "CodeXml"
  | "Shuffle"
  | "BookOpen"
  | "Sparkles"
  | "FileText"
  | "FileCode"
  | "RefreshCcw"
  | "LayoutGrid"
  | "Calculator"
  | "CirclePlay"
  | "MousePointer"
  | "ClipboardList"
  | "MessageSquare";

export const iconsData: IconDataList = [
  { label: "Zap", icon: Zap },
  { label: "Hash", icon: Hash },
  { label: "Lock", icon: Lock },
  { label: "Heart", icon: Heart },
  { label: "Image", icon: Image },
  { label: "Timer", icon: Timer },
  { label: "Braces", icon: Braces },
  { label: "CodeXml", icon: CodeXml },
  { label: "Shuffle", icon: Shuffle },
  { label: "Sparkles", icon: Sparkles },
  { label: "BookOpen", icon: BookOpen },
  { label: "FileCode", icon: FileCode },
  { label: "FileText", icon: FileText },
  { label: "LayoutGrid", icon: LayoutGrid },
  { label: "RefreshCcw", icon: RefreshCcw },
  { label: "Calculator", icon: Calculator },
  { label: "CirclePlay", icon: CirclePlay },
  { label: "MousePointer", icon: MousePointer },
  { label: "ClipboardList", icon: ClipboardList },
  { label: "MessageSquare", icon: MessageSquare },
];
