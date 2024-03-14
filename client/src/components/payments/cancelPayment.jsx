import { Typography, styled } from "@mui/material";

import { useEffect, useState } from "react";

// importing image for folder
import CancelPaymentImage from "../../images/paymentCancel.jpg";

const CancelImage = styled("img")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    width: "60%",
    height: "80vh",
    margin: "1% 20%",
  },
  [theme.breakpoints.down("md")]: {
    height: "60vh",
    width: "94%",
    margin: "5% 3%",
  },
}));

const TextBox = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    width: "58%",
    margin: "1% 21%",
    textAlign: "justify",
  },
  [theme.breakpoints.down("md")]: {
    width: "90%",
    margin: "0% 5%",
    textContent: "justify",
    display: "flex",
  },
}));

const CancelMessage = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  fontWeight: 600,
  color: "#818282",
}));

const CancelPayment = () => {
  const [timeRemaining, setTimeRemaining] = useState(10);
  // Use useEffect to execute code after component has been rendered
  useEffect(() => {
    const Interval = setInterval(() => {
      setTimeRemaining((prevTime) => {
        if (prevTime === 1) {
          clearInterval(Interval);
          window.close();
        }
        return prevTime - 1;
      });
    }, 1000);

    // Clear the interval if the component is unmounted before the interval is reached
    return () => clearInterval(Interval);
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <div>
      <CancelImage src={CancelPaymentImage} alt="PaymentcancelImg" />
      <TextBox>
        <CancelMessage>
          Your payment has been successfully canceled. This tab will be close in{" "}
          <span style={{ color: "#2874f0" }}>{timeRemaining}</span> seconds. You
          can now close this tab. If you have any further questions or concerns,
          please don't hesitate to contact our support team. Thank you for using
          our service!
        </CancelMessage>
      </TextBox>
    </div>
  );
};

export default CancelPayment;
