"use client";

import { Save } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUrlComposerContext } from "../../context/url-composser.context";
import { useConfigURL } from "./usecase/use-config-url";

export const URLComposerConfig = () => {
  const { config, handleSetConfig } = useConfigURL();
  const { urlInput, handleSetUrlKeys } = useUrlComposerContext();
  const [autoDetectURL, setAutoDetectURL] = useState(true);

  return (
    <Card className="min-w-[25%]">
      <CardHeader>
        <CardTitle>URL Factory Config</CardTitle>
        <CardDescription>Change you URL Factory Config</CardDescription>
      </CardHeader>
      <CardContent>
        <Label className="mb-2" htmlFor="select-ops">
          Operation
        </Label>
        <Select defaultValue={config} onValueChange={handleSetConfig}>
          <SelectTrigger id="select-ops" className="w-[100%]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="compose">Compose</SelectItem>
            <SelectItem value="encode">Encode</SelectItem>
            <SelectItem value="decode">Decode</SelectItem>
          </SelectContent>
        </Select>
        {config === "compose" && (
          <div>
            <div className="flex gap-2 my-4">
              <Checkbox
                id="auto-detect-url-check"
                checked={autoDetectURL}
                onClick={() => {
                  if (!autoDetectURL) {
                    handleSetUrlKeys("");
                  }

                  setAutoDetectURL(!autoDetectURL);
                }}
              />
              <Label htmlFor="auto-detect-url-check">
                Automatically Detects URL
              </Label>
            </div>
            {!autoDetectURL && (
              <div className="mt-4 w-full">
                <Label htmlFor="url-params-key" className="mb-2">
                  Url Param Keys
                </Label>
                <Input
                  type="text"
                  placeholder="e.g url,link,uri"
                  className="w-[100%]"
                  id="url-params-key"
                  onChange={(e) => handleSetUrlKeys(e.target.value || "")}
                />
              </div>
            )}
          </div>
        )}
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full" disabled={Boolean(!urlInput)}>
          <Save />
          <span>Save URL</span>
        </Button>
      </CardFooter>
    </Card>
  );
};
