"use client";
import {
  Box,
  Divider,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";
import { FaBarsStaggered } from "react-icons/fa6";
import { images } from "../assets/Images/Images";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";
import { useOutlet } from "./OutletContext";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedOutlet, setSelectedOutlet } = useOutlet();
  const outlets = ["Villupuram", "Cuddalore"];

  const handleOutletChange = (event: any) => {
    setSelectedOutlet(event.target.value);
  };

  const handleOpen = (event: any) => setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  const handleNavigate = (path: string) => {
    handleClose();
    navigate(path);
  };

  const isActive = (path: string) => location.pathname === path;

  return (
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

      {/* Outlet Select + Menu */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {/* Outlet Select */}
        <FormControl
          size="small"
          sx={{
            minWidth: 120,
            maxWidth: 180,
            background: "transparent",
          }}
        >
          <InputLabel
            sx={{
              color: "var(--secondary)",
              fontFamily: "Regular_M",
              "&.Mui-focused": { color: "var(--secondary)" },
            }}
          >
            Outlet
          </InputLabel>
          <Select
            value={selectedOutlet}
            onChange={handleOutletChange}
            label="Outlet"
            sx={{
              fontFamily: "Regular_M",
              color: "var(--secondary)",
              fontSize: "12px",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--secondary)",
                borderWidth: "1px",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--secondary)",
                borderWidth: "1px",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--secondary)",
                borderWidth: "1px",
              },
              "& .MuiSelect-icon": {
                color: "var(--secondary)",
              },
            }}
          >
            {outlets.map((outlet) => (
              <MenuItem
                key={outlet}
                value={outlet}
                sx={{
                  fontFamily: "Regular_M",
                  fontSize: "14px",
                  minHeight: "unset",
                  padding: "10px 15px",
                }}
              >
                {outlet}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

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
              ul: { padding: "0px" },
              hr: { margin: "0px !important" },
            }}
          >
            <MenuItem
              onClick={() => handleNavigate("/")}
              sx={{
                fontFamily: "Bold_M",
                fontSize: "14px",
                minHeight: "45px !important",
                color: isActive("/") ? "var(--secondary)" : "inherit",
              }}
            >
              Home
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => handleNavigate("/products")}
              sx={{
                fontFamily: "Bold_M",
                fontSize: "14px",
                minHeight: "45px !important",
                color: isActive("/products") ? "var(--secondary)" : "inherit",
              }}
            >
              Products
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => handleNavigate("/ordered")}
              sx={{
                fontFamily: "Bold_M",
                fontSize: "14px",
                minHeight: "45px !important",
                color: isActive("/ordered") ? "var(--secondary)" : "inherit",
              }}
            >
              Ordered History
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => handleNavigate("/contact")}
              sx={{
                fontFamily: "Bold_M",
                fontSize: "14px",
                minHeight: "45px !important",
                color: isActive("/contact") ? "var(--secondary)" : "inherit",
              }}
            >
              Contact
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => handleNavigate("/review")}
              sx={{
                fontFamily: "Bold_M",
                fontSize: "14px",
                minHeight: "45px !important",
                color: isActive("/review") ? "var(--secondary)" : "inherit",
              }}
            >
              Review
            </MenuItem>
            <Divider />
            <MenuItem
              onClick={() => handleNavigate("/terms-and-conditions")}
              sx={{
                fontFamily: "Bold_M",
                fontSize: "14px",
                minHeight: "45px !important",
                color: isActive("/terms-and-conditions")
                  ? "var(--secondary)"
                  : "inherit",
              }}
            >
              Terms & Conditions
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
