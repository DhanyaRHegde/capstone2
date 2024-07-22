export default interface Items {
  id: string
  name: string
  image: string
  price: number
  discount?: number
  type:
    | 'Coffee and Beverages'
    | 'Combos'
    | 'Fries and Sides'
    | 'Burgers and Wraps'
  slug: string
}
