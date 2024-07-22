export interface Image {
  url: string
  description: string
}

export interface BaristaItem {
  id: string
  name: string
  price: number
  discount: number
  image: Image
  type:
    | 'Coffee and Beverages'
    | 'Combos'
    | 'Fries and Sides'
    | 'Burgers and Wraps'
  slug: string
}

export interface BaristaCollection {
  items: BaristaItem[]
}

export interface ContentfulResponse {
  baristaCollection: BaristaCollection
}
