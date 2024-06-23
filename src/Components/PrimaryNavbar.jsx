import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { authentication } from '../Config/Firebaseconfig';

function PrimaryNavbar() {
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe(); // used for cleanup
  }, []);

  const history = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = async () => {
    await authentication.signOut();
    localStorage.clear('user');
    setCurrentUser(null);
    history("/");
  };
  const [activeLink, setActiveLink] = useState(null);
  const nav_links = [
    {
      path: "/",
      display: "Home"
    },
    {
      path: "/shop",
      display: "Shop"
    },
    {
      path: "/orders",
      display: "Your Orders"
    },
  ]
  if (currentUser && currentUser.email === 'admin@gmail.com') {
    nav_links.push({
      path: "/dashboard",
      display: "Dashboard",
    });
  }
  const handleNavLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div>
      <header className="relative z-20 w-full border-b shadow-lg border-b-1 border-slate-200 bg-white/90 shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200">
        <div className="relative mx-auto max-w-full px-6 ">
          <nav aria-label="main navigation" className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700" role="navigation">
            <div className='flex items-center gap-2 py-3 text-3xl whitespace-nowrap focus:outline-none mr-20'>
              TechHive
            </div>
            <div className='flex justify-center items-center'>
              <div className="form-control flex-row">
                <input type="text" placeholder="Search" className="input input-bordered w-72 " />
                <button className="btn btn-ghost btn-circle ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <ul role="menubar" aria-label="Select page" className="invisible absolute top-0 left-0 z-[-1] h-screen w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-28 font-medium opacity-0 transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100 ml-16">
              {
                nav_links.map((navlink, index) => (
                  <li role="none" className="flex items-stretch " key={index}>
                    <Link to={navlink.path} className={`flex items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-400 focus:outline-none focus-visible:outline-none lg:px-8 
                ${activeLink === index ? 'text-blue-500' : 'text-slate-700'
                      }`}
                      onClick={() => handleNavLinkClick(index)}> <span>{navlink.display}</span></Link>
                  </li>)
                )
              }
            </ul>
            <div className="flex items-center justify-end px-6 ml-auto lg:ml-0 lg:flex-1 lg:p-0">
              <Link to="/cart" className="relative inline-flex items-center justify-center w-10 h-10 text-lg rounded-full text-blue-700 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" aria-labelledby="title description" role="graphics-symbol">
                  <title id="title">Cart</title>
                  <desc id="description">Cart icon with items</desc>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <span className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-indigo-950 px-1.5 text-sm text-white">
                  3
                </span>
              </Link>
              <Link to='/wishlist' className="mr-6 relative inline-flex items-center justify-center w-10 h-10 text-lg rounded-full text-blue-700">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z">
                <title id="title">Wish List</title>
                <desc id="description">Your wish list items </desc>
                </path></svg>
                <span className="absolute -top-1.5 -right-1.5 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-indigo-950 px-1.5 text-sm text-white">
                  0
                </span>
              </Link>
              {currentUser ? (
                <div className="relative inline-block text-lg">
                {/* Trigger button */}
                <div
                  className="relative inline-flex items-center justify-center w-10 h-10 text-lg text-blue-700 rounded-full bg-white border-2 border-blue-700 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    aria-labelledby="title description"
                    role="graphics-symbol"
                  >
                    <title id="title">User</title>
                    <desc id="description">User icon associated with a particular user account</desc>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                {/* Dropdown menu */}
                {isOpen && (
                  <div className="absolute z-10 right-0 mt-2 w-48 bg-white rounded-md shadow-lg">
                    <div className="py-1">
                      <Link
                        to="/profile"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Your Profile
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
              ) : (
                <Link to="/login">
                  <button type="button" className="py-3 px-5 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-blue-600 text-blue-600 hover:border-white hover:text-white hover:bg-blue-500 disabled:opacity-50 disabled:pointer-events-none">
                    Log in
                  </button>
                </Link>
              )}
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default PrimaryNavbar
