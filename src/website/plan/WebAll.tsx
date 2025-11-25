import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const features = [
  "Free Delivery",
  "Cancel Anytime",
  "Quality Guarantee",
];

const WebAll = () => {
  return (
    <Box className="website-container" sx={{ py: 8,background:"#f5f5f5" }}>
      
      {/* Heading */}
      <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        sx={{ mb: "20px !important",fontFamily:"Regular_M" }}
      >
        All Plans Include
      </Typography>

      {/* Feature List */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: { xs: 3, md: 6 },
          flexWrap: "wrap",
        }}
      >
        {features.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "1.1rem",
            }}
          >
            <CheckCircleIcon sx={{ color: "var(--secondary)", mr: 1 }} />
            <Typography fontSize="1.05rem" fontWeight={500} sx={{fontFamily:"Regular_M"}}>
              {item}
            </Typography>
          </Box>
        ))}
      </Box>

    </Box>
  );
};

export default WebAll;
