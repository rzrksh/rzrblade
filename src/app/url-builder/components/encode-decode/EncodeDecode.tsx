"use client";

import { CircleX, Copy } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useUrlBuilderContext } from "../../context/url-builder.context";
import { type OperationType, useView } from "./usecase/use-view";

const OPERATION_NAME = {
  encode: "Encoder",
  decode: "Decoder",
};

const URL_RESULT_NAME = {
  encode: "Encoded",
  decode: "Decoded",
};

export const EncodeDecode = () => {
  const { urlInput, handleChangeTextUrl } = useUrlBuilderContext();
  const { operation, handleChangeOperation } = useView();

  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>{OPERATION_NAME[operation]}</CardTitle>
        <CardDescription>
          A simple URL encode / decoder that uses UTF-8
        </CardDescription>
        <CardAction>
          <div className="flex gap-2">
            <Select
              defaultValue={"encode"}
              onValueChange={(value: OperationType) =>
                handleChangeOperation(value)
              }
            >
              <SelectTrigger id="select-ops" className="w-[100%]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="encode">URL Encode</SelectItem>
                <SelectItem value="decode">URL Decode</SelectItem>
              </SelectContent>
            </Select>
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
          className="mb-8 min-h-40"
          id="base-url"
          placeholder="Type any URL"
          value={urlInput}
          onChange={(e) => handleChangeTextUrl(e.target.value)}
        />
        <div className="flex gap-2 items-center justify-between mb-2">
          <Label htmlFor="result-url">{URL_RESULT_NAME[operation]} URL</Label>
          {urlInput && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                navigator.clipboard.writeText(urlInput);
                toast.success(`${URL_RESULT_NAME[operation]} URL Copied!`);
              }}
            >
              <Copy /> <span>Copy {URL_RESULT_NAME[operation]} URL</span>
            </Button>
          )}
        </div>
        <Textarea
          className="mb-5 min-h-40"
          id="result-url"
          readOnly
          value={
            operation === "encode"
              ? encodeURIComponent(urlInput)
              : decodeURIComponent(urlInput)
          }
        />
      </CardContent>
    </Card>
  );
};
