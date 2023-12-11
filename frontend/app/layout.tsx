import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import "./globals.css";
import SessionProvider from "@/components/SessionProvider"


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CrypTix | Buy Tickets with Crypto',
  description: 'Cryptix is a ticketing platform that allows you to buy tickets using cryptocurrency.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
          <SessionProvider>

       <main>
      
        {children}
       </main>
        
            </SessionProvider>
        </body>
    </html>
  )
}
