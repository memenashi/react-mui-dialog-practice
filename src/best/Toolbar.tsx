import { FC } from "react";
import { DialogContent, DialogTitle, Stack } from "@mui/material";
import { DialogButton } from "./DialogButton";

export const Best: FC = () => (
  <Stack gap={2} direction="row">
    <DialogButton
      variant="contained"
      dialogContent={
        <>
          <DialogTitle>Dialog 1</DialogTitle>
          <DialogContent>Dialog 1</DialogContent>
        </>
      }
    >
      Dialog 1
    </DialogButton>
    <DialogButton
      variant="contained"
      dialogContent={
        <>
          <DialogTitle>Dialog 2</DialogTitle>
          <DialogContent>Dialog 2</DialogContent>
        </>
      }
    >
      Dialog 2
    </DialogButton>
  </Stack>
);
