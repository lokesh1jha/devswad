import { DashboardHeader } from '../_components/dashboard-header'
import { OrdersTable } from './_components/orders-table'

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader heading="Orders" text="Manage your customer orders" />
      <OrdersTable />
    </div>
  )
}