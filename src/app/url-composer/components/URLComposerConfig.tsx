"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
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
import { useConfigURL } from "../usecase/useConfigURL";

export const URLComposerConfig = () => {
  const { config, handleChangeConfg } = useConfigURL();

  return (
    <Card className="min-w-[25%]">
      <CardHeader>
        <CardTitle>URL Composer Config</CardTitle>
        <CardDescription>Change you URL Composser Config</CardDescription>
      </CardHeader>
      <CardContent>
        <Label className="mb-2" htmlFor="select-ops">
          Operation
        </Label>
        <Select defaultValue={config} onValueChange={handleChangeConfg}>
          <SelectTrigger id="select-ops" className="w-[100%]">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="compose">Compose</SelectItem>
            <SelectItem value="decompose">Decompose</SelectItem>
            <SelectItem value="encode">Encode</SelectItem>
            <SelectItem value="decode">Decode</SelectItem>
          </SelectContent>
        </Select>
        {config === "decompose" && (
          <div className="flex gap-3 mt-4">
            <div>
              <Label htmlFor="url-params-key" className="mb-2">
                Url Params Key
              </Label>
              <Input
                type="text"
                placeholder="e.g url,link,uri"
                className="w-[100%]"
                id="url-params-key"
              />
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">Save URL</Button>
        <Button className="w-full" variant="outline">
          Import URL
        </Button>
      </CardFooter>
    </Card>
  );
};
