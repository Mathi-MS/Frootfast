"use client";
import { Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { MdOutlineDateRange } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  fullname: z.string().min(1, "Please enter name."),
  mobile: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit number."),
  date: z.string().min(1, "Please select a date."),
  quantity: z.number().min(1, "Quantity must be at least 1."),
});

type FormData = z.infer<typeof formSchema>;

const RegisterForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const formatted = tomorrow.toISOString().split("T")[0];
    setValue("date", formatted);
  }, [setValue]);

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
  };

  return (
    <>
      <Box sx={{ textAlign: "center", width: "100%" }}>
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
          PreBook Your FrootFast Box Now
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
                top: "50%",
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
                }}
              >
                {errors.mobile.message}
              </Typography>
            )}
          </div>

          {/* Quantity Selector */}
          <div>
            <Typography
              sx={{
                color: "var(--white)",
                fontSize: "14px",
                textAlign: "left",
                paddingLeft: "5px !important",
                fontFamily: "Medium_M",
              }}
            >
              Quantity
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginTop: "10px",
                marginLeft: "3px",
                justifyContent: "start",
              }}
            >
              <button
                type="button"
                onClick={() =>
                  setValue(
                    "quantity",
                    Math.max(1, (Number(getValues("quantity")) || 1) - 1)
                  )
                }
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "#2c9d42",
                  border: "none",
                  color: "white",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
              >
                −
              </button>

              <input
                type="number"
                {...register("quantity")}
                readOnly
                value={Number(getValues("quantity")) || 1}
                style={{
                  width: "80px",
                  textAlign: "center",
                  background: "#25410d",
                  color: "var(--white)",
                  border: "2px solid rgba(255, 255, 255, .3)",
                  boxShadow: "0 4px 6px #2c9d424d",
                  borderRadius: "8px",
                  fontSize: "18px",
                  height: "45px",
                  outline: "none",
                  fontFamily: "Medium_M",
                  padding: "0px 0px 0px 15px ",
                }}
              />

              <button
                type="button"
                onClick={() =>
                  setValue("quantity", (Number(getValues("quantity")) || 1) + 1)
                }
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  background: "#2c9d42",
                  border: "none",
                  color: "white",
                  fontSize: "22px",
                  cursor: "pointer",
                }}
              >
                +
              </button>
            </div>
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
    </>
  );
};

export default RegisterForm;
