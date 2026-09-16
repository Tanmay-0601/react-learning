import React from 'react'
import {Link,NavLink} from 'react-router-dom'
 
export default function Header(){

    return(
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-gray-500 border-gray-200 px-2 sm:px-4 py-2.5 rounded shadow-sm">
          
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                    <img
                        src="https://flowbite.com/docs/images/logo.svg"
                        className="mr-3 h-12"
                        alt="Flowbite "

                    
                    
                    /></Link>

                    <div className="flex items-center lg:order-2">
                        <Link 
                        to="#"
                        className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 mr-2 dark:hover:bg-gray-700 focus:outline-none ">
                            Login
                        </Link>
                         <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                         >
                            Get Started
                         </Link>

                    </div>
                    <div 
                    className="flex items-center w-full lg:w-auto lg:order-1"
    id="mobile-menu-2">

                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                 to="/"
                                  className={({isActive}) =>
                                    `block py-2 px-3  duration-200 font-semibold ${isActive?"text-orange-700":"text-gray-700"} hover:text-orange-600 lg:p-0 `
                                  }
                                
                                >
                                Home
                                </NavLink>
                            </li>
                              <li>
                                <NavLink
                                 to="/about"
                                  className={({isActive}) =>
                                    `block py-2 px-3 duration-200 font-semibold ${isActive?"text-orange-700":"text-gray-700"} hover:text-orange-600 lg:p-0`
                                  }
                                
                                >
                                About
                                </NavLink>
                            </li>
                              <li>
                                <NavLink
                                 to="/contact"
                                  className={({isActive}) =>
                                    `block py-2 px-3  duration-200 font-semibold ${isActive?"text-orange-700":"text-gray-700"} hover:text-orange-600 lg:p-0 `
                                  }
                                
                                >
                                Contact
                                </NavLink>
                            </li>
                             <li>
                                <NavLink
                                 to="/github"
                                  className={({isActive}) =>
                                    `block py-2 px-3  duration-200 font-semibold ${isActive?"text-orange-700":"text-gray-700"} hover:text-orange-600 lg:p-0 `
                                  }
                                
                                >
                                Github
                                </NavLink>
                            </li>
                        </ul>

                    </div>

                </div>

                </nav>
                
        </header>
    )
}
