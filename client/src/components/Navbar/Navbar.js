import React, { useContext, useRef } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { AuthContext } from '../../Context/AuthContext';
export default function Navbar() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const searchQuery = useRef();
    const handleSearchQuery = () => {
        const trimmedValue = searchQuery.current.value.trim();
        if (trimmedValue !== "") {
            navigate('/search/' + trimmedValue);
        }
    }

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 z-10 top-0 sticky">
                <div className=" flex flex-wrap items-center justify-between mx-auto pr-2 pl-1 pb-3 pt-3">
                    <NavLink to="/" className="flex items-center">
                        <img src="/images/logo.jpg" className="h-8 mr-3 rounded-full" alt="Flowbite Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ShopKart</span>
                    </NavLink>
                    <div className="flex items-center md:order-2">
                        <div className=''>
                            <li className='flex items-center'>
                                <p className='text-black -mt-5 bg-white rounded-full fixed -ml-2 pl-1.5 pr-1.5 w-3 h-3 items-center flex justify-center' style={{ fontSize: "9px" }}>9</p>
                                <NavLink to="/cart" className="-m-5 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-2xl"><AiOutlineShoppingCart /></NavLink>
                            </li>
                        </div>
                        <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>

                    <div className="items-center hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-5 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-5 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink to="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to="/products" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Products</NavLink>
                            </li>
                            <li>
                                <NavLink to="/updates" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Updates</NavLink>
                            </li>

                            {user ? <li>
                                <NavLink to="/profile" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Profile</NavLink>
                            </li> : <li>
                                <NavLink to="/login" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Login</NavLink>
                            </li>}
                            {/* <NavLink to="/search" className="flex items-center justify-center py-2 pl-3 pr-4 text-xl text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><AiOutlineSearch /></NavLink> */}
                            <li>
                                <label for="search" className=" text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                                <div className="relative flex items-center gap-1">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                                    </div>
                                    <input ref={searchQuery} type="search" id="search" className="block w-full p-1.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                                    <button type="submit" className="text-white right-2.5 bottom-0.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm pt-2 pb-2 pr-2 pl-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleSearchQuery} ><AiOutlineSearch /></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


        </>
    )
}
