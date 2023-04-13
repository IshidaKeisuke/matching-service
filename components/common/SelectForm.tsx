import { Select, MenuItem, InputLabel, FormControl, SelectChangeEvent, SelectProps, InputBaseComponentProps } from "@mui/material";

import { PREF_OPTIONS } from "@/options";
import { profilestyles } from "@/styles/profile/profile";


type SelectFormProps = SelectProps & {
	inputProps?: InputBaseComponentProps;
	onChange: (event: SelectChangeEvent<string>) => void;
};

export const SelectForm = (props: SelectFormProps) => {
	const { inputProps, onChange, ...selectProps } = props;

	return (
		<FormControl sx={profilestyles.formControl} margin="normal">
			<InputLabel id={props.labelId}>{props.label}</InputLabel>
			<Select
				labelId={props.labelId}
				label={props.label}
				name={props.name}
				value={props.value || ""}
				onChange={onChange}
				inputProps={inputProps}
				{...selectProps}
			>
				{PREF_OPTIONS.map((option, index) => (
					<MenuItem key={index} value={option}>
						{option}
					</MenuItem>
				))}
			</Select>
		</FormControl>
	);
};
