import { useState } from "react";
import { TextField, Button } from "@mui/material";

interface ShiftFormProps {
  onSubmit: (shiftData: ShiftData) => void;
}

interface ShiftData {
  startTime: string;
  endTime: string;
}

export const ShiftForm: React.FC<ShiftFormProps> = ({ onSubmit }) => {
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit({ startTime, endTime });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Start Time"
        type="datetime-local"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        required
      />
      <TextField
        label="End Time"
        type="datetime-local"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        required
      />
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </form>
  );
};
