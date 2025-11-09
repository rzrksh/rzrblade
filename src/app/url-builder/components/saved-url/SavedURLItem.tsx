import { Ellipsis } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item";

export const SavedURLItem = () => {
  return (
    <Item variant="outline">
      <ItemContent>
        <ItemTitle>Bxgy Prod</ItemTitle>
        <ItemDescription>
          A simple item with title and description.
        </ItemDescription>
      </ItemContent>
      <ItemActions>
        <Button variant="outline" size="sm">
          <Ellipsis />
        </Button>
      </ItemActions>
    </Item>
  );
};
