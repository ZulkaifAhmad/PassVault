import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/Navbar.jsx"

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'PassVault - Password Manager',
  description: 'Secure your passwords with PassVault',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={spaceGrotesk.className}>
          <Navbar />
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}