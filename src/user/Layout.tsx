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
          display: "none",
          color: "var(--white)",
          "@media (max-width: 600px)": {
            display: "block",
          },
        }}
      >
        <Header />
        <Box sx={{ padding: "20px" }}>
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
