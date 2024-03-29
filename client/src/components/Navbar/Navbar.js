import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { AuthContext } from '../../Context/AuthContext';

export default function Navbar() {
    const { user } = useContext(AuthContext);
    const [uid, setUid] = useState('');
    const navigate = useNavigate();
    const searchQuery = useRef();

    const handleSearchQuery = () => {
        const trimmedValue = searchQuery.current.value.trim();
        if (trimmedValue !== "") {
            navigate('/search/' + trimmedValue);
        }
    };

    useEffect(() => {
        if (localStorage.getItem('shopkartStore')) {
            const uid = localStorage.getItem('shopkartStore').replace(/"/g, '');
            setUid(uid);
        }
    }, []);

    const handleMobileMenuToggle = () => {
        const mobileMenu = document.getElementById('mobile-menu-2');
        mobileMenu.classList.toggle('hidden');
    };

    return (
        <>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 z-10 top-0 sticky" style={{ zIndex: "100" }}>
                <div className="flex flex-wrap items-center justify-between mx-auto pr-2 pl-1 pb-3 pt-3">
                    <NavLink to="/" className="flex items-center">
                        <img src="/images/logo.jpg" className="h-8 mr-3 rounded-full" alt="Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">OnlineStore.shop</span>
                    </NavLink>
                    <div className="flex items-center md:order-2">
                        <div className="">
                            <li className="flex items-center">
                                <NavLink
                                    to="/cart"
                                    className="-m-6 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 text-2xl"
                                >
                                    {/* <AiOutlineShoppingCart /> */}
                                    <img src="/images/cart.jpg" className='w-8 h-8' alt='cart' />
                                </NavLink>
                            </li>
                        </div>
                        <button
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                            onClick={handleMobileMenuToggle}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="items-center hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-5 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-5 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <NavLink
                                    to="/"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Contact
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/category"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Category
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/products"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/updates"
                                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Updates
                                </NavLink>
                            </li>
                            {user ? (
                                <li>
                                    <NavLink
                                        to={`/profile/${uid}`}
                                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        Profile
                                    </NavLink>
                                </li>
                            ) : (
                                <li>
                                    <NavLink
                                        to="/login"
                                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    >
                                        Login
                                    </NavLink>
                                </li>
                            )}
                            <div className=''>
                                <div className="flex items-center bg-transparent border border-gray-500 rounded-md">
                                    <input type="search" ref={searchQuery} placeholder="Search" className="bg-transparent text-black dark:text-white rounded-l px-4 py-2 focus:outline-none" />
                                    <button className="block py-2 pl-3 pr-4 text-gray-900 mr-1 rounded text-2xl hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" onClick={handleSearchQuery} ><AiOutlineSearch /></button>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

