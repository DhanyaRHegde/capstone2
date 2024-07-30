import React from 'react'
import CheckoutDetails from '@/components/CheckoutDetails'
import withNavigationProtection from '@/hoc/Redirect'

export const metadata = {
  title: 'Checkout',
}

const Checkout = () => {
  return <CheckoutDetails />
}

export default Checkout
