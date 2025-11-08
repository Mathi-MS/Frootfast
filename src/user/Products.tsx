"use client";

import { Box, Typography, Grid } from "@mui/material";
import { images } from "../assets/Images/Images";

const products = [
  {
    id: 1,
    name: "FrootFast Box - Basic",
    image: images.products,
    description:
      "A simple and healthy fruit mix — perfect for everyday energy! Includes seasonal favorites like banana, apple, and orange for a naturally sweet refreshment.",
    weekly: "₹299 / week",
    monthly: "₹999 / month",
    sampleAmount: "₹59 (1 box)",
  },
  {
    id: 2,
    name: "FrootFast Box - Premium",
    image: images.products,
    description:
      "A premium blend of 10 fruits including exotic options like kiwi, dragon fruit, and blueberry — for those who love a touch of luxury in every bite.",
    weekly: "₹499 / week",
    monthly: "₹1799 / month",
    sampleAmount: "₹89 (1 box)",
  },
  {
    id: 3,
    name: "FrootFast Box - Kids",
    image: images.products,
    description:
      "Fun, colorful, and packed with nutrition! Includes bite-sized fruits like grapes, apple cubes, and mango chunks — a perfect snack for kids’ lunch boxes.",
    weekly: "₹249 / week",
    monthly: "₹899 / month",
    sampleAmount: "₹49 (1 box)",
  },
  {
    id: 4,
    name: "FrootFast Box - Diabetes Care",
    image: images.products,
    description:
      "Specially designed for diabetic-friendly nutrition. Includes low-sugar fruits like guava, papaya, and pomegranate — naturally balancing sweetness and health.",
    weekly: "₹399 / week",
    monthly: "₹1499 / month",
    sampleAmount: "₹69 (1 box)",
  },
];


const Products = () => {
  return (
    <Box sx={{ textAlign: "center", py: 3 }}>
      <Typography
        variant="h2"
        sx={{
          fontSize: "24px",
          fontFamily: "Bold_M",
          background:
            "linear-gradient(90deg, #e56d42 -24.45%, #ff8521 25.74%, #ff8521 51.17%, #e98d33 116.9%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          display: "inline-block",
          mb: 3,
        }}
      >
        Products
      </Typography>

      <Grid container spacing={3} justifyContent="center" mt={3}>
        {products.map((product) => (
          <Grid
            key={product.id}
            size={{ xs: 12, sm: 6, md: 4 }}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: 320,
                background: "var(--bg)",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
                overflow: "hidden",
                color: "var(--white)",
                padding: "20px",
                transition: "transform 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                },
              }}
            >
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{
                  width: "100%",
                  height: 180,
                  objectFit: "contain",
                  background: "var(--primary)",
                  borderRadius: "5px",
                }}
              />

              <Box sx={{ pt: 2 }}>
                <Typography
                  variant="h6"
                  sx={{ fontFamily: "Bold_M", mb: 1, fontSize: "18px" }}
                >
                  {product.name}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mb: 1,
                    color: "var(--text)",
                    fontFamily: "Medium_M",
                    lineHeight: 1.4,
                    pt: "10px !important",
                  }}
                >
                  {product.description}
                </Typography>

                {/* <Typography
                  variant="body2"
                  sx={{
                    fontSize: "13px",
                    color: "var(--text)",
                    fontFamily: "Medium_M",
                    "span": { color: "var(--secondary)" },
                  }}
                >
                  <span>Ingredients:</span> {product.ingredients}
                </Typography> */}

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "13px",
                    color: "var(--text)",
                    fontFamily: "Medium_M",
                    paddingTop: "10px !important",
                    "span": { color: "var(--secondary)" },
                  }}
                >
                  <span>Weekly:</span> {product.weekly}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "13px",
                    color: "var(--text)",
                    fontFamily: "Medium_M",
                    "span": { color: "var(--secondary)" },
                  }}
                >
                  <span>Monthly:</span> {product.monthly}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "13px",
                    color: "var(--text)",
                    fontFamily: "Medium_M",
                    "span": { color: "var(--secondary)" },
                  }}
                >
                  <span>Sample Amount:</span> {product.sampleAmount}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
