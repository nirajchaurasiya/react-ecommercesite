import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';
import checkServiciabilityPinn from '../checkServiciabilityJSON/checkServiciabilityJSON.json'
const originalProducts = [
    {
        id: 1,
        url: '/images/apple.jpeg',
        price: 40000,
        color: "red",
        category: "gm",
        name: "Apple Laptop 14 pro",
        desc: "Checkout the latest version of Apple Laptop. This has more features than the previous Laptops"
    },
    {
        id: 2,
        url: '/images/coat.jpg',
        price: 4000,
        color: "black",
        category: "op",
        name: "Waterproof Coat",
        desc: "Checkout the latest version of Coat. This has more features than the previous Laptops"
    },
    {
        id: 3,
        url: '/images/computer.jpg',
        price: 30000,
        color: "black",
        category: "sale",
        name: "Apple Computer 14 pro",
        desc: "Checkout the latest version of Apple Laptop. This has more features than the previous Laptops"
    },
    {
        id: 4,
        url: '/images/logo.jpg',
        price: 45000,
        color: "white",
        category: "gm",
        name: "Apple Logo 14 pro",
        desc: "Checkout the latest version of Apple Logo. This has more features than the previous Laptops"
    }
]

export default function ProductDetails() {
    const [showReviews, setShowReviews] = useState(false)
    const [showDesc, setShowDesc] = useState(true);
    const [showImages, setShowImages] = useState('/images/message.png')
    // eslint-disable-next-line
    const [cardClassName, setCardClassName] = useState('border-2 border-gray-900');
    const [serviceabilityMsg, setServiceabilityMsg] = useState('Check serviceability')
    const serviceabilityPin = useRef();
    const products = [
        {
            id: 1,
            url: "/images/apple.jpeg"
        },
        {
            id: 2,
            url: "/images/coat.jpg"
        },
        {
            id: 3,
            url: "/images/computer.jpg"
        },
        {
            id: 4,
            url: "/images/logo.jpg"
        }
    ]
    const checkServiciability = () => {
        const enteredNumber = parseInt(serviceabilityPin.current.value);

        if (checkServiciabilityPinn.includes(enteredNumber)) {
            setServiceabilityMsg('Hurray, we deliver to this pincode.')
        } else {
            setServiceabilityMsg("We don't deliver to this pincode yet.")
        }
    }
    return (
        <div>
            <section className="py-12 sm:py-16 m-auto w-[90vw]">
                <div className="container mx-auto px-4">

                    <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                        <div className="lg:col-span-3 lg:row-end-1">
                            <div className="lg:flex lg:items-start">
                                <div className="lg:order-2 lg:ml-5">
                                    <div className="max-w-xl overflow-hidden rounded-lg">
                                        <img className="h-full w-full max-w-full object-cover" src={showImages} alt="" />
                                    </div>
                                </div>

                                <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                                    <div className="flex flex-row items-start lg:flex-col">
                                        {products.map(e => {
                                            return <button id={e.id} type="button" className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg text-center ${showImages == e.url ? `${cardClassName}` : ""} `} onClick={() => { setShowImages(e.url) }}>
                                                <img className="h-full w-full object-cover" src={e.url} alt="" />
                                            </button>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                            <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">Afro-Brazillian Coffee</h1>

                            <div className="mt-5 flex items-center">
                                <div className="flex items-center">
                                    <svg className="block h-4 w-4 align-middle text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                    <svg className="block h-4 w-4 align-middle text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                    <svg className="block h-4 w-4 align-middle text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                    <svg className="block h-4 w-4 align-middle text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                    <svg className="block h-4 w-4 align-middle text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" className=""></path>
                                    </svg>
                                </div>
                                <p className="ml-2 text-sm font-medium text-gray-500">1,209 Reviews</p>
                            </div>

                            <h2 className="mt-8 text-base text-gray-900">Coffee Type</h2>
                            <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                                Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
                            </div>

                            <div className="mt-3">
                                <div className='flex items-center gap-1 mt-3'>
                                    <input type="number" ref={serviceabilityPin} id="serviceability" className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your pincode" />
                                    <button className='text-xs border text-white font-sans p-1.5 bg-blue-600 rounded-lg' onClick={checkServiciability} >Check</button>
                                </div>
                                <span className='text-xs text-indigo-500'>{serviceabilityMsg}</span>
                            </div>
                            <div className="mt-3 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                                <div className="flex items-end">
                                    <h1 className="text-3xl font-bold">Nrs60.50</h1>
                                </div>

                                <button type="button" className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-blue-600 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-blue-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    Add to cart
                                </button>
                            </div>

                            <ul className="mt-8 space-y-2">
                                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                    <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className=""></path>
                                    </svg>
                                    Free shipping
                                </li>

                                <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                    <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" className=""></path>
                                    </svg>
                                    Cancel Anytime
                                </li>
                            </ul>
                        </div>

                        <div className="lg:col-span-3">
                            <div className="border-b border-gray-300">
                                <nav className="flex gap-4">
                                    <div title="" className=" py-4 text-sm font-medium text-gray-600  hover:text-gray-800 cursor-pointer" onClick={() => { setShowReviews(false); setShowDesc(true) }}> Description </div>

                                    <div title="" className="inline-flex items-center  border-transparent py-4 text-sm font-medium text-gray-600 hover:text-gray-800 cursor-pointer" onClick={() => { setShowReviews(true); setShowDesc(false) }}>
                                        Reviews
                                        <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> 1,209 </span>
                                    </div>
                                </nav>
                            </div>
                            <div className="mt-8 flow-root sm:mt-12">
                                {showReviews && <div>
                                    <div className="flex items-center mb-3">
                                        <svg aria-hidden="true" className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">4.95 out of 5</p>
                                    </div>
                                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">1,209 global ratings</p>
                                    <div className="flex items-center mt-4">
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">5 star</span>
                                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                            <div className="h-5 bg-blue-400 rounded" style={{ width: "70%" }}></div>
                                        </div>
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">70%</span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">4 star</span>
                                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                            <div className="h-5 bg-blue-400 rounded" style={{ width: "17%" }}></div>
                                        </div>
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">17%</span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">3 star</span>
                                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                            <div className="h-5 bg-blue-400 rounded" style={{ width: "8%" }}></div>
                                        </div>
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">8%</span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">2 star</span>
                                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                            <div className="h-5 bg-blue-400 rounded" style={{ width: "4%" }}></div>
                                        </div>
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">4%</span>
                                    </div>
                                    <div className="flex items-center mt-4">
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">1 star</span>
                                        <div className="w-2/4 h-5 mx-4 bg-gray-200 rounded dark:bg-gray-700">
                                            <div className="h-5 bg-blue-400 rounded" style={{ width: "1%" }}></div>
                                        </div>
                                        <span className="text-sm font-medium text-blue-600 dark:text-blue-500">1%</span>
                                    </div>

                                    <br />

                                    <div className='flex flex-col gap-5'>
                                        {[1, 2, 3, 4].map(e => {
                                            return <article className=''>
                                                <hr />
                                                <div key={e} className="flex items-center mt-2 space-x-4">
                                                    <img className="w-10 h-10 rounded-full" src="/images/logo.jpg" alt="" />
                                                    <div className="space-y-1 font-medium  text-black">
                                                        <p>Jese Leos <time datetime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on August 2014</time></p>
                                                    </div>
                                                </div>
                                                <div className="flex items-center mb-1">
                                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
                                                </div>
                                                <p className="mb-5 text-sm text-gray-500 dark:text-gray-400"><p>Reviewed in the United Kingdom on <time datetime="2017-03-03 19:00">March 3, 2017</time></p></p>
                                                <p className="mb-2 text-gray-500 dark:text-gray-400">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
                                                <p className="mb-3 text-gray-500 dark:text-gray-400">It is obviously not the same build quality as those very expensive watches. But that is like comparing a Citroën to a Ferrari. This watch was well under £100! An absolute bargain.</p>

                                                <aside>
                                                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people support this</p>
                                                    <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                                                        <a href="#" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</a>
                                                        <a href="#" className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</a>
                                                    </div>
                                                </aside>
                                            </article>
                                        })}
                                    </div>



                                </div>}
                                {showDesc && <div className=''>
                                    <h1 className="text-3xl font-bold">Delivered To Your Door</h1>
                                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.</p>
                                    <h1 className="mt-8 text-3xl font-bold">From the Fine Farms of Brazil</h1>
                                    <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.</p>
                                    <p className="mt-4">Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p>
                                </div>}


                            </div>
                        </div>
                    </div>
                </div>


                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto">
                        <div className="flex flex-wrap w-full mb-5">
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-3xl text-xl font-medium title-font mb-2 text-gray-900">Recommended Products</h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">People also search this</p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {originalProducts.map(e => {
                                return <div key={e.id} className="xl:w-1/4 md:w-1/2 p-2">
                                    <div className="bg-gray-100 p-3 rounded-lg">
                                        <img className="h-40 rounded w-full object-cover object-center mb-6" src={e.url} alt="content" />
                                        <h3 className="tracking-widest text-blue-700 text-xs font-medium title-font">Nrs {e.price}</h3>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{e.name.slice(0, 40)}...</h2>
                                        <p className="leading-relaxed text-base">{e.desc.slice(0, 90)}...</p>
                                        <NavLink to={`/product/${e.id}`} type="button" className="text-blue-500 text-sm underline">Expand details</NavLink>
                                    </div>
                                </div>
                            })}
                            <div className='flex m-auto'>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More</button>
                            </div>
                        </div>
                    </div>
                </section>

            </section>





        </div>
    )
}
