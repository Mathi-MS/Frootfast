import { Fab, Tooltip } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";
import { useOutlet } from "./OutletContext";
import { commonWord } from "../Custom/CommonWord";

const WhatsappBottom = () => {
  const { selectedOutlet } = useOutlet();
  const whatsappNumber = commonWord.mobileNumbernew
  const message = "Hello! I’d like to know more about Froot Fast.";

  const handleClick = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <Tooltip title="Chat on WhatsApp" placement="left">
      <Fab
        onClick={handleClick}
        sx={{
          position: "fixed",
          bottom: 24,
          right: 24,
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
        <FaWhatsapp size={28} />
      </Fab>
    </Tooltip>
  );
};

export default WhatsappBottom;
