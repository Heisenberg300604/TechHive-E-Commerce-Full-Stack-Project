import React, { useContext, useEffect } from 'react'
import myContext from '../Context/MyContext'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../Redux/cartSlice';
import { toast } from 'react-toastify';
import { Heart, ShoppingCart } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const ProductCard = () => {
    const context = useContext(myContext)
    const { product, searchkey, filterType, filterPrice } = context;
    const navigate = useNavigate();
    // console.log(product) // gives all products

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart);

    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Product added to cart !")
    }

    const handleProductClick = (item) => {
        // console.log(item.id)
        navigate(`/productinfo/${item.id}`)
    }
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
    return (
        <div>
            <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
                {product.filter((obj) => obj.title.toLowerCase().includes(searchkey))
                    .filter((obj) => obj.category.toLowerCase().includes(filterType))
                    .filter((obj) => obj.price.includes(filterPrice)).map((item, index) => (
                        <div key={item.id} className="flex flex-col rounded-lg border h-full"
                        onClick={() => handleProductClick(item)}>
                            <div className='w-full flex justify-center items-center'>
                                <img
                                    src={item.imageUrl}
                                    alt={item.title}
                                    className="aspect-[16/9] w-48 rounded-lg md:aspect-auto md:h-[300px] lg:h-[200px] p-3"
                                />
                            </div>
                            <div className="flex flex-col p-4 flex-grow">
                                <div className='text-center'>
                                    <h1 className="inline-flex items-center text-center text-lg font-semibold">{item.title}</h1>
                                    <div className="mt-4">
                                        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                                            #{item.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="text-xl text-black pl-1 text-center font-semibold mt-1 flex-grow">₹{item.price}</div>
                                <button
                                    onClick={() => addCart(item)}
                                    type="button"
                                    className="mt-4 w-full flex items-center justify-center gap-2 rounded-md bg-blue-700 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                >
                                    <ShoppingCart className="h-5 w-5" />
                                    <span>Add to Cart</span>
                                </button>

                            </div>
                        </div>
                    ))}
            </div>
        </div>

    )
}

export default ProductCard
