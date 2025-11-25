import { Box, Typography, Link } from "@mui/material";
import { images } from "../../assets/Images/Images";
import { useNavigate } from "react-router-dom";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { commonWord } from "../../Custom/CommonWord";

const WebFooter = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ background: "#f5f5f5", pt: 6, pb: 3 }}>
      <Box
        className="website-container"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 1fr" },
          gap: 4,
        }}
      >
        {/* -------- Box 1 - Logo + About -------- */}
        <Box>
          <Box component="a" href="/" sx={{ display: "inline-block" }}>
            <Box component="img" src={images.logo} alt="logo" width={120} />
          </Box>

          <Typography sx={{ mt: 2, color: "#555", lineHeight: 1.6,fontFamily:"Regular_M",fontSize:"18px" }}>
            Start your morning fresh with daily deliveries of freshly cut fruits.
            Healthy, fast & fresh!
          </Typography>
        </Box>

        {/* -------- Box 2 - Quick Links -------- */}
        <Box>
          <Typography sx={{ fontWeight: 700, mb: 2,fontFamily:"Bold_M", }}>Quick Links</Typography>

          <Box sx={{marginTop:"16px","& p":{
            fontFamily:"Regular_M",
            paddingBottom:"5px",
            width:"max-content"
          }}}>
            <Typography
            sx={{ cursor: "pointer", mb: 1 }}
            onClick={() => navigate("/")}
          >
            Home
          </Typography>

          <Typography
            sx={{ cursor: "pointer", mb: 1 }}
            onClick={() => navigate("/about")}
          >
            About Us
          </Typography>

          <Typography
            sx={{ cursor: "pointer", mb: 1 }}
            onClick={() => navigate("/plans")}
          >
            Subscription Plans
          </Typography>

          <Typography
            sx={{ cursor: "pointer", mb: 1 }}
            onClick={() => navigate("/contact")}
          >
            Contact
          </Typography>
          </Box>
        </Box>

        {/* -------- Box 3 - Contact Us -------- */}
        <Box>
          <Typography sx={{ fontWeight: 700, mb: 2,fontFamily:"Bold_M", }}>Contact Us</Typography>
          <Box sx={{marginTop:"16px","& p":{
            fontFamily:"Regular_M",
            paddingBottom:"5px"
          }}}>
           <Box
        sx={{
          marginTop: "16px",
          "& .item": {
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "10px",
            fontFamily: "Regular_M",
          },
        }}
      >
        {/* Phone */}
        <Link
          href={`tel:${commonWord.mobileNumber}`}
          underline="none"
          color="inherit"
          className="item"
        >
          <FiPhone style={{ fontSize: 20,color:"var(--primary)" }} />
          <Typography>                  {commonWord.mobileNumber}
          </Typography>
        </Link>

        {/* Email */}
        <Link
          href={`mailto:${commonWord.mobileNumber}`}
          underline="none"
          color="inherit"
          className="item"
        >
          <LuMail  style={{ fontSize: 20,color:"var(--primary)" }} />
          <Typography>{commonWord.email}</Typography>
        </Link>

        {/* Location */}
        <Link
        //   href="https://maps.google.com/?q=Villupuram, Cuddalore"
        //   target="_blank"
          underline="none"
          color="inherit"
          className="item"
        >
          <HiOutlineLocationMarker  style={{ fontSize: 20,color:"var(--primary)" }} />
          <Typography>Villupuram, Cuddalore</Typography>
        </Link>
      </Box>
          </Box>
        </Box>
      </Box>

      {/* -------- Footer Bottom -------- */}
      <Box
        sx={{
          textAlign: "center",
          mt: 5,
          pt: 3,
          borderTop: "1px solid #ddd",
          color: "#777",
        }}
      >
        &copy; {currentYear} FruitFast. All rights reserved.
      </Box>
    </Box>
  );
};

export default WebFooter;
