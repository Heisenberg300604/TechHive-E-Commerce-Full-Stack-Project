import React from 'react'
import HeroImage from '../assets/Images/hero_image1/HeroImage.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='flex h-screen'>
  {/* Left side */}
  <div className='flex-1 flex flex-col justify-center items-start bg-white px-8'>
    <h1 className='text-5xl font-bold mb-4 text-left'>Welcome to TechHive</h1>
    <p className='text-lg text-gray-700 text-left mb-4'>Explore the digital universe with TechHive, your one-stop destination for all things tech. From sleek mobile phones to powerful laptops and stylish smartwatches, we've got you covered. Shop with confidence and discover endless possibilities at TechHive.</p>
    <Link to="/shop"> <button className="btn btn-primary px-4 py-2 w-60 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 text-white">  Shop Now 
    <svg class="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    <path d="M5 12h14"></path>
    <path d="m12 5 7 7-7 7"></path>
  </svg>
    </button> </Link>
  </div>

  {/* Right side */}
  <div className='flex-1 bg-gray-200'>
    <img src={HeroImage} className='object-cover w-full h-full bg-transparent' alt='Hero' />
  </div>
</div>
  )
}

export default Hero
