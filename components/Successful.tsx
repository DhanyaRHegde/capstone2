'use client'

import useCartService from '@/lib/useCartStore'
import { generateRandomNumber } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function Successful() {
  const router = useRouter()

  const handleButton = () => {
    router.push('/')
  }

  return (
    <div className="flex items-center justify-center flex-col h-screen bg-gradient-to-br from-orange-600 to-amber-500">
      <h1 className="lg:text-4xl text-3xl font-bold text-white animation-pulse">
        Order Placed Successfully!
      </h1>
      <p className="mt-4 lg:text-xl text-lg text-white animation-fadeIn">
        Your order number is {generateRandomNumber()}
      </p>
      <p className="mt-4 lg:text-xl text-lg text-white animation-fadeIn">
        Your order will be ready within 15 minutes.
      </p>
      <button
        className="mt-8 bg-white hover:bg-gray-200 text-green-700 font-semibold py-2 px-6 rounded-full shadow-lg animation-bounce"
        onClick={handleButton}
      >
        Go to Home
      </button>
    </div>
  )
}
