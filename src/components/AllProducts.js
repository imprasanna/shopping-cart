import React, { useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { products } from "../utilities/constants";
import ProductDetails from "./ProductDetails";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { showProductDetails } from "../store/slices/CartSlice";

const AllProducts = () => {
  let dispatch = useDispatch();

  const itemsPerPage = 8;
  const totalPages = Math.ceil(products.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [hoverItemId, setHoveredItemId] = useState(null);

  let firstSliceIndex = (currentPage - 1) * itemsPerPage;
  let lastSliceIndex = currentPage * itemsPerPage;

  const elevateBox = (productId) => {
    setHoveredItemId(productId);
  };

  const lowerBox = () => {
    setHoveredItemId(null);
  };

  const handleChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleProductOpen = (id) => {
    const foundProduct = products.find((product) => product.id === id);
    // console.log(foundProduct);
    dispatch(showProductDetails(foundProduct));
  };
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          // spacing={2}
          spacing={{ xs: 6, md: 3 }}
          columns={{ xs: 3, sm: 10, md: 12 }}
        >
          {products.slice(firstSliceIndex, lastSliceIndex).map((product) => {
            return (
              <Grid xs={3} item>
                <Link
                  to={`/products/${product.id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Paper
                    key={product.id}
                    onClick={() => handleProductOpen(product.id)}
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
      <Stack
        spacing={2}
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          marginTop: "3rem",
        }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          color="secondary"
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default AllProducts;
