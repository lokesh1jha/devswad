'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#4A4A4A] hover:bg-[#E6E6E6] hover:text-[#333333] px-2 py-2 rounded-md text-sm font-medium"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#F5F5DC] z-10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <MobileNavLink href="/products" onClick={() => setIsOpen(false)}>Our Products</MobileNavLink>
            <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>About Us</MobileNavLink>
            <MobileNavLink href="/contact" onClick={() => setIsOpen(false)}>Contact Us</MobileNavLink>
          </div>
        </div>
      )}
    </div>
  )
}

function MobileNavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link href={href} className="text-[#4A4A4A] hover:bg-[#E6E6E6] hover:text-[#333333] block px-3 py-2 rounded-md text-base font-medium" onClick={onClick}>
      {children}
    </Link>
  )
}
