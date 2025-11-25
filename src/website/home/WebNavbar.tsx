import { Box, IconButton, Drawer, List, ListItem, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { images } from "../../assets/Images/Images";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";

const WebNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Subscription Plans", path: "/plans" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* MAIN NAVBAR */}
      <Box
        sx={{
          py: 1,
          background: "var(--white)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          className="website-container"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left Logo */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box className="logo-bg"></Box>
            <Box className="logo-bgbig"></Box>
            <Box
              sx={{
                width: "max-content",
                borderRadius: "5px",
                cursor: "pointer",
                position: "relative",
                zIndex: "999",
              }}
              onClick={() => navigate("/")}
            >
              <Box component="img" src={images.logo} alt="logo" width={100} />
            </Box>
          </Box>

          {/* Center Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 4,
              fontWeight: 600,
            }}
          >
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <Box
                  key={item.label}
                  sx={{
                    cursor: "pointer",
                    color: isActive ? "var(--secondary)" : "var(--newprimary)",
                    borderBottom: isActive ? "2px solid var(--secondary)" : "none",
                    pb: isActive ? "2px" : 0,
                  }}
                  onClick={() => navigate(item.path)}
                >
                  {item.label}
                </Box>
              );
            })}
          </Box>

          {/* Right Side */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {/* Desktop Button */}
            <Button
              variant="contained"
              sx={{
                display: { xs: "none", md: "block" },
                background: "var(--newprimary)",
                color: "#fff",
                textTransform: "none",
                fontFamily:"Medium_M",
                px: 3,
              }}
              onClick={() => navigate("/book")}
            >
              Book Your Demo
            </Button>

            {/* Mobile Toggle */}
            <IconButton
              sx={{ display: { xs: "flex", md: "none" } }}
              onClick={() => setOpen(true)}
            >
              <FaBarsStaggered style={{fontSize:"20px",color:"var(--primary)"}}/>
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* DRAWER SIDEBAR */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)} sx={{zIndex:"999999999"}}>
        <Box sx={{ width: 260, p: 2 }}>
          {/* Sidebar Logo */}
          <Box sx={{ textAlign: "center", pb: 2 }}>
            <Box
              component="img"
              src={images.logo}
              alt="sidebar-logo"
              width={120}
              sx={{ mx: "auto" }}
            />
          </Box>

          {/* MENU LIST */}
          <List>
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <ListItem
                  key={item.label}
                  sx={{
                    cursor: "pointer",
                    fontWeight: 600,
                    py: 1.5,
                    // borderLeft: isActive ? "4px solid var(--newprimary)" : "4px solid transparent",
                    background: isActive ? "rgba(0, 0, 0, 0.05)" : "transparent",
                  }}
                  onClick={() => {
                    navigate(item.path);
                    setOpen(false);
                  }}
                >
                  {item.label}
                </ListItem>
              );
            })}

            {/* Book Order — Mobile */}
            <ListItem>
              <Button
                variant="contained"
                fullWidth
                sx={{ textTransform: "none", background: "var(--newprimary)",fontFamily:"Medium_M !important",mt:"20px !important" }}
                onClick={() => {
                  navigate("/book");
                  setOpen(false);
                }}
              >
                Book Your Demo
              </Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default WebNavbar;
