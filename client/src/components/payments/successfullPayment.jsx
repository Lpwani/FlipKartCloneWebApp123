import { Typography, styled } from "@mui/material";

import { useEffect, useState } from "react";

// importing image for folder
import CreditScoreIcon from "@mui/icons-material/CreditScore";

const SuccessImage = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  [theme.breakpoints.up("md")]: {
    width: "60%",
    height: "50vh",
    margin: "1% 20%",
  },
  [theme.breakpoints.down("md")]: {
    height: "50vh",
    width: "92%",
    margin: "5% 3%",
  },
}));

const Greeting = styled(Typography)`
  font-size: 40px;
  color: #62ca67;
  font-weight: 600;
`;

const TextBox = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("md")]: {
    width: "58%",
    margin: "4% 21% 2%",
    textAlign: "justify",
  },
  [theme.breakpoints.down("md")]: {
    width: "88%",
    margin: "2% 5%",
    textContent: "justify",
    display: "flex",
  },
}));

const SuccessMessage = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  fontWeight: 600,
  color: "#818282",
}));

const SuccessfullPayment = () => {
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

    // Clear the timeout if the component is unmounted before the timeout is reached
    return () => clearInterval(Interval);
  }, []); // Empty dependency array ensures useEffect runs only once after initial render

  return (
    <div>
      <SuccessImage>
        <CreditScoreIcon
          style={{ color: "#62ca67", fontSize: 250, display: "block" }}
        />
        <Greeting>Thank You!</Greeting>
        <Typography fontWeight={600} color={"#36454F"} fontSize={"18px"}>
          Payment done Successfully
        </Typography>
      </SuccessImage>
      <TextBox>
        <SuccessMessage>
        This tab will be close in{" "}
          <span style={{ color: "#2874f0" }}>{timeRemaining}</span> seconds. You
          can now close this tab. If you have any further questions or concerns,
          please don't hesitate to contact our support team. Thank you for using
          our service!
        </SuccessMessage>
      </TextBox>
    </div>
  );
};

export default SuccessfullPayment;
