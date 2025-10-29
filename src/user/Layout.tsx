"use client";
import { Box, Typography } from "@mui/material";
import { images } from "../assets/Images/Images";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      {/* MOBILE VIEW */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url(${images.userbackground})`,
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
          color: "var(--white)",
          display: "none",
          flexDirection: "column",
          "@media (max-width: 600px)": {
            display: "flex",
          },
        }}
      >
        {/* Header stays fixed at top */}
        <Header />

        {/* Center form vertically below header */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            minHeight: "calc(100vh - 110px)", 
            "@media (max-width: 600px)": {
              minHeight: "calc(100vh - 110px)",
            },
          }}
        >
          <Outlet />
        </Box>
      </Box>

      {/* DESKTOP VIEW */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          "@media (max-width: 600px)": {
            display: "none",
          },
        }}
      >
        <Box component={"img"} src={images.logo} alt="logo" width={200} />
        <Typography sx={{ fontSize: "30px", fontFamily: "Bold_M" }}>
          Please Check in Mobile Device
        </Typography>
      </Box>
    </>
  );
};

export default Layout;
