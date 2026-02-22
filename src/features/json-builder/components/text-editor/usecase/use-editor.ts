import { useEffect, useRef, useState } from "react";
import type { DecodeMeta } from "@/features/json-builder/types";
import { deepDecodeWithMeta } from "@/features/json-builder/utils/deep-decode-with-meta";
import { deepReEncode } from "@/features/json-builder/utils/deep-re-encode";

export default function useEditor() {
  const [raw, setRaw] = useState("");
  const [beautified, setBeautified] = useState("");
  const metaRef = useRef<DecodeMeta[]>([]);

  useEffect(() => {
    try {
      const parsed = JSON.parse(raw);
      const meta: DecodeMeta[] = [];
      const decoded = deepDecodeWithMeta(parsed, "root", 0, meta);
      metaRef.current = meta;
      setBeautified(JSON.stringify(decoded, null, 2));
    } catch {}
  }, [raw]);

  const onBeautifiedChange = (v?: string) => {
    setBeautified(v || "");

    try {
      const decoded = JSON.parse(v || "{}");
      const encoded = deepReEncode(decoded, metaRef.current);
      setRaw(JSON.stringify(encoded, null, 2));
    } catch {}
  };

  return { beautified, raw, onBeautifiedChange, setRaw };
}
