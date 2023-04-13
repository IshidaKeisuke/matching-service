import { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  actionButtonLabel: string;
  onActionButtonClick: () => void;
};

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children, actionButtonLabel, onActionButtonClick }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onActionButtonClick} variant="contained" color="primary">
          {actionButtonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
