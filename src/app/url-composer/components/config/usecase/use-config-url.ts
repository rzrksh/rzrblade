import { useUrlComposerContext } from "@/app/url-composer/context/url-composser.context";

export const useConfigURL = () => {
  const { config, handleSetConfig } = useUrlComposerContext();

  return { handleSetConfig, config };
};
