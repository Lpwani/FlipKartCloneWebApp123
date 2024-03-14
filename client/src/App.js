
// components
import Header from './components/header/header';
import Home from './components/home/Home';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';
import SuccessfullPayment from './components/payments/successfullPayment';
import CancelPayment from './components/payments/cancelPayment';


import DataProvider from './context/DataProvider';

import {Box} from '@mui/material';

import { BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </DataProvider>
  );
}

function AppRoutes() {
  const location = useLocation();
  const isCartSuccessCancelRoute = location.pathname === '/cart/success' || location.pathname === '/cart/cancel';

  return (
    <>
      {!isCartSuccessCancelRoute && <Header />}
      <Box style={{ marginTop: isCartSuccessCancelRoute ? 0 : 54 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<DetailView />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/success" element={<SuccessfullPayment />} />
          <Route path="/cart/cancel" element={<CancelPayment />} />
        </Routes>
      </Box>
    </>
  );
}


export default App;
