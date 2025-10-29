"use client";
import { Box, Divider, Menu, MenuItem } from "@mui/material";
import { FaBarsStaggered } from "react-icons/fa6";
import { images } from "../assets/Images/Images";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation(); // <-- to get current path

  const handleOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (path: string) => {
    handleClose();
    navigate(path);
  };

  // Function to check if route is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "20px",
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            background: "white",
            padding: "5px 20px",
            width: "max-content",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <Box component="img" src={images.logo} alt="logo" width={70} />
        </Box>

        {/* Menu Icon */}
        <Box>
          <Box
            onClick={handleOpen}
            sx={{
              background: "white",
              width: "35px",
              height: "35px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "5px",
              color: "var(--primary)",
              cursor: "pointer",
              fontWeight: "900",
              transition: "0.2s",
              "&:hover": {
                background: "var(--secondary)",
                color: "white",
              },
            }}
          >
            <FaBarsStaggered />
          </Box>

          {/* Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            sx={{
              ul: {
                padding: "0px",
              },
              hr: {
                margin: "0px !important",
              },
            }}
          >
            <MenuItem
              onClick={() => handleNavigate("/")}
              sx={{
                fontFamily: "Bold_M",
                fontSize: "14px",
                color: isActive("/") ? "var(--secondary)" : "inherit",
              }}
            >
              Home
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => handleNavigate("/terms-and-conditions")}
              sx={{
                fontFamily: "Bold_M",
                fontSize: "14px",
                color: isActive("/terms-and-conditions")
                  ? "var(--secondary)"
                  : "inherit",
              }}
            >
              Terms & Conditions
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => handleNavigate("/products")}
              sx={{
                fontFamily: "Bold_M",
                fontSize: "14px",
                color: isActive("/products") ? "var(--secondary)" : "inherit",
              }}
            >
              Products
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => handleNavigate("/order-history")}
              sx={{
                fontFamily: "Bold_M",
                fontSize: "14px",
                color: isActive("/order-history")
                  ? "var(--secondary)"
                  : "inherit",
              }}
            >
              Ordered History
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export default Header;
