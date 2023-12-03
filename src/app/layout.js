import { Inter } from 'next/font/google'
import '@radix-ui/themes/styles.css'
import { Theme, ThemePanel } from '@radix-ui/themes'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'HTT Volleyball',
  description: "HTT's volleyball blog",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gradient-to-b from-emerald-500 to-emerald-600`}>{children}</body>
      {/* <ThemePanel /> */}
      <Analytics />
    </html>
  )
}
