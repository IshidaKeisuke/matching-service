import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

interface MessageFormProps {
  onSubmit: (message: string) => void;
}

export const MessageForm: React.FC<MessageFormProps> = ({ onSubmit }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(message);
    setMessage("");
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex" }}>
        <TextField
          label="メッセージを入力してください"
          value={message}
          onChange={handleChange}
          sx={{ flexGrow: 1 }}
        />
        <Button type="submit" variant="contained" sx={{ ml: 1 }}>
          送信
        </Button>
      </Box>
    </form>
  );
};
