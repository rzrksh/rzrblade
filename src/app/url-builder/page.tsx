'use client'

import { Main } from "./components/main";
import { URLComposerProvider } from "./context/url-builder.context";

const URLComposserPage = () => {
  return (
    <URLComposerProvider>
      <Main />
    </URLComposerProvider>
  );
};

export default URLComposserPage;
