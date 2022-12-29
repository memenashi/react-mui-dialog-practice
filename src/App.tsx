import { DialogContent, DialogTitle, Stack, styled } from "@mui/material";
import { FC } from "react";
import { DialogButton } from "./DialogButton";

const CenterBox = styled("div")({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const App: FC = () => {
  return (
    <CenterBox>
      <Stack>
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
      </Stack>
    </CenterBox>
  );
};
