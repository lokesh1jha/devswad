"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F5DC] text-[#4A4A4A] font-sans">

      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-6">About DevSwaD</h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <img
              src="/placeholder.svg?height=400&width=600&text=Our+Story"
              alt="Our Story"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
            <p className="mb-4">
              DevSwaD was born out of a passion for preserving and sharing the authentic flavors of Bihar. 
              Our journey began in the heart of Bihar, where we witnessed the rich culinary traditions 
              passed down through generations.
            </p>
            <p>
              Inspired by the unique tastes and nutritional value of traditional Bihari cuisine, 
              we set out on a mission to bring these flavors to homes across India and beyond.
            </p>
          </div>
        </div>

        <Card className="mb-12">
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              At DevSwaD, our mission is to celebrate and promote the rich culinary heritage of Bihar 
              while supporting local farmers and artisans. We strive to deliver premium quality, 
              authentic Bihari products that not only tantalize taste buds but also contribute to 
              the well-being of our customers and communities.
            </p>
          </CardContent>
        </Card>

        <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {['Authenticity', 'Quality', 'Sustainability'].map((value, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  We are committed to {value.toLowerCase()} in every aspect of our business, 
                  from sourcing ingredients to delivering products to your doorstep.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}