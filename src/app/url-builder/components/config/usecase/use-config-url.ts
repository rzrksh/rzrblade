import { useUrlBuilderContext } from "@/app/url-builder/context/url-builder.context";

export const useConfigURL = () => {
  const { config, handleSetConfig } = useUrlBuilderContext();

  return { handleSetConfig, config };
};
