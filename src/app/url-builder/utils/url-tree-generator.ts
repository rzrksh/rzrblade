import { v4 as uuid } from 'uuid';
import type { URLNode, URLParam } from '../models';
import { isValidURL } from "./is-valid-url";


interface Args {
  urlInput: string;
  urlKeys: string[];
  level?: number;
  parentURLParam?: string;
}

export const urlTreeGenerator = ({ urlInput, urlKeys = [], level = 1, parentURLParam = '' }: Args) => {
  if (!isValidURL(urlInput)) {
    return null;
  }

  const url = new URL(urlInput);
  const searchParams = url.searchParams;
  const params: URLParam[] = [];
  const children: Array<URLNode | null> = [];

  for (const [key, value] of searchParams.entries()) {
    if (key) {
      if (urlKeys.length ? urlKeys.includes(key) : isValidURL(value)) {
        if (isValidURL(value)) {
          params.push({ key, value, id: uuid(), isUrl: true});
          children.push(urlTreeGenerator({ urlInput: value, urlKeys, level: level + 1, parentURLParam: key }));
        }
      } else {
        params.push({ key, value, id: uuid(), isUrl: false});
      }
    }
  }

  return {
    id: uuid(),
    baseUrl: url.toString().split('?')[0],
    url: url.toString(),
    children,
    params,
    level,
    parentURLParam,
    hash: url.hash
  };
};
