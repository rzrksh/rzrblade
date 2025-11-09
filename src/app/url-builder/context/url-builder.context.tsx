import type React from "react";
import { createContext, useContext, useState } from "react";
import type { ConfigType, URLNode } from "../models";
import { urlTreeGenerator } from "../utils/url-tree-generator";

interface Props {
  children: React.ReactNode;
}

interface URLComposerContext {
  config: ConfigType;
  urlInput: string;
  urlKeys: string[];
  urlTree: URLNode | null;
  handleChangeTextUrl: (urlInput: string) => void;
  handleSetConfig: (configType: ConfigType) => void;
  handleSetUrlKeys: (urlKeysString: string) => void;
}

const URLComposerContext = createContext<URLComposerContext>({
  config: "compose",
  urlInput: "",
  urlKeys: [],
  urlTree: null,
  handleChangeTextUrl: () => {},
  handleSetConfig: () => {},
  handleSetUrlKeys: () => {},
});

export const useUrlBuilderContext = () => useContext(URLComposerContext);

export const URLComposerProvider = ({ children }: Props) => {
  const [config, setConfig] = useState<ConfigType>("compose");
  const [urlKeys, setUrlKeys] = useState<string[]>([]);
  const [urlInput, setUrlInput] = useState("");
  const [urlTree, setUrlTree] = useState<URLNode | null>(null);

  const handleSetConfig = (configType: ConfigType) => {
    setConfig(configType);
  };

  const handleSetUrlKeys = (urlKeysString: string) => {
    if (!urlKeysString) {
      setUrlKeys([]);

      const generatedUrlTree = urlTreeGenerator({ urlInput, urlKeys: [] });
      setUrlTree(generatedUrlTree);
      return;
    }

    const splitedKeys = urlKeysString.split(",");

    setUrlKeys(splitedKeys);
    const generatedUrlTree = urlTreeGenerator({
      urlInput,
      urlKeys: splitedKeys,
    });

    setUrlTree(generatedUrlTree);
  };

  const handleChangeTextUrl = (urlInput: string) => {
    setUrlInput(urlInput);
    const generatedUrlTree = urlTreeGenerator({ urlInput, urlKeys });
    setUrlTree(generatedUrlTree);
  };

  return (
    <URLComposerContext.Provider
      value={{
        config,
        urlInput,
        urlKeys,
        urlTree,
        handleChangeTextUrl,
        handleSetConfig,
        handleSetUrlKeys,
      }}
    >
      {children}
    </URLComposerContext.Provider>
  );
};
