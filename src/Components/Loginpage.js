import React from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function Loginpage() {
  return (
    <>
        
    <div className='w-screen h-screen md:grid md:grid-cols-3  text-white'>

<div className='bg-black centered text-6xl '> Board.</div>

{/* sign in page  */}

 <div className='bg-gray-200 centered w-full col-span-2 text-black'> 
 
 <div class="px-4 md:px-0 lg:w-6/12">
              <div class="md:mx-6 md:p-12">
                {/* <!--Logo--> */}
                <div class="">
                  
                  <h1 class=" mt-1 pb-1 text-xl font-bold text-black text-2xl">
                    Sign In
                  </h1>
                  <p class="mb-4">Sign in to your account</p>
                 <div className='grid grid-cols-2'>
                   <button type="button" class="text-gray-400 bg-white hover:bg-gray-100 border border-gray-200  focus:outline-none  font-thin rounded-lg text-xs px-3 py-1 text-center inline-flex items-center    dark:hover:bg-gray-700 mr-2 mb-2">
<span className='pe-2'> <FcGoogle/></span> Sign in with Google
</button>
                 <button type="button" class="text-gray-400 bg-white hover:bg-gray-100 border border-gray-200  focus:outline-none  font-thin rounded-lg text-xs px-3 py-1 text-center inline-flex items-center    dark:hover:bg-gray-700 mr-2 mb-2">
<span className='pe-2'> <FaApple/></span>  Sign in with Google
</button>
         
</div>
                 
                </div>

                <form className='bg-white rounded-2xl pt-6 px-4 mt-3'>
                 
                  {/* <!--Username input--> */}
                  <div class="relative mb-2" data-te-input-wrapper-init>
                  <div>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="abcd@gmail.com" required />
        </div>
                    
                  </div>

                  {/* <!--Password input--> */}
                  <div class="mb-4">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required/>
    </div> 

                  {/* <!--Submit button--> */}
                  <div class="mb-6 pb-1 pt-1 text-blue-500 grid">
                  <a href="#!">Forgot password?</a>
                  <button type="button" class="text-white bg-black mt-2 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-4 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign In</button>
                    
                    
                  </div>

                  {/* <!--Register button--> */}
                                 </form>
              
                                 <div class="flex items-center px-2  ">
                    <p class=" mr-2">Don't have an account?</p>
                    <a className='text-blue-500' href='#'> Register</a>
                  </div>

              </div>
            </div>
  </div>
    </div>
    
    </>
  )
}
