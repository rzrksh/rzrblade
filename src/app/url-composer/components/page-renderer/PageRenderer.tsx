import { useUrlComposerContext } from "../../context/url-composser.context";
import { Composer } from "../composer";
import { Decomposer } from "../decomposer/Decomposer";
import { EncodeDecode } from "../encode-decode";

export const PageRenderer = () => {
  const {config} = useUrlComposerContext();

  const component = {
    decompose: <Decomposer />,
    compose: <Composer />,
    encode: <EncodeDecode type="encode" />,
    decode: <EncodeDecode type="decode" />
  }

  return component[config];
};
