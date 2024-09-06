import React from "react";
import "../styles/main-page/amazon-header.css"

export function Header(){
  return (
    <div className="amazon-header">

      <div className="amazon-header-left-section">
        <a href="amazon.html" className="header-link">
          <img className="amazon-logo" src="images/amazon-logo-white.png" />
          <img className="amazon-mobile-logo" src="images/amazon-mobile-logo-white.png" />
        </a>
      </div>

      <div className="amazon-header-middle-section">
        <input className="search-bar" type="text" placeholder="Search" />

        <button className="search-button">
          <img className="search-icon" src="images/icons/search-icon.png" />
        </button>
      </div>

      <div className="amazon-header-right-section">
        <a className="orders-link header-link" href="orders.html">
          <span className="returns-text">Returns</span>
          <span className="orders-text">& Orders</span>
        </a>

        <a className="cart-link header-link" href="checkout.html">
          <img className="cart-icon" src="images/icons/cart-icon.png" />
          <div className="cart-quantity js-cart-quantity">0</div>
          <div className="cart-text">Cart</div>
        </a>
      </div>

    </div>
  );
}