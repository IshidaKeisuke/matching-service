import { TableCell, TableHead, TableRow } from "@mui/material";
import { dayofWeekendArray } from "@/options/index";

export const DayOfWeek = () => {
	return(
        <TableHead>
			<TableRow>
				{dayofWeekendArray.map((value, index) => (
					<TableCell key={index}>
						{value}
					</TableCell>
				))}
			</TableRow>
        </TableHead>
	)
}