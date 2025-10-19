"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { urlTreeGenerator } from "@/utils/url-composser/url-tree-generator";

type SearchParamsKeyValue = Array<{ key: string; value: string }>;


export const URLComposer = () => {
  const [urlParams, setUrlParams] = useState<SearchParamsKeyValue>([]);

  const handleChangeTextUrl = (urlInput: string) => {
    const mappedUrl = urlTreeGenerator({ urlInput, urlKeys: ['url','link'] });
    console.log(mappedUrl);
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
      {/* {urlParams.map((item) => (
        <div className="mt-3" key={item.key}>
          <Label className="mb-2">{item.key}</Label>
          <Input readOnly type="text" value={item.value}></Input>
        </div>
      ))} */}
    </div>
  );
};
