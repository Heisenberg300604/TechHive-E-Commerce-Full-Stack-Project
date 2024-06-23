import React from 'react'
import Filter from '../Components/Filter'
import ProductCard from '../Components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, deleteFromCart } from '../Redux/cartSlice'
const Shop = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state)=> state.cart);
  console.log(cartItem); 
  const addCart = ()=>{
    dispatch(addToCart("shirt"));
  }

  const deleteCart = ()=>{
    dispatch(deleteFromCart("shirt"));
  }
  return (
    <div>
      {/* <div className='flex gap-5 justify-center mt-5'>
        <h2>Temp  for Creating and Testing Redux</h2>
        <button className='p-3 bg-white border border-blue-700 rounded-lg' onClick={()=> addCart()}>ADD</button>
        <button className='p-3 bg-white border border-blue-700 rounded-lg' onClick={()=> deleteCart()}>DELETE</button>
      </div> */}
      <Filter/>
      <ProductCard/>
    </div>
  )
}

export default Shop
