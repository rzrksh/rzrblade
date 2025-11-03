"use client";

import { CircleX, Copy, FlaskConical } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useUrlComposerContext } from "../../context/url-composser.context";
import { DEMO_URL } from "../../models/demo-url";
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
        <CardAction>
          <div className="flex gap-2">
            {urlInput && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => {
                  navigator.clipboard.writeText(urlInput);
                  toast.success("URL Copied!");
                }}
              >
                <Copy /> <span>Copy URL</span>
              </Button>
            )}
            {!urlInput && (
              <Button
                size="sm"
                variant="outline"
                onClick={() => handleChangeTextUrl(DEMO_URL)}
              >
                <FlaskConical /> <span>Try</span>
              </Button>
            )}
            {urlInput && (
              <Button
                size="sm"
                variant="outline"
                className="border-red-100"
                onClick={() => handleChangeTextUrl("")}
              >
                <CircleX className="text-red-500" />{" "}
                <span className="text-red-500">Clear</span>
              </Button>
            )}
          </div>
        </CardAction>
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
            <URLDecomposerTree urlNode={urlTree} />
          </div>
        )}
      </CardContent>
    </Card>
  );
};
