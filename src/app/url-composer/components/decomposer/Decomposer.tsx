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
import { Textarea } from "@/components/ui/textarea";

import { useUrlComposerContext } from "../../context/url-composser.context";
import type { URLNode } from "../../models";
import { urlTreeGenerator } from "../../utils/url-tree-generator";
import { URLDecomposerTree } from "./UrlDecomposerTree";

export const Decomposer = () => {
  const [urlTree, setUrlTree] = useState<URLNode | null>(null);
  const { urlKeys } = useUrlComposerContext();

  const handleChangeTextUrl = (urlInput: string) => {
    const generatedUrlTree = urlTreeGenerator({ urlInput, urlKeys });
    setUrlTree(generatedUrlTree);
  };

  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>Decomposer</CardTitle>
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
