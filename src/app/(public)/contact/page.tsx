"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC] text-[#4A4A4A] font-sans">
      

      <div className="container mx-auto p-8">
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
      </div>
    </div>
  )
}