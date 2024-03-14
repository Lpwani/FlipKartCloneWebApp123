import { Typography, Box, styled } from "@mui/material";

const Component = styled(Box)(({ theme }) => ({
  display: "grid",
  placeItems: "center",
  [theme.breakpoints.up("sm")]: {
    height: "64vh",
    width: "80%",
    background: "#fff",
    margin: "80px 10%",
  },
  [theme.breakpoints.down("sm")]: {
    height: "64vh",
    width: "80%",
    background: "#fff",
    margin: "80px 10%",
  },
}));

const EmptyCartImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    height: "30vh",
  },
}));

const Container = styled(Box)`
  text-align: center;
  & > p {
    font-size: 20px;
    font-weight: 500;
  }
`;

const EmptyCart = () => {
  const imgUrl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  return (
    <Component>
      <Container>
        <EmptyCartImage src={imgUrl} alt="empty" style={{ width: "30vh" }} />
        <Typography>Your cart is empty!</Typography>
        <Typography>Add items to it now</Typography>
      </Container>
    </Component>
  );
};

export default EmptyCart;
