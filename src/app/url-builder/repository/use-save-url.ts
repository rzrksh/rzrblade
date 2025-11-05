import { v4 as uuid } from "uuid";
import { isValidURL } from "../utils/is-valid-url";

export const useSaveURL = () => {
  const handleSaveURL = ({
    urlName,
    url,
    onError,
    onSuccess,
  }: {
    urlName: string;
    url: string;
    onError?: () => void;
    onSuccess?: () => void;
  }) => {
    if (isValidURL(url)) {
      window.localStorage.setItem(
        "saved-url",
        JSON.stringify({ name: urlName, id: uuid(), url }),
      );
  
      if (onSuccess) {
        onSuccess();
      }
  
      return;
    }
  
    if (onError) {
      onError();
    }
  };

  return { handleSaveURL };
}
