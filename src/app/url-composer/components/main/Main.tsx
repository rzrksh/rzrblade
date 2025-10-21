import { Decomposer } from "../decomposer/Decomposer";

export const Main = () => {
  const config = 'decomposer';

  const component = {
    decomposer: <Decomposer />,
    composer: <div>composer</div>,
    encode: <div>encode</div>,
    decode: <div>decode</div>
  }

  return (
    component[config]
  );
};
