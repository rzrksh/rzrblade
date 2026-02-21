"use client";

import { Editor } from "@monaco-editor/react";
import useEditor from "./usecase/use-editor";

export default function JsonEditor() {
  const { beautified, raw, onBeautifiedChange, setRaw } = useEditor();
  return (
    <div className="flex gap-2 w-full">
      <div className="flex-1">
        <Editor
          height="80vh"
          defaultLanguage="json"
          value={raw}
          theme="vs-dark"
          onChange={(v) => setRaw(v || "")}
        />
      </div>
      <div className="flex-1">
        <Editor
          height="80vh"
          defaultLanguage="json"
          value={beautified}
          theme="vs-dark"
          onChange={onBeautifiedChange}
        />
      </div>
    </div>
  );
}
