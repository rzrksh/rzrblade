import type { URLNode } from "../models";

type UpdateBaseURLAtLevel = (params: {
  urlTree: URLNode | null;
  id: string;
  urlNode: URLNode | null;
}) => URLNode | null;

export const updateURLTree: UpdateBaseURLAtLevel = ({
  urlNode,
  id,
  urlTree,
}) => {
  if (!urlTree) return null;

  if (urlNode && urlTree?.id === id) {
    return { ...urlNode };
  }

  return {
    ...urlTree,
    children: urlTree?.children?.map((child) =>
      updateURLTree({ urlTree: child, urlNode, id }),
    ),
  };
};

export const updateURLTextInput = ({
  newUrlNode,
  editedURLParams
}: {
  newUrlNode: URLNode | null;
  editedURLParams: string[]
}) => {
  try {
    const baseUrl = new URL(newUrlNode?.baseUrl || "");

    baseUrl.hash = newUrlNode?.hash || "";

    newUrlNode?.params?.forEach((item) => {
      if (item.isUrl) {
        const childNode = newUrlNode.children?.find(
          (node) => node?.parentURLParam === item.key,
        );

        if (editedURLParams.includes(item.id)) {
          baseUrl.searchParams.append(item.key, item.value);
        } else if (childNode) {
          baseUrl.searchParams.append(
            item.key,
            updateURLTextInput({newUrlNode: childNode, editedURLParams }) || "",
          );
        }
      } else {
        baseUrl.searchParams.append(item.key, item.value);
      }
    });

    return baseUrl.toString();
  } catch (error) {
    if (error) {
      console.error("url tree composer", error);
    }
  }
};
