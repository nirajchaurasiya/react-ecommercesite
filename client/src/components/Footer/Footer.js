import React from 'react'
import { NavLink } from 'react-router-dom'
import category from '../CategoryJSON/category.json'
export default function Footer() {
    return (
        <div>
            <footer className="text-gray-600 body-font">


                <div className="container px-5 py-24 mx-auto w-[90vw] text-sm">
                    <div className="flex flex-wrap md:text-left text-center -mb-24 -mx-4">
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Quick Links</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <NavLink to="/" className="text-gray-600 hover:text-gray-800">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className="text-gray-600 hover:text-gray-800">About</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/contact" className="text-gray-600 hover:text-gray-800">Contact</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/services" className="text-gray-600 hover:text-gray-800">Services</NavLink>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Auth</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <NavLink to="/login" className="text-gray-600 hover:text-gray-800">Login</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/register" className="text-gray-600 hover:text-gray-800">Register</NavLink>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Notices</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <NavLink to="/user/support/termsandconditions"
                                        className="text-gray-600 hover:text-gray-800">Terms and Conditions</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/user/support/policy"
                                        className="text-gray-600 hover:text-gray-800">Privacy</NavLink>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Help & Support</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <NavLink to="/user/support/faq" className="text-gray-600 hover:text-gray-800">FaQ</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/user/support/help" className="text-gray-600 hover:text-gray-800">Help</NavLink>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Contact Number</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <p className="text-gray-600 hover:text-gray-800">+977 9829279569</p>
                                </li>
                                <li>
                                    <p className="text-gray-600 hover:text-gray-800">+977 9811113421</p>
                                </li>
                                <li>
                                    <p className="text-gray-600 hover:text-gray-800">+977 9828758167</p>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Business Email</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a href="mailto: onlinestore.shopofficial@gmail.com"
                                        className="text-gray-600 hover:text-gray-800">onlinestore.shopofficial@gmail.com</a>
                                </li>
                                <li>
                                    <a href="mailto: nirajkumarchaurasiya6@gmail.com"
                                        className="text-gray-600 hover:text-gray-800">nirajkumarchaurasiya6@gmail.com</a>
                                </li>
                            </nav>

                        </div>
                        <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Category</h2>
                            <nav className="list-none mb-10">
                                {
                                    category.map((e, index) => {
                                        return <li key={index}>
                                            <NavLink to={`/product/category/${e.short}`}
                                                className="text-gray-600 hover:text-gray-800">{e.name}</NavLink>
                                        </li>
                                    })
                                }
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap justify-between items-center flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© {new Date().getFullYear()} OnlineStore.shop —
                            <span className="text-gray-600 ml-1"
                            >@OnlinStore.shop</span>
                        </p>
                        <span className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-between md:justify-start md:w-auto">
                            <span className="cursor-pointer text-gray-500">
                                <p onClick={() => { window.open("https://facebook.com/binary.baron0", "_blank"); }} target='_blank'>
                                    <svg fill="blue" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </p>
                            </span>
                            <span className="ml-3  cursor-pointer text-gray-500">
                                <p onClick={() => { window.open("https://facebook.com/binary.baron0", "_blank"); }} target='_blank'>
                                    <svg fill="indigo" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        className="w-5 h-5" viewBox="0 0 24 24">
                                        <path
                                            d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z">
                                        </path>
                                    </svg>
                                </p>
                            </span>
                            <span className="ml-3  cursor-pointer text-gray-500">
                                <p onClick={() => { window.open("https://facebook.com/binary.baron0", "_blank"); }} target='_blank'>
                                    <svg fill="none" stroke="red" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </p>
                            </span>
                            <span className="ml-3  cursor-pointer text-gray-500">
                                <p onClick={() => { window.open("https://facebook.com/binary.baron0", "_blank"); }} target='_blank'>
                                    <svg fill="black" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                        strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none"
                                            d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z">
                                        </path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </p>
                            </span>
                        </span>
                        <span className="ml-3 text-gray-500">
                            <img className="lg:w-8 sm:w-24" src="/images/cod.png" alt="description" />
                        </span>
                    </div>
                </div>
            </footer>
        </div>
    )
}
