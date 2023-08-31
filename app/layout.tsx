import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Weather today',
  description: 'Coding coding',
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
