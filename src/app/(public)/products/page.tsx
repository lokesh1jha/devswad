"use client"
import ProductList from "@/components/ProductList"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = ['All', 'Sattu', 'Rice', 'Specialty']

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      <Tabs defaultValue="All" className="mb-8">
        <TabsList>
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>{category}</TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <ProductList category={category === 'All' ? undefined : category} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}