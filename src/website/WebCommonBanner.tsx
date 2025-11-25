import { Breadcrumbs, Container, Typography, Link, Box } from "@mui/material";
import { useLocation } from "react-router-dom";
import { images } from "../assets/Images/Images";

const pageTitles: Record<string, string> = {
  "/": "Home",
  "/about": "About Us",
  "/contact": "Contact Us",
  "/plans": "Subscription Plans",
  "/services": "Our Services",
  "/portfolio": "Portfolio",
};

const WebCommonBanner = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const title = pageTitles[currentPath] || "Page";

  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "80px 0",
        textAlign: "center",
        backgroundImage: `url(${images.bannerbg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "600px",
        backgroundPosition: "inherit",
      }}
    >
      <Container maxWidth="md">
        {/* Page Title */}
        <Typography variant="h4" fontWeight={700} gutterBottom sx={{fontFamily:"Regular_M",color:"var(--white)"}}>
          {title}
        </Typography>

        {/* Breadcrumb */}
        <Breadcrumbs aria-label="breadcrumb" separator="›" sx={{ justifyContent: "center", display: "flex","& li":{
            color:"var(--white)"
        } }}>
          <Link underline="hover" color="inherit" href="/" sx={{fontFamily:"Regular_M",color:"var(--white)",opacity:".7"}}>
            Home
          </Link>

          <Typography color="text.primary" sx={{fontFamily:"Regular_M",color:"var(--secondary)"}}>{title}</Typography>
        </Breadcrumbs>
      </Container>
    </Box>
  );
};

export default WebCommonBanner;
