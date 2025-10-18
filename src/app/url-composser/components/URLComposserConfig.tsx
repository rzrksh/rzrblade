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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useConfigURL } from "../usecase/useConfigURL";

export const URLComposserConfig = () => {
  const {config, handleChangeConfg } = useConfigURL();

  return (
    <Card>
      <CardHeader>
        <CardTitle>URL Composser Config</CardTitle>
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
            <SelectItem value="encode">Encode</SelectItem>
            <SelectItem value="decode">Decode</SelectItem>
            <SelectItem value="compose">Compose</SelectItem>
          </SelectContent>
        </Select>
        {config === 'compose' && <div className="flex gap-3 mt-4">
          <div className="flex items-center gap-1">
            <Checkbox id="adv-mode-check" />
            <Label htmlFor="adv-mode-check">Advance Mode</Label>
          </div>
          <div className="flex items-center gap-1">
            <Checkbox id="url-api-check" />
            <Label htmlFor="url-api-check">Use URL API</Label>
          </div>
        </div>}
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button className="w-full">Save URL</Button>
        <Button className="w-full" variant="outline">Import URL</Button>
      </CardFooter>
    </Card>
  );
};
