import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EmptySave } from "./EmptySave";
// import { SavedURLItem } from "./SavedURLItem";

export const SavedURL = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved URLs</CardTitle>
        <CardDescription className="mb-6">
          <div>Saved URL Schema. Click Save URL to add more</div>
          <div className="mt-2 text-xs text-gray-400">
            All saved data, is stored on your local device
          </div>
        </CardDescription>
        <EmptySave />
        {/* <SavedURLItem /> */}
      </CardHeader>
    </Card>
  );
};
