// hoc/withNavigationProtection.tsx
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useStore } from '@/lib/navigationStore'

const withNavigationProtection = (WrappedComponent: any) => {
  const Wrapper = (props: any) => {
    const router = useRouter()
    const isNavigationAllowed = useStore((state) => state.isNavigationAllowed)
    const resetNavigation = useStore((state) => state.resetNavigation)

    useEffect(() => {
      if (!isNavigationAllowed) {
        router.replace('/') // Redirect to home page if navigation is not allowed
      } else {
        resetNavigation() // Reset navigation state after allowed navigation
      }
    }, [isNavigationAllowed, router, resetNavigation])

    if (!isNavigationAllowed) {
      return null // You can show a loading spinner or some placeholder here
    }

    return <WrappedComponent {...props} />
  }

  return Wrapper
}

export default withNavigationProtection
