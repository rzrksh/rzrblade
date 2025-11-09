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
        <Button variant="outline">Import Save</Button>
      </EmptyContent>
    </Empty>
  );
};
