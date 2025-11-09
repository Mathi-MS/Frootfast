import { Tooltip, Fab } from "@mui/material";
import { FaPhoneAlt } from "react-icons/fa";
import { useOutlet } from "./OutletContext";

const MobileBottom = () => {
  const { selectedOutlet } = useOutlet();
  const phoneNumber = selectedOutlet === "Villupuram" ? "919943431297" : "919677851151";

  const handleClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <Tooltip title="Call Now" placement="right">
      <Fab
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: 24,
          left: 24,
          backgroundColor: "#25D366",
          color: "white",
          "&:hover": {
            backgroundColor: "#20b358",
          },
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
          zIndex: 2000,
          width: 50,
          height: 50,
        }}
      >
        <FaPhoneAlt size={20} />
      </Fab>
    </Tooltip>
  );
};

export default MobileBottom;
