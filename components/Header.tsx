import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header>
      <nav>
        <div className="navbar justify-between bg-amber-600 ">
          <Link href="/" className="btn btn-ghost text-lg">
            Barista
          </Link>
          <ul className="flex">
            <li>
              <Link className="btn btn-ghost rounded-btn" href="/cart">
                Cart
              </Link>
            </li>
            <li>
              <Link className="btn btn-ghost rounded-btn" href="/signin">
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
