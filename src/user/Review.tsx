"use client";
import { Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { showSuccess } from "../Custom/CustomToast";

const formSchema = z.object({
  name: z.string().min(2, "Enter your full name."),
  mobile: z.string().regex(/^\d{10}$/, "Enter a valid 10-digit number."),
  review: z.string().min(5, "Please enter at least 5 characters."),
});

type FormData = z.infer<typeof formSchema>;

const Review = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    console.log("Review Data:", data);
    showSuccess("Thanks for your feedback!");
    reset();
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
        Share Your Review
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
          textarea: {
            background: "#25410d",
            color: "var(--white)",
            border: "2px solid rgba(255, 255, 255, .3)",
            boxShadow: "0 4px 6px #2c9d424d",
            padding: "15px",
            borderRadius: "8px",
            fontSize: "16px",
            width: "100%",
            outline: "none",
            fontFamily: "Medium_M",
            resize: "none",
            minHeight: "120px",
          },
          "input::placeholder, textarea::placeholder": {
            color: "#dcdcdc",
          },
        }}
      >
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Enter Your Name"
            {...register("name")}
          />
          {errors.name && (
            <Typography
              sx={{
                color: "var(--secondary)",
                fontSize: "14px",
                textAlign: "left",
                pl: "5px !important",
                fontFamily: "Medium_M",
              }}
            >
              {errors.name.message}
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
                pl: "5px !important",
                fontFamily: "Medium_M",
              }}
            >
              {errors.mobile.message}
            </Typography>
          )}
        </div>

        {/* Review Textarea */}
        <div>
          <textarea
            placeholder="Write your review..."
            {...register("review")}
          />
          {errors.review && (
            <Typography
              sx={{
                color: "var(--secondary)",
                fontSize: "14px",
                textAlign: "left",
                pl: "5px !important",
                fontFamily: "Medium_M",
              }}
            >
              {errors.review.message}
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
  );
};

export default Review;
