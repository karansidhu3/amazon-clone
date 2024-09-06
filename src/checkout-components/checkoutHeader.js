import React, {useEffect, useState} from "react";
import {cart} from "../data/cart.js"
import "../styles/checkout/checkout-header.css"

export function CheckoutHeader(){

  const [cartQuantity, setCartQuantity] = useState(cart.checkQuantity());

  useEffect(() => {
    // Define the listener callback
    const updateQuantity = (newQuantity) => {
      setCartQuantity(newQuantity);
    };

    // Add the listener to the cart
    cart.addListener(updateQuantity);

    // Clean up the listener when the component is unmounted
    return () => {
      cart.removeListener(updateQuantity);
    };
  }, []);

  return (
    <div className="checkout-header">
      <div className="header-content">
        <div className="checkout-header-left-section">
          <a href="amazon">
            <img className="amazon-logo" src="images/amazon-logo.png" />
            <img className="amazon-mobile-logo" src="images/amazon-mobile-logo.png" />
          </a>
        </div>

        <div className="checkout-header-middle-section">
          Checkout (<a className="return-to-home-link"
            href="amazon">{cartQuantity} items</a>)
        </div>

        <div className="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png" />
        </div>
      </div>
    </div>
  )
}