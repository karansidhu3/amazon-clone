import React, { useState, useEffect } from "react";
import { PaymentSummary } from "./components/PaymentSummary";
import { OrderSummary } from "./components/OrderSummary";
import { cart } from "../data/cart";
import { getProduct, loadProductsFetch } from "../data/products";
import { getDeliveryOption } from "../data/deliveryOptions";
import "../styles/checkout/checkout.css";



export function CheckoutBody(){

  const [cartList, setCartList] = useState([]);
  const [productCosts, setProductCosts] = useState(0);
  const [shippingCosts, setShippingCosts] = useState(0);
  const [isEditing, setIsEditing] = useState({});
  const [amount, setAmount] = useState({});

  // Load cart items on mount
  useEffect(() => {
    loadProductsFetch().then(() => {
      setCartList(cart.cartItems);
      calculateProductCosts();
      calculateShippingCosts();

      const initialAmounts = {};
      cart.cartItems.forEach((cartItem) => {
        initialAmounts[cartItem.productId] = cartItem.quantity;
      });
      setAmount(initialAmounts);
    });
  }, []);

  const handleButtonClick = (productId) => {
    setIsEditing((prevIsEditing) => ({
      ...prevIsEditing,
      [productId]: !prevIsEditing[productId],
    }));
    if (isEditing[productId]) {
      updateProductQuantity(productId, amount[productId]);
    }
  };

  const handleInputChange = (productId, newAmount) => {
    setAmount((prevAmounts) => ({
      ...prevAmounts,
      [productId]: newAmount,
    }));
  };

  const updateProductQuantity = (productId, newQuantity) => {
    cart.updateQuantity(productId, parseInt(newQuantity, 10));
    setCartList(cart.cartItems);
    calculateProductCosts();
  };

  // Function to handle delivery option change
  const handleDeliveryOptionChange = (productId, optionId) => {
    cart.updateDeliveryOption(productId, optionId);
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

  console.log(cart.cartItems);

  return (
    <div className="checkout-main">
      <div className="page-title">Review your order</div>

      <div className="checkout-grid">

        <div className="order-summary">
          <OrderSummary 
            cartList={cartList}
            handleDeliveryOptionChange={handleDeliveryOptionChange} 
            deleteProduct={deleteProduct}
            isEditing={isEditing}
            amount={amount}
            handleButtonClick={handleButtonClick}
            handleInputChange={handleInputChange}
          />
        </div>

        <div className="payment-summary">
          <PaymentSummary 
            productCosts={productCosts} 
            shippingCosts={shippingCosts} 
            cart={cart}
          />
        </div>
      </div>
    </div>
  )
}