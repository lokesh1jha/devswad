"use client"; // Ensure this is a client component
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Star, ShoppingCart } from 'lucide-react';
// import { Heart } from 'lucide-react';
import { getProductById } from '@/app/lib/utils';
import { Product } from '@/app/types';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);
  if(!product){
    notFound();
  }
  const weight = 1.5;
  const material = "Cotton";
  const dietType = "Vegetarian";

  function handleAddToCart(product: Product) {
    console.log("Added to cart", product);
  }
  return (
    <div className="min-h-screen bg-[#F5F5DC] text-[#4A4A4A] font-sans">
    
      <main className="container mx-auto p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current text-yellow-500" />
                ))}
              </div>
              <span className="ml-2 text-sm">(128 reviews)</span>
            </div>
            <p className="text-xl font-semibold mb-4">{product.price}</p>
            <p className="mb-6">{product.description}</p>

            {/* Additional Product Details */}
            <div className="space-y-2 mb-6">
              <p className="flex items-center">
                <span className="font-semibold mr-2">Weight:</span> {weight} grams
              </p>
              <p className="flex items-center">
                <span className="font-semibold mr-2">Material:</span> {material}
              </p>
              <p className="flex items-center">
                <span className="font-semibold mr-2">Diet Type:</span> {dietType}
              </p>
            </div>

            {/* Buttons for Adding to Cart and Wishlist */}
            <div className="flex space-x-4 mb-6">
              <Button onClick={() => handleAddToCart(product)} className="flex-1 bg-[#2E8B57] hover:bg-[#228B22]">
                <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
              </Button>
              {/* <Button onClick={() => {console.log("Added to wishlist", product)}} variant="outline" className="flex-1 border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white">
                <Heart className="mr-2 h-4 w-4" /> Add to Wishlist
              </Button> */}
            </div>

            {/* Bulk Pricing Information */}
            {/* <div>
              <h3 className="text-xl font-semibold mb-2">Bulk Pricing:</h3>
              <p>5 units for ₹1,475.00 (Save ₹150)</p>
            </div> */}
          </div>
        </div>

        {/* Customer Reviews Section */}
        <section className="mt-12">
          <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
          {/* Sample reviews; replace with dynamic data as needed */}
          {[1, 2, 3].map((review) => (
            <div key={review} className="border rounded-md p-4 mb-4 shadow-sm">
              <div className="flex items-center mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-current text-yellow-500" />
                ))}
                <span className="font-semibold ml-2">Great product!</span>
              </div>
              <p>This sattu is amazing! It tastes just like the one I used to have back home in Bihar. The quality is excellent.</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}