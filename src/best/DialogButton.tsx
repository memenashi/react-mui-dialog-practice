import { Button, ButtonProps, Dialog, DialogProps } from "@mui/material";
import { FC, PropsWithChildren, ReactNode, useState } from "react";

interface DialogButtonProps {
  dialogContent?: ReactNode;
  dialogProps?: Omit<DialogProps, "open">;
}

export const DialogButton: FC<
  DialogButtonProps & PropsWithChildren & ButtonProps
> = ({ dialogContent, children, dialogProps, ...buttonProps }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        {...buttonProps}
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          setOpen(true);
          if (buttonProps.onClick) buttonProps.onClick(e);
        }}
      >
        {children}
      </Button>
      <Dialog
        {...dialogProps}
        open={open}
        onClose={(event: object, reason: "backdropClick" | "escapeKeyDown") => {
          setOpen(false);
          if (dialogProps.onClose) dialogProps.onClose(event, reason);
        }}
      >
        {dialogContent}
      </Dialog>
    </>
  );
};
