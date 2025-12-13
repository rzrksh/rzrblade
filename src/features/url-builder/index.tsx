import { Main } from "./components/main";
import { URLComposerProvider } from "./context/url-builder.context";

export const URLComposser = () => {
  return (
    <URLComposerProvider>
      <Main />
    </URLComposerProvider>
  );
};

export default URLComposser;
