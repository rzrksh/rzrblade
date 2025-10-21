import { Copy, Trash } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  urlTree: any;
}

export const URLDecomposserTree = ({ urlTree }: Props) => {
  if (!urlTree) return null;

  return (
    <Card className="p-6">
      <div>
        <Label className="mb-2">
          <Badge variant="secondary">URL Level {urlTree.level}</Badge>
        </Label>
        <Input type="text" value={urlTree.url} onChange={() => {}} />
      </div>
      <div>
        {Boolean(urlTree.params.length) && (
          <Label className="mb-2">
            <Badge variant="secondary">URL Search Params</Badge>
          </Label>
        )}
        {urlTree.params.map((item: any) => (
          <div key={item.key} className="flex gap-2 mb-2 w-full">
            <Input
              type="text"
              value={item.key}
              className="w-[250px]"
              onChange={() => {}}
            />
            <Input
              type="text"
              value={item.value}
              className="w-full"
              onChange={() => {}}
            />
            <Button>
              <Copy />
            </Button>
            <Button variant="outline">
              <Trash />
            </Button>
          </div>
        ))}
      </div>
      {urlTree.children.map((item: any) => (
        <URLDecomposserTree key={item.url} urlTree={item} />
      ))}
    </Card>
  );
};
