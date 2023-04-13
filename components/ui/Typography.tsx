import React from "react";
import { Typography as MuiTypography, TypographyProps as MuiTypographyProps } from "@mui/material";

interface TypographyProps extends MuiTypographyProps {
  name: React.ReactNode;
}

export const Typography = (props: TypographyProps) => {
  return (
    <MuiTypography variant={props.variant} color={props.color} align={props.align} gutterBottom={props.gutterBottom}>
      {props.name}
    </MuiTypography>
  );
};
