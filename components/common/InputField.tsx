import { InputLabel } from '@mui/material';

type inputField = {
	id?: string
	htmlFor?: string
	name: string
}
export const InputField = (props: inputField) => {
	return(
		<InputLabel id={props.id}>{props.name}</InputLabel>
	);
};
