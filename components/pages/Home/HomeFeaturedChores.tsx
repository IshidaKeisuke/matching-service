import { Box, Grid, Typography } from "@mui/material";

const HomeFeaturedChores = () => {
  const chores = [
    { id: 1, title: "Cleaning", description: "We will clean your home!", price: 1000 },
    { id: 2, title: "Cooking", description: "We will cook delicious meals!", price: 2000 },
    { id: 3, title: "Shopping", description: "We will do your grocery shopping!", price: 3000 },
  ];

  return (
    <Box sx={{ mt: 6 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Featured Chores
      </Typography>
      <Grid container spacing={2}>
        {chores.map((chore) => (
          <Grid item xs={12} md={4} key={chore.id}>
            <Box sx={{ backgroundColor: "#F5F5F5", p: 2, borderRadius: "8px" }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {chore.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                {chore.description}
              </Typography>
              <Typography variant="body2" color="primary">
                {chore.price.toLocaleString()} JPY
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomeFeaturedChores;
