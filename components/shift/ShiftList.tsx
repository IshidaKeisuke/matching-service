import { useState } from "react";
import { format, isSameDay } from "date-fns";
import { List, ListItem, ListItemText } from "@mui/material";

import { Shift } from "../../types/index";
import { Typography } from "../ui/Typography"

type ShiftListProps = {
  shifts: Shift[];
};

const ShiftListHeader = ({ date }: { date: Date }) => (
  <Typography variant="h6" name={format(date, "M月d日（E）")} />
);

const ShiftListItem = ({ shift }: { shift: Shift }) => (
  <ListItem
    key={shift.id}
    secondaryAction={
      <Typography variant="body1" name={`${shift.startTime} - ${shift.endTime}`} />
    }
  >
  </ListItem>
);

const ShiftList = ({ shifts }: ShiftListProps) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const filteredShifts = shifts.filter((shift) =>
    isSameDay(new Date(shift.startTime), selectedDate)
  );

  return (
    <List>
      <ShiftListHeader date={selectedDate} />
      {filteredShifts.map((shift) => (
        <ShiftListItem key={shift.id} shift={shift} />
      ))}
    </List>
  );
};

export default ShiftList;
