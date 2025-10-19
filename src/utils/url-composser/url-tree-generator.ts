import { isValidURL } from "./is-valid-url";

interface Args {
  urlInput: string;
  urlKeys: string[];
}

export const urlTreeGenerator = ({ urlInput, urlKeys }: Args) => {
  if (!isValidURL(urlInput)) {
    return;
  }

  const url = new URL(urlInput);
  const searchParams = url.searchParams;
  const params: any = [];
  const chidren: any = [];

  for (const [key, value] of searchParams.entries()) {
    if (key) {
      if (urlKeys.includes(key)) {
        if (isValidURL(value)) {
          chidren.push(urlTreeGenerator({ urlInput: value, urlKeys }));
        }
      } else {
        params.push({ key, value });
      }
    }
  }

  return {
    url: url.toString(),
    chidren,
    params
  };
};

// const ref = {
//   key: "",
//   url: "app://myapp",
//   params: [{}, {}],
//   chidren: {
//     key: "callback",
//     url: "https://www.myapp.com",
//     params: [{}, {}],
//     chidren: {
//       key: "callback",
//       url: "https://www.myapp.com",
//       params: [{}, {}],
//       chidren: null,
//     },
//   },
// };
