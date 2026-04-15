"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useForm } from "@formspree/react";
import { Input } from "@codax/ui/components/input";
import { toast } from "@codax/ui/components/sonner";
import { Button } from "@codax/ui/components/button";
import Spinner from "@codax/ui/components/ui/spinner";

export default function GetUpdatesForm() {
  const [state, handleSubmit] = useForm("xeeraejq");
  const [email, setEmail] = useState<string>("");
  return (
    <>
      <form
        onSubmit={async (evt) => {
          evt.preventDefault();
          if (!(email.length > 0)) {
            toast.info("Please enter your email 😅");
            return;
          }
          await handleSubmit({ email });
          if (state.succeeded) {
            toast.success("Successfully subscribed to codax.cloud 🎉🎉🎉");
            setEmail("");
          } else {
            toast.error("Something went wrong ❌");
          }
        }}
        className="w-full sm:w-md mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 my-4"
      >
        <Input
          type="email"
          name="email"
          value={email}
          placeholder="your@email.com"
          onChange={(evt) => setEmail(evt.target.value)}
          required={true}
        />
        <Button
          type="submit"
          disabled={state.submitting}
          size={"default"}
          className="cursor-pointer"
        >
          {state.submitting ? (
            <div className="flex justify-center items-center w-full">
              <Spinner customize={true} />
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-xs">
              Subscribe <ArrowRight className="size-3.5" />
            </div>
          )}
        </Button>
      </form>
    </>
  );
}
