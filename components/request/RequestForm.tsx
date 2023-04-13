import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";

interface RequestFormProps {
  title: string;
  buttonText: string;
  onSubmit: (requestDetails: { [key: string]: any }) => void;
}

const RequestForm: React.FC<RequestFormProps> = ({
  title,
  buttonText,
  onSubmit,
}) => {
  const [open, setOpen] = useState(false);
  const [requestDetails, setRequestDetails] = useState<{ [key: string]: any }>(
    {}
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setRequestDetails((prevRequestDetails) => ({
      ...prevRequestDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(requestDetails);
    handleClose();
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        {buttonText}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              name="title"
              label="タイトル"
              type="text"
              fullWidth
              required
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              name="description"
              label="詳細"
              type="text"
              fullWidth
              multiline
              required
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              name="price"
              label="価格"
              type="number"
              fullWidth
              required
              onChange={handleInputChange}
            />
            <Button onClick={handleClose}>キャンセル</Button>
            <Button type="submit">保存</Button>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>閉じる</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default RequestForm;
