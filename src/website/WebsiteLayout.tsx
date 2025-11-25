"use client";
import { Box } from "@mui/material";
import WebOffer from "./home/WebOffer";
import WebNavbar from "./home/WebNavbar";
import WebFooter from "./home/WebFooter";
import WebBanner from "./home/WebBanner";
import WebContact from "./contact/WebContact";
import WebTesti from "./home/WebTestimonal";
import WebJoin from "./home/WebJoin";
import WebAbout from "./about/WebAbout";
import WebPlan from "./plan/WebPlan";
const WebsiteLayout = () => {
  return (
    <>
        <Box sx={{background:"var(--newprimary)",minHeight:"100vh"}}>
            <WebOffer />
            <WebNavbar />
            <WebBanner />
            <WebAbout />
            <WebPlan />
            <WebTesti />
            <WebJoin />
            <WebContact />
            <WebFooter />
        </Box>
    </>
  );
};

export default WebsiteLayout;
