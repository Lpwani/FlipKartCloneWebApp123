import { useState, useContext } from "react"; // useState is areact hook in which you can store value...

import { Box, Button, Typography, styled, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { DataContext } from "../../context/DataProvider";

// Components
import LoginDialog from "../login/loginDialog";
import Profile from "./Profile";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: "0 3 0 auto",
  "& > *": {
    marginRight: "40px !important",
    fontSize: 16,
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

const Container = styled(Link)(({ theme }) => ({
  display: "flex",
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    marginTop: "20px",
    marginLeft: "10%",
    padding: "5px 40px 5px 10px",
    color: "#6f6f70",
    background: "#ededf0",
    borderRadius: "5px",
    "& > p": {
      fontSize: "20px",
      fontWeight: "800",
      marginLeft: "10px",
      color: "#2874f0",
    },
  },
  [theme.breakpoints.up("md")]: {
    "& > p": {
      fontWeight: "600",
      marginLeft: "10px",
    },
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  color: "#2874f0",
  background: "#ffffff",
  textTransform: "none",
  padding: "5px 40px",
  borderRadius: 2,
  boxShadow: "none",
  fontWeight: 600,
  height: 32,
  marginLeft: "1%",
  [theme.breakpoints.down("md")]: {
    alignItems: "center",
    background: "#ededf0",
    fontSize: "20px",
    fontWeight: 800,
    marginLeft: "5%",
    marginTop: "10px",
    marginBottom: "10px",
  },
}));

const MenuTypo = styled(Typography)(({ theme }) => ({
  marginTop: 3,
  [theme.breakpoints.down("md")]: {
    alignItems: "justify",
    color: "#afafb3",
    marginTop: 10,
    fontSize: 16,
    fontWeight: 600,
    marginLeft: "10%",
  },
}));

const CustomButtons = () => {
  const [open, setOpen] = useState(false);

  const { account, setAccount } = useContext(DataContext);

  const { cartItems } = useSelector((state) => state.cart);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <LoginButton variant="contained" onClick={openDialog}>
          Login
        </LoginButton>
      )}

      <MenuTypo style={{ width: 135 }}>Become a Seller</MenuTypo>
      <MenuTypo>More</MenuTypo>

      <Container to="./cart">
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCart />
        </Badge>
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
