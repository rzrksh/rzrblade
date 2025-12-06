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
          Create templates of URL, make variants based on the template.
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
