import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Star } from 'lucide-react'
import { getProductById } from '@/app/lib/utils'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto p-8">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-current text-yellow-500" />
              ))}
            </div>
            <span className="ml-2 text-sm">(128 reviews)</span>
          </div>
          <p className="text-xl font-semibold mb-4">{product.price}</p>
          <p className="mb-6">{product.description}</p>
          <Button className="w-full bg-[#2E8B57] hover:bg-[#228B22]">Add to Cart</Button>
        </div>
      </div>
    </div>
  )
}