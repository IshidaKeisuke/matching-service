import React from "react";
import { Box, Avatar, Typography } from "@mui/material";

interface Props {
  sender: {
    name: string,
    image: string,
  },
  content: string,
  createdAt: string,
}

const MessageItem: React.FC<Props> = ({ sender, content, createdAt }) => {
  return (
    <Box display="flex" alignItems="center" mb={1}>
      <Avatar src={sender.image} alt={sender.name} />
      <Box ml={1}>
        <Typography variant="body2" fontWeight="bold">
          {sender.name}
        </Typography>
        <Typography variant="body2">{content}</Typography>
        <Typography variant="caption">{createdAt}</Typography>
      </Box>
    </Box>
  );
};

export default MessageItem;
