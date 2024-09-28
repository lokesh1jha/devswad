import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/app/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DevSwaD - Authentic Bihari Flavors',
  description: 'Experience the rich taste of Bihar with our premium sattu, rice, and regional specialties.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#F5F5DC] text-[#4A4A4A]`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}