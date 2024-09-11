import React from "react";
import { getProduct } from "../../data/products.js";
import formatCurrency from "../../utils/money";
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions";
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

export function OrderSummary({ cartList, handleDeliveryOptionChange, deleteProduct, isEditing, amount, handleButtonClick, handleInputChange }) {

  return (
    <div>
      {cartList.map((cartItem) => {
        const productId = cartItem.productId;
        const matchingProduct = getProduct(productId);

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
              <img className="checkout-product-image" src={matchingProduct.image} alt={matchingProduct.name} />

              <div className="cart-item-details">
                <div className="checkout-product-name">
                  {matchingProduct.name}
                </div>
                <div className="checkout-product-price">
                  {matchingProduct.getPrice()}
                </div>
                <div className={`product-quantity`}>
                  <div className="update-container">
                    <span>
                      Quantity:{" "}
                      {isEditing[productId] ? (
                        <input 
                          className="input-box"
                          type="number" 
                          value={amount[productId]} 
                          onChange={(e) => handleInputChange(productId, e.target.value)} 
                        />
                      ) : (
                        <span>{cartItem.quantity}</span>
                      )}
                    </span>
                    <span 
                      className="update-quantity-link link-primary" 
                      onClick={() => handleButtonClick(productId)}
                    >
                      {isEditing[productId] ? "Save" : "Update"}
                    </span>
                  </div>
                  <span className={`delete-quantity-link link-primary`} onClick={() => {deleteProduct(matchingProduct.id)}}>
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

                    return (
                      <div key={deliveryOption.id} className="delivery-option">
                        <input 
                          type="radio"
                          className="delivery-option-input"
                          name={`delivery-option-${productId}`} // Ensure radio inputs are grouped by product
                          id={`delivery-option-${productId}-${deliveryOption.id}`}
                          value={deliveryOption.id}
                          checked={deliveryOptionId === deliveryOption.id}
                          onChange={() => handleDeliveryOptionChange(productId, deliveryOption.id)}
                        />
                        <label htmlFor={`delivery-option-${productId}-${deliveryOption.id}`}>
                          <div className="delivery-option-date">
                            {dateString}
                          </div>
                          <div className="delivery-option-price">
                            {priceString}
                          </div>
                        </label>
                      </div>
                    );
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
