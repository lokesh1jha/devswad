'use client'

import { useState } from 'react'
// import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { loadStripe } from '@stripe/stripe-js'
import { useCart } from '@/lib/utils_mockdata'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CheckoutPage() {
  // const router = useRouter()
  const { cart, total } = useCart()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const stripe = await stripePromise
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cart }),
    })

    const session = await response.json()

    const result = await stripe!.redirectToCheckout({
      sessionId: session.id,
    })

    if (result.error) {
      console.error(result.error.message)
    }

    setLoading(false)
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <Input type="text" placeholder="Full Name" required />
        <Input type="email" placeholder="Email" required />
        <Input type="text" placeholder="Address" required />
        <Input type="text" placeholder="City" required />
        <Input type="text" placeholder="Postal Code" required />
        <p className="text-xl font-semibold">Total: {total}</p>
        <Button type="submit" className="w-full bg-[#2E8B57] hover:bg-[#228B22]" disabled={loading}>
          {loading ? 'Processing...' : 'Pay Now'}
        </Button>
      </form>
    </div>
  )
}