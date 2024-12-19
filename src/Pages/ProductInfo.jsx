import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { useParams } from "react-router-dom";
import myContext from '../Context/MyContext';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';
import { toast } from 'react-toastify';

export default function ProductInfo() {
  const context = useContext(myContext)
  const { product } = context;
  const { id } = useParams();
  const selectedProduct = product.find((item) => item.id === id);
  const dispatch = useDispatch()
    // const cartItems = useSelector((state) => state.cart);

    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Product added to cart !")
    }
  
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-video md:aspect-square w-full overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={selectedProduct.imageUrl}
              alt={selectedProduct.title}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col space-y-6"
          >
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedProduct.title}</h2>
              <p className="text-2xl font-semibold text-indigo-600">₹{selectedProduct.price}</p>
            </div>

            <div className="bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full inline-block w-max">
              {selectedProduct.category}
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">{selectedProduct.description}</p>

            <motion.button
              className="bg-blue-500 text-white py-3 px-8 rounded-lg font-semibold text-lg hover:bg-blue-600 transition-colors duration-300 ease-in-out w-full md:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={() => addCart(selectedProduct)}
            >
              Add to Cart
            </motion.button>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
