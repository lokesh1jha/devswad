"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { DashboardHeader } from '../../_components/dashboard-header'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'

export default function AddProductPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)
    const productData = Object.fromEntries(formData)
    console.log(productData)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    setIsLoading(false)
    toast({
      title: "Product added",
      description: "Your new product has been added successfully.",
    })
    router.push('/admin/products')
  }

  return (
    <div className="space-y-6">
      <DashboardHeader
        heading="Add Product"
        text="Add a new product to your store"
      />
      <div className="container max-w-2xl">
        <form onSubmit={onSubmit}>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Product Name</Label>
              <Input id="name" name="name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" name="description" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="price">Price</Label>
              <Input id="price" name="price" type="number" step="0.01" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Input id="category" name="category" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="stock">Stock</Label>
              <Input id="stock" name="stock" type="number" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Product Image</Label>
              <Input id="image" name="image" type="file" />
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Adding..." : "Add Product"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}