import { useState } from "react"

type ConfigType = 'encode' | 'decode' | 'compose';

export const useConfigURL = () => {
  const [config, setConfig] = useState<ConfigType>('compose');

  const handleChangeConfg = (value: ConfigType) => {
    setConfig(value);
  }

  return {handleChangeConfg, config}
}