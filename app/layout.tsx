import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Barista',
  description: 'A Coffee Shop',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col bg-amber-500">
          <Header />
          {children}
          <footer className="footer footer-center p-4 bg-orange-800 text-base-content">
            <p className="text-white">
              Copyright © 2023 - All right reserved by Barista{' '}
            </p>
          </footer>
        </div>
      </body>
    </html>
  )
}
