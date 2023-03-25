import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/slices/CartSlice";
import { Link } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const Cart = () => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cart);

  const cartsItemNumber = carts.length;

  const totalAmount = carts.reduce((acc, cart) => {
    return (acc += parseInt(cart.price));
  }, 0);

  const handleRemoveProduct = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <>
      {cartsItemNumber !== 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">S.N.</StyledTableCell>
                <StyledTableCell align="center">Product</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
                <StyledTableCell align="right"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {carts.map((cart, i) => (
                <StyledTableRow key={cart.id}>
                  <StyledTableCell align="left">{i + 1}</StyledTableCell>
                  <StyledTableCell
                    sx={{ display: "flex", alignItems: "center" }}
                    component="th"
                    scope="row"
                  >
                    <img src={cart.img} alt="" width="50px" />
                    <div style={{ marginLeft: "2rem" }}>{cart.name}</div>
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Rs. {cart.price}
                  </StyledTableCell>
                  {/* <StyledTableCell align="right">{}</StyledTableCell> */}
                  <StyledTableCell align="right">
                    <Button
                      onClick={() => {
                        handleRemoveProduct(cart.id);
                      }}
                      variant="contained"
                      color="success"
                    >
                      ×
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
          <Table>
            <TableRow
              sx={{ background: "#5e4c4c", color: "white", fontSize: "1.3rem" }}
            >
              <StyledTableCell align="left"></StyledTableCell>
              <StyledTableCell align="right">Total</StyledTableCell>
              <StyledTableCell
                sx={{ width: "50%", paddingLeft: "1rem" }}
                align="right"
              >
                Rs. {totalAmount}
              </StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
            </TableRow>
          </Table>
        </TableContainer>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4">No items added to cart!!</Typography>

          <br />

          <Link style={{ textDecoration: "none" }} to="/products">
            <Button variant="contained" color="primary">
              Return to shop
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Cart;
