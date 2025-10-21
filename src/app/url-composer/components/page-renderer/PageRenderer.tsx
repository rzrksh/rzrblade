import { useUrlComposerContext } from "../../context/url-composser.context";
import { Decomposer } from "../decomposer/Decomposer";

export const PageRenderer = () => {
  const {config} = useUrlComposerContext();

  const component = {
    decompose: <Decomposer />,
    compose: <div>composer</div>,
    encode: <div>encode</div>,
    decode: <div>decode</div>
  }

  return (
    component[config]
  );
};
