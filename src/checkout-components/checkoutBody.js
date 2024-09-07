import React from "react";
import { PaymentSummary } from "./components/PaymentSummary";
import { OrderSummary } from "./components/OrderSummary";


export function CheckoutBody(){
  return (
    <div className="main">
      <div className="page-title">Review your order</div>

      <div className="checkout-grid">

        <div className="order-summary">
          <OrderSummary />
        </div>

        <div className="payment-summary">
          <PaymentSummary />
        </div>
      </div>
    </div>
  )
}