import { OrderItem } from './models/orderModel'

export const calculateDiscountedPrice = (price: number, discount?: number) => {
  if (discount && discount > 0) {
    return price - price * (discount / 100)
  }
  return price
}

export const round2 = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100

export const calcPrice = (items: OrderItem[]) => {
  const itemsPrice = round2(
      items.reduce(
        (acc, item) =>
          acc + calculateDiscountedPrice(item.price, item.discount) * item.qty,
        0
      )
    ),
    taxPrice = round2(Number(0.15 * itemsPrice)),
    totalPrice = round2(itemsPrice + taxPrice)
  return { itemsPrice, taxPrice, totalPrice }
}
