import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { Typography } from "../ui/Typography"
import { InputField } from "../common/Input"

interface Props {
  onSubmit: (title: string, description: string, startTime: Date, endTime: Date, price: number) => void;
}

const RequestChoresForm: React.FC<Props> = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [price, setPrice] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(title, description, startTime, endTime, price);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant={"h6"} name={"家事の依頼フォーム"} />
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <InputField
            label={"タイトル"}
            variant={"outlined"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="タイトル"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="詳細"
            variant="outlined"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            label="開始時間"
            type="datetime-local"
            InputLabelProps={{
              shrink: true,
            }}
            value={startTime.toISOString().slice(0, 16)}
            onChange={(e) => setStartTime(new Date(e.target.value))}
            sx={{ mb: 2 }}
          />
          <TextField
            label="終了時間"
            type="datetime-local"
            InputLabelProps={{
              shrink: true,
            }}
            value={endTime.toISOString().slice(0, 16)}
            onChange={(e) => setEndTime(new Date(e.target.value))}
            sx={{ mb: 2 }}
          />
          <TextField
            label="価格"
            variant="outlined"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            InputProps={{ inputProps: { min: 0 } }}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" type="submit">
            依頼する
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default RequestChoresForm;
