"use client";

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
import { URLDecomposerTree } from "./UrlDecomposerTree";

export const Decomposer = () => {
  const { urlTree, urlInput, handleChangeTextUrl } = useUrlComposerContext();

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
          value={urlInput}
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
