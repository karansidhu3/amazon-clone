export const orders = JSON.parse(localStorage.getItem('orders')) || []; // gets order or defaults to empty list

export function addOrder(order){
  orders.unshift(order); // adds to front of array
  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('orders', JSON.stringify(orders));
}