import { DashboardHeader } from '../_components/dashboard-header'
import { UsersTable } from './_components/users-table'

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader heading="Users" text="Manage your user accounts" />
      <UsersTable />
    </div>
  )
}