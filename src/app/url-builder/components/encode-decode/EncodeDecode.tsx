"use client";

import { CircleX } from "lucide-react";
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
import { useUrlComposerContext } from "../../context/url-composser.context";
import { type OperationType, useView } from "./usecase/use-view";

interface Props {
  type: "encode" | "decode";
}

export const EncodeDecode = ({ type }: Props) => {
  const { urlInput, handleChangeTextUrl } = useUrlComposerContext();
  const { operation, handleChangeOperation } = useView();

  const OPERATION_NAME = {
    encode: "Encoder",
    decode: "Decoder",
  };

  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>{OPERATION_NAME[operation]}</CardTitle>
        <CardDescription>
          Craft your URLs easily with a URL composer, we handle the encoding for
          you.
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
          className="mb-5 min-h-40"
          id="base-url"
          placeholder="Type any URL"
          value={urlInput}
          onChange={(e) => handleChangeTextUrl(e.target.value)}
        />
        <Label className="mb-2" htmlFor="result-url">
          {operation === "encode" ? "Encoded" : "Decoded"} URL
        </Label>
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
