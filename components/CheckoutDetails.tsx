'use client'
import useCartService from '@/lib/useCartStore'
import React from 'react'
import { calculateDiscountedPrice, round2 } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export default function CheckoutDetails() {
  const router = useRouter()
  const { items, itemsPrice, taxPrice, totalPrice, clear } = useCartService()
  return (
    <div>
      <div className="overflow-x-auto md:col-span-3">
        <h2 className="py-4 text-2xl">Price Details</h2>
        {items.map((item) => (
          <div key={item.id} className="flex justify-between mb-2">
            <div className="flex flex-col">
              <span className="font-semibold">{item.name}</span>
              <span className="font-semibold">
                ({item.qty} x ₹{' '}
                {item.discount
                  ? calculateDiscountedPrice(item.price, item.discount)
                  : item.price}
                )
              </span>
            </div>
            <span>
              ₹{' '}
              {round2(
                item.qty *
                  (item.discount
                    ? calculateDiscountedPrice(item.price, item.discount)
                    : item.price)
              )}
            </span>
          </div>
        ))}
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="font-semibold">Total Price:</span>
          <span>₹ {itemsPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-semibold">Tax (15%):</span>
          <span>₹ {taxPrice}</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="font-semibold text-lg">
            Total Amount (incl. Tax):
          </span>
          <span className="font-semibold text-orange-950 text-lg">
            ₹ {totalPrice}
          </span>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <button
          className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded mt-4 bottom-0 lg:w-[20%] tracking-widest"
          onClick={() => {
            router.push('/ordersuccessful')
            clear()
          }}
        >
          Place Order
        </button>
      </div>
    </div>
  )
}
