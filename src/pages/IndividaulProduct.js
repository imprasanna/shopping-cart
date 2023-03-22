import React from "react";
import { Paper, Button } from "@mui/material";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/CartSlice";
import { useParams } from "react-router-dom";

const IndividaulProduct = () => {
  let { productId } = useParams();
  let { productsShow } = useSelector((state) => state.cart);
  // const product = products.find((product) => product.id === productId);

  let dispatch = useDispatch();

  const handleAddToCart = (event, id, name, image, price) => {
    event.stopPropagation();
    // const productKey = carts.find((cart) => cart.id === id);
    // console.log(productKey);
    if (productsShow) {
      alert("Item already present!");
    } else {
      dispatch(addToCart([id, name, image, price]));
    }
  };

  return (
    <Wrapper>
      <Paper elevation={3} sx={{ width: "50%", padding: "2rem" }}>
        <div style={{ display: "flex" }}>
          <img src={productsShow.img} alt="" style={{ width: "300px" }} />
          <div
            style={{
              marginLeft: "2rem",
              position: "relative",
              top: "3rem",
            }}
          >
            <div
              style={{
                textAlign: "left",
                color: "#108ee9",
                cursor: "pointer",
                marginBottom: "1rem",
              }}
            >
              {productsShow.name}
            </div>
            <div
              style={{
                color: "#f57224",
                fontSize: "1.8rem",
                marginBottom: "1rem",
              }}
            >
              {productsShow.price}
            </div>
            <Button
              variant="contained"
              onClick={(event, products) =>
                handleAddToCart(
                  event,
                  products.id,
                  products.name,
                  products.img,
                  products.price
                )
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
      </Paper>
    </Wrapper>
  );
};

export default IndividaulProduct;

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;
