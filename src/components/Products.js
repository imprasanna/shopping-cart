import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { products } from "../utilities/constants";
import ProductDetails from "./ProductDetails";
import { Link } from "react-router-dom";

const Products = () => {
  const [hoverItemId, setHoveredItemId] = useState(null);

  const elevateBox = (productId) => {
    setHoveredItemId(productId);
  };

  const lowerBox = () => {
    setHoveredItemId(null);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {products.slice(0, 8).map((product) => {
            return (
              <Grid xs={3} item key={product.id}>
                <Link
                  to={`/products/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Paper
                    sx={{ padding: "10px", minHeight: "400px" }}
                    elevation={hoverItemId === product.id ? 6 : 0}
                    onMouseEnter={() => elevateBox(product.id)}
                    onMouseLeave={lowerBox}
                  >
                    <ProductDetails
                      id={product.id}
                      name={product.name}
                      image={product.img}
                      price={product.price}
                    />
                  </Paper>
                </Link>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </div>
  );
};

export default Products;
