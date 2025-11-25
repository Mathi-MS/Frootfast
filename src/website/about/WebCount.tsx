import { Box, Typography } from "@mui/material";

const stats = [
  {
    count: "10,000+",
    label: "Happy Customers",
  },
  {
    count: "5",
    label: "Cities Served",
  },
  {
    count: "99%",
    label: "On-Time Delivery",
  },
];

const WebCount = () => {
  return (
    <Box className="website-container" sx={{ py: 8, textAlign: "center",background:"#f5f5f5" }}>
      
      {/* Heading */}
      <Typography
        variant="h4"
        fontWeight={700}
        sx={{ mb: 2,fontFamily:"Regular_M" }}
      >
        Join the FruitFast Family
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          color: "#555",
          maxWidth: "650px",
          mx: "auto !important",
          fontSize: "1.05rem",
          my: "10px !important",
          fontFamily:"Regular_M",
          lineHeight: 1.7,
        }}
      >
        Thousands of customers trust us to deliver fresh, nutritious fruits every
        morning. Experience the convenience and health benefits for yourself.
      </Typography>

      {/* Stats Flexbox */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: { xs: 4, md: 8 },
        }}
      >
        {stats.map((item, index) => (
          <Box key={index}>
            <Typography
              sx={{
                fontSize: "2.4rem",
                fontWeight: 700,
                color: "#FF8A00",
                mb: 0.5,
                fontFamily:"Regular_M"
              }}
            >
              {item.count}
            </Typography>
            <Typography
              sx={{ fontSize: "1.1rem", color: "#444", fontWeight: 500,fontFamily:"Medium_M" }}
            >
              {item.label}
            </Typography>
          </Box>
        ))}
      </Box>

    </Box>
  );
};

export default WebCount;
