import express from 'express';

import { userSignup, userLogin } from '../controller/user-controller.js';
import { getProducts, getProductById} from '../controller/product-controller.js';

// import for payment integration
import { checkoutSession } from '../controller/payment-controller.js';

const router = express.Router();


router.post('/signup', userSignup);
router.post('/login', userLogin);
router.post("/api/create-checkout-session", checkoutSession);

router.get('/products', getProducts);
router.get('/product/:id', getProductById);



export default router;