import {
  CircleCheck,
  CircleX,
  Copy,
  Edit,
  ListChevronsDownUp,
  ListChevronsUpDown,
  PlusCircle,
  Trash,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { URLNode } from "../../models";
import { useURLDecomposerView } from "./usecase/use-view";

interface Props {
  urlNode: URLNode | null;
}

export const URLDecomposerTree = ({ urlNode }: Props) => {
  const {
    collapsed,
    isEdit,
    handleChangeEdit,
    handleChangeBaseURL,
    handleCollapse,
  } = useURLDecomposerView();

  if (!urlNode) return null;

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
        <div className="flex gap-2 items-center">
          <Button variant="ghost" className="w-[40px]" onClick={handleCollapse}>
            {collapsed ? <ListChevronsUpDown /> : <ListChevronsDownUp />}
          </Button>
          <Label>
            <Badge className="bg-gray-200" variant="secondary">
              URL Level {urlNode.level}
            </Badge>
          </Label>
        </div>
        <div className="flex gap-2 items-center">
          {isEdit ? (
            <>
              <Button variant="outline" onClick={handleChangeEdit}>
                <CircleCheck />
              </Button>
              <Button variant="outline" onClick={handleChangeEdit}>
                <CircleX />
              </Button>
            </>
          ) : (
            <Button variant="outline" onClick={handleChangeEdit}>
              <Edit />
            </Button>
          )}
          <Button variant="outline">
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
            <Input
              type="text"
              value={urlNode.baseUrl}
              disabled={!isEdit}
              onChange={(e) =>
                handleChangeBaseURL({
                  newBaseUrl: e.target.value,
                  id: urlNode.id,
                })
              }
            />
          </div>
          <div>
            {Boolean(urlNode.params?.length) && (
              <Label className="mb-2">
                <Badge variant="secondary">URL Search Params</Badge>
              </Label>
            )}
            {urlNode.params?.map((item) => (
              <div key={item.key} className="flex gap-2 mb-2 w-full">
                <Input
                  type="text"
                  value={item.key}
                  className="w-[250px]"
                  disabled={!isEdit}
                  onChange={() => {}}
                />
                <Input
                  type="text"
                  value={item.value}
                  className="w-full"
                  disabled={!isEdit}
                  onChange={() => {}}
                />
              </div>
            ))}
            {isEdit && (
              <div className="mt-6">
                <Button size="sm" variant="outline">
                  <PlusCircle /> <span>Add Search Param</span>
                </Button>
              </div>
            )}
          </div>
          {urlNode.children?.map((item) => (
            <URLDecomposerTree key={item?.id} urlNode={item} />
          ))}
        </>
      )}
    </Card>
  );
};
