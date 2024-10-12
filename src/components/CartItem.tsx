import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '@/app/lib/utils_mockdata'

type CartItemType = {
  id: string
  name: string
  image: string
  price: string
  quantity: number
}

export default function CartItem({ item }: { item: CartItemType }) {
  const { updateQuantity, removeFromCart } = useCart()

  return (
    <div className="flex items-center space-x-4 border-b py-4">
      <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-md" />
      <div className="flex-grow">
        <h3 className="font-semibold">{item.name}</h3>
        <p>{item.price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <Button
          variant="outline"
          size="icon"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity === 1}
        >
          <Minus className="h-4 w-4" />
        </Button>
        <span>{item.quantity}</span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  )
}