"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const URLTemplating = () => {
  return (
    <Card className="min-w-full">
      <CardHeader>
        <CardTitle>URL Templating</CardTitle>
        <CardDescription>
          Craft your URLs easily with a URL composer, we handle the encoding for
          you.
        </CardDescription>
      </CardHeader>

    </Card>
  );
};
