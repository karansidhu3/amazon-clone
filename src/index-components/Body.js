import React, { useEffect, useState } from "react";
import { products, loadProductsFetch } from '../data/products.js';
import "../styles/main-page/amazon.css";

export function Body() {
  // State to store the products
  const [productList, setProductList] = useState([]);

  // Fetch the products when the component mounts
  useEffect(() => {
    loadProductsFetch()
      .then(() => {
        setProductList(products);
      });
  }, []); // Empty dependency array means this runs only once on mount

  return (
    <div className="main">
      <div className="products-grid">
        {productList.map((product) => ( // loop through the list of products
          <div className="product-container" key={product.id}>
            <div className="product-image-container">
              <img className="product-image" src={product.image} alt={product.name} />
            </div>

            <div className="product-name limit-text-to-2-lines">
              {product.name}
            </div>

            <div className="product-rating-container">
              <img className="product-rating-stars" src={product.getStarsUrl()} alt="Rating" />
              <div className="product-rating-count link-primary">
                {product.rating.count}
              </div>
            </div>

            <div className="product-price">
              {product.getPrice()}
            </div>

            <div className="product-quantity-container">
              <select defaultValue="1">
                {[...Array(10)].map((_, index) => (
                  <option key={index} value={index + 1}>{index + 1}</option>
                ))}
              </select>
            </div>

            <div dangerouslySetInnerHTML={{ __html: product.extraInfoHTML() }}></div>

            <div className="product-spacer"></div>

            <div className="added-to-cart">
              <img src="images/icons/checkmark.png" alt="Added to cart" />
              Added
            </div>

            <button className="add-to-cart-button button-primary js-add-to-cart" data-product-id={product.id}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}