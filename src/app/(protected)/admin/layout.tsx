import { Sidebar } from './_components/sidebar'
// import { ThemeProvider } from './components/theme-provider'
// import { Toaster } from '@/components/ui/toaster'

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
    {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-background p-8">
          {children}
        </main>
      </div>
      {/* <Toaster /> */}
    {/* </ThemeProvider> */}
    </div>
  )
}