import { v4 as uuidv4 } from "uuid";
import type { DecodeMeta } from "../types";

export function deepDecodeWithMeta(
  input: any,
  path = "root",
  depth = 0,
  meta: DecodeMeta[] = [],
): any {
  if (typeof input === "string") {
    try {
      const parsed = JSON.parse(input);
      meta.push({
        id: uuidv4(),
        path,
        depth,
        original: input,
      });

      return deepDecodeWithMeta(parsed, path, depth + 1, meta);
    } catch {
      return input;
    }
  }

  if (Array.isArray(input)) {
    return input.map((v, i) =>
      deepDecodeWithMeta(v, `${path}[${i}]`, depth, meta),
    );
  }

  if (input && typeof input === "object") {
    const out: any = {};
    for (const k in input) {
      out[k] = deepDecodeWithMeta(input[k], `${path}.${k}`, depth, meta);
    }

    return out;
  }

  return input;
}
