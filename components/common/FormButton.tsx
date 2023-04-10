import { Button } from '@mui/material';

type FormButtonProps = {
	variant: "text" | "outlined" | "contained"
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    color?: "inherit" | "primary" | "secondary" | "success" | "error" | "info" | "warning";
    size?: "small" | "medium" | "large" 
    buttonName: string;
}

export const FormButton = (props: FormButtonProps) => {
    return (
        <Button variant={props.variant} onClick={props.onClick} color={props.color} size={props.size}>
            {props.buttonName}
        </Button>
  );
}
