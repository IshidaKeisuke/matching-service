import { InputHTMLAttributes } from "react";
import { Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';

import { PREF_OPTIONS } from '@/options/prefecture';
import { profilestyles } from '@/styles/profile/profile';

type SelectFormProps = {
	labelId: string
    label: string;
    name: string;
    value: string;
    onChange: (event: SelectChangeEvent) => void;
	inputProps?: InputHTMLAttributes<HTMLInputElement>;
};

export const SelectForm = (props: SelectFormProps) => {
    return (
        <FormControl sx={profilestyles.formControl} margin="normal">
            <InputLabel id={props.labelId}>{props.label}</InputLabel>
			<Select
				labelId={props.labelId}
				label={props.label}
				name={props.name}
				value={props.value || ''}
				onChange={props.onChange}
				inputProps={props.inputProps}
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