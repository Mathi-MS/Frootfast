import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { images } from "../assets/Images/Images";
import { useOutlet } from "./OutletContext";

const SelectOutletPopup = () => {
  const [open, setOpen] = useState(false);
  const { selectedOutlet, setSelectedOutlet } = useOutlet();

  useEffect(() => {
    const savedOutlet = Cookies.get("selectedOutlet");
    if (!savedOutlet && !selectedOutlet) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [selectedOutlet]);

  const handleSelect = (event: any) => {
    const outlet = event.target.value;
    setSelectedOutlet(outlet);
    if (outlet) {
      Cookies.set("selectedOutlet", outlet, { expires: 7 });
      setOpen(false);
    }
  };

  return (
    <Dialog
      open={open}
      PaperProps={{
        sx: {
          borderRadius: "16px",
          p: 3,
          width: "100%",
          maxWidth: 400,
          textAlign: "center",
        },
      }}
    >
      <DialogTitle>
        <Box display="flex" justifyContent="center" mb={1}>
          <Box
            component="img"
            src={images.logo}
            alt="FrootFast Logo"
            sx={{ width: 80, height: 80, objectFit: "contain" }}
          />
        </Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontFamily: "Bold_M",
            color: "#333",
            textAlign: "center",
          }}
        >
          Select Your Outlet
        </Typography>
      </DialogTitle>

      <DialogContent>
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel
            id="outlet-select-label"
            sx={{
              fontFamily: "Regular_M",
              "&.Mui-focused": {
                color: "var(--primary)",
              },
            }}
          >
            Choose Outlet
          </InputLabel>
          <Select
            labelId="outlet-select-label"
            value={selectedOutlet || ""}
            onChange={handleSelect}
            label="Choose Outlet"
            sx={{
              borderRadius: "10px",
              textAlign: "left",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(0,0,0,0.2)",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--primary)",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "var(--primary)",
              },
              "& .MuiSelect-icon": {
                color: "var(--primary)",
              },
            }}
          >
            <MenuItem value="" sx={{ fontFamily: "Regular_M" }} disabled>
              -- Select --
            </MenuItem>
            {["Villupuram", "Cuddalore"].map((outlet) => (
              <MenuItem
                key={outlet}
                value={outlet}
                sx={{
                  fontFamily: "Regular_M",
                  "&.Mui-selected": {
                    backgroundColor: "rgba(255, 133, 33, 0.1)",
                    color: "var(--primary)",
                  },
                  "&.Mui-selected:hover": {
                    backgroundColor: "rgba(255, 133, 33, 0.2)",
                  },
                }}
              >
                {outlet}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </DialogContent>
    </Dialog>
  );
};

export default SelectOutletPopup;
