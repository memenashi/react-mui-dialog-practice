import {
  Button,
  ButtonProps,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { FC, useCallback, useState } from "react";

export const Dialog2Button: FC<Omit<ButtonProps, "children">> = (
  buttonProps
) => {
  const [open, setOpen] = useState(false);
  const handleButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      setOpen(true);
      if (buttonProps.onClick) buttonProps.onClick(e);
    },
    [buttonProps]
  );
  const handleDialogClose = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <>
      <Button {...buttonProps} onClick={handleButtonClick}>
        Dialog 2
      </Button>
      <Dialog open={open} onClose={handleDialogClose}>
        <DialogTitle>Dialog 2</DialogTitle>
        <DialogContent>Dialog 2</DialogContent>
      </Dialog>
    </>
  );
};
