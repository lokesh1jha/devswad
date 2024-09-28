import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-[#2E8B57] p-4 text-white">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">DevS waD</Link>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/products" className="hover:underline">Products</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/cart" className="hover:underline inline-flex items-center">
            <ShoppingCart className="w-5 h-5 mr-1" />
            Cart
          </Link>
        </div>
      </nav>
    </header>
  )
}