'use client'
import useCartService from '@/lib/useCartStore'
import React from 'react'
import { calculateDiscountedPrice, round2 } from '@/lib/utils'
import { useRouter } from 'next/navigation'

export default function CheckoutDetails() {
  const router = useRouter()
  const { items, itemsPrice, taxPrice, totalPrice, clear } = useCartService()
  //

  return (
    <div className="max-w-4xl mx-auto p-4 flex flex-col items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full border border-gray-200">
        <h2 className="py-4 text-3xl font-bold text-gray-800 border-b border-gray-300 mb-4">
          Price Details
        </h2>
        {items.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-4 p-4 bg-gray-100 rounded-lg"
          >
            <div>
              <span className="font-semibold text-gray-800 text-lg">
                {item.name}
              </span>
              <span className="text-gray-600 block text-sm">
                ({item.qty} x ₹
                {item.discount
                  ? calculateDiscountedPrice(item.price, item.discount)
                  : item.price}
                )
              </span>
            </div>
            <span className="font-semibold text-gray-800 text-lg">
              ₹
              {round2(
                item.qty *
                  (item.discount
                    ? calculateDiscountedPrice(item.price, item.discount)
                    : item.price)
              )}
            </span>
          </div>
        ))}
        <hr className="my-4 border-gray-300" />
        <div className="flex justify-between items-center mb-2 p-4 bg-gray-50 rounded-lg">
          <span className="font-semibold text-gray-700 text-lg">
            Total Price:
          </span>
          <span className="font-bold text-gray-800 text-lg">
            ₹ {itemsPrice}
          </span>
        </div>
        <div className="flex justify-between items-center mb-2 p-4 bg-gray-50 rounded-lg">
          <span className="font-semibold text-gray-700 text-lg">
            Tax (15%):
          </span>
          <span className="font-bold text-gray-800 text-lg">₹ {taxPrice}</span>
        </div>
        <hr className="my-4 border-gray-300" />
        <div className="flex justify-between items-center mb-4 p-4 bg-gray-200 rounded-lg">
          <span className="font-bold text-xl text-gray-700">
            Total Amount (incl. Tax):
          </span>
          <span className="font-bold text-orange-600 text-xl">
            ₹ {totalPrice}
          </span>
        </div>
      </div>

      <div className="w-full flex justify-center mt-4">
        <button
          className="btn btn-primary "
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
