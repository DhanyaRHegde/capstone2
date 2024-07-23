// components/MenuItem.tsx
import React from 'react'
import { Items } from '@/lib/models/itemModel'
import Image from 'next/image'
import Link from 'next/link'
import { calculateDiscountedPrice } from '@/lib/utils'

interface MenuItemProps {
  item: Items
}

const MenuItem: React.FC<MenuItemProps> = ({ item }) => {
  const discountedPrice = calculateDiscountedPrice(item.price, item.discount)

  return (
    <div className="card bg-yellow-500 shadow-lg mb-4 hover:shadow-slate-700 transition-shadow duration-300 flex-col justify-between">
      <figure>
        <Image
          src={item.image.url}
          alt={item.image.description}
          width={300}
          height={300}
          className="object-cover h-64 w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-semibold ">{item.name}</h2>

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
      <div>
        <button
          // onClick={handleAddToCart}
          className="mt-4 w-full bg-amber-800  py-2 rounded hover:bg-yellow-900 transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default MenuItem
