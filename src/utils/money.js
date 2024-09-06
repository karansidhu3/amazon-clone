export function formatCurrency(priceCents){ // created to simplify converting cents to dollars
  return (Math.round(priceCents) / 100).toFixed(2);
}

export default formatCurrency;