export interface Product {
    id: string
    name: string
    price: string
    image: string
    category: string
    description: string
  }
  
  export interface CartItem extends Product {
    quantity: number
  }
  
  export interface Order {
    id: string
    date: string
    status: string
    total: string
    items: CartItem[]
  }