
import { useDispatch } from 'react-redux';


import { addToCart } from '../../redux/actions/cartAction';

import { Button, ButtonGroup, styled, Typography } from "@mui/material";


const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
`;

const GroupedButton = ({ item }) => {

  
  const dispatch = useDispatch();

  const decreaseOneQuantity = () => {
    if(item.quantity > 1){
        dispatch(addToCart(item.id, item.quantity - 1));    
    }
  };

  const increaseOneQuantity = () => {
    dispatch(addToCart(item.id, item.quantity + 1));
  }

  return (
    <Component>
      <StyledButton style = {{ borderColor: "rgb(135, 135, 135)"}} onClick={decreaseOneQuantity}>-</StyledButton>
      <StyledButton style = {{ color: '#42a5f5', borderColor: "rgb(135, 135, 135)"}} disabled><Typography>{item.quantity}</Typography></StyledButton>
      <StyledButton style = {{ borderColor: "rgb(135, 135, 135)"}} onClick={increaseOneQuantity}>+</StyledButton>
    </Component>
  );
};

export default GroupedButton;
