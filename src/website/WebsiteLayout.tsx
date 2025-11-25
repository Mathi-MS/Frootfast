"use client";
import { Box } from "@mui/material";
import WebOffer from "./WebOffer";
import WebNavbar from "./WebNavbar";
import WebFooter from "./WebFooter";
import WebBanner from "./home/WebBanner";
import WebContact from "./WebContact";
const WebsiteLayout = () => {
  return (
    <>
        <Box sx={{background:"var(--newprimary)",minHeight:"100vh"}}>
            <WebOffer />
            <WebNavbar />
            <WebBanner />
            <WebContact />
            <WebFooter />
        </Box>
    </>
  );
};

export default WebsiteLayout;
