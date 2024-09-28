import { getProducts } from '@/app/lib/utils'
import ProductCard from './ProductCard'
import { Product } from '@/app/types'

export default function ProductList({ category, featured }: { category?: string, featured?: boolean }) {
  const products: Product[] = getProducts({ category, featured })

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {products.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}