import {
  CircleCheck,
  CircleX,
  Copy,
  Edit,
  Eye,
  EyeClosed,
  ListChevronsDownUp,
  ListChevronsUpDown,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import type { URLNode } from "../../models";

interface Props {
  draftNode: URLNode;
  collapsed: boolean;
  isEdit: boolean;
  isShowFullUrl: boolean;
  handleCollapse: () => void;
  handleCopy: () => void;
  handleClickEdit: () => void;
  handleConfirmChange: () => void;
  handleCancelChange: () => void;
  handleToggleShowFullURL: () => void;
}

export const UrlNodeHeader = ({
  draftNode,
  collapsed,
  isEdit,
  isShowFullUrl,
  handleCollapse,
  handleCopy,
  handleClickEdit,
  handleCancelChange,
  handleConfirmChange,
  handleToggleShowFullURL,
}: Props) => {
  return (
    <div className="flex items-center justify-between bg-gray-50 rounded-lg p-2">
      <div className="flex gap-2 items-center">
        <Button variant="ghost" className="w-[40px]" onClick={handleCollapse}>
          {collapsed ? <ListChevronsUpDown /> : <ListChevronsDownUp />}
        </Button>
        <Label>
          {draftNode.level && (
            <Badge className="bg-gray-200" variant="secondary">
              URL Level {draftNode.level}
            </Badge>
          )}

          <Badge className="bg-gray-200" variant="secondary">
            {draftNode.level === 1
              ? "root"
              : `Parent Key: ${draftNode.parentURLParam}`}
          </Badge>
        </Label>
      </div>
      <div className="flex gap-2 items-center">
        {isEdit ? (
          <>
            <Button size="sm" variant="outline" onClick={handleConfirmChange}>
              <CircleCheck /> <span>Confirm</span>
            </Button>
            <Button size="sm" variant="outline" onClick={handleCancelChange}>
              <CircleX /> <span>Cancel</span>
            </Button>
          </>
        ) : (
          <Button size="sm" variant="outline" onClick={handleClickEdit}>
            <Edit /> <span>Edit</span>
          </Button>
        )}
        {!isEdit && (
          <>
            <Button size="sm" variant="outline" onClick={handleCopy}>
              <Copy /> <span>Copy</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={handleToggleShowFullURL}
            >
              {isShowFullUrl ? <Eye />: <EyeClosed />}{" "}
              <span>Full URL</span>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};
