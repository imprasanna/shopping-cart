import React from "react";
import { Paper, Button } from "@mui/material";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../store/slices/CartSlice";

const IndividaulProduct = () => {
  let { carts } = useSelector((state) => state.product.cart);
  let { cartShow } = useSelector((state) => state.product.cart);

  let dispatch = useDispatch();

  // const data = useSelector((state) => {
  //   return state.products;
  // });

  // const findProduct = products.find((product) => product.id === productId);

  // console.log(findProduct);

  const handleAddToCart = (event, id, name, image, price) => {
    event.stopPropagation();
    const productKey = carts.find((cart) => cart.id === id);
    console.log(productKey);
    if (productKey) {
      alert("Item already present!");
    } else {
      dispatch(
        addToCart((id, name, image, price) => {
          return [id, name, image, price];
        })
      );
    }
  };

  // console.log(data);
  return (
    <Wrapper>
      <Paper elevation={3} sx={{ width: "50%", padding: "2rem" }}>
        <div style={{ display: "flex" }}>
          <img src={cartShow.img} alt="" style={{ width: "300px" }} />
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
              {cartShow.name}
            </div>
            <div
              style={{
                color: "#f57224",
                fontSize: "1.8rem",
                marginBottom: "1rem",
              }}
            >
              {cartShow.price}
            </div>
            <Button
              variant="contained"
              onClick={(event) =>
                handleAddToCart(
                  event,
                  cartShow.id,
                  cartShow.name,
                  cartShow.img,
                  cartShow.price
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
