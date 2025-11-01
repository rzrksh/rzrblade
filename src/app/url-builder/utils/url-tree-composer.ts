import type { URLNode } from "../models";

type UpdateBaseURLAtLevel = (params: {
  urlTree: URLNode | null;
  id: string;
  newBaseUrl: string;
}) => URLNode | null;

export const updateBaseUrlAtLevel: UpdateBaseURLAtLevel = ({
  newBaseUrl,
  id,
  urlTree,
}) => {
  if (!urlTree) return null;

  if (urlTree?.id === id) {
    return { ...urlTree, baseUrl: newBaseUrl };
  }

  return {
    ...urlTree,
    children: urlTree?.children?.map((child) =>
      updateBaseUrlAtLevel({ urlTree: child, newBaseUrl, id }),
    ),
  };
};

