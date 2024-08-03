import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
      <footer className="w-full text-slate-500">
        <div className="border-t border-slate-200 bg-slate-100 pt-16 pb-12 text-sm pl-24">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-product-5-logo-sub"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-product-5-logo-sub"
                >
                  Quick Links
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      to='/shop'
                      className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600"
                    >
                      Shop
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to='/'
                      className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to='/wishlist'
                      className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600"
                    >
                      Your WishList
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to='/cart'
                      className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600"
                    >
                      Cart
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-docs-5-logo-sub"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-docs-5-logo-sub"
                >

                  User
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link
                      to='/login'
                      className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600"
                    >
                      Login
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to='/signup'
                      className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600"
                    >
                      Register
                    </Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to='/admin'
                      className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600"
                    >
                      Admin
                    </Link>
                  </li>
                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-about-5-logo-sub"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-about-5-logo-sub"
                >
                  About Creator
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <a
                      href="https://github.com/Heisenberg300604/"
                      target='blank'
                      className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600"
                    >
                      Github
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="https://www.linkedin.com/in/nibedan-pati-2139b3277/"
                      target='blank'
                      className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="https://leetcode.com/u/Nibedan/"
                      target='blank'
                      className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600"
                    >
                      LeetCode Profile
                    </a>
                  </li>
                  <li className="mb-2 leading-6">
                    <a
                      href="https://x.com/NibedanPati"
                      target='blank'
                      className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600"
                    >
                      Twitter
                    </a>
                  </li>

                </ul>
              </nav>
              <nav
                className="col-span-2 md:col-span-4 lg:col-span-3"
                aria-labelledby="footer-get-in-touch-5-logo-sub"
              >
                <h3
                  className="mb-6 text-base font-medium text-slate-700"
                  id="footer-get-in-touch-5-logo-sub"
                >
                  More
                </h3>
                <ul>
                  <li className="mb-2 leading-6">
                    <Link to='/orders' className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600">Your Orders</Link>
                  </li>
                  <li className="mb-2 leading-6">
                    <Link
                      to="/profile"
                      className="transition-colors duration-300 hover:text-blue-500 focus:text-blue-600"
                    >
                      Profile
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-200 bg-slate-100 py-4 text-sm">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-4 items-center gap-6 md:grid-cols-8 lg:grid-cols-12">
              <a
                id="WindUI-5-logo-sub"
                aria-label="WindUI logo"
                aria-current="page"
                className="col-span-1 flex items-center gap-2 whitespace-nowrap text-base font-medium leading-6 focus:outline-none md:col-span-4 lg:col-span-6"
                href="javascript:void(0)"
              >
                <img className='w-[40px] h-[40px]' src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/fast-cart.png" alt="fast-cart" />
                TechHive
              </a>
              <nav
                className="col-span-3 md:col-span-4 lg:col-span-6"
                aria-labelledby="subfooter-links-5-logo-sub"
              >
              </nav>
            </div>
          </div>
        </div>
        <div className="py-4 text-sm border-t border-blue-200/90 bg-blue-100/80">
          <div className="container px-6 mx-auto">
            <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <div className="col-span-2 md:col-span-4 lg:col-span-6">Copyright &copy; 2024 | Nibedan</div>
              <nav aria-labelledby="footer-social-links-light" className="col-span-2 text-right md:col-span-4 lg:col-span-6">
                <h2 className="sr-only" id="footer-social-links-light">Social Media Links</h2>
                <ul className="flex items-center justify-end gap-4">
                  <li>
                    <a href="https://www.instagram.com/nibedan_3006/" target='blank' className="transition-colors duration-300 hover:text-blue-600 focus:text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                        <title id="title-tb03-light">Instagram handle</title>
                        <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/NibedanPati" target='blank' className="transition-colors duration-300 hover:text-blue-600 focus:text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                        <title id="title-tb03-light">Twitter handle</title>
                        <path fill="#212121" fill-rule="evenodd" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28	c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z" clip-rule="evenodd"></path><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path><polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/8851558046" target='blank' className="transition-colors duration-300 hover:text-blue-600 focus:text-blue-700">
                      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                      <title id="title-tb03-light">Contact me on Whatsapp</title>
                        <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fill-rule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clip-rule="evenodd"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
