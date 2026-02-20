import { Unlink } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const EmptySave = () => {
  return (
    <Empty className="border border-dashed">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Unlink />
        </EmptyMedia>
        <EmptyTitle>No Saved URL</EmptyTitle>
        <EmptyDescription>
          Save some URL to access them easily.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <div className="flex gap-2">
          <Button variant="default">Save</Button>
          <Button variant="outline">Import</Button>
        </div>
      </EmptyContent>
    </Empty>
  );
};
