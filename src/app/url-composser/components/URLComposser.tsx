"use client";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export const URLComposser = () => {
  return (
    <div className="max-w-xl min-w-3xl rounded-xl bg-white p-6 shadow-sm outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <div>
        <Label className="mb-2" htmlFor="base-url">
          URL
        </Label>
        <Textarea
          className="mb-5"
          id="base-url"
          placeholder="Type URL to Encode"
        />
      </div>
      <div>
        <Label className="mb-2" htmlFor="result-url">
          Encoded URL
        </Label>
        <Textarea readOnly id="result-url" placeholder="Encoded URL" />
      </div>
    </div>
  );
};
