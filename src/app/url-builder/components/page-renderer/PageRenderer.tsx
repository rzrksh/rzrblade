import { useUrlComposerContext } from "../../context/url-composser.context";
import { Composer } from "../composer/Composer";
import { EncodeDecode } from "../encode-decode";

export const PageRenderer = () => {
  const {config} = useUrlComposerContext();

  const component = {
    compose: <Composer />,
    encdec: <EncodeDecode type="encode" />,
    template: null,
  }

  return component[config];
};
