"use client";

import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import { TiStarFullOutline } from "react-icons/ti";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Rohit Sharma",
    // email: "rohit@example.com",
    rating: 5,
    review:
      "Fresh fruits delivered right on time! Quality is amazing. Highly recommended!",
  },
  {
    name: "Priya Singh",
    email: "priya@example.com",
    rating: 4,
    review:
      "Very convenient service. Loved the freshness. Could improve delivery speed.",
  },
  {
    name: "Arjun Patel",
    email: "arjun@example.com",
    rating: 5,
    review:
      "Great service! Fruits were sweet, clean, and perfectly cut. Will order again!",
  },
  {
    name: "Meera Joshi",
    email: "meera@example.com",
    rating: 5,
    review: "Excellent service and really fresh fruits!",
  },
];

const WebTestiTab = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 600,
    slidesToShow: 2,
    responsive: [
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <Box className="website-container" sx={{ py: 6,bgcolor:"#f5f5f5",    display: { xs: "none", sm: "block",md:"none" } 
 }}>
      <Typography
        sx={{
          fontSize: 40,
          fontWeight: 700,
          mb: "20px !important",
          textAlign: "center",
          fontFamily:"Regular_M"
        }}
      >
        What Our Customers Say
      </Typography>
        <Box sx={{"& .slick-track":{
            display:"flex",
            gap:"30px",
            cursor:"pointer"
        },"& .slick-list":{
            position:"relative",overflow:"hidden"
        }}}>
                  <Slider {...settings} >
        {testimonials.map((t, i) => (
          <Box
            key={i}
            sx={{
              p: 3,
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.07)",
              minHeight: 220,
              mx: 1,
              display:"flex !important",
              justifyContent:"space-between",
              flexDirection:"column"
            }}
          >
            <Box>
                <Box sx={{ mb: 1 }}>
              {Array.from({ length: t.rating }).map((_, idx) => (
                <Typography
                  key={idx}
                  component="span"
                  sx={{ color: "#FFD700", fontSize: 26 }}
                >
                  <TiStarFullOutline />
                </Typography>
              ))}
            </Box>
            <Typography sx={{ lineHeight: 1.6,fontFamily:"Medium_M" }}>{t.review}</Typography>
            </Box>
            <Box>
                <Typography sx={{ fontWeight: 700, fontSize: 18,fontFamily:"Regular_M" }}>
              {t.name}
            </Typography>
            <Typography sx={{ fontSize: 14, opacity: 0.7, mb: 1,fontFamily:"Medium_M" }}>
              {t.email || ""}
            </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
        </Box>
    </Box>
  );
};

export default WebTestiTab;
