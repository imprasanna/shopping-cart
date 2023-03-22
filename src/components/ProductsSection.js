import React from "react";
import "../products.css";
import { Typography } from "@mui/material";
import styled from "styled-components";
import Products from "./Products";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProductsSection = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography mt={3} variant="h3">
        Explore Our Products
      </Typography>
      <Wrapper>
        <Products />
        <Link
          style={{
            textDecoration: "none",
            color: "#108ee9",
            display: "flex",
            justifyContent: "center",
            marginTop: "2rem",
          }}
          to="/products"
        >
          <Btn>
            <span>View All Products</span>
            <ArrowForwardIcon />
          </Btn>
        </Link>
      </Wrapper>
    </div>
  );
};

export default ProductsSection;

const Wrapper = styled.section`
  background-color: #d3d3e4;
  width: 80vw;
  margin: 0 atuo;
  margin-top: 2rem;
  padding: 5rem;
  border-radius: 10px;
  margin-bottom: 3rem;
`;

const Btn = styled.section`
  display: flex;
  align-items: center;
  border: 1px solid;
  border-radius: 50px;
  padding: 10px;
  padding-left: 40px;
  padding-right: 40px;

  span {
    margin-right: 5px;
  }

  &:hover {
    background-color: green;
    color: white;
    border: 1px solid green;
  }
`;
