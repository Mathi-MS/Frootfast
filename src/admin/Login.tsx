"use client";
import { Box, Typography, IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { images } from "../assets/Images/Images";
import { useNavigate } from "react-router-dom";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { showError, showSuccess } from "../Custom/CustomToast";
import { useState } from "react";

const formSchema = z.object({
  userId: z.string().min(3, "Enter a valid User ID."),
  password: z.string().min(6, "Password must be at least 6 characters."),
});

type FormData = z.infer<typeof formSchema>;

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    if (data.userId === "12345678" && data.password === "12345678") {
      showSuccess("Login successful!");
      navigate("/admin");
    } else {
      showError("Invalid User ID or Password!");
    }
    reset();
  };

  return (
    <>
      {/* MOBILE VIEW */}
      <Box
        sx={{
          minHeight: "100vh",
          backgroundImage: `url(${images.userbackground})`,
          backgroundRepeat: "repeat",
          backgroundSize: "600px",
          backgroundPosition: "inherit",
          color: "var(--white)",
          flexDirection: "column",
          display: "flex",
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
            minHeight: "calc(100vh - 110px)",
            "@media (max-width: 600px)": {
              minHeight: "calc(100vh - 110px)",
            },
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              minWidth: "400px",
              padding: "30px",
              borderRadius: "8px",
              background: "rgba(0, 0, 0, 0.6)",
              "@media (max-width: 600px)": {
                minWidth: "90%",
              },
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Bold_M",
                fontSize: { xs: "22px", md: "26px" },
                marginBottom: "20px",
                background:
                  "linear-gradient(90deg, #e56d42, #ff8521, #e98d33, #ff8521)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Welcome Back
            </Typography>

            <Typography
              sx={{
                fontSize: "14px",
                color: "#dcdcdc",
                marginBottom: "25px",
                fontFamily: "Medium_M",
              }}
            >
              Please log in with your User ID and Password
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit(onSubmit)}
              sx={{
                marginTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                maxWidth: "400px",
                marginInline: "auto",
                input: {
                  background: "#25410d",
                  color: "var(--white)",
                  border: "2px solid rgba(255, 255, 255, .3)",
                  boxShadow: "0 4px 6px #2c9d424d",
                  padding: "10px 15px",
                  borderRadius: "8px",
                  fontSize: "16px",
                  height: "50px",
                  width: "100%",
                  outline: "none",
                  fontFamily: "Medium_M",
                  marginTop: "10px",
                },
                "input::placeholder": {
                  color: "#dcdcdc",
                },
              }}
            >
              {/* User ID */}
              <div style={{ position: "relative" }}>
                <input
                  type="text"
                  placeholder="Enter User ID"
                  {...register("userId")}
                />
                {errors.userId && (
                  <Typography
                    sx={{
                      color: "var(--secondary)",
                      fontSize: "14px",
                      textAlign: "left",
                      paddingLeft: "5px !important",
                      fontFamily: "Medium_M",
                    }}
                  >
                    {errors.userId.message}
                  </Typography>
                )}
              </div>

              {/* Password */}
              <div style={{ position: "relative" }}>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  {...register("password")}
                />
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  sx={{
                    position: "absolute",
                    right: "10px",
                    top: "35px",
                    transform: "translateY(-50%)",
                    color: "#dcdcdc",
                    svg: {
                      fontSize: "20px",
                    },
                  }}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>

                {errors.password && (
                  <Typography
                    sx={{
                      color: "var(--secondary)",
                      fontSize: "14px",
                      textAlign: "left",
                      paddingLeft: "5px !important",
                      fontFamily: "Medium_M",
                    }}
                  >
                    {errors.password.message}
                  </Typography>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                style={{
                  background: "var(--secondary)",
                  border: "none",
                  borderRadius: "8px",
                  padding: "12px 15px",
                  color: "var(--white)",
                  fontWeight: 700,
                  fontSize: "16px",
                  cursor: "pointer",
                  marginTop: "10px",
                  fontFamily: "Medium_M",
                }}
              >
                Submit
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Login;
