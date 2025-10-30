"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CheckIcon from "@mui/icons-material/Check";

const OrderedSuccessfully = () => {
  const navigate = useNavigate();
  const [showTick, setShowTick] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowTick(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #fff7f3 0%, #ffe3d2 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      {/* ✅ Animated Circle + Tick */}
      <Box
        sx={{
          position: "relative",
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          border: "6px solid #2c9d42",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mb: 3,
          animation: "circlePop 0.6s ease-out",
          "@keyframes circlePop": {
            "0%": { transform: "scale(0)" },
            "60%": { transform: "scale(1.1)" },
            "100%": { transform: "scale(1)" },
          },
          boxShadow: "0 0 25px rgba(44,157,66,0.4)",
        }}
      >
        {showTick && (
          <CheckIcon
            sx={{
              fontSize: "60px",
              color: "#2c9d42",
              animation: "tickAppear 0.5s ease-out forwards",
              "@keyframes tickAppear": {
                "0%": {
                  opacity: 0,
                  transform: "scale(0) rotate(-45deg)",
                },
                "60%": {
                  opacity: 1,
                  transform: "scale(1.2) rotate(0deg)",
                },
                "100%": {
                  transform: "scale(1) rotate(0deg)",
                },
              },
            }}
          />
        )}
      </Box>

      {/* Title */}
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "24px", sm: "32px" },
          fontWeight: 700,
          mb: 1,
          background:
            "linear-gradient(90deg, #e56d42 0%, #ff8521 60%, #e98d33 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontFamily: "Bold_M",
        }}
      >
        Order Placed Successfully!
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          color: "#4d4d4d",
          fontSize: "16px",
          maxWidth: "400px",
          mx: "auto",
          mt: 1,
          fontFamily: "Medium_M",
        }}
      >
        Thank you for your order! Our team will reach out to you shortly. 🍎
      </Typography>

      {/* Button */}
      <Button
        onClick={() => navigate("/")}
        sx={{
          mt: 4,
          px: 4,
          py: 1.5,
          background:
            "linear-gradient(90deg, #e56d42 0%, #ff8521 60%, #e98d33 100%)",
          color: "#fff",
          borderRadius: "12px",
          textTransform: "none",
          fontWeight: 600,
          fontFamily: "Medium_M",
          fontSize: "16px",
          boxShadow: "0 4px 10px rgba(255,133,33,0.4)",
          "&:hover": {
            background:
              "linear-gradient(90deg, #d45f32 0%, #ff7a1a 60%, #e87b22 100%)",
            boxShadow: "0 6px 12px rgba(255,133,33,0.5)",
          },
        }}
      >
        Back to Home
      </Button>
    </Box>
  );
};

export default OrderedSuccessfully;
