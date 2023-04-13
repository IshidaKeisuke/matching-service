import { useState } from "react";
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Button,
  DialogActions,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";
import { format, eachWeekOfInterval, endOfMonth, startOfMonth } from "date-fns";
import { DayofWeekendArray } from "@/options/index";
import { CustomButton } from "../common/Button";
import { InputField } from "../common/Input";
import { Typography } from "../ui/Typography";

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
          <TableHead>
            <TableRow>
              {DayofWeekendArray.map((value, index) => (
                <TableCell key={index}>
                  {value}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
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
      <Dialog onClose={handleClose} open={dialogOpen} fullWidth>
        <DialogTitle align="center">労働時間の入力</DialogTitle>
    		<DialogContent>
          <Typography name="開始時間" align="center" gutterBottom/>
          <InputField
            id="working-hours-start"
            label=""
            type="time"
            value={workingHours.start}
            onChange={(e) => handleWorkingHoursChange("start", e.target.value)}
            fullWidth
          />
          <Typography name="終了時間" align="center" gutterBottom/>
          <InputField
            id="working-hours-end"
            label=""
            type="time"
            value={workingHours.end}
            onChange={(e) => handleWorkingHoursChange("end", e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <CustomButton variant="text" onClick={handleClose} size="large" buttonName="閉じる"/>
          <CustomButton variant="contained" onClick={handleSave} size="large" buttonName="保存" />
        </DialogActions>
      </Dialog>    
    </>
  );
};
