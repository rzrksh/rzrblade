import type React from "react";
import { createContext, useContext, useState } from "react";
import type { ConfigType } from "../models";

interface Props {
  children: React.ReactNode;
}

interface URLComposerContext {
  config: ConfigType;
  handleSetConfig?: (configType: ConfigType) => void;
}

const URLComposerContext = createContext<URLComposerContext>({
  config: 'compose',
});

export const useUrlComposerContext = () => useContext(URLComposerContext);

export const URLComposerProvider = ({ children }: Props) => {
  const [config, setConfig] = useState<ConfigType>("decompose");

  const handleSetConfig = (configType: ConfigType) => {
    setConfig(configType)
  }

  return (
    <URLComposerContext.Provider value={{ config, handleSetConfig }}>
      {children}
    </URLComposerContext.Provider>
  );
};
