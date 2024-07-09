import React, { useContext, useEffect, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaUser, FaCartPlus, FaUserTie, FaShoppingBag } from 'react-icons/fa';
import { FaCartShopping } from "react-icons/fa6";
import { AiFillShopping, AiFillPlusCircle, AiFillDelete } from 'react-icons/ai';
import { MdOutlineAttachMoney } from "react-icons/md";
import { Link } from 'react-router-dom';
import myContext from '../../Context/MyContext';
const Dashboard = () => {
  let [isOpen, setIsOpen] = useState(false)
  const context = useContext(myContext)
  const { product, deleteProduct, edithandle, order ,user} = context
  // console.log(product)
  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }
  const handleDelete = (item) => {
    deleteProduct(item);
  };
  return (
    <div className='min-h-screen flex flex-col'>
      <section className="text-gray-600 body-font mt-10 mb-10">
        <div className="container px-5 mx-auto mb-10">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className="  bg-white   px-4 py-3 "  >
                <div className="text-green-600 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <MdOutlineAttachMoney size={58} />
                </div>
                <h2 className="title-font font-medium text-3xl text-black fonts1">10</h2>
                <p className=" text-green-500  font-bold">Total Income</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className=" bg-white px-4 py-3 "  >
                <div className="text-cyan-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <FaShoppingBag size={50} />
                </div>
                <h2 className="title-font font-medium text-3xl text-black fonts1">10</h2>
                <p className=" text-cyan-400  font-bold">Total Orders</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className=" border-1 hover:shadow-blue-600  bg-white border-gray-300  px-4 py-3 rounded-lg"  >
                <div className="text-purple-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <FaUser size={50} />

                </div>
                <h2 className="title-font font-medium text-3xl text-black fonts1">10</h2>
                <p className=" text-purple-500  font-bold">Total Users</p>
              </div>
            </div>
            <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
              <div className=" border-1  bg-white border-gray-300  px-4 py-3 rounded-lg"  >
                <div className=" text-amber-300 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                  <FaCartShopping size={50} />
                </div>
                <h2 className="title-font font-medium text-3xl text-black fonts1">10</h2>
                <p className=" text-amber-400  font-bold">Total Products</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="container mx-auto"> */}
      {/* <div className="tab container mx-auto "> */}
      <Tabs defaultIndex={0} className="" >
        <TabList className="md:flex md:space-x-8 bg-  grid grid-cols-2 text-center gap-3   md:justify-center mb-10 ">
          <Tab>
            <button type="button" className="px-6 py-3 rounded-full text-base tracking-wider font-medium border border-current outline-none bg-purple-600 hover:bg-transparent text-white hover:text-purple-600 transition-all duration-300 ">
              <div className="flex gap-2 items-center">
                <MdOutlineProductionQuantityLimits />Products</div> </button>
          </Tab>
          <Tab>
            <button type="button" className="px-6 py-3 rounded-full text-base tracking-wider font-medium border border-current outline-none bg-cyan-400 hover:bg-transparent text-white hover:text-cyan-400 transition-all duration-300 ">
              <div className="flex gap-2 items-center">
                <AiFillShopping /> Orders
              </div>
            </button>
          </Tab>
          <Tab>
            <button type="button" className="px-6 py-3 rounded-full text-base tracking-wider font-medium border border-current outline-none bg-green-500 hover:bg-transparent text-white hover:text-green-600 transition-all duration-300 ">
              <div className="flex gap-2 items-center">
                <FaUser /> Users
              </div>
            </button>
          </Tab>
        </TabList>
        {/* product  */}
        <TabPanel>
          <div className='  px-4 md:px-0 mb-16'>
            <h1 className=' text-center mb-5 text-4xl font-semibold font-sans' >Product Details</h1>
            <div className=" flex justify-end">
              <Link to='/addproducts'><button
                type="button"
                className="px-5 py-2.5 rounded-lg text-sm tracking-wider font-medium border border-current outline-none bg-black hover:bg-transparent text-white hover:text-black transition-all duration-300 mb-3" > <div className="flex gap-2 items-center">
                  Add Product <FaCartPlus size={20} />
                </div></button></Link>
            </div>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs border border-black text-black uppercase bg-gray-100"  >
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      S.No
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                {product.map((item, index) => {
                  {/* const {title,price,imageUrl,category,date} = item; */ }
                  return (
                    <tbody className=''>
                      <tr key={item.id} className="bg-gray-50 border-b  dark:border-gray-700"  >
                        <td className="px-6 py-4 text-black " >
                          {index + 1}.
                        </td>
                        <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                          <img className='w-16' src={item.imageUrl} alt="img" />
                        </th>
                        <td className="px-6 py-4 text-black " >
                          {item.title}
                        </td>
                        <td className="px-6 py-4 text-black ">
                          {item.price}
                        </td>
                        <td className="px-6 py-4 text-black ">
                          {item.category}
                        </td>
                        <td className="px-6 py-4 text-black ">
                          {item.date}
                        </td>
                        <td className="px-6 py-4">
                          <div className=" flex gap-2">
                            <div className=" flex gap-2 cursor-pointer text-black " >
                              <div onClick={() => handleDelete(item)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                              </div>
                              <Link to={'/updateproducts'}>
                                <div onClick={() => edithandle(item)} >
                                  {/* // editehandle yaha par fields ko set krdega unki info ke saath aur updateproducts route par usko update kr payenge */}
                                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                  </svg>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </td>
                      </tr>

                    </tbody>
                  )
                })}
              </table>

            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="relative overflow-x-auto mb-16">
  <h1 className="text-center mb-5 text-3xl font-semibold underline">Order Details</h1>
  {
    order.map((allorders, index) => {
      return (
        <table key={index} className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-black uppercase bg-gray-200">
            <tr>
              <th scope="col" className="px-6 py-3">Payment Id</th>
              <th scope="col" className="px-6 py-3">Image</th>
              <th scope="col" className="px-6 py-3">Title</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Category</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Address</th>
              <th scope="col" className="px-6 py-3">Pincode</th>
              <th scope="col" className="px-6 py-3">Phone Number</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {allorders.cartItems.map((item, itemIndex) => {
              const { title, imageUrl,price,category,date } = item;
              return (
                <tr key={itemIndex} className="bg-gray-50 border-b dark:border-gray-700">
                  <td className="px-6 py-4 text-black">{allorders.paymentId}</td>
                  <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                    <img className="w-16" src={imageUrl} alt="img" />
                  </th>
                  <td className="px-6 py-4 text-black">{title}</td>
                  <td className="px-6 py-4 text-black">{price}</td>
                  <td className="px-6 py-4 text-black">{category}</td>
                  <td className="px-6 py-4 text-black">{allorders.addressInfo.name}</td>
                  <td className="px-6 py-4 text-black">{allorders.addressInfo.address}</td>
                  <td className="px-6 py-4 text-black">{allorders.addressInfo.pincode}</td>
                  <td className="px-6 py-4 text-black">{allorders.addressInfo.phoneNumber}</td>
                  <td className="px-6 py-4 text-black">{allorders.email}</td>
                  <td className="px-6 py-4 text-black">{allorders.addressInfo.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    })
  }
</div>

        </TabPanel>
        <TabPanel>
          <div className="relative overflow-x-auto mb-10">
            <h1 className=' text-center mb-5 text-3xl font-semibold underline' >User Details</h1>
            
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-black uppercase bg-gray-200 "  >
                <tr>
                  <th scope="col" className="px-6 py-3">
                    S.No
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  {/* <th scope="col" className="px-6 py-3">
                    UID
                  </th> */}
                </tr>
              </thead>
              
              {
                
                  user.map((item, index) => (
                    <tbody >
                    <tr key={index} className="bg-gray-50 border-b dark:border-gray-700">
                      <td className="px-6 py-4 text-black">{index + 1}</td>
                      <td className="px-6 py-4 text-black">{item.name}</td>
                      <td className="px-6 py-4 text-black">{item.email}</td>
                      {/* <td className="px-6 py-4 text-black">{item.uid}</td> */}
                    </tr>
                    </tbody>
                  ))
                  
                }
              
              
            </table>
          </div>
        </TabPanel>

      </Tabs>
      {/* </div> */}
      {/* </div> */}

    </div>
  )
}

export default Dashboard
