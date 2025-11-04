import { useUrlComposerContext } from "../../context/url-composser.context";
import { Composer } from "../composer/Composer";
import { EncodeDecode } from "../encode-decode";

export const PageRenderer = () => {
  const {config} = useUrlComposerContext();

  const component = {
    compose: <Composer />,
    encode: <EncodeDecode type="encode" />,
    decode: <EncodeDecode type="decode" />,
    template: null,
  }

  return component[config];
};
