import React from "react";
import "../products.css";
import styled from "styled-components";
import AllProducts from "../components/AllProducts";

const ProductsViewPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Wrapper>
        <AllProducts />
      </Wrapper>
    </div>
  );
};

export default ProductsViewPage;

const Wrapper = styled.section`
  background-color: #d3d3e4;
  width: 80vw;
  margin: 0 atuo;
  margin-top: 2rem;
  padding: 5rem;
  border-radius: 10px;
  margin-bottom: 3rem;
`;
