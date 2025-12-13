"use client";

import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";
import type { ConfigType, URLNode } from "../models";
import { urlTreeGenerator } from "../utils/url-tree-generator";

interface Props {
  children: React.ReactNode;
}

interface URLComposerContext {
  autoDetectURL: boolean;
  config: ConfigType;
  urlInput: string;
  urlKeys: string[];
  urlTree: URLNode | null;
  handleChangeTextUrl: (urlInput: string) => void;
  handleSetConfig: (configType: ConfigType) => void;
  handleSetUrlKeys: (urlKeysString: string) => void;
  handleToggleAutoDetectURL: () => void;
}

const URLComposerContext = createContext<URLComposerContext>({
  autoDetectURL: true,
  config: "compose",
  urlInput: "",
  urlKeys: [],
  urlTree: null,
  handleChangeTextUrl: () => {},
  handleSetConfig: () => {},
  handleSetUrlKeys: () => {},
  handleToggleAutoDetectURL: () => {},
});

export const useUrlBuilderContext = () => useContext(URLComposerContext);

export const URLComposerProvider = ({ children }: Props) => {
  const [config, setConfig] = useState<ConfigType>("compose");
  const [urlKeys, setUrlKeys] = useState<string[]>([]);
  const [urlInput, setUrlInput] = useState("");
  const [urlTree, setUrlTree] = useState<URLNode | null>(null);
  const [autoDetectURL, setAutoDetectURL] = useState(true);

  const handleSetConfig = (configType: ConfigType) => {
    setConfig(configType);
  };

  const handleSetUrlKeys = (urlKeysString: string) => {
    if (!urlKeysString) {
      setUrlKeys([]);
      return;
    }

    const splitedKeys = urlKeysString.split(",");
    setUrlKeys(splitedKeys);
  };

  const handleChangeTextUrl = (urlInput: string) => {
    setUrlInput(urlInput);
  };

  const handleToggleAutoDetectURL = () => {
    setAutoDetectURL(!autoDetectURL);
  };

  useEffect(() => {
    const generatedUrlTree = urlTreeGenerator({
      urlInput,
      urlKeys,
      autoDetectURL,
    });
    setUrlTree(generatedUrlTree);
  }, [urlInput, urlKeys, autoDetectURL]);

  return (
    <URLComposerContext.Provider
      value={{
        autoDetectURL,
        config,
        urlInput,
        urlKeys,
        urlTree,
        handleChangeTextUrl,
        handleSetConfig,
        handleSetUrlKeys,
        handleToggleAutoDetectURL,
      }}
    >
      {children}
    </URLComposerContext.Provider>
  );
};
