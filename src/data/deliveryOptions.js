export const deliveryOptions = [{ // data of the delivery options
  id: '1',
  deliveryDays: 7,
  priceCents: 0
},
{
  id: '2',
  deliveryDays: 3,
  priceCents: 499
},
{
  id: '3',
  deliveryDays: 1,
  priceCents: 999
}];

export function getDeliveryOption(deliveryOptionId){
  let deliveryOption;

  deliveryOptions.forEach((option) => { // finds which delivery option
    if (deliveryOptionId === option.id){
      deliveryOption = option;
    }
  });

  return deliveryOption || deliveryOptions[0]; // return delivery option info or default delivery option
}