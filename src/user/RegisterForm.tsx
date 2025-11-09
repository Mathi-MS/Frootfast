"use client";
import { Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { showError, showSuccess } from "../Custom/CustomToast";

const formSchema = z.object({
  fullname: z.string().min(1, "Please enter name."),
  mobile: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit number."),
  date: z.string().min(1, "Please select a date."),
  boxType: z
    .string()
    .nullable()
    .refine((val) => val !== null && val !== "", {
      message: "Please select a box type.",
    }),
});

type FormData = z.infer<typeof formSchema>;

const RegisterForm = () => {
  const navigate = useNavigate();
  const [termsAccepted, setTermsAccepted] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: { boxType: null },
  });

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formatted = tomorrow.toISOString().split("T")[0];
    setValue("date", formatted);
  }, [setValue]);

  const onSubmit = (data: FormData) => {
    if (!termsAccepted) {
      showError("Read & accept Terms to submit.");
      return;
    }
    const formWithTerms = { ...data, termsAccepted };
    console.log("Form Data:", formWithTerms);
    showSuccess("Ordered successfully!");
    reset({ fullname: "", mobile: "", boxType: "" });
    setTermsAccepted(false);
    navigate("/order-succesfully");
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        width: "500px",
        background: "rgba(0, 0, 0, 0.6)",
        padding: "40px 20px",
        borderRadius: "10px",
        "@media (max-width: 600px)": {
          background: "transparent",
          padding: "0px",
          width: "100%",
          borderRadius: "0px",
        },
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "20px",
          fontFamily: "Bold_M",
          background:
            "linear-gradient(90deg, #e56d42 -24.45%, #ff8521 25.74%, #ff8521 51.17%, #e98d33 116.9%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
        }}
      >
        PreBook Your Sample FrootFast Box Now
      </Typography>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          marginTop: "30px",
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
            height: "60px",
            width: "100%",
            outline: "none",
            fontFamily: "Medium_M",
          },
          "input::placeholder": {
            color: "#dcdcdc",
          },
        }}
      >
        {/* Full Name */}
        <div>
          <input
            type="text"
            placeholder="Full name"
            {...register("fullname")}
          />
          {errors.fullname && (
            <Typography
              sx={{
                color: "var(--secondary)",
                fontSize: "14px",
                textAlign: "left",
                paddingLeft: "5px !important",
                fontFamily: "Medium_M",
              }}
            >
              {errors.fullname.message}
            </Typography>
          )}
        </div>

        {/* Mobile Number */}
        <div style={{ position: "relative" }}>
          <span
            style={{
              position: "absolute",
              left: "15px",
              top: "30px",
              transform: "translateY(-50%)",
              color: "#dcdcdc",
              fontFamily: "Medium_M",
              fontSize: "16px",
              pointerEvents: "none",
            }}
          >
            +91
          </span>
          <input
            type="tel"
            placeholder="0000000000"
            {...register("mobile")}
            style={{
              paddingLeft: "50px",
            }}
          />
          {errors.mobile && (
            <Typography
              sx={{
                color: "var(--secondary)",
                fontSize: "14px",
                textAlign: "left",
                paddingLeft: "5px !important",
                fontFamily: "Medium_M",
              }}
            >
              {errors.mobile.message}
            </Typography>
          )}
        </div>

        {/* Box Type (Radio Buttons) */}
        <div>
          <Typography
            sx={{
              color: "var(--white)",
              fontSize: "16px",
              textAlign: "left",
              paddingLeft: "5px !important",
              fontFamily: "Medium_M",
            }}
          >
            Select Box Type
          </Typography>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "15px",
              marginTop: "10px",
            }}
          >
            {["Basic", "Kids", "Premium", "Diabetes"].map((type) => (
              <label
                key={type}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "var(--white)",
                  fontFamily: "Medium_M",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  value={type}
                  {...register("boxType")}
                  style={{
                    width: "18px",
                    height: "18px",
                    accentColor: "var(--secondary)",
                    cursor: "pointer",
                  }}
                />
                {type}
              </label>
            ))}
          </div>

          {errors.boxType && (
            <Typography
              sx={{
                color: "var(--secondary)",
                fontSize: "14px",
                textAlign: "left",
                paddingLeft: "5px !important",
                fontFamily: "Medium_M",
              }}
            >
              {errors.boxType.message}
            </Typography>
          )}
        </div>

        {/* Date Field */}
        <div style={{ position: "relative" }}>
          <input type="date" {...register("date")} disabled />
          <span
            style={{
              position: "absolute",
              right: "15px",
              top: "50%",
              transform: "translateY(-50%)",
              fontSize: "16px",
              pointerEvents: "none",
              width: "16px",
              height: "16px",
              color: "var(--white)",
            }}
          >
            <MdOutlineDateRange />
          </span>
          {errors.date && (
            <Typography
              sx={{
                color: "var(--secondary)",
                fontSize: "14px",
                textAlign: "left",
                paddingLeft: "5px !important",
                fontFamily: "Medium_M",
              }}
            >
              {errors.date.message}
            </Typography>
          )}
        </div>

        {/* Terms & Conditions */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "8px",
            marginLeft: "5px",
          }}
        >
          <input
            type="checkbox"
            id="terms"
            checked={termsAccepted}
            onChange={(e) => setTermsAccepted(e.target.checked)}
            style={{
              width: "18px",
              height: "18px",
              accentColor: "var(--secondary)",
              cursor: "pointer",
            }}
          />
          <label
            style={{
              color: "var(--white)",
              fontSize: "14px",
              fontFamily: "Medium_M",
              cursor: "pointer",
            }}
          >
            I accept the{" "}
            <span
              style={{
                color: "var(--secondary)",
                textDecoration: "underline",
              }}
              onClick={() => navigate("/terms-and-conditions")}
            >
              Terms & Conditions
            </span>
          </label>
        </Box>

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
  );
};

export default RegisterForm;
