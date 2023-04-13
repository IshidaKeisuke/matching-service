import { Box, Button, Typography } from "@mui/material";

const HomeBanner = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "calc(100vh - 64px)",
        backgroundColor: "#F5F5F5",
      }}
    >
      <Box>
        <Typography variant="h1" sx={{ fontWeight: "bold", fontSize: "5rem" }}>
          Welcome to Our Service
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Button variant="contained" size="large">
            Get Started
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeBanner;
