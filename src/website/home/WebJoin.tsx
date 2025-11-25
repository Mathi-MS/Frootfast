import { Box, Typography, Button } from "@mui/material";

const WebJoin = () => {
  return (
    <Box
      className="website-container"
      sx={{
        width: "100%",
        py: { xs: 6, md: 10 },
        textAlign: "center",
        background: "linear-gradient(to bottom, #FFF3E0, #FFEBCC)", 
      }}
    >
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{
          fontSize: { xs: "1.8rem", md: "2.4rem" },
          color: "#333",
          fontFamily:"Regular_M"
        }}
      >
        Ready to Start Your Fresh Morning Routine?
      </Typography>

      <Typography
        sx={{
          mt: 2,
          fontSize: { xs: "1rem", md: "1.2rem" },
          color: "#555",
          maxWidth: 600,
          mx: "auto !important",
          fontFamily:"Regular_M",
          display:"block"
        }}
      >
        Join thousands of happy customers enjoying fresh fruits every morning
      </Typography>

      <Button
        variant="contained"
        sx={{
          mt: 4,
          backgroundColor: "var(--secondary)",
          color: "#fff",
          px: 4,
          py: 1.5,
          fontSize: "1rem",
          borderRadius: "30px",
          textTransform: "none",
          fontFamily:"Medium_M",
          "&:hover": {
            backgroundColor: "#FF7A00",
          },
        }}
      >
        Get Started Today
      </Button>
    </Box>
  );
};

export default WebJoin;
