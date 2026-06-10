import type { DecodeMeta } from "../types";

function deepEqual(a: any, b: any): boolean {
  if (a === b) return true;
  if (typeof a !== typeof b) return false;
  if (a == null || b == null) return false;
  if (Array.isArray(a)) {
    if (!Array.isArray(b) || a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }
  if (typeof a === "object") {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (const key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true;
  }
  return false;
}

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
      const currentValue = ref[key];
      if (typeof currentValue === "string") {
        continue;
      }
      ref[key] = JSON.stringify(currentValue);
    }
  }

  for (const m of sorted) {
    const clean = m.path.replace(/^root\.?/, "");
    if (!clean) continue;

    const parts = clean.split(/\.|\[(\d+)\]/).filter(Boolean);
    let ref: any = clone;

    for (let i = 0; i < parts.length - 1; i++) {
      ref = ref?.[parts[i]];
      if (!ref) break;
    }

    if (ref && typeof ref === "object" && !Array.isArray(ref)) {
      const keys = Object.keys(ref);
      const keyIndex = keys.indexOf(parts[parts.length - 1]);
      if (keyIndex === -1) continue;
      
      const adjacentKeys = [];
      if (keyIndex > 0) adjacentKeys.push(keys[keyIndex - 1]);
      if (keyIndex < keys.length - 1) adjacentKeys.push(keys[keyIndex + 1]);

      for (const adjKey of adjacentKeys) {
        if (adjKey === parts[parts.length - 1]) continue;
        const adjMeta = meta.find(m2 => {
          const adjClean = m2.path.replace(/^root\.?/, "");
          const adjParts = adjClean.split(/\.|\[(\d+)\]/).filter(Boolean);
          return adjParts.slice(0, -1).join(".") === parts.slice(0, -1).join(".") && adjParts[adjParts.length - 1] === adjKey;
        });
        
        if (adjMeta && deepEqual(ref[adjKey], m.originalValue)) {
          ref[adjKey] = m.original;
        }
      }
    }
  }

  return clone;
}
