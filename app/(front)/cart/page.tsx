import React from 'react'
import CartDetails from '../../../components/CartDetails'
import withRedirect from '@/hoc/Redirect'

export const metadata = {
  title: 'Shopping Cart',
}

const Cart = () => {
  return <CartDetails />
}

export default Cart
