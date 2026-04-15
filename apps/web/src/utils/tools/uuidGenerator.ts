import { randomUUID, randomBytes } from "crypto";
import { range } from "../utils";

export const IdFormatList = ["uuid", "short", "numeric", "hex", "timestamp", "custom"] as const;

export type IdFormatType = (typeof IdFormatList)[number];

export const shortLengthList = range(6, 16);
export const numericLengthList = range(4, 12);
export const hexLengthList = range(8, 32);
export const customLengthList = range(6, 32);

export function generateId(format: IdFormatType = "uuid", length = 8): string {
  switch (format) {
    case "uuid":
      return crypto.randomUUID();

    case "short":
      return randomBytes(length)
        .toString("base64")
        .replace(/[^a-zA-Z0-9]/g, "")
        .slice(0, length);

    case "numeric":
      return Array.from({ length }, () => Math.floor(Math.random() * 10)).join("");

    case "hex":
      return randomBytes(length).toString("hex").slice(0, length);

    case "timestamp":
      return `${Date.now()}-${randomBytes(4).toString("hex")}`;

    case "custom":
      return customId(length);

    default:
      return randomUUID();
  }
}

export const CharsetList = ["safe", "full"] as const;

export type CharsetListType = (typeof CharsetList)[number];

export function getCharset(type?: CharsetListType): string {
  switch (type) {
    case "safe":
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

    case "full":
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";

    default:
      return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  }
}

export function customId(length = 8, type?: CharsetListType): string {
  const chars = getCharset(type);
  let result = "";

  for (let i = 0; i < length; i++) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return result;
}
