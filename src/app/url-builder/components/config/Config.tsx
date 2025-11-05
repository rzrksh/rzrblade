"use client";

import { Info, Save } from "lucide-react";
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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useUrlComposerContext } from "../../context/url-composser.context";
import { isValidURL } from "../../utils/is-valid-url";
import { useConfigURL } from "./usecase/use-config-url";

export const URLComposerConfig = () => {
  const { config, handleSetConfig } = useConfigURL();
  const { urlInput, handleSetUrlKeys } = useUrlComposerContext();
  const [autoDetectURL, setAutoDetectURL] = useState(true);

  return (
    <Dialog>
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
              <SelectItem value="compose">URL Composer</SelectItem>
              <SelectItem value="template">Template Generator</SelectItem>
              <SelectItem value="encdec">Encode / Decode</SelectItem>
            </SelectContent>
          </Select>
          {config === "compose" && (
            <div>
              <div className="flex gap-1 my-4">
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
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info width={15} height={15} />
                  </TooltipTrigger>
                  <TooltipContent>
                    Automatically generates a new URL tree when a parameter
                    contains a valid URL.
                  </TooltipContent>
                </Tooltip>
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
          <DialogTrigger asChild>
            <Button className="w-full" disabled={!isValidURL(urlInput)}>
              <Save />
              <span>Save new URL</span>
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>
      <form>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Save new URL</DialogTitle>
            <DialogDescription>
              Please name your URL
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">URL Name</Label>
              <Input id="name-1" name="name" defaultValue="My Project URL" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};
