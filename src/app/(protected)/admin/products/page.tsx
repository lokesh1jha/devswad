import { DashboardHeader } from '../_components/dashboard-header'
import { ProductsTable } from './_components/product-tables' 
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader heading="Products" text="Manage your product inventory">
        <Link href="/admin/products/add">
          <Button>Add Product</Button>
        </Link>
      </DashboardHeader>
      <ProductsTable />
    </div>
  )
}