import { Box, Typography } from "@mui/material";
import { Message } from "../../types/index";

interface MessageListProps {
  messages: Message[];
}

export const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  if (messages.length === 0) {
    return (
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="body1" color="text.secondary">
          メッセージはありません
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column-reverse" }}>
      {messages.map((message) => (
        <Box key={message.id} sx={{ mb: 1 }}>
          <Typography variant="body1" color="text.secondary">
            {message.content}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
