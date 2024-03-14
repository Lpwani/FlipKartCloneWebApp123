// for Payment Integration
import stripe from "stripe";
import dotenv from 'dotenv';   

dotenv.config(); 

const SECONDARYKEY = ` ${process.env.PAYMENT_SECONDARY_KEY}`;

const stripeGateway = stripe(
  SECONDARYKEY
);

export const checkoutSession = async (req, res) => {
  const product = req.body;

  const deliveryCharge = 40 * 100;

  const lineItems = product.products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.title.shortTitle,
      },
      unit_amount: product.price.cost * 100,
    },
    quantity: product.quantity,
  }));

  lineItems.push({
    price_data: {
      currency: "inr",
      product_data: {
        name: "Delivery Charge",
      },
      unit_amount: deliveryCharge,
    },
    quantity: 1, // Assuming only one delivery charge
  });

  const session = await stripeGateway.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/cart/success",
    cancel_url: "http://localhost:3000/cart/cancel",
  });

  //   res.json({ id: session.id });
  res.json({ checkout_url: session.url });
};
