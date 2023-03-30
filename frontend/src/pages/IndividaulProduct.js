import React from "react";
import { Paper, Button } from "@mui/material";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../store/slices/CartSlice";
import { products } from "../utilities/constants";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useParams } from "react-router-dom";

const IndividaulProduct = () => {
  // let { productId } = useParams();
  let { productsShow, carts } = useSelector((state) => state.cart);
  // const product = products.find((product) => product.id === productId);

  let dispatch = useDispatch();

  const handleAddToCart = (event, id) => {
    event.stopPropagation();
    const productObj = products.find((product) => product.id === id);
    // console.log(productObj);
    dispatch(addToCart(productObj));
    <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert variant="filled" severity="success">
        Product added to cart!
      </Alert>
    </Stack>;
    toast.success("Product added to cart!", { autoClose: 2000 });
  };

  const handleRemoveFromCart = (event, id) => {
    event.stopPropagation();
    dispatch(removeFromCart(id));
    toast.error("Product removed from cart!", { autoClose: 2000 });
  };

  const findProduct = carts.find((cart) => cart.id === productsShow.id);

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
              Rs. {productsShow.price}
            </div>
            {findProduct ? (
              <div>
                <Button
                  variant="contained"
                  color="success"
                  onClick={(event) =>
                    handleRemoveFromCart(event, productsShow.id)
                  }
                >
                  Remove from cart
                </Button>
                <ToastContainer />
              </div>
            ) : (
              <div>
                <Button
                  variant="contained"
                  onClick={(event) => handleAddToCart(event, productsShow.id)}
                >
                  Add to cart
                </Button>
                <ToastContainer />
              </div>
            )}
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
