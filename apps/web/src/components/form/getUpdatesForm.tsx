"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Input } from "@codax/ui/components/input";
import { Button } from "@codax/ui/components/button";

export default function GetUpdatesForm() {
  const [email, setEmail] = useState<string>("");
  const handleSubscribe = () => {
    alert("Email sent successful.");
    setEmail("");
  };
  return (
    <>
      <div className="w-full sm:w-md mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 my-4">
        <Input
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
          placeholder="your@email.com"
        />
        <Button size={"default"} className="cursor-pointer" onClick={handleSubscribe}>
          <div className="flex items-center gap-1.5 text-xs">
            Subscribe <ArrowRight className="size-3.5" />
          </div>
        </Button>
      </div>
    </>
  );
}
