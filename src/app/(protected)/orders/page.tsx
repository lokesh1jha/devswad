"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { getOrders } from '@/app/lib/utils'

export default function OrdersPage() {
  const orders = getOrders()

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Your Orders</h1>
      {orders.length === 0 ? (
        <p>You haven&apos;t placed any orders yet. <Link href="/products" className="text-[#2E8B57] hover:underline">Start shopping</Link></p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="border p-4 rounded-lg">
              <p className="font-semibold">Order #{order.id}</p>
              <p>Date: {order.date}</p>
              <p>Total: {order.total}</p>
              <Button asChild variant="outline" className="mt-2">
                <Link href={`/orders/${order.id}`}>View Details</Link>
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}