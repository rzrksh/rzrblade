import type React from "react";
import { createContext, useContext, useState } from "react";
import type { ConfigType } from "../models";

interface Props {
  children: React.ReactNode;
}

interface URLComposerContext {
  config: ConfigType;
  urlKeys: string[];
  handleSetConfig: (configType: ConfigType) => void;
  handleSetUrlKeys: (urlKeysString: string) => void;
}

const URLComposerContext = createContext<URLComposerContext>({
  config: 'compose',
  urlKeys: [],
  handleSetConfig: () => {},
  handleSetUrlKeys: () => {},
});

export const useUrlComposerContext = () => useContext(URLComposerContext);

export const URLComposerProvider = ({ children }: Props) => {
  const [config, setConfig] = useState<ConfigType>("decompose");
  const [urlKeys, setUrlKeys] = useState<string[]>([]);

  const handleSetConfig = (configType: ConfigType) => {
    setConfig(configType)
  }

  const handleSetUrlKeys = (urlKeysString: string) => {
    setUrlKeys(urlKeysString.split(','));
  }

  return (
    <URLComposerContext.Provider value={{ config,urlKeys,handleSetConfig, handleSetUrlKeys }}>
      {children}
    </URLComposerContext.Provider>
  );
};
