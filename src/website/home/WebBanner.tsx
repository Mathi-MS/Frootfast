import { Box, Typography, Button } from "@mui/material";
import { images } from "../../assets/Images/Images";
import { keyframes } from "@mui/system";

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  50% { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
`;
const WebBanner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        px: { xs: 2, md: 6 },
        py: { xs: 4, md: 8 },
        backgroundImage: `url(${images.bannerbg})`,
        backgroundRepeat: "repeat",
        backgroundSize: "600px",
        backgroundPosition: "inherit",
        flexDirection: { xs: "column-reverse", md: "row" },
      }}
    >
      {/* LEFT SIDE CONTENT */}
      <Box
        sx={{
          flex: 1,
          color: "#333",
          textAlign: { xs: "center", md: "left" },
        }}
      >
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "28px", md: "42px" }, fontWeight: 700,fontFamily:"Bold_M",color:"var(--white)" }}
        >
          Start Your Morning Fresh With FruitFast!
        </Typography>

        <Typography
          sx={{
            mt: "15px !important",
            fontSize: { xs: "14px", md: "18px" },
            maxWidth: "400px",
            opacity: 0.8,
            fontFamily:"Regular_M",
            color:"var(--white)",
          }}
        >
          Daily fresh fruit boxes delivered every morning. 10 cut fruits in every box. Healthy, fast & fresh!
        </Typography>

        <Button
          variant="contained"
          sx={{
            mt: 3,
            px: 3,
            py: 1.2,
            fontWeight: 600,
            borderRadius: "5px",
            textTransform: "none",
            backgroundColor: "var(--primary)",
            fontFamily:"Regular_M",
            ":hover": { backgroundColor: "var(--primary-dark)" },
          }}
        >
          Subscribe Now
        </Button>
      </Box>

      {/* RIGHT SIDE IMAGE */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          mt: { xs: 4, md: 0 },
        }}
      >
        <Box
          component="img"
          src={images.banner}
          alt="Fruits"
          sx={{
            width: { xs: "90%", md: "80%" },
            maxWidth: "450px",
            animation: `${rotate} 10s linear infinite`, 
          }}
        />
      </Box>
    </Box>
  );
};

export default WebBanner;
