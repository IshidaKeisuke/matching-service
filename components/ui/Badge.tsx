import { FC } from "react";
import { Badge as MuiBadge } from "@mui/material";

type BadgeProps = {
  count: number;
  color: "primary" | "secondary";
};

const Badge: FC<BadgeProps> = ({ count, color }) => {
  return (
    <MuiBadge badgeContent={count} color={color} />
  );
};

export default Badge;
