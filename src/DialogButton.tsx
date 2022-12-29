import { Button, ButtonProps, Dialog, DialogProps } from "@mui/material";
import { FC, PropsWithChildren, ReactNode, useCallback, useState } from "react";

interface DialogButtonProps {
  dialogContent?: ReactNode;
  dialogProps?: Omit<DialogProps, "open">;
}

export const DialogButton: FC<
  DialogButtonProps & PropsWithChildren & ButtonProps
> = ({ dialogContent, children, dialogProps, ...buttonProps }) => {
  const [open, setOpen] = useState(false);
  const handleButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setOpen(true);
      if (buttonProps?.onClick) buttonProps.onClick(e);
    },
    []
  );
  const handleDialogClose = useCallback(
    (event: {}, reason: "backdropClick" | "escapeKeyDown") => {
      setOpen(false);
      if (dialogProps?.onClose) dialogProps.onClose(event, reason);
    },
    []
  );
  return (
    <>
      <Button {...buttonProps} onClick={handleButtonClick}>
        {children}
      </Button>
      <Dialog {...dialogProps} open={open} onClose={handleDialogClose}>
        {dialogContent}
      </Dialog>
    </>
  );
};
