import React, {useState, useEffect} from "react";
import { cart } from "../../data/cart";
import { getProduct } from "../../data/products";
import { getDeliveryOption } from "../../data/deliveryOptions";
import formatCurrency from "../../utils/money";


export function PaymentSummary({ productCosts, shippingCosts }) {

  const totalBeforeTax = productCosts + shippingCosts;
  const estimatedTax = totalBeforeTax * 0.1;
  const orderTotal = totalBeforeTax + estimatedTax;


  return (
    <div>
      <div className="payment-summary-title">
        Order Summary
      </div>

      <div className="payment-summary-row">
        <div>Items (3):</div>
        <div className="payment-summary-money">${formatCurrency(productCosts)}</div>
      </div>

      <div className="payment-summary-row">
        <div>Shipping &amp; handling:</div>
        <div className="payment-summary-money">${formatCurrency(shippingCosts)}</div>
      </div>

      <div className="payment-summary-row subtotal-row">
        <div>Total before tax:</div>
        <div className="payment-summary-money">${formatCurrency(totalBeforeTax)}</div>
      </div>

      <div className="payment-summary-row">
        <div>Estimated tax (10%):</div>
        <div className="payment-summary-money">${formatCurrency(estimatedTax)}</div>
      </div>

      <div className="payment-summary-row total-row">
        <div>Order total:</div>
        <div className="payment-summary-money">${formatCurrency(orderTotal)}</div>
      </div>

      <button className="place-order-button button-primary">
        Place your order
      </button>
    </div>
  )



}