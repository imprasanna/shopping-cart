import React from "react";
import { Link } from "react-router-dom";
import { Paper, TextField, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { useSelector } from "react-redux";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 8,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 3px",
  },
}));

const Navbar = () => {
  let { cartsCount } = useSelector((state) => state.cart);

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
      <Link to="/" style={{ textDecoration: "none", color: "#4ec94e" }}>
        <Typography
          variant="h4"
          sx={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          <strong>Hamro </strong>
          <span
            style={{
              color: "#9393da",
            }}
          >
            दोकान
          </span>
        </Typography>
      </Link>
      <TextField
        id="demo-helper-text-aligned-no-helper"
        label="Search Products"
        sx={{ width: "40%" }}
      ></TextField>
      <div
        style={{ display: "flex", alignItems: "center", paddingRight: "8rem" }}
      >
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={cartsCount} color="success">
            <ShoppingCartIcon sx={{ fontSize: "2.5rem" }} />
          </StyledBadge>
        </IconButton>
        <AccountCircleIcon
          sx={{ color: "grey", fontSize: "2.5rem", marginLeft: "2.5rem" }}
        />
      </div>
    </Paper>
  );
};

export default Navbar;
