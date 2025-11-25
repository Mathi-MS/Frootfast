"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import { Box } from "@mui/material";

const WebOffer: React.FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "var(--newprimary)",
        color:"var(--white)",
        py: 1.5,
      }}
    >
      <Marquee speed={70} gradient={false}>
        <span style={{ marginRight: "40px",fontFamily:"Regular_M" }}>
          • Orders of $50 or more qualify for free shipping! •
        </span>
      </Marquee>
    </Box>
  );
};

export default WebOffer;
