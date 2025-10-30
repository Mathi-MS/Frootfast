"use client";
import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  Avatar,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { images } from "../assets/Images/Images";

const AdminHeader = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [profileMenu, setProfileMenu] = useState<null | HTMLElement>(null);
  const isMobile = useMediaQuery("(max-width:768px)");

  // You can dynamically fetch this from your user data
  const userName = "John Doe";
  const userRole = "Admin";
  const firstLetter = userName.charAt(0).toUpperCase();

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfileMenu(event.currentTarget);
  };
  const handleProfileMenuClose = () => {
    setProfileMenu(null);
  };

  const tabs = [
    { label: "Prebook", path: "/prebook" },
    { label: "All Orders", path: "/all-orders" },
    { label: "Finance", path: "/finance" },
  ];

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: "var(--white)",
        color: "white",
        padding: "8px 16px",
        borderRadius: "10px",
        ".MuiToolbar-root": {
          minHeight: "unset !important",
          padding: "5px 10px",
        },
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left: Logo */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
        >
          <Box
            component="img"
            src={images.logo}
            alt="logo"
            sx={{ width: 60, height: "auto" }}
          />
        </Box>

        {/* Center: Tabs */}
        {!isMobile ? (
          <Box
            sx={{
              display: "flex",
              gap: 4,
              height: "35px",
              alignItems: "center",
            }}
          >
            {tabs.map((tab) => (
              <Typography
                key={tab.label}
                onClick={() => navigate(tab.path)}
                sx={{
                  cursor: "pointer",
                  fontSize: "14px",
                  fontFamily: "Bold_M",
                  color: "var(--primary)",
                  transition: "0.3s",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  padding: "10px !important",
                  borderRadius: "5px",
                  "&:hover": {
                    backgroundColor: "var(--secondary)",
                    color: "var(--white)",
                  },
                }}
              >
                <Box>{tab.label}</Box>
              </Typography>
            ))}
          </Box>
        ) : (
          <>
            <IconButton color="inherit" onClick={handleMenuOpen}>
              <MenuIcon sx={{ color: "var(--primary)" }} />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              sx={{
                ".MuiPaper-root": {
                  minWidth: "150px",
                },
                li: {
                  fontFamily: "Bold_M",
                  fontSize: "14px",
                },
                ul: {
                  padding: "10px",
                },
              }}
            >
              {tabs.map((tab) => (
                <MenuItem
                  key={tab.label}
                  onClick={() => {
                    navigate(tab.path);
                    handleMenuClose();
                  }}
                >
                  {tab.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        )}

        {/* Right: Profile */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            cursor: "pointer",
          }}
          onClick={handleProfileMenuOpen}
        >
          {/* Profile Circle */}
          <Avatar
            sx={{
              bgcolor: "var(--primary)",
              color: "white",
              fontWeight: "bold",
              width: 35,
              height: 35,
              fontSize: "12px",
              fontFamily: "Bold_M",
            }}
          >
            {firstLetter}
          </Avatar>

          {/* Name + Role */}
          {!isMobile && (
            <Box>
              <Typography
                sx={{
                  color: "var(--primary)",
                  fontFamily: "Bold_M",
                  fontSize: 14,
                }}
              >
                {userName}
              </Typography>
              <Typography
                sx={{
                  fontSize: 12,
                  color: "var(--bg)",
                  fontFamily: "Bold_M",
                }}
              >
                {userRole}
              </Typography>
            </Box>
          )}
        </Box>

        {/* Profile Menu */}
        <Menu
          anchorEl={profileMenu}
          open={Boolean(profileMenu)}
          onClose={handleProfileMenuClose}
          sx={{
            ".MuiPaper-root": {
              minWidth: "150px",
            },
            li: {
              fontFamily: "Bold_M",
              fontSize: "14px",
            },
            ul: {
              padding: "10px",
            },
          }}
        >
          <MenuItem
            onClick={() => {
              handleProfileMenuClose();
            }}
          >
            Logout
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default AdminHeader;
