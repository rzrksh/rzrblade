import type { Metadata } from "next";
import { Main } from "./components/main";
import { URLComposerProvider } from "./context/url-builder.context";

export const metadata: Metadata = {
  title: "URL Builder | rzrblade",
};

const URLComposserPage = () => {
  return (
    <URLComposerProvider>
      <Main />
    </URLComposerProvider>
  );
};

export default URLComposserPage;
