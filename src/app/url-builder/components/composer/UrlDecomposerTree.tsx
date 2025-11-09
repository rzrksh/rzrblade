import { Info, PlusCircle, Trash } from "lucide-react";
import { AlertDialogComposed } from "@/components/composition/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import type { URLNode } from "../../models";
import { UrlNodeHeader } from "./UrlNodeHeader";
import { useURLDecomposerView } from "./usecase/use-view";

interface Props {
  urlNode: URLNode | null;
}

export const URLDecomposerTree = ({ urlNode }: Props) => {
  const {
    collapsed,
    draftNode,
    isEdit,
    isShowFullUrl,
    handleAddParamKey,
    handleChangeBaseURL,
    handleCollapse,
    handleCopyURL,
    handleChangeKeyURLParams,
    handleChangeValueURLParams,
    handleChangeURLHash,
    handleClickEdit,
    handleRemoveParamKey,
    handleToggleShowFullURL,
  } = useURLDecomposerView({ urlNode });

  if (!draftNode) return null;

  return (
    <Card className="p-6 min-w-[650px] overflow-auto">
      <UrlNodeHeader
        isEdit={isEdit}
        isShowFullUrl={isShowFullUrl}
        collapsed={collapsed}
        draftNode={draftNode}
        handleCancelChange={() => handleClickEdit("cancel")}
        handleClickEdit={() => handleClickEdit()}
        handleCollapse={handleCollapse}
        handleCopy={() => handleCopyURL({ url: draftNode.url })
        }
        handleConfirmChange={() => handleClickEdit("confirm")}
        handleToggleShowFullURL={handleToggleShowFullURL}
      />
      {!collapsed && (
        <>
          {isShowFullUrl && (
            <div>
              <Label className="mb-2">
                <Badge variant="secondary">Full URL</Badge>
              </Label>
              <Card className="p-2 rounded-md">
                <CardContent className="p-0 text-xs break-all">
                  {draftNode.url}
                </CardContent>
              </Card>
            </div>
          )}
          <div>
            <Label className="mb-2">
              <Badge variant="secondary">Base URL</Badge>
            </Label>
            <Input
              type="text"
              value={draftNode.baseUrl}
              disabled={!isEdit}
              onChange={(e) =>
                handleChangeBaseURL({
                  newBaseUrl: e.target.value,
                })
              }
            />
          </div>
          <div>
            <Label className="mb-2">
              <Badge variant="secondary">URL Search Params</Badge>
            </Label>
            {draftNode.params?.map((item) => (
              <div key={item.id} className="flex gap-2 mb-2 w-full">
                <InputGroup className="w-[250px]">
                  <InputGroupInput
                    type="text"
                    value={item.key}
                    disabled={!isEdit}
                    onChange={(e) =>
                      handleChangeKeyURLParams({
                        id: item.id,
                        newKey: e.target.value,
                      })
                    }
                  />
                  {item.isUrl && (
                    <InputGroupAddon align="inline-end">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <InputGroupButton
                            className="rounded-full"
                            size="icon-xs"
                          >
                            <Info />
                          </InputGroupButton>
                        </TooltipTrigger>
                        <TooltipContent>
                          Direct changes on key affect child URLs.
                        </TooltipContent>
                      </Tooltip>
                    </InputGroupAddon>
                  )}
                </InputGroup>
                <InputGroup className="w-full">
                  <InputGroupInput
                    type="text"
                    value={item.value}
                    disabled={!isEdit}
                    onChange={(e) =>
                      handleChangeValueURLParams({
                        id: item.id,
                        value: e.target.value,
                      })
                    }
                  />
                  {item.isUrl && (
                    <InputGroupAddon align="inline-end">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <InputGroupButton
                            className="rounded-full"
                            size="icon-xs"
                          >
                            <Info />
                          </InputGroupButton>
                        </TooltipTrigger>
                        <TooltipContent>
                          Direct changes on value affect child URLs.
                        </TooltipContent>
                      </Tooltip>
                    </InputGroupAddon>
                  )}
                </InputGroup>
                {isEdit && !item.isUrl && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-red-100"
                    onClick={() => handleRemoveParamKey(item.id)}
                  >
                    <Trash className="text-red-500" />
                  </Button>
                )}
                {isEdit && item.isUrl && (
                  <AlertDialogComposed
                    title={`Delete URL Paramater (Key: ${item.key})`}
                    description="Pending removal. Finalized after clicking Confirm above."
                    onClickConfirm={() => handleRemoveParamKey(item.id)}
                    confirmText="OK"
                  >
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-red-100"
                    >
                      <Trash className="text-red-500" />{" "}
                    </Button>
                  </AlertDialogComposed>
                )}
              </div>
            ))}
            {isEdit && (
              <div className="mt-4">
                <Button size="sm" variant="outline" onClick={handleAddParamKey}>
                  <PlusCircle /> <span>Add Search Param</span>
                </Button>
              </div>
            )}
          </div>

          {Boolean(draftNode.hash) && (
            <div>
              <Label className="mb-2">
                <Badge variant="secondary">URL Hash</Badge>
              </Label>
              <div className="flex gap-2 mb-2 w-full">
                <Input
                  type="text"
                  value={draftNode.hash}
                  className="w-[250px]"
                  disabled={!isEdit}
                  onChange={(e) => handleChangeURLHash(e.target.value)}
                />
              </div>
            </div>
          )}
          {draftNode.children?.map((item) => (
            <URLDecomposerTree key={item?.id} urlNode={item} />
          ))}
        </>
      )}
    </Card>
  );
};
