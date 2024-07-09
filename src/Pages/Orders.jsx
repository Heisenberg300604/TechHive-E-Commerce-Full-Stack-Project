import React, { useContext } from 'react'
import myContext from '../Context/MyContext'


const Orders = () => {
  const userid = JSON.parse(localStorage.getItem('user')).user.uid
  const context = useContext(myContext)
  const { order } = context;
  return (
    <div className="mx-auto my-4 max-w-6xl px-2 md:my-6 md:px-0">
      <h2 className="text-3xl font-bold">Order Details</h2>
      <div className="mt-3 text-sm">
        Check the status of your orders done through our store !
      </div>
      <div className="mt-8 flex flex-col overflow-hidden rounded-lg border border-gray-300 md:flex-row">
        {
          order.filter(obj => obj.userid == userid).map((order) => {
            return (
              <>
                <div className="w-full border-r border-gray-300 bg-gray-100 md:max-w-xs">
                  <div className="p-8">
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-1">
                      {[
                        ['User ID :', '# '+ order.userid],
                        ['Date', order.date],
                        ['User Email :', order.email],
                        ['Order Status', 'Confirmed'],
                      ].map(([key, value]) => (
                        <div key={key} className="mb-4">
                          <div className="text-sm font-semibold">{key}</div>
                          <div className="text-sm font-medium text-gray-700">{value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="p-8">
                    <ul className="-my-7 divide-y divide-gray-200">
                    {
                  order.cartItems.map((product)=>{
                    return(
                      <li
                          key={product.id}
                          className="flex flex-col justify-between space-x-5 py-7 md:flex-row"
                        >
                          <div className="flex flex-1 items-stretch">
                            <div className="flex-shrink-0">
                              <img
                                className="h-20 w-20 rounded-lg border border-gray-200 object-contain"
                                src={product.imageUrl}
                                alt={product.imageUrl}
                              />
                            </div>

                            <div className="ml-5 flex flex-col justify-between">
                              <div className="flex-1">
                                <p className="text-sm font-bold text-gray-900">{product.title}</p>
                                <p className="mt-1.5 text-sm font-medium text-gray-500">{product.category}</p>
                              </div>

                              {/* <p className="mt-4 text-sm font-medium text-gray-500"> Product Type:  {product.category}</p> */}
                            </div>
                          </div>

                          <div className="ml-auto flex flex-col items-end justify-between">
                            <p className="text-right text-sm font-bold text-gray-900">₹ {product.price}</p>
                          </div>
                        </li>
                    )
                  })
                }
                    </ul>
                  </div>
                </div>
              </>

            )
          })
        }


      </div>


    </div>
  )
}

export default Orders
