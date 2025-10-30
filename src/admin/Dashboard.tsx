"use client";
import { Box, Grid, Typography, IconButton } from "@mui/material";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CancelIcon from "@mui/icons-material/Cancel";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Dashboard = () => {
  const cards = [
    {
      title: "Total Orders",
      count: 120,
      color: "#d1c4e9", // light purple
      icon: <LocalMallIcon sx={{ fontSize: 28, color: "#7e57c2" }} />,
    },
    {
      title: "Delivered",
      count: 85,
      color: "#c8e6c9", // light green
      icon: <LocalShippingIcon sx={{ fontSize: 28, color: "#43a047" }} />,
    },
    {
      title: "Cancelled",
      count: 15,
      color: "#ffcdd2", // light red
      icon: <CancelIcon sx={{ fontSize: 28, color: "#e53935" }} />,
    },
    {
      title: "Confirmed",
      count: 20,
      color: "#b3e5fc", // light blue
      icon: <CheckCircleIcon sx={{ fontSize: 28, color: "#0288d1" }} />,
    },
  ];

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, }}>
      <Grid container sx={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        {cards.map((card) => (
          <Box  key={card.title} sx={{width:"24%"}}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                bgcolor: "white",
                p: 2.5,
                borderRadius: "20px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                transition: "0.3s",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.08)",
                },
              }}
            >
              {/* Left Section */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box
                  sx={{
                    backgroundColor: card.color,
                    width: 48,
                    height: 48,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                  }}
                >
                  {card.icon}
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: 13,
                      color: "#888",
                      fontFamily: "Regular_M",
                      mb: 0.3,
                    }}
                  >
                    {card.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 18,
                      color: "#000",
                      fontFamily: "Bold_M",
                    }}
                  >
                    {card.count}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
