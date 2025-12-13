import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  cancelText?: string;
  confirmText?: string;
  onClickCancel?: () => void;
  onClickConfirm: () => void;
}

export function AlertDialogComposed({
  children,
  title,
  description,
  cancelText = "Cancel",
  confirmText = "Confirm",
  onClickConfirm,
  onClickCancel = () => {},
}: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClickCancel}>
            {cancelText}
          </AlertDialogCancel>
          <AlertDialogAction onClick={onClickConfirm}>
            {confirmText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
