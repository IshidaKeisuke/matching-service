import { FC } from "react";
import { Avatar as MuiAvatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

type AvatarProps = {
  src: string;
  alt: string;
};

export const Avatar: FC<AvatarProps> = ({ src, alt }) => {
  return (
    <MuiAvatar alt={alt} src={src}>
      <AccountCircleIcon />
    </MuiAvatar>
  );
};
