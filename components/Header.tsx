'use client'

import useCartService from '@/lib/useCartStore'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
  const { items, init } = useCartService()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-orange-800  ">
          <Link href="/" className="btn btn-ghost text-lg text-white">
            Barista
          </Link>
          <ul className="flex">
            <li>
              <Link
                className="btn btn-ghost rounded-btn text-white"
                href="/cart"
              >
                Cart
                {mounted && items.length != 0 && (
                  <div className="badge badge-secondary">
                    {items.reduce((a, c) => a + c.qty, 0)}{' '}
                  </div>
                )}
              </Link>
            </li>
            <li>
              <Link
                className="btn btn-ghost rounded-btn text-white"
                href="/signin"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Header
