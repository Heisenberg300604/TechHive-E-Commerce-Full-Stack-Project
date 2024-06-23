import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { authentication, fireDB } from '../Config/Firebaseconfig'
import Loader from '../Components/Loader'
import { Timestamp, addDoc, collection } from 'firebase/firestore'

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useNavigate();
  const handleSignup = () => {
    if (name == "" || email == "" || password == "") {
      toast.warning("All fields must be Filled !")
    }
    setLoading(true)
    createUserWithEmailAndPassword(authentication, email, password)
      .then(() => {
        const user = {
          name: name,
          email: email,
          password: password,
          mobile_number : number,
          time: Timestamp.now()
        }
        const userRef = collection(fireDB, "users")
        addDoc(userRef, user);
        toast.success("User created ! ");
        setLoading(false)
        history('/');
      })
      .catch((error) => {
        toast.error(error.code)
        setLoading(false)
        setName("")
        setEmail("")
        setPassword("")
      })
  }
  const handleGoogleSignUp = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider).then(() => {
      toast.success("Signup Successfull  ! ");
      setLoading(false);
      history('/shop') // redirecting to Home page
    })
      .catch(err => {
        // alert(err.code);
        toast.error("Login failed !")
        setLoading(false);
      })
  }
  return (
    <div>
      {loading ?
        <div className='h-screen bg-cover bg-center flex items-center justify-center'><Loader /></div> :
        <section>
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              <h2 className="text-center text-2xl font-bold leading-tight text-black">
                Sign up to create account
              </h2>
              <div className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="text-base font-medium text-gray-900">
                      Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Full Name"
                        id="name"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="text-base font-medium text-gray-900">

                      Mobile Number
                    </label>
                    <div className="mt-2">
                      <input
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="tel"
                        maxLength="10"
                        placeholder="Mobile No."
                        id="mobilenumber"
                        pattern="[0-9]{10}" 
                        required
                      ></input>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="text-base font-medium text-gray-900">

                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="email"
                        placeholder="Email"
                        id="email"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="text-base font-medium text-gray-900">

                        Password
                      </label>
                    </div>
                    <div className="mt-2">
                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="password"
                        placeholder="Password"
                        id="password"
                      ></input>
                    </div>
                  </div>
                  
                  <div>
                    <button
                      onClick={handleSignup}
                      on
                      type="button"
                      className="inline-flex w-full items-center justify-center rounded-md bg-blue-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-blue-600"
                    >
                      Create Account <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-3 space-y-3">
                <button
                  onClick={handleGoogleSignUp}
                  type="button"
                  className="relative inline-flex w-full items-center justify-center rounded-md border border-gray-400 bg-white px-3.5 py-2.5 font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
                >
                  <span className="mr-2 inline-block">
                    <svg
                      className="h-6 w-6 text-blue-600"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                    </svg>
                  </span>
                  Sign up with Google
                </button>
                <p className="mt-2 text-center text-base text-gray-600">
                  Already have an account?
                  <Link
                    to="/login"
                    title=""
                    className="font-medium text-blue-800 transition-all duration-200 hover:underline"
                  >
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      }
    </div>
  )
}

export default Signup
