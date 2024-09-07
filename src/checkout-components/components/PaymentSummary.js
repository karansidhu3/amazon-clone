import React from "react";
import { cart } from "../../data/cart";
import { getProduct } from "../../data/products";
import { getDeliveryOption } from "../../data/deliveryOptions";
import formatCurrency from "../../utils/money";


export function PaymentSummary() {
  


  return (
    <div>
      <div className="payment-summary-title">
        Order Summary
      </div>

      <div className="payment-summary-row">
        <div>Items (3):</div>
        <div className="payment-summary-money">$${12}</div>
      </div>

      <div className="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div className="payment-summary-money">$${76}</div>
      </div>

      <div className="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div className="payment-summary-money">$${64}</div>
      </div>

      <div className="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div className="payment-summary-money">$${45}</div>
      </div>

      <div className="payment-summary-row total-row">
        <div>Order total:</div>
        <div className="payment-summary-money">$${75}</div>
      </div>

      <button className="place-order-button button-primary
      js-place-order">
        Place your order
      </button>
    </div>
  )



}