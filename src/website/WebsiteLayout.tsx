"use client";
import { Box } from "@mui/material";
import WebOffer from "./home/WebOffer";
import WebNavbar from "./home/WebNavbar";
import WebFooter from "./home/WebFooter";
import { Outlet } from "react-router-dom";

const WebsiteLayout = () => {
  return (
    <>
        <Box sx={{background:"var(--newprimary)",minHeight:"100vh"}}>
            <WebOffer />
            <WebNavbar />
            <Outlet />
            <WebFooter />
        </Box>
    </>
  );
};

export default WebsiteLayout;
