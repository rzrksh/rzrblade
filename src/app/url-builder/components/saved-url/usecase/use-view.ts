import { useState } from "react";
import { isValidNameScheme } from "@/utils/is-valid-name";

interface Props {
  closeDialog: () => void;
}

export const useView = ({ closeDialog }: Props) => {
  const [urlName, setUrlName] = useState("");
  const [error, setError] = useState("");

  const handleSaveNewURL = () => {
    if (!isValidNameScheme(urlName)) {
      return;
    }

    closeDialog();
  };

  const handleChangeName = (urlName: string) => {
    if (!urlName) {
      setError("URL cannot be empty");
      return;
    }

    if (!isValidNameScheme(urlName)) {
      setError("Invalid URL name");

      return;
    }

    setError("");
    setUrlName(urlName);
  };

  return { error, handleSaveNewURL, handleChangeName };
};
