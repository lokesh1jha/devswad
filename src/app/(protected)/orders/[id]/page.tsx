import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getOrderById } from '@/app/lib/utils'

export default function OrderPage({ params }: { params: { id: string } }) {
  const order = getOrderById(params.id)

  if (!order) {
    notFound()
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Order #{order.id}</h1>
      <p className="mb-4">Date: {order.date}</p>
      <p className="mb-4">Status: {order.status}</p>
      <h2 className="text-2xl font-semibold mb-4">Items</h2>
      <div className="space-y-4">
        {order.items.map((item: any) => (
          <div key={item.id} className="flex items-center space-x-4">
            <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md" />
            <div>
              <p className="font-semibold">{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: {item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="text-xl font-semibold mt-6">Total: {order.total}</p>
    </div>
  )
}