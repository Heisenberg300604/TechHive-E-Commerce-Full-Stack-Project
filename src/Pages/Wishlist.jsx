import React from 'react';
import { Heart, Trash2 } from 'lucide-react';

// Dummy product data with real image URLs
const wishlistItems = [
  {
    id: 1,
    name: 'Vintage Leather Jacket',
    brand: 'Urban Classics',
    price: 249.99,
    color: 'Brown',
    size: 'M',
    image: 'https://via.placeholder.com/200?text=Leather+Jacket'
  },
  {
    id: 2,
    name: 'Classic White Sneakers',
    brand: 'Minimal Footwear',
    price: 129.50,
    color: 'White',
    size: '42',
    image: 'https://via.placeholder.com/200?text=White+Sneakers'
  },
  {
    id: 3,
    name: 'Minimalist Wool Sweater',
    brand: 'Comfort Wear',
    price: 179.99,
    color: 'Navy Blue',
    size: 'L',
    image: 'https://via.placeholder.com/200?text=Wool+Sweater'
  },
  {
    id: 4,
    name: 'Slim Fit Chino Pants',
    brand: 'Tailored Basics',
    price: 89.99,
    color: 'Khaki',
    size: '32x32',
    image: 'https://via.placeholder.com/200?text=Chino+Pants'
  }
];

export default function Wishlist() {
  return (
    <div className="min-h-screen bg-white p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold text-black">My Wishlist</h1>
          <span className="text-blue-500 font-semibold">
            {wishlistItems.length} Items
          </span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wishlistItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-blue-50 rounded-2xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="relative mb-4">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  width={200} 
                  height={200} 
                  className="w-full h-48 object-cover rounded-xl"
                />
                <button className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md hover:bg-blue-100 transition-colors">
                  <Trash2 className="text-blue-500 w-5 h-5" />
                </button>
              </div>
              
              <div className="text-center">
                <h3 className="text-xl font-bold ">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.brand}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-blue-600 font-semibold">${item.price.toFixed(2)}</span>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <span>{item.color}</span>
                    <span>•</span>
                    <span>{item.size}</span>
                  </div>
                </div>
                <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {wishlistItems.length === 0 && (
          <div className="text-center py-16">
            <Heart className="mx-auto w-16 h-16 text-blue-300 mb-4" />
            <p className="text-xl text-blue-500">Your wishlist is empty</p>
          </div>
        )}
      </div>
    </div>
  );
}
