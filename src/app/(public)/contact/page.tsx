import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC] text-[#4A4A4A] font-sans">
      <header className="bg-[#2E8B57] p-4 text-white">
        <nav className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">DevS waD</h1>
          <div className="space-x-4">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/products" className="hover:underline">Products</Link>
            <Link href="/about" className="hover:underline">About</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input id="name" placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea id="message" placeholder="Your message here..." />
                </div>
                <Button type="submit" className="w-full bg-[#2E8B57] hover:bg-[#228B22]">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <div>
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5 text-[#2E8B57]" />
                    <p>123 Bihar Street, Patna, Bihar 800001</p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-2 h-5 w-5 text-[#2E8B57]" />
                    <p>+91 123 456 7890</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-2 h-5 w-5 text-[#2E8B57]" />
                    <p>info@devswad.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <footer className="bg-[#2E8B57] text-white py-8 mt-12">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#F5F5DC]">Facebook</a>
              <a href="#" className="hover:text-[#F5F5DC]">Instagram</a>
              <a href="#" className="hover:text-[#F5F5DC]">Twitter</a>
            </div>
          </div>
          <div>
            <p>&copy; 2024 DevSwaD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}