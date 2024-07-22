import { Image } from './contentful'

export interface Items {
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
}
