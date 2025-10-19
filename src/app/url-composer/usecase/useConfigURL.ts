import { useState } from "react"

type ConfigType = 'encode' | 'decode' | 'compose' | 'decompose';

export const useConfigURL = () => {
  const [config, setConfig] = useState<ConfigType>('decompose');

  const handleChangeConfg = (value: ConfigType) => {
    setConfig(value);
  }

  return {handleChangeConfg, config}
}