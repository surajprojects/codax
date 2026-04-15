"use client";

import { useState } from "react";
import { Button } from "../button";
import { Check, CopyIcon } from "lucide-react";

export default function Copy({ text }: { text: string }) {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error(error);
      alert("Failed to copy ❌");
    }
  };
  return (
    <>
      <Button onClick={handleCopy} variant="outline" className="btn">
        {copied ? <Check /> : <CopyIcon />}
      </Button>
    </>
  );
}
