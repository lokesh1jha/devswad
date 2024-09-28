import { stripe } from '@/app/lib/stripe'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { cart } = await req.json()

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: cart.map((item: any) => ({
        price_data: {
          currency: 'inr',
          product_data: {
            name: item.name,
          },
          unit_amount: parseInt(item.price.replace('₹', '')) * 100,
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/order-confirmation?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/cart`,
    })

    return NextResponse.json({ id: session.id })
  } catch (err: any) {
    return NextResponse.json({ statusCode: 500, message: err.message })
  }
}