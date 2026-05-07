"use client";

import { Editor } from "@monaco-editor/react";
import { useAppThemeContext } from "@/app/context/theme";
import ButtonTools from "../button-tools";
import useEditor from "./usecase/use-editor";

const EDITOR_THEME = {
  dark: "vs-dark",
  light: "vs-light",
};

export default function JsonEditor() {
  const {
    beautified,
    raw,
    onBeautifiedChange,
    setRaw,
    handleCopyRawText,
    handleCopyBeautifiedText,
    handleClearRawText,
    handleClearBeautifiedText,
  } = useEditor();
  const { theme } = useAppThemeContext();
  return (
    <div className="flex gap-2 w-full">
      <div className="flex-1">
        <ButtonTools
          onClickCopy={handleCopyRawText}
          onClickClear={handleClearRawText}
        />
        <Editor
          height="80vh"
          defaultLanguage="json"
          value={raw}
          theme={EDITOR_THEME[theme]}
          onChange={(v) => setRaw(v || "")}
        />
      </div>
      <div className="flex-1">
        <ButtonTools
          onClickCopy={handleCopyBeautifiedText}
          onClickClear={handleClearBeautifiedText}
        />
        <Editor
          height="80vh"
          defaultLanguage="json"
          value={beautified}
          theme={EDITOR_THEME[theme]}
          onChange={onBeautifiedChange}
        />
      </div>
    </div>
  );
}
