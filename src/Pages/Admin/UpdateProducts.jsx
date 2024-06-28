import React, { useContext } from 'react'
import myContext from '../../Context/MyContext';

const UpdateProducts = () => {
    const context = useContext(myContext);
    const {products,setProducts, updateProduct} = context;
  return (
    <div>
      <div className='font-sans h-screen flex flex-col justify-center items-center'>
        <div className='max-w-md w-full p-6 space-y-6'>
          <div className="">
            <h1 className='text-center text-black text-xl mb-4 font-bold'>Update Product</h1>
          </div>
          <div>
            <input
              value={products.title}
              onChange={(e)=> setProducts({...products,title: e.target.value})}
              placeholder=" Product Name"
              className="bg-white text-black border border-gray-500 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-30 placeholder:text-black"
              required
            />
          </div>
          <div>
            <input type="text"
            value={products.price}
            onChange={(e)=> setProducts({...products,price:e.target.value})}
              name='price'
              className='bg-white text-black border border-gray-500 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-30 placeholder:text-black'
              placeholder='Product price'
              required
            />
          </div>
          <div>
            <input type="text"
             value={products.imageUrl}
             onChange={(e)=> setProducts({...products,imageUrl:e.target.value})}
              name='imageurl'
              className='bg-white text-black border border-gray-500 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-30 placeholder:text-black'
              placeholder='Product imageUrl'
              required
            />
          </div>
          <div>
            <input type="text"
            onChange={(e) => setProducts({ ...products, category: e.target.value })} value={products.category}
              name='category'
              className='bg-white text-black border border-gray-500 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-30 placeholder:text-black'
              placeholder='Product category'
              required
            />
          </div>
          <div>
            <textarea cols="30" rows="10" name='description'
            value={products.description}
            onChange={(e) => setProducts({ ...products, description: e.target.value })}
              className='bg-white text-black border border-gray-500 rounded-lg block w-full p-2.5 focus:outline-none focus:border-blue-800 focus:ring focus:ring-blue-800 focus:ring-opacity-30 placeholder:text-black'
              placeholder='Product description'
              required>
            </textarea>
          </div>
          <div className='flex justify-center'>
            <button type="button"
            onClick={updateProduct}
              class="flex items-center justify-center gap-2  px-8 py-3 rounded-full text-white text-sm tracking-wider font-medium border border-current outline-none bg-blue-600 hover:bg-blue-800 active:bg-blue-700 w-full">
              Update Product </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpdateProducts
