import React, {useEffect, useState} from "react";
import { Header } from "../amazon-components/Header.js";
import { orders } from "../data/orders.js";
import { getProduct, loadProductsFetch } from "../data/products.js";
import { cart } from "../data/cart.js";
import "../styles/orders-page/orders.css";

export function Orders() {

  const [loading, setLoading] = useState(true); // State to track whether products are loaded

  useEffect(() => {
    // Load products before rendering
    loadProductsFetch().then(() => {
      setLoading(false); // Set loading to false once products are loaded
    });
  }, []);

  // If still loading, show a loading message or spinner
  if (loading) {
    return <h1>Loading your orders...</h1>;
  }

  const buyAgain = (productId) => {
    cart.addToCart(productId, 1);
  }

  return (
    <div>
      <Header />
      <div className="orders-main">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order, index) => (
            <div className="order-container" key={order.id}>

              <div className="order-header">
                <div className="order-header-left-section">
                  <div className="order-date">
                    <div className="order-header-label">Order Placed:</div>
                    <div>{new Date(order.orderTime).toLocaleDateString()}</div>
                  </div>
                  <div className="order-total">
                    <div className="order-header-label">Total:</div>
                    <div>${(order.totalCostCents / 100).toFixed(2)}</div>
                  </div>
                </div>

                <div className="order-header-right-section">
                  <div className="order-header-label">Order ID:</div>
                  <div>{order.id}</div>
                </div>
              </div>

              <div className="order-details-grid">
                {order.products.map((product, productIndex) => {
                  const prodInfo = getProduct(product.productId);
                  console.log(product)
                  return (
                    <div key={productIndex} className="order-product-item">
                      <div className="orders-product-image-container">
                        <img src={`${prodInfo.image}`} alt={prodInfo.name} />
                      </div>
                      <div className="orders-product-details">
                        <div className="orders-product-name">{prodInfo.name}</div>
                        <div className="orders-product-delivery-date">Arriving on: August 15</div>
                        <div className="orders-product-quantity">Quantity: {product.quantity}</div>
                        <button className="orders-buy-again-button button-primary"  onClick={() => {buyAgain(product.productId)}}>
                          <img className="orders-buy-again-icon" src="images/icons/buy-again.png" />
                          <span className="orders-buy-again-message">
                            Buy it again
                          </span>
                        </button>
                      </div>
                      <div className="orders-product-actions">
                        <a href="tracking">
                          <button className="orders-track-package-button button-secondary">
                            Track package
                          </button>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>


            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
