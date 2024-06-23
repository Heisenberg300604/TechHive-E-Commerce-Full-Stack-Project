import React from 'react'
import PrimaryNavbar from './PrimaryNavbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    // <div>
    //   <PrimaryNavbar />
    //   <Outlet/>
    //   <Footer />
    // </div>
    <div className="flex flex-col min-h-screen">
      <PrimaryNavbar />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
