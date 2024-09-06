import formatCurrency from "../utils/money.js";

export function getProduct(productId){
  let matchingItem;
  
  products.forEach((productItem) => {
    if(productId === productItem.id){
      matchingItem = productItem;
    }
  });

  return matchingItem
}

class Product{
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails){
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getStarsUrl(){
    return `images/ratings/rating-${this.rating.stars * 10}.png`
  }

  getPrice(){
    return `$${formatCurrency(this.priceCents)}`;
  }

  extraInfoHTML(){
    return '';
  }
}

class Clothing extends Product{
  sizeChartLink;

  constructor(productDetails){
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }

  extraInfoHTML(){
    return `
      <a href="${this.sizeChartLink}" target="_blank">
        Size chart
      </a>
    `;
  }
}

export let products = [];

export function loadProductsFetch(){ // gets product info from backend and loads it into products variable
  const promise = fetch('https://supersimplebackend.dev/products')
    .then((response) => response.json())
    .then((productsData) => {
      products = productsData.map((productDetails) => {
        if(productDetails.type === 'clothing'){ // decides which products are used for clothing class
          return new Clothing(productDetails);
        }
        return new Product(productDetails);
      });
      console.log('load products')
    })
    .catch(() => {
      console.log('Unexpected error, Please try again later.');
    });

  return promise; // returns promise to indicated the caller that it can move to the next step
}

