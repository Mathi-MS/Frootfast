import { Box, Typography, Button, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { images } from "../../assets/Images/Images";

const WebAboutHome = () => {
  return (
    <Box className="website-container" sx={{ py: { xs: 6, md: 10 },bgcolor:"var(--white)" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
        }}
      >
        {/* LEFT SIDE IMAGE */}
        <Box
          component="img"
          src={images.aboutimage}
          alt="Fresh Fruits"
          sx={{
            width: { xs: "100%", md: "50%" },
            height: { xs: 380, md: 480 },
            objectFit: "cover",
            borderRadius: "16px",
            flexShrink: 0,
          }}
        />

        {/* RIGHT SIDE CONTENT */}
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
                      {/* SHORT PARAGRAPH */}
          <Typography
            sx={{
              color: "#555",
              lineHeight: 1.7,
              fontSize: { xs: "1rem", md: "18px" },
              mb:"20px !important",
              fontFamily:"Regular_M"
            }}
          >
            We ensure every fruit you receive is freshly cut, neatly packed,
            and delivered with maximum hygiene. Our dedicated team prepares
            your fruit boxes every morning so you can enjoy a healthy and
            refreshing start to your day—without any effort.
          </Typography>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{mb:"20px !important", fontSize: { xs: "1.8rem", md: "2.2rem" },fontFamily:"Regular_M" }}
          >
            Why Choose Us?
          </Typography>

          {/* FEATURES LIST */}
          <Stack spacing={1.5} sx={{ mb: 3 }}>
            {[
              "Variety of Seasonal Fruits",
              "Hygienic & Sealed Packaging",
              "Delivered Before Breakfast",
              "Freshly Cut Every Morning",
            ].map((item, i) => (
              <Box key={i} sx={{ display: "flex", alignItems: "center", }}>
                <CheckCircleIcon sx={{ color: "#FF8A00", mr: 1 }} />
                <Typography sx={{ fontSize: "1rem", color: "#444",fontFamily:"Regular_M" }}>
                  {item}
                </Typography>
              </Box>
            ))}
          </Stack>

          {/* BUTTON */}
          <Button
            variant="contained"
            sx={{
              backgroundColor: "var(--secondary)",
              px: 4,
              py: 1.3,
              borderRadius: "30px",
              textTransform: "none",
              fontSize: "1rem",
              fontFamily:"Medium_M",
              "&:hover": { opacity:".8" },
            }}
          >
            Get Started Today
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default WebAboutHome;
