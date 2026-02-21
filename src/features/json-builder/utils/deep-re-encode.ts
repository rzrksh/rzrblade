import type { DecodeMeta } from "../types";

export function deepReEncode(decoded: any, meta: DecodeMeta[]) {
  const sorted = [...meta].sort((a, b) => b.depth - a.depth);
  const clone = structuredClone(decoded);

  for (const m of sorted) {
    const clean = m.path.replace(/^root\.?/, "");
    if (!clean) continue;

    const parts = clean.split(/\.|\[(\d+)\]/).filter(Boolean);
    let ref: any = clone;

    for (let i = 0; i < parts.length - 1; i++) {
      ref = ref?.[parts[i]];
      if (!ref) break;
    }

    const key = parts[parts.length - 1];
    if (ref && key in ref) {
      ref[key] = JSON.stringify(ref[key]);
    }
  }

  return clone;
}
