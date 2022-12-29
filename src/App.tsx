import { Stack, styled } from "@mui/material";
import { FC } from "react";
import { Best } from "./best/Toolbar";
import { Better } from "./better/Toolbar";
import { Bad } from "./bad/Toolbar";

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
      <Stack gap={2}>
        <Bad />
        <Better />
        <Best />
      </Stack>
    </CenterBox>
  );
};
