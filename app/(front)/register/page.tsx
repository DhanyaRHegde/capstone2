import SignupForm from '@/components/SignupForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Register',
}

export default async function Register() {
  return <SignupForm />
}
