import { Box, Typography, Button } from "@mui/material";
import { images } from "../../assets/Images/Images";

const plans = [
  {
    title: "Basic Pack",
    desc: "Daily box with 10 cut fruits",
    weekly: "₹399",
    monthly: "₹1199",
    img: images.product1,
  },
  {
    title: "Premium Pack",
    desc: "Larger portions + exotic fruits",
    weekly: "₹699",
    monthly: "₹1999",
    img: images.product2,
  },
  {
    title: "Kidz Pack",
    desc: "Kid-friendly fruit selection",
    weekly: "₹349",
    monthly: "₹999",
    img: images.product3,
  },
  {
    title: "Diabetes Pack",
    desc: "Low-sugar fruit mix",
    weekly: "₹499",
    monthly: "₹1499",
    img: images.product4,
  },
];

const WebPlan = () => {
  return (
    <Box className="website-container" sx={{position:"relative", py: { xs: 6, md: 10 },background:"#002D00" }}>
      <Box sx={{
        position :"absolute",
        top:"0px",
        left:"0px",
        width:"100%",
        height:"100%",
        backgroundImage: `url(${images.bglayer})`,
        backgroundRepeat: "repeat",
        backgroundSize: "600px",
        backgroundPosition: "inherit",
        opacity:.2
    }}>
    </Box>
      <Box sx={{position:"relative",zIndex:"2"}}>
        {/* Heading */}
      <Typography
        sx={{
          fontSize: 40,
          fontWeight: 700,
          textAlign: "center",
          fontFamily:"Regular_M",
          color:"var(--white)",
          opacity:".9"
        }}
      >
        Choose Your Perfect Plan
      </Typography>

      {/* Paragraph */}
      <Typography
        sx={{
          textAlign: "center",
          maxWidth: 600,
          mx: "auto !important",
          color: "var(--white)",
          mb: "20px !important",  
          fontFamily:"Regular_M",
          lineHeight: 1.6,
          opacity:".8"
        }}
      >
        Select from our carefully curated subscription packs designed for
        different dietary needs and preferences.
      </Typography>

      {/* Plans Container */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {plans.map((p, i) => (
          <Box
            key={i}
            sx={{
              width: { xs: "100%", sm: "48%", md: "23%" },
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              overflow: "hidden",
              p: 2,
            }}
          >
            {/* Image */}
            <Box
              component="img"
              src={p.img}
              alt={p.title}
              sx={{
                width: "100%",
                height: 160,
                objectFit: "cover",
                borderRadius: "12px",
                mb: 2,
              }}
            />

            {/* Title */}
            <Typography sx={{ fontWeight: 700, fontSize: 20, mb: 1,                fontFamily:"Regular_M"
 }}>
              {p.title}
            </Typography>

            {/* Description */}
            <Typography sx={{ color: "#666", mb: 2,                fontFamily:"Regular_M"
 }}>{p.desc}</Typography>

            {/* Prices */}
            <Box sx={{ mb: 2 }}>
              <Typography sx={{ fontWeight: 600,                fontFamily:"Regular_M"
 }}>
                Weekly: <span style={{ color: "#FF8A00" }}>{p.weekly}</span>
              </Typography>
              <Typography sx={{ fontWeight: 600,                fontFamily:"Regular_M"
 }}>
                Monthly: <span style={{ color: "#FF8A00" }}>{p.monthly}</span>
              </Typography>
            </Box>

            {/* Subscribe Button */}
            <Button
              fullWidth
              variant="contained"
              sx={{
                backgroundColor: "var(--secondary)",
                textTransform: "none",
                borderRadius: "30px",
                py: 1.2,
                fontFamily:"Regular_M",
                "&:hover": { backgroundColor: "#FF7A00" },
              }}
            >
              Subscribe
            </Button>
          </Box>
        ))}
      </Box>
      </Box>
    </Box>
  );
};

export default WebPlan;
