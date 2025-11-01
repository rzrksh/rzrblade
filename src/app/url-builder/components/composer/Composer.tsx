"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const Composer = () => {
  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>Composer</CardTitle>
        <CardDescription>
          Craft your URLs easily with a URL composer, we handle the encoding for you.
        </CardDescription>
      </CardHeader>
      <CardContent>
      </CardContent>
    </Card>
  );
};
