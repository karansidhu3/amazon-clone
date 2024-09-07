import React from "react";
import { CheckoutHeader } from "../checkout-components/checkoutHeader.js";
import { CheckoutBody } from "../checkout-components/checkoutBody.js";
import "../styles/checkout/checkout.css"

export function Checkout(){
  return (
    <div>
      <CheckoutHeader />
      <CheckoutBody />
    </div>
  )
}