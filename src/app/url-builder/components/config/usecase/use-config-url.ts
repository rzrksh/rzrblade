import { useUrlComposerContext } from "@/app/url-builder/context/url-composser.context";

export const useConfigURL = () => {
  const { config, handleSetConfig } = useUrlComposerContext();

  return { handleSetConfig, config };
};
