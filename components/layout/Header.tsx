import { Container, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Container maxWidth="sm">
      <Typography variant="body2" color="text.secondary" align="center">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
        <br />
        <Link color="inherit" href="#">
          Privacy Policy
        </Link>
      </Typography>
    </Container>
  );
};

export default Footer;
