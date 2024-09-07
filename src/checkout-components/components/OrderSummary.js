import React, { useState, useEffect } from "react";
import { cart } from "../../data/cart.js";
import { getProduct, loadProductsFetch } from "../../data/products.js";
import formatCurrency from "../../utils/money";
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export function OrderSummary() {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    loadProductsFetch()
      .then(() => {
        setCartList(cart.cartItems);
      });
  }, []);

  return (
    <div>
      {cartList.map((cartItem) => {
        const productId = cartItem.productId;
        const matchingProduct = getProduct(productId);
        console.log(matchingProduct);

        const deliveryOptionId = cartItem.deliveryOptionId;
        const deliveryOption = getDeliveryOption(deliveryOptionId);

        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
        const dateString = deliveryDate.format('dddd, MMMM D');

        return (
          <div key={productId} className="cart-item-container">
            <div className="delivery-date">
              Delivery date: {dateString}
            </div>

            <div className="cart-item-details-grid">
              <img className="product-image" src={matchingProduct.image} alt={matchingProduct.name} />

              <div className="cart-item-details">
                <div className="product-name">
                  {matchingProduct.name}
                </div>
                <div className="product-price">
                  {formatCurrency(matchingProduct.priceCents)}
                </div>
                <div className={`product-quantity js-product-quantity-${matchingProduct.id}`}>
                  <div className={`update-container js-update-container-${matchingProduct.id}`}>
                    <span>
                      Quantity: <span className={`quantity-label js-quantity-label-${matchingProduct.id}`}>{cartItem.quantity}</span>
                    </span>
                    <span className={`update-quantity-link link-primary js-update-quantity js-update-quantity-${matchingProduct.id}`}
                      data-product-id={matchingProduct.id}
                      data-cart-item-quantity={cartItem.quantity}>
                      Update
                    </span>
                  </div>
                  <span className={`delete-quantity-link link-primary js-delete-link js-delete-link-${matchingProduct.id}`}
                    data-product-id={matchingProduct.id}>
                    Delete
                  </span>
                </div>
              </div>

              <div className="delivery-options">
                <div className="delivery-options-title">
                  Choose a delivery option:
                </div>
                <div>
                  {deliveryOptions.map((deliveryOption) => {
                    const today = dayjs();
                    const deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
                    const dateString = deliveryDate.format('dddd, MMMM D');
                    const priceString = deliveryOption.priceCents === 0 ? 'FREE Shipping' : `$${formatCurrency(deliveryOption.priceCents)} - Shipping`;

                    return(
                      <div className="delivery-option">
                      <input 
                        type="radio"
                        className="delivery-option-input"
                        name="delivery-option-${matchingItem.id}" 
                      />
                      <div>
                        <div className="delivery-option-date">
                          {dateString}
                        </div>
                        <div className="delivery-option-price">
                          {priceString}
                        </div>
                      </div>
                    </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
