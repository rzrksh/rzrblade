import { Unlink } from "lucide-react";
import {
  Empty,
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
    </Empty>
  );
};
