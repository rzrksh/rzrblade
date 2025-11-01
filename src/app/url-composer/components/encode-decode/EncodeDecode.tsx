"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


interface Props {
  type: "encode" | "decode";
}

export const EncodeDecode = ({ type }: Props) => {
  const OPERATION_NAME = {
    encode: 'Encode',
    decode: 'Decode',
  }

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
