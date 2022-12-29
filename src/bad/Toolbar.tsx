import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  Stack,
} from "@mui/material";
import { FC, useCallback, useState } from "react";

type DialogKind = "1" | "2";

export const Bad: FC = () => {
  const [kind, setKind] = useState<DialogKind | null>("1");
  const handleOpenDialog1 = useCallback(() => setKind("1"), []);
  const handleOpenDialog2 = useCallback(() => setKind("2"), []);
  const handleCloseDialog = useCallback(() => setKind(null), []);
  return (
    <Stack gap={2} direction="row">
      <Button variant="contained" color="error" onClick={handleOpenDialog1}>
        Dialog 1
      </Button>
      <Button variant="contained" color="error" onClick={handleOpenDialog2}>
        Dialog 2
      </Button>
      <DialogManager kind={kind} onClose={handleCloseDialog} />
    </Stack>
  );
};

const DialogManager: FC<{ kind: DialogKind; onClose: () => void }> = ({
  kind,
  onClose,
}) => (
  <>
    <Dialog open={kind === "1"} onClose={onClose}>
      <DialogTitle>Dialog 1</DialogTitle>
      <DialogContent>Dialog 1</DialogContent>
    </Dialog>
    <Dialog open={kind === "2"} onClose={onClose}>
      <DialogTitle>Dialog 2</DialogTitle>
      <DialogContent>Dialog 2</DialogContent>
    </Dialog>
  </>
);
