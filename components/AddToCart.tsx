'use client'

import { OrderItem } from '@/lib/models/orderModel'
import useCartService from '@/lib/useCartStore'
import { useEffect, useState } from 'react'

export default function AddToCart({ item }: { item: OrderItem }) {
  const { items, increase, decrease } = useCartService()
  const [existItem, setExistItem] = useState<OrderItem | undefined>()

  useEffect(() => {
    setExistItem(items.find((x) => x.slug === item.slug))
  }, [item, items])

  const addToCartHandler = () => {
    increase(item)
  }
  return existItem ? (
    <div className="w-full flex justify-between items-center">
      <button
        className="btn btn-primary rounded-btn w-1/3"
        type="button"
        onClick={() => decrease(existItem)}
      >
        -
      </button>
      <span className="px-2 text-center w-1/3">{existItem.qty}</span>
      <button
        className="btn btn-primary rounded-btn w-1/3"
        type="button"
        onClick={() => increase(existItem)}
      >
        +
      </button>
    </div>
  ) : (
    <button
      className="btn btn-primary rounded-btn  w-full "
      type="button"
      onClick={addToCartHandler}
    >
      Add to cart
    </button>
  )
}
