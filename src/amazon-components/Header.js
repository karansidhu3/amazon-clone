import React, { useEffect, useState } from "react";
import {cart} from "../data/cart.js"
import "../styles/main-page/amazon-header.css"

export function Header(){
  const [cartQuantity, setCartQuantity] = useState(cart.checkQuantity());

  useEffect(() => {
    // Define the listener callback
    const updateQuantity = (newQuantity) => {
      setCartQuantity(newQuantity);
    };

    // Add the listener to the cart
    cart.addListener(updateQuantity);

    return () => {
      cart.removeListener(updateQuantity);
    };
  }, []);

  return (
    <div className="amazon-header">

      <div className="amazon-header-left-section">
        <a href="amazon" className="header-link">
          <img className="amazon-logo" src="images/amazon-logo-white.png" alt="?"/>
          <img className="amazon-mobile-logo" src="images/amazon-mobile-logo-white.png" alt="?"/>
        </a>
      </div>

      <div className="amazon-header-middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src="images/icons/search-icon.png" alt="?" />
        </button>
      </div>

      <div className="amazon-header-right-section">
        <a className="orders-link header-link" href="orders">
          <span className="returns-text">Returns</span>
          <span className="orders-text">& Orders</span>
        </a>

        <a className="cart-link header-link" href="checkout">
          <img className="cart-icon" src="images/icons/cart-icon.png" alt="?"/>
          <div className="cart-quantity">{cartQuantity}</div>
          <div className="cart-text">Cart</div>
        </a>
      </div>

    </div>
  );
}