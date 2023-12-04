import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from '@/component/ui/NavbarComp'
import Footer from '@/component/ui/FooterComp'
import { ChakraProvider } from '@chakra-ui/react'
import { Toaster } from 'react-hot-toast'
import { ClerkProvider } from '@clerk/nextjs'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pet Parent Tools',
  description: 'Created by a Loving Doberman Parent',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
    <ChakraProvider>
          <NavBar />
        {children}
        <Footer />
        <Toaster />
        </ChakraProvider>
        </body>
    </html>
    </ClerkProvider>
  
  )
}
