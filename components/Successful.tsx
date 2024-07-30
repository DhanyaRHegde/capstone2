'use client'

import { generateRandomNumber } from '@/lib/utils'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Successful() {
  const router = useRouter()

  useEffect(() => {
    // Push a new state to history to disable the back button
    window.history.pushState(null, '', window.location.href)

    // Handle popstate event to redirect to home if user tries to go back
    const handlePopState = () => {
      router.push('/')
    }

    window.addEventListener('popstate', handlePopState)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [router])
  const handleButton = () => {
    router.push('/')
  }

  return (
    <div className="flex items-center justify-center flex-col h-screen ">
      <h1 className="lg:text-4xl text-3xl font-bold  text-center animate-pulse">
        Order Placed Successfully!
      </h1>
      <p className="mt-4 lg:text-xl text-lg  animation-fadeIn">
        Your order number is {generateRandomNumber()}
      </p>
      <p className="mt-4 lg:text-xl text-lg  animation-fadeIn">
        Your order will be ready within 15 minutes.
      </p>
      <button
        className="mt-8 btn btn-primary font-semibold py-2 px-6 rounded-full shadow-lg "
        onClick={handleButton}
      >
        Go to Home
      </button>
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`w-16 h-16 bg-box-${
              index + 1
            } rounded-full absolute animate-popping animation-delay-${index}`}
          ></div>
        ))}
      </div>
    </div>
  )
}
