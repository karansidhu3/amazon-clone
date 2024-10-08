import React from "react";
import formatCurrency from "../../utils/money";


export function PaymentSummary({ productCosts, shippingCosts, cart, placeOrder }) {

  const totalBeforeTax = productCosts + shippingCosts;
  const estimatedTax = totalBeforeTax * 0.1;
  const orderTotal = totalBeforeTax + estimatedTax;


  return (
    <div>
      <div className="payment-summary-title">
        Order Summary
      </div>

      <div className="payment-summary-row">
        <div>Items ({cart.checkQuantity()}):</div>
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

      <button className="place-order-button button-primary" onClick={() => {placeOrder()}}>
        Place your order
      </button>
    </div>
  )



}