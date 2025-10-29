"use client";

import { Box, Typography, Grid } from "@mui/material";
import { images } from "../assets/Images/Images";

const products = [
  {
    id: 1,
    name: "FrootFast Box",
    image: images.products,
    price: "₹59",
    description: "Enjoy 5 fruits in every box! A rotating mix of mango, banana, apple, orange, and pineapple — for a delicious balance of vitamins, flavor, and natural energy.",
    ingredients: "Mango, Milk, Sugar, Natural Flavors",
    expiry: "12/2025",
  },
  {
    id: 2,
    name: "FrootFast Box - Premium",
    image: images.products,
    price: "₹89",
    description: "Enjoy 10 fruits in every box! A rotating mix of mango, banana, apple, orange, and pineapple — for a delicious balance of vitamins, flavor, and natural energy.",
    ingredients: "Strawberry, Milk, Sugar, Flavoring",
    expiry: "11/2025",
  },
];

const Products = () => {
  return (
    <>
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
                  padding:"20px",
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
                    background:"var(--primary)",
                    borderRadius:"5px"
                  }}
                />

                <Box sx={{pt:2 }}>
                  <Typography
                    variant="h6"
                    sx={{ fontFamily: "Bold_M", mb: 1, fontSize: "18px" }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "var(--secondary)", fontFamily: "Medium_M",fontSize:"20px" }}
                  >
                    {product.price}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      mb: 1,
                      color: "var(--text)",
                      fontFamily: "Medium_M",
                      lineHeight: 1.4,
                      pt:"10px !important",
                    }}
                  >
                    {product.description}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "13px", color: "var(--text)",fontFamily:"Medium_M","span":{color:"var(--secondary)"} }}
                  >
                    <span >Ingredients:</span> {product.ingredients}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: "13px", color: "var(--text)",fontFamily:"Medium_M","span":{color:"var(--secondary)"} }}
                  >
                    <span>Expiry:</span> {product.expiry}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Products;
