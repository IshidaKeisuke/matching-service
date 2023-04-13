import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

interface Props {
  onSubmit: (startTime: Date, endTime: Date) => void;
}

const RequestScheduleForm: React.FC<Props> = ({ onSubmit }) => {
  const [startTime, setStartTime] = useState<Date | null>(null);
  const [endTime, setEndTime] = useState<Date | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (startTime && endTime) {
      onSubmit(startTime, endTime);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <TextField
        label="Start Time"
        type="datetime-local"
        value={startTime?.toISOString().slice(0, -8)}
        onChange={(e) => setStartTime(new Date(e.target.value))}
        InputLabelProps={{ shrink: true }}
        required
      />
      <TextField
        label="End Time"
        type="datetime-local"
        value={endTime?.toISOString().slice(0, -8)}
        onChange={(e) => setEndTime(new Date(e.target.value))}
        InputLabelProps={{ shrink: true }}
        required
      />
      <Button type="submit">Submit</Button>
    </Box>
  );
};

export default RequestScheduleForm;
