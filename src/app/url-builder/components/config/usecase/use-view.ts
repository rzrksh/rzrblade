import { useState } from "react";

export const useView = () => {
  const [showDialogSave, setShowDialogSave] = useState(false);

  const handleOpenDialogSave = () => {
    setShowDialogSave(true);
  };

  const handleCloseDialogSave = () => {
    setShowDialogSave(false);
  };

  return {
    showDialogSave,
    handleCloseDialogSave,
    handleOpenDialogSave,
  };
};
