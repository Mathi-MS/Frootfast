"use client";
import { Box } from "@mui/material";
import { images } from "../assets/Images/Images";
import { Outlet } from "react-router-dom";
import AdminHeader from "./AdminHeader";

const AdminLayout = () => {
  return (
    <>
      {/* MOBILE VIEW */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url(${images.userbackground})`,
          backgroundRepeat: "repeat",
          backgroundSize: "600px",
          backgroundPosition: "inherit",
          color: "var(--white)",
          flexDirection: "column",
          display: "flex",
          padding: "20px 30px",
        }}
      >
        {/* Header stays fixed at top */}
        <AdminHeader />

        {/* Center form vertically below header */}
        <Box
          sx={{
            flex: 1,
            padding: "20px",
            marginTop: "10px",
            minHeight: "calc(100vh - 140px)",
            borderRadius: "5px",
            background: "var(--white)",
            overflow:"auto",
            "@media (max-width: 600px)": {
              minHeight: "calc(100vh - 140px)",
            },
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default AdminLayout;
