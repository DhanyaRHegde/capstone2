import SigninForm from '@/components/SigninForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign in',
}

export default async function Signin() {
  return <SigninForm />
}
