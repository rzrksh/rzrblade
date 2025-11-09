import { useUrlComposerContext } from "../../context/url-composser.context";
import { Composer } from "../composer";
import { EncodeDecode } from "../encode-decode";
import { URLTemplating } from "../url-templating";

export const PageRenderer = () => {
  const {config} = useUrlComposerContext();

  const component = {
    compose: <Composer />,
    encdec: <EncodeDecode type="encode" />,
    template: <URLTemplating />,
  }

  return component[config];
};
