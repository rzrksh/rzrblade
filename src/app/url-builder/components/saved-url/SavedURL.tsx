import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SavedURLItem } from "./SavedURLItem";

export const SavedURL = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved URLs</CardTitle>
        <CardDescription className="mb-6">
          Saved URL Schema. Click Save URL to add more
        </CardDescription>
        <SavedURLItem />
      </CardHeader>
    </Card>
  );
};
