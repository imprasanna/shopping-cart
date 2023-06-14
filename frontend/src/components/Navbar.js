import React from "react";
import { Link } from "react-router-dom";
import { Paper, TextField } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { showShoppingCart } from "../store/slices/CartSlice";
import logo from "../Assets/logo.png"

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 8,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 3px",
  },
}));

const Navbar = () => {
  let dispatch = useDispatch();
  let { cartsCount } = useSelector((state) => state.cart);

  const openShoppingCart = () => {
    dispatch(showShoppingCart());
  };

  return (
    <Paper
      elevation={4}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem",
        paddingLeft: "8rem",
      }}
    >
      <Link to="/" style={{ textDecoration: "none"}}>
        <img width="200px" src={logo} alt="hamro_dokan_logo" />
      </Link>
      <TextField
        id="demo-helper-text-aligned-no-helper"
        label="Search Products"
        sx={{ width: "40%" }}
      ></TextField>
      <div
        style={{ display: "flex", alignItems: "center", paddingRight: "8rem" }}
      >
        <Link to="/cart">
          <IconButton
            onClick={() => {
              openShoppingCart();
            }}
            aria-label="cart"
          >
            <StyledBadge badgeContent={cartsCount} color="success">
              <ShoppingCartIcon sx={{ fontSize: "2.5rem" }} />
            </StyledBadge>
          </IconButton>
        </Link>
        <AccountCircleIcon
          sx={{ color: "grey", fontSize: "2.5rem", marginLeft: "2.5rem" }}
        />
      </div>
    </Paper>
  );
};

export default Navbar;
