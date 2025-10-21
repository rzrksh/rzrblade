"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { urlTreeGenerator } from "@/utils/url-composser/url-tree-generator";
import { URLDecomposserTree } from "./UrlDecomposerTree";

export const Decomposer = () => {
  const [urlTree, setUrlTree] = useState<any>(null);

  console.log(urlTree);

  const handleChangeTextUrl = (urlInput: string) => {
    const generatedUrlTree = urlTreeGenerator({ urlInput, urlKeys: [] });
    setUrlTree(generatedUrlTree);
  };

  return (
    <Card className="min-w-full">
      <CardContent>
        <Label className="mb-2" htmlFor="base-url">
          URL
        </Label>
        <Textarea
          className="mb-5"
          id="base-url"
          placeholder="Type any URL"
          onChange={(e) => handleChangeTextUrl(e.target.value)}
        />
        <URLDecomposserTree urlTree={urlTree} />
      </CardContent>
    </Card>
  );
};
