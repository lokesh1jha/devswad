import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Leaf, Package, Star } from 'lucide-react'
import ProductList from '@/components/ProductList'

export default function HomePage() {
  return (
    <div className="container mx-auto p-8">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Authentic Bihari Flavors, Delivered to You</h1>
        <p className="text-xl mb-6">Experience the rich taste of Bihar with our premium sattu, rice, and regional specialties.</p>
        <Button asChild className="bg-[#2E8B57] hover:bg-[#228B22]">
          <Link href="/products">Shop Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </section>

      <section className="grid md:grid-cols-3 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Leaf className="mr-2 h-6 w-6 text-[#2E8B57]" />
              Natural Goodness
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our products are made from the finest ingredients, sourced directly from Bihar's fertile lands.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Package className="mr-2 h-6 w-6 text-[#2E8B57]" />
              Traditional Recipes
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>We preserve the authentic taste of Bihar by following time-honored preparation methods.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Star className="mr-2 h-6 w-6 text-[#2E8B57]" />
              Customer Satisfaction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Our commitment to quality ensures that every purchase brings a smile to your face.</p>
          </CardContent>
        </Card>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-center">Featured Products</h2>
        <ProductList featured={true} />
      </section>
    </div>
  )
}