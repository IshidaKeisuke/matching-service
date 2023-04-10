import * as React from "react";
import { useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Button,
  DialogActions,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField
} from "@mui/material";
import { format, eachWeekOfInterval, endOfMonth, startOfMonth } from "date-fns";
import { DayOfWeek } from "./DayofWeek";
import { FormButton } from "../common/FormButton";
import { InputField } from "../common/InputField";
export const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [workingHours, setWorkingHours] = useState({ start: "", end: "" });
  const startWeek = startOfMonth(currentMonth);
  const endWeek = endOfMonth(currentMonth);
  const weeks = eachWeekOfInterval({ start: startWeek, end: endWeek });
  const previousMonth = () => {
    setCurrentMonth((prevState) => new Date(prevState.getFullYear(), prevState.getMonth() - 1));
  };
  const nextMonth = () => {
    setCurrentMonth((prevState) => new Date(prevState.getFullYear(), prevState.getMonth() + 1));
  };
  const handleClick = (date: Date) => {
    setSelectedDate(date);
    setDialogOpen(true);
  };
  const handleClose = () => {
    setDialogOpen(false);
  };
  const handleSave = () => {
    console.log("Working hours:", workingHours, "for date:", selectedDate);
    setDialogOpen(false);
  };
  const handleWorkingHoursChange = (property: string, value: string) => {
    setWorkingHours((prevWorkingHours) => ({ ...prevWorkingHours, [property]: value }));
  };
  return (
    <>
      <div>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button onClick={previousMonth}>&lt;&lt;</Button>
          <span>{format(currentMonth, "yyyy年MM月")}</span>
          <Button onClick={nextMonth}>&gt;&gt;</Button>
        </DialogActions>
      </div>
      <TableContainer component={Paper}>
        <Table>
          <DayOfWeek />
          <TableBody>
            {weeks.map((weekStart) => (
              <TableRow key={weekStart.toISOString()}>
                {[...Array(7)].map((_, day) => {
                  const currentDate = new Date(
                    weekStart.getFullYear(),
                    weekStart.getMonth(),
                    weekStart.getDate() + day
                  );
                  const dayOfWeek = currentDate.getDay();
                  const color = dayOfWeek === 0 ? "red" : dayOfWeek === 6 ? "blue" : "inherit";
                  return (
                    <TableCell key={currentDate.toISOString()} align="center" sx={{ color: color }} onClick={() => handleClick(currentDate)}>
                      {format(currentDate, "d")}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog onClose={handleClose} open={dialogOpen}>
        <DialogTitle>労働時間の入力</DialogTitle>
        <DialogContent>
          <InputField htmlFor="working-hours-start" name="開始時間："/>
          <TextField
            id="working-hours-start"
            type="time"
            value={workingHours.start}
            onChange={(e) => handleWorkingHoursChange("start", e.target.value)}
            fullWidth
          />
          <InputField htmlFor="working-hours-start" name="終了時間："/>
          <TextField
            id="working-hours-end"
            type="time"
            value={workingHours.end}
            onChange={(e) => handleWorkingHoursChange("end", e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <FormButton variant="text" onClick={handleClose} size="large" buttonName="閉じる"/>
          <FormButton variant="contained" onClick={handleSave} size="large" buttonName="保存" />
        </DialogActions>
      </Dialog>
    </>
  );
};
