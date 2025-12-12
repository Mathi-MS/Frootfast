import { Box, Typography } from "@mui/material";

const TermsAndConditions = () => {
  return (
    <Box
      sx={{
        padding: "30px",
        backgroundColor: "#f9f9f9",
        minHeight: "max-content",
        fontFamily: "Medium_M",
        borderRadius: "5px",
      }}
    >
      {/* Header */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: "Bold_M",
          color: "var(--primary)",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Terms & Conditions
      </Typography>

      {/* Content */}
      <Typography
        sx={{
          fontSize: "15px",
          lineHeight: 1.8,
          color: "#333",
          fontFamily: "Regular_M",
        }}
      >
        Welcome to <strong>FrootFast</strong>. By accessing and using this
        website, you agree to comply with and be bound by the following terms
        and conditions.
        <br />
        <br />
        <strong>1. Acceptance:</strong> By using this site, you agree to these
        terms in full. If you disagree with any part of these terms, please do
        not use the website.
        <br />
        <br />
        <strong>2. Pre-Booking:</strong> Once you pre-book your FrootFast Box,
        your request will be processed for delivery based on availability.
        <br />
        <br />
        <strong>3. Quality:</strong> We strive to deliver fresh and high-quality
        fruits in every box.
        <br />
        <br />
        <strong>4. Delivery:</strong> Orders are delivered according to the
        selected plan (daily, weekly, or monthly) and availability.
        <br />
        <br />
        <strong>5. Contact:</strong> For any queries, please reach out to our
        support team.
        <br />
        <br />
        <em>Thank you for choosing FrootFast! 🍊</em>
      </Typography>
    </Box>
  );
};

export default TermsAndConditions;
