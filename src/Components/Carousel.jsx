// import React from "react"

// const Carousel = () => {
    
//     return (
//         <>
//             <div data-hs-carousel='{
//     "loadingClasses": "opacity-0",
//     "isAutoPlay": true
//   }' class="relative">
//                 <div class="hs-carousel relative overflow-hidden w-full h-[600px] bg-white rounded-lg">
//                     <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
//                         <div class="hs-carousel-slide relative">
//                             <div class="flex justify-center h-full">
//                                 <img src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" class="object-cover w-full h-full" />
//                                 <div class="absolute bottom-8 left-0 right-0 flex items-center justify-center text-white text-3xl font-bold bg-black bg-opacity-20">
//                                     MacBooks on Special Offer ! Order now !!!
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="hs-carousel-slide relative">
//                             <div class="flex justify-center h-full">
//                                 <img src="https://images.unsplash.com/photo-1611078489935-0cb964de46d6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" class="object-cover w-full h-full" />
//                                 <div class="absolute bottom-8 left-0 right-0 flex items-center justify-center text-white text-3xl font-bold bg-black bg-opacity-10">
//                                     Get Laptops on 20% off
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="hs-carousel-slide relative">
//                             <div class="flex justify-center h-full">
//                                 <img src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Slide 1" class="object-cover w-full h-full" />
//                                 <div class="absolute bottom-8 left-0 right-0 flex items-center justify-center text-white text-3xl font-bold bg-black bg-opacity-30">
//                                     We Have Authentic Collection of Apple Products 
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">

//                     </div>
//                 </div>

//                 <button type="button" class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10">
//                     <span class="text-2xl" aria-hidden="true">
//                         <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//                             <path d="m15 18-6-6 6-6"></path>
//                         </svg>
//                     </span>
//                     <span class="sr-only">Previous</span>
//                 </button>
//                 <button type="button" class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10">
//                     <span class="sr-only">Next</span>
//                     <span class="text-2xl" aria-hidden="true">
//                         <svg class="flex-shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//                             <path d="m9 18 6-6-6-6"></path>
//                         </svg>
//                     </span>
//                 </button>

//                 <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
//                     <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
//                     <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
//                     <span class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
//                 </div>
//             </div>

//         </>
//     )
// }

// export default Carousel
import React from "react";
import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="overflow-hidden relative h-[800px] rounded-lg w-full">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img src={s} />;
        })}
      </div>

      <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}