import { Unlink } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

export const SavedURL = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved URLs</CardTitle>
        <CardDescription className="mb-6">
          Saved URL Schema. Click Save URL to add more
        </CardDescription>
        <Empty className="border border-dashed">
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Unlink />
            </EmptyMedia>
            <EmptyTitle>No Saved URL</EmptyTitle>
            <EmptyDescription>
              Save some URL to access them  easily.
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
        {/* <SavedURLItem /> */}
      </CardHeader>
    </Card>
  );
};
