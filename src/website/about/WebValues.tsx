import { Box, Typography } from "@mui/material";
import { GoShieldCheck } from "react-icons/go";
import { LuLeaf } from "react-icons/lu";
import { IoIosTimer } from "react-icons/io";
import { FiUsers } from "react-icons/fi";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { GoVerified } from "react-icons/go";
import { images } from "../../assets/Images/Images";

const values = [
  {
    icon: <LuLeaf   style={{ fontSize: 40, color: "var(--primary)" }} />,
    title: "Fresh & Natural",
    desc: "We handpick fresh, seasonal fruits every morning to ensure natural taste and quality.",
  },
  {
    icon:  <GoShieldCheck   style={{ fontSize: 40, color: "var(--primary)" }} />,
    title: "Hygiene First",
    desc: "Your fruits are washed, cut, and packed with clean, careful handling in a safe home-style environment.",
  },
  {
    icon: <IoIosTimer    style={{ fontSize: 40, color: "var(--primary)" }} />,
    title: "Timely Delivery",
    desc: "We deliver early in the morning so you can enjoy your fruits fresh and ready for the day.",
  },
  {
    icon: <FiUsers style={{ fontSize: 38, color: "var(--primary)" }} />,
    title: "Customer Focused",
    desc: "Your health and satisfaction matter to us. We’re committed to giving you a fresh and reliable experience.",
  },
  {
    icon:  <MdOutlineHealthAndSafety  style={{ fontSize: 40, color: "var(--primary)" }} />,
    title: "Health Mission",
    desc: "Our goal is to make healthy eating simple, easy, and accessible for everyone.",
  },
  {
    icon: <GoVerified   style={{ fontSize: 35, color: "var(--primary)" }} />,
    title: "Quality Assured",
    desc: "Every fruit is checked for freshness before it goes into your box.",
  },
];

const WebValues = () => {
  return (
    <Box className="website-container" sx={{ py: 6,position:"relative",background:"#002D00" }}>
    <Box sx={{
        position :"absolute",
        top:"0px",
        left:"0px",
        width:"100%",
        height:"100%",
        backgroundImage: `url(${images.bglayer})`,
        backgroundRepeat: "repeat",
        backgroundSize: "600px",
        backgroundPosition: "inherit",
        opacity:.2
    }}>
    </Box>

      {/* Section Heading */}
      <Box sx={{position:"relative",zIndex:"2"}}>
        <Typography
        variant="h4"
        fontWeight={700}
        textAlign="center"
        sx={{mb:"20px !important",fontFamily:"Medium_M",color:"var(--white)"}}
      >
        Our Values
      </Typography>

      {/* Flex Wrapper */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {values.map((item, index) => (
          <Box
            key={index}
            sx={{
              width: { xs: "100%", sm: "45%", md: "30%" },
              background: "#fff",
              borderRadius: "12px",
              padding: "24px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              textAlign: "center",
            }}
          >
            {/* Icon */}
            <Box mb={2}>{item.icon}</Box>

            {/* Title */}
            <Typography variant="h6" fontWeight={600} mb={1} sx={{fontFamily:"Regular_M"}}>
              {item.title}
            </Typography>

            {/* Description */}
            <Typography variant="body1" color="text.secondary" sx={{fontFamily:"Regular_M"}}>
              {item.desc}
            </Typography>
          </Box>
        ))}
      </Box>
      </Box>
    </Box>
  );
};

export default WebValues;
