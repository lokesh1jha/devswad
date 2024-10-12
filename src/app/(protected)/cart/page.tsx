'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import CartItem from '@/components/CartItem'
import { useCart } from '@/lib/utils_mockdata'

export default function CartPage() {
  const { cart, total } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link href="/products" className="text-[#2E8B57] hover:underline">Continue shopping</Link></p>
      ) : (
        <>
          {cart.map((item: typeof cart[0]) => (
            <CartItem key={item.id} item={item} />
          ))}
          <div className="mt-8">
            <p className="text-xl font-semibold mb-4">Total: {total}</p>
            <Button asChild className="w-full bg-[#2E8B57] hover:bg-[#228B22]">
              <Link href="/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        </>
      )}
    </div>
  )
}