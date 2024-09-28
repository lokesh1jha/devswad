import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Product } from '@/app/types'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg overflow-hidden">
      <Image
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold mb-2">{product.name}</h3>
        <p className="text-[#2E8B57] font-bold mb-2">{product.price}</p>
        <div className='flex justify-between'>

        <Button asChild className="w-full bg-[#2E8B57] hover:bg-[#228B22]">
          <Link href={`/products/${product.id}`}>View Details</Link>
        </Button>

        <Button className='w-full bg-[#f8da5b] hover:bg-[#ffc93c] ml-2'>Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}