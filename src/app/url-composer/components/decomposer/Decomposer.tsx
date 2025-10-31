"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { urlTreeGenerator } from "@/utils/url-composser/url-tree-generator";
import { useUrlComposerContext } from "../../context/url-composser.context";
import { URLDecomposerTree } from "./UrlDecomposerTree";

export const Decomposer = () => {
  const [urlTree, setUrlTree] = useState<any>(null);
  const { urlKeys } = useUrlComposerContext();

  const handleChangeTextUrl = (urlInput: string) => {
    const generatedUrlTree = urlTreeGenerator({ urlInput, urlKeys });
    setUrlTree(generatedUrlTree);
  };

  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle className="text-2xl">URL Decomposer</CardTitle>
        <CardDescription>
          Turn messy, encoded URLs into human-readable data.
        </CardDescription>
      </CardHeader>
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
        {urlTree && (
          <div className="mt-8">
            <Label className="mb-2">Decomposed URL</Label>
            <URLDecomposerTree urlTree={urlTree} />
          </div>
        )}
      </CardContent>
    </Card>
  );
};
