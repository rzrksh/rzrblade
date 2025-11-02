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

export const updateURLTextInput = (urlNode: URLNode | null) => {
  try {
    const baseUrl = new URL(urlNode?.baseUrl || '');

    if (urlNode?.hash) {
      baseUrl.hash =  urlNode.hash
    }

    urlNode?.params?.forEach(item => {
      if (item.isUrl) {
        const childNode = urlNode.children?.find(node => node?.parentURLParam === item.key);
        
        if (childNode) {
          baseUrl.searchParams.set(item.key, updateURLTextInput(childNode) || '');
        }
      } else {
        baseUrl.searchParams.set(item.key, item.value);
      }
    });
    
    return baseUrl.toString();
  } catch {

  }
}
