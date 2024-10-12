import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { ThemeProvider } from "next-themes"
import { EnvVarWarning } from "@/components/env-var-warning"
import HeaderAuth from "@/components/header-auth"
import MobileNavbar from "@/components/mobile-navbar"
import '@/app/globals.css'
import { hasEnvVars } from '../../utils/supabase/check-env-vars'

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col">
            <nav className="w-full flex justify-center border-b border-b-gray-200 h-16">
              <div className="w-full flex justify-between items-center p-3 px-4 sm:px-6 lg:px-8 text-sm">
                <div className="flex gap-5 items-center font-semibold">
                  <a href="/" className="text-[#4A4A4A]">DevSwaD</a>
                  <div className="hidden md:ml-6 md:flex md:space-x-8">
                    <NavLink href="/products">Our Products</NavLink>
                    <NavLink href="/about">About Us</NavLink>
                    <NavLink href="/contact">Contact Us</NavLink>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  {!hasEnvVars ? <EnvVarWarning /> : <HeaderAuth />}
                  <MobileNavbar />
                </div>
              </div>
            </nav>
            <div className="flex-1 w-full">
              {children}
            </div>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-[#4A4A4A] hover:bg-[#E6E6E6] hover:text-[#333333] px-3 py-2 rounded-md text-sm font-medium">
      {children}
    </a>
  )
}
