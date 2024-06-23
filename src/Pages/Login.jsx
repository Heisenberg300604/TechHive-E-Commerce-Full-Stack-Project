import React from 'react'
import { useState } from 'react'
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authentication } from '../Config/Firebaseconfig.js';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../Components/Loader.jsx';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const history = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUsingEmail = () => {
    if(email == "" || password == ""){
      toast.info(" All Fields must be filled !",{ position: "bottom-right" });
    }
    setLoading(true);
    signInWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        // const user = userCredential.user;
        localStorage.setItem('user', JSON.stringify(userCredential)); // storing user data in localstorage
        toast.success("Login Successfull  ! ");
        history('/shop');
      })
      .catch((error) => {
        toast.error( error.code );
        setLoading(false);
        setEmail("");
        setPassword("");
      })
  }

  const handleGoogleSignUp = (e) => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider).then(() => {
      toast.success("Login Successfull  ! ");
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
    <div className="h-screen bg-cover bg-center flex items-center justify-center " >
      {
        loading ? (
          <Loader /> //true condition
        ) : ( // false condition
          <div className='flex flex-col items-center justify-center h-screen xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md'>
            <h2 className="text-center text-2xl mb-7 font-bold leading-tight text-black">
              Welcome To TechHive
            </h2>
            <div className="w-full max-w-md mx-auto border border-indigo-900 rounded-md p-5 backdrop-blur-sm bg-white">
              <div>
                <label className="block mb-2 text-sm font-medium text-black ">
                  Your Email
                </label>
                <input placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  class=" border border-gray-30 text-indigo-700 sm:text-sm rounded-lg block w-full p-2.5" />
              </div>
              <div className='mt-2'>
                <label class="block mb-2 text-sm text-black font-medium ">

                  Password
                </label>
                <input
                  value={password}
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  class=" border border-gray-300 text-indigo-700 sm:text-sm rounded-lg block w-full p-2.5" placeholder="Enter Password"
                  type="password" />
              </div>
              <div className='p-3'>
                <button onClick={loginUsingEmail} class="w-full mb-4 mt-1 bg-blue-500 hover:bg-blue-600 active:scale-95  font-medium rounded-lg text-sm px-5 py-2.5 text-center text-white" >
                  Login
                </button>
                <div class="flex items-center mb-4">
                  <div class="w-full border-t border-gray-300"></div>
                  <div class="px-4 text-black">or</div>
                  <div class="w-full border-t border-gray-300"></div>
                </div>
                <button onClick={handleGoogleSignUp} className="w-full flex items-center hover:bg-blue-600 justify-center gap-2 p-2 rounded-md  text-sm font-semibold text-white bg-[#4285F4]  active:scale-95 px-5 py-2.5">
                  <svg class="w-4 h-4 mr-1" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
                    <path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
                  </svg>
                  Login with Google
                </button>

              </div>
              <p className="mt-2 text-center text-base text-gray-600">
                Don't have an account ?{' '}
                <Link
                  to="/signup"
                  title=""
                  className="font-medium text-blue-800 transition-all duration-200 hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
            
          </div>
        )
      }


    </div>
  )
}

export default Login
