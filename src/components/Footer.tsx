import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#2E8B57] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col space-y-6 sm:space-y-0 sm:flex-row sm:justify-between sm:items-start">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-4">
              <a href="#" className="hover:text-[#F5F5DC] transition-colors duration-200">Facebook</a>
              <a href="#" className="hover:text-[#F5F5DC] transition-colors duration-200">Instagram</a>
              <a href="#" className="hover:text-[#F5F5DC] transition-colors duration-200">Twitter</a>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <p>&copy; 2024 DevSwaD. All rights reserved.</p>
            <div className="mt-2 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center sm:justify-end">
              <Link href="/privacy-policy" className="hover:underline transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:underline transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}