import { getProducts } from '@/lib/utils_mockdata'
import ProductCard from './ProductCard'
import { Product } from '@/app/types'

export default function ProductList({ category, featured }: { category?: string, featured?: boolean }) {
  const products: Product[] = getProducts({ category, featured })

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {products.map((product: Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}