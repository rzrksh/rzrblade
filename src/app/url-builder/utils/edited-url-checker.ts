import type { URLNode } from "../models";

export const editedURLChecker = ({
  newNode,
  previousNode,
}: {
  newNode: URLNode | null;
  previousNode: URLNode | null;
}) => {
  const editedURLParams: string[] = [];
  const prevUrlParams = previousNode?.params.filter((item) => item.isUrl);
  const newUrlParams = newNode?.params.filter((item) => item.isUrl);

  newUrlParams?.forEach((newParam) => {
    const editedKey = prevUrlParams?.find(
      (prevParam) => prevParam.value !== newParam.value,
    );

    // handles if prevUrlParams not exist at all
    if (prevUrlParams?.length === 0) {
      editedURLParams.push(newParam.id);
    }

    if (editedKey) {
      editedURLParams.push(newParam.id);
    }
  });

  return editedURLParams;
};
