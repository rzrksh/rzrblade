"use client";

import { Info } from "lucide-react";
import TooltipWrapper from "@/components/composition/tooltip";
import {
  Card,
  CardContent,
  CardDescription,
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
import { useUrlBuilderContext } from "../../context/url-builder.context";

export const URLComposerConfig = () => {
  const {
    config,
    autoDetectURL,
    handleSetUrlKeys,
    handleSetConfig,
    handleToggleAutoDetectURL,
  } = useUrlBuilderContext();

  return (
    <Card className="min-w-[25%]">
      <CardHeader>
        <CardTitle>URL Builder Config</CardTitle>
        <CardDescription>Change you URL Builder Config.</CardDescription>
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
            <SelectItem value="compose">URL Composer</SelectItem>
            {/* <SelectItem value="template">URL Templating</SelectItem> */}
            <SelectItem value="encdec">URL Encode / URL Decode</SelectItem>
          </SelectContent>
        </Select>
        {config === "compose" && (
          <div>
            <div className="flex gap-1 my-4">
              <Checkbox
                id="auto-detect-url-check"
                checked={autoDetectURL}
                onClick={handleToggleAutoDetectURL}
              />
              <Label htmlFor="auto-detect-url-check">
                Automatically Detects URL
              </Label>
              <TooltipWrapper
                tooltipText="Automatically generates a new URL tree when a parameter
                  contains a valid URL."
              >
                <Info width={15} height={15} />
              </TooltipWrapper>
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
    </Card>
  );
};
