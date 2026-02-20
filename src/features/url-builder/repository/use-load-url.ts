import { v4 as uuid } from "uuid";
import { isValidURL } from "../utils/is-valid-url";

export const useSaveURL = () => {
  const handleSaveNewURL = ({
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
      const savedUrl = window.localStorage.getItem('saved-url') || '';

      if (savedUrl) {
        const parsedSavedUrl = JSON.parse(savedUrl);
  
        window.localStorage.setItem(
          "saved-url",
          JSON.stringify([{ name: urlName, id: uuid(), url }]),
        );
    
        if (onSuccess) {
          onSuccess();
        }
      }
      
      return;
    }
  
    if (onError) {
      onError();
    }
  };

  return { handleSaveNewURL };
}
