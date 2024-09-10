class Cart{
  cartItems;
  #localStorageKey;
  #listeners = [];

  constructor(localStorageKey){
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }

  #loadFromStorage(){ // created to simplify loading saved cart from storage
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [{ // if storage is empty, assigned to default cart
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      deliveryOptionId: '2'
    }];
  }

  saveToStorage(){ // to simply saving cart to storage
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(productId, quantity){ // function gets product id to add to the cart
    let matchingItem;
  
    this.cartItems.forEach((cartItem) => { // checks if item is already in the cart
      if(cartItem.productId === productId){
        matchingItem = cartItem;
      }
    });
  
    if(matchingItem){ // if true, add 1 to quantity
      matchingItem.quantity += quantity;
    }
    else{ // else, add the new item to cart
      this.cartItems.push({
        productId: productId,
        quantity: quantity,
        deliveryOptionId: '1'
      });
    }
    this.saveToStorage(); // saves to storage
    this.#notifyListeners();
  }

  removeFromCart(productId){ // function gets productId to remove from cart
    const newCart = []; // create a new cart
  
    this.cartItems.forEach((cartItem) => { // loop through cart array and add back everything except the given product
      if (cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    });
  
    this.cartItems = newCart; // update the cart

    this.saveToStorage(); // saves to storage
    this.#notifyListeners();
  }

  checkQuantity(){
    let totalQuantity = 0;

    this.cartItems.forEach((cartItem) => {
      totalQuantity += cartItem.quantity;
    });

    return totalQuantity;
  }

  updateDeliveryOption(productId, deliveryOptionId){ // function gets product id to know which items delivery option is being changed
    let matchingItem;
  
    this.cartItems.forEach((cartItem) => { // finds item in cart
      if(cartItem.productId === productId){
        matchingItem = cartItem;
      }
    });
    matchingItem.deliveryOptionId = deliveryOptionId; // updates the delivery option
  
    this.saveToStorage(); // saves to storage
    this.#notifyListeners();
  }

  addListener(listener) {
    this.#listeners.push(listener);
  }

  removeListener(listener) {
    this.listeners = this.listeners.filter(l => l !== listener); // Remove listener
  }

  #notifyListeners() {
    this.#listeners.forEach(listener => listener(this.checkQuantity()));
  }
}

export const cart = new Cart("myCart");
