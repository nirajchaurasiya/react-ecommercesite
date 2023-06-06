import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
export default function Home() {
    const [loader, setLoader] = useState(true);
    const [products, setProducts] = useState([])
    const navigate = useNavigate();
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    const fetchAlltheProducts = useCallback(() => {
        axios
            .get(`${REACT_APP_API_URL}/api/productactions/getproducts`)
            .then((data) => {
                setProducts(data.data.data);
                setLoader(false)
            })
            .catch((err) => {
                console.log(err);
                setLoader(false)
            });
    }, [REACT_APP_API_URL]);
    useEffect(() => {
        fetchAlltheProducts()
    }, [fetchAlltheProducts])
    return (
        <div className=''>
            <div className='m-auto lg:w-[85vw]'>
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-xl mb-4 font-medium text-gray-900">ShopKart: Streamlined
                                <br className="hidden lg:inline-block" />E-commerce for Effortless Online Shopping
                            </h1>
                            <p className="mb-8 leading-relaxed">Discover a seamless online shopping experience at ShopSmart. Browse a wide range of products, enjoy secure transactions, and get your purchases delivered right to your doorstep. With user-friendly navigation and trusted sellers, finding what you need has never been easier.</p>
                            <div className="flex justify-center">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-3 text-sm lg:text-lg focus:outline-none hover:bg-indigo-600 rounded lg:px-6" onClick={() => { navigate('/products') }}>Browse Product</button>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img className="object-cover object-center rounded" alt="hero" src="/images/mainimage.png" />
                        </div>
                    </div>
                </section>
                {loader ?
                    <div>
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 mx-auto">
                                <div className="flex flex-wrap w-full mb-6">
                                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Special Garam Masala Products</h1>
                                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                                    </div>
                                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Checkout our premium collection of different variety of Gamra</p>
                                </div>
                                <div className="flex flex-wrap -m-4">
                                    {[1, 2, 3, 4, 5, 6].map(e => {
                                        return <div key={e} role="status" className="xl:w-1/4 md:w-1/2 p-4 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                                <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                            </div>
                                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    })}

                                </div>
                            </div>
                            <div className='flex justify-center mt-10'>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { navigate('/products') }}>More</button>
                            </div>
                        </section>

                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-12 mx-auto">
                                <div className="flex flex-wrap w-full mb-5">
                                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Other Products</h1>
                                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                                    </div>
                                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Checkout our premium collection of different variety of Gamra</p>
                                </div>
                                <div className="flex flex-wrap -m-4">
                                    {[1, 2, 3, 4, 5, 6].map(e => {
                                        return <div key={e} role="status" className="xl:w-1/4 md:w-1/2 p-4 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                                <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                            </div>
                                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    })}

                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { navigate('/products') }}>More</button>
                            </div>
                        </section>

                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-12 mx-auto">
                                <div className="flex flex-wrap w-full mb-5">
                                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Trusted Payment Partners</h1>
                                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -m-4">
                                    <div className="xl:w-1/4 md:w-1/2 p-4 m-auto">
                                        <div className=" p-1 rounded-lg">
                                            <img className="h-40 rounded w-full object-cover object-center" src="/images/khalti.png" alt="content" />
                                        </div>
                                    </div>
                                    <div className="xl:w-1/4 md:w-1/2 p-4 m-auto">
                                        <div className=" p-1 rounded-lg">
                                            <img className="h-40 rounded w-full object-cover object-center" src="/images/esewa.png" alt="content" />
                                        </div>
                                    </div>
                                    <div className="xl:w-1/4 md:w-1/2 p-4 m-auto">
                                        <div className=" p-1 rounded-lg">
                                            <img className="h-40 rounded w-full object-cover object-center" src="/images/imepay.jpg" alt="content" />
                                        </div>
                                    </div>
                                    <div className="xl:w-1/4 md:w-1/2 p-4 m-auto">
                                        <div className=" p-1 rounded-lg">
                                            <img className="h-40 rounded w-full object-cover object-center" src="/images/qpay.png" alt="content" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div> :
                    <div>
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 mx-auto">
                                <div className="flex flex-wrap w-full mb-6">
                                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Special Garam Masala Products</h1>
                                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                                    </div>
                                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Checkout our premium collection of different variety of Gamra</p>
                                </div>
                                <div className="flex flex-wrap -m-4">
                                    {[1, 2, 3, 4, 5, 6].map(e => {
                                        return <div key={e} role="status" className="xl:w-1/4 md:w-1/2 p-4 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                                            <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                                <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                            </div>
                                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    })}

                                </div>
                            </div>
                            <div className='flex justify-center mt-10'>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { navigate('/products') }}>More</button>
                            </div>
                        </section>
                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-12 mx-auto">
                                <div className="flex flex-wrap w-full mb-5">
                                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Other Products</h1>
                                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                                    </div>
                                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Checkout our premium collection of different variety of Gamra</p>
                                </div>
                                <div className="flex flex-wrap -m-4">
                                    {products?.map(e => {
                                        return <div key={e._id} className="xl:w-1/4 md:w-1/2 p-2">
                                            <div className="bg-gray-100 p-3 rounded-lg">
                                                <img className="h-40 rounded w-full object-cover object-center mb-6" src={`${REACT_APP_API_URL}/${e.pictures.split(',')[0]}`} alt="content" />
                                                <h3 className="tracking-widest text-blue-700 text-xs font-medium title-font">Nrs {e.price}</h3>
                                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{e.title.slice(0, 40)}...</h2>
                                                <p className="leading-relaxed text-base">{e.desc.slice(0, 90)}...</p>
                                                <NavLink to={`/product/${e._id}`} type="button" className="text-blue-500 text-sm underline">Expand details</NavLink>
                                            </div>
                                        </div>
                                    })}

                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { navigate('/products') }}>More</button>
                            </div>
                        </section>

                        <section className="text-gray-600 body-font">
                            <div className="container px-5 py-12 mx-auto">
                                <div className="flex flex-wrap w-full mb-5">
                                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Trusted Payment Partners</h1>
                                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -m-4">
                                    <div className="xl:w-1/4 md:w-1/2 p-4 m-auto">
                                        <div className=" p-1 rounded-lg">
                                            <img className="h-40 rounded w-full object-cover object-center" src="/images/khalti.png" alt="content" />
                                        </div>
                                    </div>
                                    <div className="xl:w-1/4 md:w-1/2 p-4 m-auto">
                                        <div className=" p-1 rounded-lg">
                                            <img className="h-40 rounded w-full object-cover object-center" src="/images/esewa.png" alt="content" />
                                        </div>
                                    </div>
                                    <div className="xl:w-1/4 md:w-1/2 p-4 m-auto">
                                        <div className=" p-1 rounded-lg">
                                            <img className="h-40 rounded w-full object-cover object-center" src="/images/imepay.jpg" alt="content" />
                                        </div>
                                    </div>
                                    <div className="xl:w-1/4 md:w-1/2 p-4 m-auto">
                                        <div className=" p-1 rounded-lg">
                                            <img className="h-40 rounded w-full object-cover object-center" src="/images/qpay.png" alt="content" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>}
            </div>
        </div>
    )
}
