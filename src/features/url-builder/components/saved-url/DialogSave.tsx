import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { isValidNameScheme } from "@/utils/is-valid-name";
import { useUrlBuilderContext } from "../../context/url-builder.context";
import { useIndexedDB } from "./usecase/use-save-data-to-idb";
import { useView } from "./usecase/use-view";

interface Props {
  show: boolean;
  closeDialog: () => void;
}

const DialogSave = ({ show, closeDialog }: Props) => {
  const { urlInput } = useUrlBuilderContext();
  const { error, handleChangeName, handleSaveNewURL } = useView({
    closeDialog,
  });

  return (
    <Dialog open={show} onOpenChange={(open) => !open && closeDialog()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Save new URL</DialogTitle>
          <DialogDescription>Name your URL to be saved</DialogDescription>
          <DialogClose onClick={closeDialog} />
        </DialogHeader>
        <div className="grid gap-4">
          <div className="grid gap-3">
            <Label htmlFor="url-save-name">URL Name</Label>
            <div>
              <Input
                id="url-save-name"
                name="name"
                placeholder="e.g My Project Name"
                className="mb-1"
                onChange={(e) => handleChangeName(e.target.value)}
              />
              {error && <p className="text-red-600 text-sm">{error}</p>}
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={closeDialog}>
            Cancel
          </Button>
          <Button type="submit" onClick={() => handleSaveNewURL()}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogSave;
