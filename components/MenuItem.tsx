// components/MenuItem.tsx
import React from 'react'
import { Items } from '@/lib/models/itemModel'
import Image from 'next/image'
import Link from 'next/link'

interface MenuItemProps {
  item: Items
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const calculateDiscountedPrice = (price: number, discount?: number) => {
    if (discount && discount > 0) {
      return price - price * (discount / 100)
    }
    return price
  }

  const discountedPrice = calculateDiscountedPrice(item.price, item.discount)

  return (
    <div className="card bg-yellow-500 shadow-lg mb-4 hover:shadow-slate-700 transition-shadow duration-300">
      <figure>
        <Link href={`/item/${item.slug}`}>
          <Image
            src={item.image.url}
            alt={item.image.description}
            width={300}
            height={300}
            className="object-cover h-64 w-full"
          />
        </Link>
      </figure>
      <div className="card-body">
        <Link href={`/item/${item.slug}`}>
          <h2 className="card-title font-semibold ">{item.name}</h2>
        </Link>
        <div className="card-actions flex items-center justify-between">
          {item.discount && item.discount > 0 ? (
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 line-through">
                ₹{item.price.toFixed(2)}
              </span>
              <span className="  text-2xl">₹{discountedPrice.toFixed(2)}</span>
              <span className="text-red-400 font-medium">
                Save {item.discount}%
              </span>
            </div>
          ) : (
            <span className="text-2xl">₹{item.price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default MenuItem