import React, { useState, useEffect } from "react";
import { PaymentSummary } from "./components/PaymentSummary";
import { OrderSummary } from "./components/OrderSummary";
import { cart } from "../data/cart";
import { getProduct, loadProductsFetch } from "../data/products";
import { getDeliveryOption } from "../data/deliveryOptions";
import "../styles/checkout/checkout.css";
import formatCurrency from "../utils/money";



export function CheckoutBody(){

  const [cartList, setCartList] = useState([]);
  const [selectedDeliveryOptions, setSelectedDeliveryOptions] = useState({});
  const [productCosts, setProductCosts] = useState(0);
  const [shippingCosts, setShippingCosts] = useState(0);

  // Load cart items on mount
  useEffect(() => {
    loadProductsFetch().then(() => {
      setCartList(cart.cartItems);
      calculateProductCosts();
      calculateShippingCosts();
    });
  }, []);

  // Function to handle delivery option change
  const handleDeliveryOptionChange = (productId, optionId) => {
    cart.updateDeliveryOption(productId, optionId);
    setSelectedDeliveryOptions((prevOptions) => ({
      ...prevOptions,
      [productId]: optionId,
    }));
    calculateShippingCosts();
  };

  const deleteProduct = (productId) => {
    cart.removeFromCart(productId);
    setCartList(cart.cartItems);
    calculateShippingCosts();
    calculateProductCosts();
  }

  // Function to calculate product costs
  const calculateProductCosts = () => {
    let totalProductCost = 0;
    cart.cartItems.forEach((cartItem) => {
      const product = getProduct(cartItem.productId);
      totalProductCost += product.priceCents * cartItem.quantity;
    });
    setProductCosts(totalProductCost);
  };

  // Function to calculate shipping costs
  const calculateShippingCosts = () => {
    let totalShippingCost = 0;
    cart.cartItems.forEach((cartItem) => {
      const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
      totalShippingCost += deliveryOption.priceCents;
    });
    setShippingCosts(totalShippingCost);
  };

  return (
    <div className="checkout-main">
      <div className="page-title">Review your order</div>

      <div className="checkout-grid">

        <div className="order-summary">
          <OrderSummary 
            cartList={cartList} 
            selectedDeliveryOptions={selectedDeliveryOptions} 
            handleDeliveryOptionChange={handleDeliveryOptionChange} 
            deleteProduct={deleteProduct}
          />
        </div>

        <div className="payment-summary">
          <PaymentSummary 
            productCosts={productCosts} 
            shippingCosts={shippingCosts} 
          />
        </div>
      </div>
    </div>
  )
}