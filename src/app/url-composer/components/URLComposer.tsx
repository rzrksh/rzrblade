"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { urlTreeGenerator } from "@/utils/url-composser/url-tree-generator";
import {URLDecomposserTree} from "./URLDecomposserTree";

export const URLComposer = () => {
  const [urlTree, setUrlTree] = useState<any>(null);

  const handleChangeTextUrl = (urlInput: string) => {
    const generatedUrlTree = urlTreeGenerator({ urlInput, urlKeys: ['url','link'] });
    setUrlTree(generatedUrlTree);
  };

  return (
    <div className="max-w-xl min-w-3xl rounded-xl bg-white p-6 shadow-sm outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <div>
        <Label className="mb-2" htmlFor="base-url">
          URL
        </Label>
        <Textarea
          className="mb-5"
          id="base-url"
          placeholder="Type any URL"
          onChange={(e) => handleChangeTextUrl(e.target.value)}
        />
      </div>
      <URLDecomposserTree urlTree={urlTree} />
    </div>
  );
};
