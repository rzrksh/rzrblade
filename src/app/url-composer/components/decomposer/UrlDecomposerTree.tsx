import {
  Copy,
  ListChevronsDownUp,
  ListChevronsUpDown,
  Trash,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
  urlTree: any;
}

export const URLDecomposserTree = ({ urlTree }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  if (!urlTree) return null;

  return (
    <Card className="p-6">
      {urlTree.level > 1 && (
        <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
          <div className="flex gap-2 items-center">
            <Button
              variant="ghost"
              className="w-[40px]"
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? <ListChevronsUpDown /> : <ListChevronsDownUp />}
            </Button>
            <Label>
              <Badge variant="secondary">URL Level {urlTree.level}</Badge>
            </Label>
          </div>
          <div className="flex gap-2 items-center">
            <Button>
              <Copy />
            </Button>
            <Button variant="outline">
              <Trash />
            </Button>
          </div>
        </div>
      )}
      {!collapsed && (
        <>
          <Input type="text" value={urlTree.url} onChange={() => {}} />
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
            <URLDecomposserTree key={item.id} urlTree={item} />
          ))}
        </>
      )}
    </Card>
  );
};
