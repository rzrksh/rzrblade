import { isValidURL } from "./is-valid-url";

interface Args {
  urlInput: string;
  urlKeys: string[];
  level?: number;
}

export const urlTreeGenerator = ({ urlInput, urlKeys = [], level = 1 }: Args) => {
  if (!isValidURL(urlInput)) {
    return;
  }

  const url = new URL(urlInput);
  const searchParams = url.searchParams;
  const params: any = [];
  const children: any = [];

  for (const [key, value] of searchParams.entries()) {
    if (key) {
      if (urlKeys.length ? urlKeys.includes(key) : isValidURL(value)) {
        if (isValidURL(value)) {
          params.push({ key, value });
          children.push(urlTreeGenerator({ urlInput: value, urlKeys, level: level + 1 }));
        }
      } else {
        params.push({ key, value });
      }
    }
  }

  return {
    url: url.toString(),
    children,
    params,
    level,
  };
};
