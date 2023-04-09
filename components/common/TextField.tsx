import { TextField } from '@mui/material';

type FormProps = {
	name: string;
	label: string;
	value: string;
	rows?: number;
	multiline?: boolean;
}

export const FormField = (props: FormProps) => {
	return(
		<TextField
			autoFocus
			margin="dense"
			name={props.name}
			label={props.label}
			fullWidth
			value={props.value}
	  />
	)
}