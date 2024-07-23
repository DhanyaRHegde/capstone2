export const calculateDiscountedPrice = (price: number, discount?: number) => {
  if (discount && discount > 0) {
    return price - price * (discount / 100)
  }
  return price
}
