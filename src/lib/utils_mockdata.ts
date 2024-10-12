'use client'

import { useState, useEffect } from 'react'
import { Product, CartItem, Order } from '@/app/types'

// Mock data (replace with actual API calls in a real application)
const products: Product[] = [
  { id: '1', name: 'Pure Bihari Chana Sattu', price: '₹325.00', image: '/images/sattu.jpg', category: 'Sattu', description: 'High-protein sattu made from roasted gram flour.' },
  { id: '2', name: 'Organic Basmati Rice', price: '₹450.00', image: '/images/rice.jpg', category: 'Rice', description: 'Premium long-grain basmati rice from Bihar.' },
  { id: '3', name: 'Traditional Litti Chokha Mix', price: '₹275.00', image: '/images/litti-chokha.jpg', category: 'Specialty', description: 'Authentic mix for making Bihari Litti Chokha.' },
]

const orders: Order[] = [
    // { id: '1', date: '2022-01-01', status: 'Delivered', total: '₹325.00', items: [{ id: '1', name: 'Pure Bihari Chana Sattu', price: '₹325.00', image: '/images/sattu.jpg', quantity: 1 }], },
    // { id: '2', date: '2022-01-02', status: 'Delivered', total: '₹450.00', items: [{ id: '2', name: 'Organic Basmati Rice', price: '₹450.00', image: '/images/rice.jpg', quantity: 1 }], },
  ]


export function getProducts({ category, featured }: { category?: string, featured?: boolean } = {}): Product[] {
  let filteredProducts = products
  if (category && category !== 'All') {
    filteredProducts = filteredProducts.filter(p => p.category === category)
  }
  if (featured) {
    filteredProducts = filteredProducts.slice(0, 3) // Just return the first 3 as featured
  }
  return filteredProducts
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id)
}

export function getOrders(): Order[] {
  return orders
}

export function getOrderById(id: string): Order | undefined {
  return orders.find(o => o.id === id)
}

// Cart functionality
export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const savedCart = localStorage.getItem('cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product: Product) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === product.id)
      if (existingItem) {
        return currentCart.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      }
      return [...currentCart, { ...product, quantity: 1 }]
    })
  }

  const updateQuantity = (id: string, quantity: number) => {
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
      ).filter(item => item.quantity > 0)
    )
  }

  const removeFromCart = (id: string) => {
    setCart(currentCart => currentCart.filter(item => item.id !== id))
  }

  const total = cart.reduce((sum, item) => sum + parseFloat(item.price.replace('₹', '')) * item.quantity, 0)

  return { cart, addToCart, updateQuantity, removeFromCart, total: `₹${total.toFixed(2)}` }
}