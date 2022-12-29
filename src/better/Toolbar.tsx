import { Stack } from "@mui/material";
import { FC } from "react";
import { Dialog1Button } from "./Dialog1Button";
import { Dialog2Button } from "./Dialog2Button";

export const Better: FC = () => (
  <Stack direction="row" gap={2}>
    <Dialog1Button variant="contained" color="warning" />
    <Dialog2Button variant="contained" color="warning" />
  </Stack>
);
