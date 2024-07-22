export interface Image {
  url: string
  description: string
}

export interface CapstoneItem {
  id: string
  name: string
  image: Image
  price: number
  discount: number
  slug: string
  type: string
}

export interface CapstoneResponse {
  capstoneCollection: {
    items: CapstoneItem[]
  }
}
