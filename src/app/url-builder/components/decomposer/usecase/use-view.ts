import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useUrlComposerContext } from "@/app/url-builder/context/url-composser.context";
import type { URLNode } from "@/app/url-builder/models";
import { isValidURL } from "@/app/url-builder/utils/is-valid-url";
import {
  updateURLTextInput,
  updateURLTree,
} from "@/app/url-builder/utils/url-tree-composer";

export const useURLDecomposerView = ({
  urlNode,
}: {
  urlNode: URLNode | null;
}) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [draftNode, setDraftNode] = useState(urlNode);
  const { urlTree, handleChangeTextUrl } = useUrlComposerContext();
  const previousNode = useRef<URLNode | null>(null);

  useEffect(() => {
    setDraftNode(urlNode);
  }, [urlNode]);

  const handleChangeBaseURL = ({ newBaseUrl }: { newBaseUrl: string }) => {
    if (draftNode) {
      setDraftNode({ ...draftNode, baseUrl: newBaseUrl });
    }
  };

  const handleChangeKeyURLParams = ({
    id,
    newKey,
  }: {
    id: string;
    newKey: string;
  }) => {
    if (draftNode?.params) {
      const _tempSearchParams = structuredClone(draftNode.params);
      const _tempDraftNode = structuredClone(draftNode);
      const indexKey = _tempSearchParams.findIndex((item) => item.id === id);

      if (_tempSearchParams[indexKey].isUrl && _tempDraftNode.children) {
        const indexChild = _tempDraftNode.children.findIndex(item => item?.parentURLParam === _tempSearchParams[indexKey].key)

        if (indexChild !== -1) {
          if (_tempDraftNode.children[indexChild]) {
            _tempDraftNode.children[indexChild].parentURLParam = newKey;
          }
        }
      }
  
      _tempSearchParams[indexKey].key = newKey;
      setDraftNode({ ..._tempDraftNode, params: _tempSearchParams });
    }
  };

  const handleChangeValueURLParams = ({
    id,
    value,
  }: {
    id: string;
    value: string;
  }) => {
    if (draftNode?.params) {
      const _tempSearchParams = structuredClone(draftNode.params);

      const indexKey = _tempSearchParams.findIndex((item) => item.id === id);
      _tempSearchParams[indexKey].value = value;
      _tempSearchParams[indexKey].isUrl = isValidURL(value);

      setDraftNode({ ...draftNode, params: _tempSearchParams });
    }
  };

  const handleRemoveParamKey = (id: string) => {
    if (draftNode?.params) {
      const _tempSearchParams = structuredClone(draftNode.params);

      const indexKey = _tempSearchParams.findIndex((item) => item.id === id);

      if (indexKey !== -1) {
        _tempSearchParams.splice(indexKey, 1);
      }

      setDraftNode({ ...draftNode, params: _tempSearchParams });
    }
  };

  const handleChangeURLHash = (hash: string) => {
    if (draftNode) {
      setDraftNode({ ...draftNode, hash });
    }
  };

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleClickEdit = (action?: "confirm" | "cancel") => {
    previousNode.current = structuredClone(urlNode);

    setIsEdit(!isEdit);

    if (action === "confirm") {
      previousNode.current = structuredClone(draftNode);
      const newURLTree = updateURLTree({
        urlTree,
        id: draftNode?.id || "",
        urlNode: draftNode,
      });

      const newStringURL = updateURLTextInput(newURLTree) || "";
      handleChangeTextUrl(newStringURL);

      toast.success("URL has been successfully changed!");
      return;
    }

    if (action === "cancel") {
      setDraftNode(previousNode.current);
    }
  };

  return {
    draftNode,
    collapsed,
    isEdit,
    handleChangeBaseURL,
    handleCollapse,
    handleClickEdit,
    handleChangeKeyURLParams,
    handleChangeValueURLParams,
    handleChangeURLHash,
    handleRemoveParamKey,
  };
};
