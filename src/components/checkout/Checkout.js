import React, { useEffect } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import './checkout.css'
import { DataCtx } from "../context/Context";

const steps = ['Shipping address', 'Review your order'];
// const steps = ['Shipping address', 'Payment details', 'Review your order'];

export default function Checkout() {
  const [userData, setUserDataParent] = React.useState([])
  const [activeStep, setActiveStep] = React.useState(0);
  const [dataOk, setDataOk] = React.useState(false)

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm setUserDataParent = {setUserDataParent}/>;
      // case 1:
      //   return <PaymentForm />;
      case 1:
        return <Review userData = {userData}/>;
      default:
        throw new Error('Unknown step');
    }
  }
  const moveNext = (e) => {
    if(Object.values(userData)[0] && Object.values(userData)[1] && Object.values(userData)[2] && Object.values(userData)[3] && Object.values(userData)[4] == true){
      setDataOk(true)
    }
  }
  const buttonDis = (e) => {
    console.log(dataOk);
    if(dataOk) {
      handleNext(); 
    }
  }
  React.useEffect(() => {
    if(Object.values(userData)[0] && Object.values(userData)[1] && Object.values(userData)[2] && Object.values(userData)[3] && Object.values(userData)[4] == true ) moveNext(); 
  }, [userData])
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </>
          ) : (
            <>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={e => {buttonDis(e)}}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </>
          )}
        </Paper>
      </Container>
    </>
  );
}
