import { useState } from "react";
import { useUrlComposerContext } from "@/app/url-builder/context/url-composser.context";
import { updateBaseUrlAtLevel } from "@/app/url-builder/utils/url-tree-composer";

export const useURLDecomposerView = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const { urlTree, handleSetUrlTree } = useUrlComposerContext();

  const handleChangeBaseURL = ({
    newBaseUrl,
    id,
  }: {
    newBaseUrl: string;
    id: string;
  }) => {
    const updatedURLTree = updateBaseUrlAtLevel({ id, newBaseUrl, urlTree });
    handleSetUrlTree(updatedURLTree);
  };

  const handleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleChangeEdit = () => {
    setIsEdit(!isEdit);
  }

  return { collapsed, isEdit, handleChangeBaseURL, handleCollapse, handleChangeEdit };
};
