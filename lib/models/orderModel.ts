import { Image } from './contentful'

export interface OrderItem {
  id: string
  name: string
  price: number
  discount?: number
  image: Image
  type:
    | 'Coffee and Beverages'
    | 'Combos'
    | 'Fries and Sides'
    | 'Burgers and Wraps'
  slug: string
  qty: number
}

export type Cart = {
  items: OrderItem[]
  itemsPrice: number
  taxPrice: number
  totalPrice: number
}
