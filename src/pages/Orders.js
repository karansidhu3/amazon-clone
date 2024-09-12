import React from "react";
import {Header} from "../amazon-components/Header.js"
import "../styles/orders-page/orders.css"


export function Orders(){ 
  return (
    <div>
      <Header />
      <div>
        <div className="orders-grid">
          <div className="order-container">
            
            <div className="order-header">
              <div className="order-header-left-section">
                <div className="order-date">
                  <div className="order-header-label">Order Placed:</div>
                  <div>August 12</div>
                </div>
                <div className="order-total">
                  <div className="order-header-label">Total:</div>
                  <div>$35.06</div>
                </div>
              </div>

              <div className="order-header-right-section">
                <div className="order-header-label">Order ID:</div>
                <div>27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
              </div>
            </div>

            <div className="order-details-grid">
              <div className="orders-product-image-container">
                <img src="images/products/athletic-cotton-socks-6-pairs.jpg" />
              </div>

              <div className="orders-product-details">
                <div className="orders-product-name">
                  Black and Gray Athletic Cotton Socks - 6 Pairs
                </div>
                <div className="orders-product-delivery-date">
                  Arriving on: August 15
                </div>
                <div className="orders-product-quantity">
                  Quantity: 1
                </div>
                <button className="orders-buy-again-button button-primary">
                  <img className="orders-buy-again-icon" src="images/icons/buy-again.png" />
                  <span className="orders-buy-again-message">Buy it again</span>
                </button>
              </div>

              <div className="orders-product-actions">
                <a href="tracking.html">
                  <button className="orders-track-package-button button-secondary">
                    Track package
                  </button>
                </a>
              </div>

              <div className="orders-product-image-container">
                <img src="images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg" />
              </div>

              <div className="orders-product-details">
                <div className="orders-product-name">
                  Adults Plain Cotton T-Shirt - 2 Pack
                </div>
                <div className="orders-product-delivery-date">
                  Arriving on: August 19
                </div>
                <div className="orders-product-quantity">
                  Quantity: 2
                </div>
                <button className="orders-buy-again-button button-primary">
                  <img className="orders-buy-again-icon" src="images/icons/buy-again.png" />
                  <span className="orders-buy-again-message">Buy it again</span>
                </button>
              </div>

              <div className="orders-product-actions">
                <a href="tracking.html">
                  <button className="orders-track-package-button button-secondary">
                    Track package
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}