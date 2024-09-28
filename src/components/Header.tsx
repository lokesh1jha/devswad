"use client"
import { useState } from 'react'
import Link from 'next/link'
import { ShoppingCart, Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

export default function Header({ isLoggedIn = false }: { isLoggedIn?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  isLoggedIn = true

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  const authItems = [
    { href: '/cart', label: 'Cart', icon: ShoppingCart },
    { href: '/orders', label: 'Orders' },
  ]

  return (
    <header className="bg-[#2E8B57] p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">DevSwaD</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4 items-center">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
          {isLoggedIn && authItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:underline inline-flex items-center">
              {item.icon && <item.icon className="w-5 h-5 mr-1" />}
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-4 mt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg hover:underline"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              {isLoggedIn && authItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg hover:underline inline-flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon && <item.icon className="w-5 h-5 mr-2" />}
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}