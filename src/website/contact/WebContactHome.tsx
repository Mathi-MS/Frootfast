"use client";
import {
  Box,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { Phone, Email, WhatsApp } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuMail } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

const schema = z.object({
  fullName: z.string().min(3, "Full name is required"),
  email: z.string().optional(),
  mobile: z
    .string()
    .min(10, "Mobile number must be 10 digits")
    .regex(/^\d+$/, "Only digits allowed"),
  message: z.string().min(5, "Message must be at least 5 characters"),
  whatsapp: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

const WebContactHome = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Box className="website-container" sx={{ py: 6,bgcolor:"white" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems:"center"
        }}
      >
        {/* LEFT SIDE - FORM */}
        <Box
          sx={{
            flex: 1,
            background: "#fafafa",
            borderRadius: "10px",
            p: 4,
            width:"100%",
            border: "1px solid #eee",
          }}
        >
          <Typography sx={{ fontSize: "28px", fontWeight: 700, mb: 3,fontFamily:"Regular_M" }}>
            Send Us a Message
          </Typography>

          <Box component={"form"} onSubmit={handleSubmit(onSubmit)} sx={{mt:2,"& p":{
            fontSize:"14px",fontFamily:"Regular_M"
          },"& input":{
            fontFamily:"Regular_M"
          }}}>
            <Typography sx={{ mb: 1,}}>Full Name</Typography>
            <TextField
              fullWidth
              placeholder="Enter your name"
              {...register("fullName")}
              error={!!errors.fullName}
              helperText={errors.fullName?.message}
              
              sx={{
                mb: 3,
                bgcolor: "white",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                    height: "42px",           
                    fontSize: "14px",      
                    "& fieldset": {
                    borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                    borderColor: "var(--primary)",
                    },
                    "&.Mui-focused fieldset": {
                    borderColor: "var(--primary) !important", 
                    },
                },
                }}
            />

            <Typography sx={{ mb: 1,}}>
              Email Address
            </Typography>
            <TextField
              fullWidth
              placeholder="your@email.com"
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{
                mb: 3,
                bgcolor: "white",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                    height: "42px",            
                    fontSize: "14px",      
                    "& fieldset": {
                    borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                    borderColor: "var(--primary)",
                    },
                    "&.Mui-focused fieldset": {
                    borderColor: "var(--primary) !important", 
                    },
                },
                }}

            />

            <Typography sx={{ mb: 1,}}>
              Phone Number
            </Typography>
            <TextField
              fullWidth
              placeholder="+91 98765 43210"
              {...register("mobile")}
              error={!!errors.mobile}
              helperText={errors.mobile?.message}
              sx={{
                mb: 3,
                bgcolor: "white",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                    height: "42px",            
                    fontSize: "14px",      
                    "& fieldset": {
                    borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                    borderColor: "var(--primary)",
                    },
                    "&.Mui-focused fieldset": {
                    borderColor: "var(--primary) !important", 
                    },
                },
                }}            />

            <Typography sx={{ mb: 1,}}>Message</Typography>
            <TextField
              fullWidth
              placeholder="Tell us how we can help you..."
              multiline
              minRows={4}
              {...register("message")}
              error={!!errors.message}
              helperText={errors.message?.message}
                sx={{
                mb: 3,
                bgcolor: "white",
                borderRadius: "8px",
                "& .MuiOutlinedInput-root": {
                    fontSize: "14px",
                    "& fieldset": {
                    borderColor: "#ccc",
                    },
                    "&:hover fieldset": {
                    borderColor: "var(--primary)",
                    },
                    "&.Mui-focused fieldset": {
                    borderColor: "var(--primary) !important",
                    },
                },
                }}
            />

            {/* WhatsApp Checkbox */}
            <FormControlLabel
              control={<Checkbox {...register("whatsapp")} />}
              label="Prefer WhatsApp for response"
              sx={{ mb: 3,"& span":{
                fontFamily:"Medium_M",
                fontSize:"14px"
              } }}
            />
            <br />
            <Button
              type="submit"
              variant="contained"
              sx={{
                background: "var(--primary)",
                textTransform: "none",
                fontFamily:"Regular_M",
                px: 4,
                py: 1,
                fontWeight: 600,
                borderRadius: "5px",
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>

        {/* RIGHT SIDE - CONTACT BOXES */}
        <Box sx={{ flex: 1,width:"100%","& p":{
            fontFamily:"Regular_M"
        } }}>
          {/* PHONE CARD */}
          <Box
            sx={{
              background: "#fafafa",
              p: 3,
              borderRadius: "10px",
              border: "1px solid #eee",
              mb: 3,
            }}
          >
            <Box sx={{ display: "flex", gap: 2,alignItems:{ xs: "start", md: "center" },flexDirection: { xs: "column", md: "row" }}}>
              <FiPhone style={{ fontSize: 20,color:"var(--primary)" }} />
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
                  Phone
                </Typography>

                <Typography
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() => (window.location.href = "tel:+916369881174")}
                >
                  +91 63698 81174
                </Typography>

                <Typography sx={{ opacity: 0.7 }}>
                  Mon–Sun: 6 AM – 10 PM
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* EMAIL CARD */}
          <Box
            sx={{
              background: "#fafafa",
              p: 3,
              borderRadius: "10px",
              border: "1px solid #eee",
              mb: 3,
            }}
          >
            <Box sx={{ display: "flex", gap: 2,alignItems:{ xs: "start", md: "center" },flexDirection: { xs: "column", md: "row" }}}>
              <LuMail  style={{ fontSize: 20,color:"var(--primary)" }} />
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
                  Email
                </Typography>

                <Typography
                  sx={{
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    (window.location.href = "mailto:frootfastofficial@gmail.com")
                  }
                >
                  frootfastofficial@gmail.com
                </Typography>

                <Typography sx={{ opacity: 0.7 }}>
                  We reply within 24 hours
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* WHATSAPP CARD */}
          <Box
            sx={{
              background: "#25D366",
              p: 3,
              borderRadius: "10px",
              color: "white",
              mb: 3,
            }}
          >
            <Box sx={{ display: "flex", gap: 2,alignItems:{ xs: "start", md: "center" },flexDirection: { xs: "column", md: "row" }}}>
              <WhatsApp sx={{ fontSize: 26, color: "white" }} />
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "20px" }}>
                  WhatsApp
                </Typography>
                <Typography sx={{ opacity: 0.9 }}>
                  Quick responses for urgent queries
                </Typography>

                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    background: "white",
                    color: "black",
                    textTransform: "none",
                    borderRadius: "8px",
                    fontFamily:"Regular_M",
                    fontWeight:"600"
                  }}
                  onClick={() =>
                    (window.location.href = "https://wa.me/916369881174")
                  }
                >
                  Message on WhatsApp
                </Button>
              </Box>
            </Box>
          </Box>

          {/* DELIVERY AREAS */}
          <Box
            sx={{
              background: "#fafafa",
              p: 3,
              borderRadius: "10px",
              border: "1px solid #eee",
            }}
          >
            <Box sx={{ display: "flex", gap: 2,alignItems:{ xs: "start", md: "center" },flexDirection: { xs: "column", md: "row" }}}>
              <HiOutlineLocationMarker  style={{ fontSize: 20,color:"var(--primary)" }} />
              <Box>
                <Typography sx={{ fontWeight: 700, fontSize: "18px" }}>
                  Delivery Areas
                </Typography>
                <Typography sx={{ opacity: 0.7 }}>
                  <GoDotFill />
                    Villupuram
                </Typography>
                <Typography sx={{ opacity: 0.7 }}>
                  <GoDotFill />
                    Cuddalore
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default WebContactHome;
