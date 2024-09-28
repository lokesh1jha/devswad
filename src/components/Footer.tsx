import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#2E8B57] text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#F5F5DC]">Facebook</a>
            <a href="#" className="hover:text-[#F5F5DC]">Instagram</a>
            <a href="#" className="hover:text-[#F5F5DC]">Twitter</a>
          </div>
        </div>
        <div className="text-center md:text-right">
          <p>&copy; 2024 DevSwaD. All rights reserved.</p>
          <div className="mt-2">
            <Link href="/privacy-policy" className="hover:underline mr-4">Privacy Policy</Link>
            <Link href="/terms-of-service" className="hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}