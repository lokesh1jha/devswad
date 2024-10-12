import { notFound } from 'next/navigation';
import Image from 'next/image';
import { getOrderById } from '@/app/lib/utils_mockdata';

export interface CartItem {
  id: string;
  name: string;
  price: string;
  quantity: number;
  image: string; // Assuming you have an image property for each item
}

// Your Order interface
export interface Order {
  id: string;
  date: string;
  status: string;
  items: CartItem[]; // This should be an array of CartItem
  total: string; // Assuming total is a string
}

export default function OrderPage({ params }: { params: { id: string } }) {
  const order = getOrderById(params.id) as Order; // Cast to Order type

  if (!order) {
    notFound();
    return null; // Return null to avoid rendering after notFound()
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Order #{order.id}</h1>
      <p className="mb-4">Date: {order.date}</p>
      <p className="mb-4">Status: {order.status}</p>
      <h2 className="text-2xl font-semibold mb-4">Items</h2>
      <div className="space-y-4">
        {order.items.map((item: CartItem) => (
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
  );
}