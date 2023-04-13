import React from "react";
import Button from "@mui/material/Button";

type ButtonProps = {
  onClick: () => void;
  variant?: "text" | "outlined" | "contained"
  disabled?: boolean;
  size?: "small" | "medium" | "large"
  buttonName: string;
}

export const CustomButton = (props: ButtonProps) => {
  return (
    <Button variant={props.variant} color="primary" onClick={props.onClick} disabled={props.disabled} size={props.size}>
      {props.buttonName}
    </Button>
  );
};
