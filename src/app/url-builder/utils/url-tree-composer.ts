import { isValidURL } from "./is-valid-url";

interface Args {
  urlInput: string;
  urlKeys: string[];
  level: number
}

export const urlTreeComposer = ({ urlInput, urlKeys = [], level = 1 }: Args) => {
  if (!isValidURL(urlInput)) {
    return null;
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
          children.push(urlTreeComposer({ urlInput: value, urlKeys, level: level + 1 }));
        }
      } else {
        params.push({ key, value });
      }
    }
  }

  return '';
};
