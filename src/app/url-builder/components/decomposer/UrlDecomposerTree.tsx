import {
  Copy,
  ListChevronsDownUp,
  ListChevronsUpDown,
  PlusCircle,
  Trash,
} from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { URLNode } from "../../models";

interface Props {
  urlTree: URLNode;
}

export const URLDecomposerTree = ({ urlTree }: Props) => {
  const [collapsed, setCollapsed] = useState(false);
  
  if (!urlTree) return null;

  return (
    <Card className="p-6">
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
          <Button variant="outline" className="border-red-500">
            <Trash className="text-red-500" />
          </Button>
        </div>
      </div>
      {!collapsed && (
        <>
          <div>
            <Label className="mb-2">
              <Badge variant="secondary">Base URL</Badge>
            </Label>
            <Input type="text" value={urlTree.baseUrl} onChange={() => {}} />
          </div>
          <div>
            {Boolean(urlTree.params?.length) && (
              <Label className="mb-2">
                <Badge variant="secondary">URL Search Params</Badge>
              </Label>
            )}
            {urlTree.params?.map((item) => (
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
                <Button variant="outline" className="border-red-500">
                  <Trash className="text-red-500" />
                </Button>
              </div>
            ))}
            <div className="mt-6">
              <Button size="sm" variant="outline">
                <PlusCircle /> <span>Add Search Param</span>
              </Button>
            </div>
          </div>
          {urlTree.children?.map((item) => (
            <URLDecomposerTree key={item.id} urlTree={item} />
          ))}
        </>
      )}
    </Card>
  );
};
