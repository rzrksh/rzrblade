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
import { urlTreeGenerator } from "@/utils/url-composser/url-tree-generator";

interface Props {
  type: "encode" | "decode";
}

export const EncodeDecode = ({ type }: Props) => {
  const [urlTree, setUrlTree] = useState<any>(null);

  const OPERATION_NAME = {
    encode: 'Encode',
    decode: 'Decode',
  }

  const handleChangeTextUrl = (urlInput: string) => {
    const generatedUrlTree = urlTreeGenerator({ urlInput, urlKeys: [] });
    setUrlTree(generatedUrlTree);
  };

  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle className="text-2xl">URL {OPERATION_NAME[type]}</CardTitle>
        <CardDescription>
          Craft your URLs easily with a URL composer, we handle the encoding for
          you.
        </CardDescription>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};
