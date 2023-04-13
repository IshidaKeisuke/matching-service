import React from "react";
import { IconButton as MuiIconButton } from "@mui/material";

interface Props {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}

const IconButton: React.FC<Props> = ({ onClick, disabled, children }) => {
  return (
    <MuiIconButton onClick={onClick} disabled={disabled}>
      {children}
    </MuiIconButton>
  );
};

export default IconButton;
