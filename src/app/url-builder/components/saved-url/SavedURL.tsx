import { Import } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";

export const SavedURL = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Saved URLs</CardTitle>
        <CardDescription className="mb-6">
          Saved URL Schema. Click Save URL to add more
        </CardDescription>
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>Bxgy Prod</ItemTitle>
            <ItemDescription>
              A simple item with title and description.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm">
              <span>Load</span>
              <Import />
            </Button>
          </ItemActions>
        </Item>
        <Item variant="outline">
          <ItemContent>
            <ItemTitle>Bxgy Local</ItemTitle>
            <ItemDescription>
              A simple item with title and description.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button variant="outline" size="sm">
              <span>Load</span>
              <Import />
            </Button>
          </ItemActions>
        </Item>
      </CardHeader>
    </Card>
  );
};
