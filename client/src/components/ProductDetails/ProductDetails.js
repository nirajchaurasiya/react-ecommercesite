import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import checkServiciabilityPinn from '../checkServiciabilityJSON/checkServiciabilityJSON.json'
import axios from 'axios';
export default function ProductDetails() {
    const [fetchProductsFromId, setFetchProductsFromId] = useState([])
    const [allProducts, setAllProducts] = useState([])
    const [showReviews, setShowReviews] = useState(false)
    const [showDesc, setShowDesc] = useState(true);
    const [showImages, setShowImages] = useState('/images/message.png')
    const [productDoesntExist, setProductDoesntExist] = useState(false)
    const [loader, setLoader] = useState(true)
    const [loader2, setLoader2] = useState(true);
    const [addToCartValue, setAddToCartValue] = useState('Add to Cart')
    // eslint-disable-next-line
    const [cardClassName, setCardClassName] = useState('border-2 border-gray-900');
    const [serviceabilityMsg, setServiceabilityMsg] = useState('Check serviceability')
    const serviceabilityPin = useRef();
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    const { pid } = useParams();
    const checkServiciability = () => {
        const enteredNumber = parseInt(serviceabilityPin.current.value);

        if (checkServiciabilityPinn.includes(enteredNumber)) {
            setServiceabilityMsg('Hurray, we deliver to this pincode.')
        } else {
            setServiceabilityMsg("We don't deliver to this pincode yet.")
        }
    }

    const fetchAlltheProducts = () => {
        axios.get(`${REACT_APP_API_URL}/api/productactions/getproducts`)
            .then((data) => {
                setAllProducts(data.data.data)
                setLoader2(false);
            })
            .catch((err) => {
                console.log(err)
                setLoader(false);
            })
    }
    const fetchTheProductWithId = (pid) => {
        try {
            setShowImages('/images/message.png')
            axios.get(`${REACT_APP_API_URL}/api/productactions/getproducts/${pid}`)
                .then((data) => {
                    setFetchProductsFromId(data.data.data)
                    if (data.data.data === undefined) {
                        setProductDoesntExist(true);
                    }
                    setLoader(false)
                })
                .catch((err) => {
                    console.log(err)
                    setLoader(false);
                })
        } catch (error) {
            console.log(error)
        }
        setAddToCartValue('Add to Cart')
    }
    const addtoCart = () => {
        const cartItem = {
            name: fetchProductsFromId.title,
            pid: fetchProductsFromId._id,
            image: fetchProductsFromId?.pictures?.split(',')[0],
            price: fetchProductsFromId.price
        };

        if (localStorage) {
            // Retrieve the current cart value from localStorage
            const storedCartValue = localStorage.getItem('shopkartCarts');
            const parsedCartValue = storedCartValue ? JSON.parse(storedCartValue) : [];
            const cartValue = JSON.parse(storedCartValue);
            if (cartValue) {
                if ((cartValue.filter(e => e.pid === pid).length) >= 5) {
                    alert("You can't add more than 5 items of this type");
                    return;
                }
                else {
                    const updatedCartValue = [...parsedCartValue, cartItem];
                    console.log(updatedCartValue)
                    localStorage.setItem('shopkartCarts', JSON.stringify(updatedCartValue));
                    const localStoreLength = JSON.parse(localStorage.getItem('shopkartCarts'))
                    setAddToCartValue(`Added to the cart ${localStoreLength.length}`);
                    // window.location.reload();
                }
            } else {
                const updatedCartValue = [...parsedCartValue, cartItem];
                console.log(updatedCartValue)
                localStorage.setItem('shopkartCarts', JSON.stringify(updatedCartValue));
                const localStoreLength = JSON.parse(localStorage.getItem('shopkartCarts'))
                setAddToCartValue(`Added to the cart ${localStoreLength.length}`);
                // window.location.reload();
            }
        }

    };

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        fetchAlltheProducts()
        fetchTheProductWithId(pid)
    }, [pid])
    return (
        <div>
            {loader ?
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
                                        <div className="flex flex-row gap-5 items-start lg:flex-col">
                                            {[1, 2, 3, 4]?.map(e => {
                                                return <div key={e} role="status" className="flex-0 aspect-square mb-3 lg:h-24 h-16 overflow-hidden text-center bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                                                    <svg className="h-full w-full object-cover text-gray-200 dark:text-gray-600" aria-hidden="true" fill="currentColor" viewBox="0 0 384 512"></svg>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                                <div role="status" className="max-w-sm animate-pulse">
                                    <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                                </div>


                                <h2 className="mt-2 text-base text-gray-900"><div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div></h2>
                                <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                                    <div className="w-full">
                                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>

                                    </div>
                                </div>

                                <div className="mt-3">
                                    <div className='flex items-center gap-1 mt-3'>
                                        <input type="number" ref={serviceabilityPin} id="serviceability" className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your pincode" />
                                        <button className='text-xs border text-white font-sans p-1.5 bg-blue-600 rounded-lg' onClick={checkServiciability} >Check</button>
                                    </div>
                                    <span className='text-xs text-indigo-500'>{serviceabilityMsg}</span>
                                </div>
                                <div className="mt-3 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
                                    <div className="flex items-end animate-pulse mt-5">
                                        <div role="status" className="max-w-sm animate-pulse">
                                            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                        </div>
                                    </div>

                                    <button type="button" className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-blue-600 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-blue-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                        Add to Cart
                                    </button>
                                </div>

                                <ul className="mt-8 space-y-2">
                                    <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                        <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className=""></path>
                                        </svg>
                                        Free shipping
                                    </li>

                                    <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                        <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" className=""></path>
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
                                            <div className="bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"></span>
                                        </div>
                                    </nav>
                                </div>
                                <div className="mt-8 flow-root">
                                    {showReviews &&
                                        <div>
                                            <section className="">
                                                <div className="max-w-2xl">
                                                    <div className="flex justify-between items-center">
                                                    </div>
                                                    <div className="mb-6">
                                                        <div className="mb-2 bg-white rounded-lg rounded-t-lg border border-white dark:bg-white dark:border-white">
                                                            <label for="comment" className="sr-only">Your comment</label>
                                                            <textarea id="comment" rows="6"
                                                                className="w-full text-sm p-3 text-white border-1 border-gray-500 ring-1 focus:outline-none dark:text-gray-500 dark:placeholder-gray-500"
                                                                placeholder="Write a comment..." required></textarea>
                                                        </div>
                                                        <button type="submit"
                                                            className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-indigo-700 rounded-lg focus:ring-4 focus:ring-indigo-200 dark:focus:ring-indigo-900 hover:bg-indigo-800">
                                                            Post comment
                                                        </button>
                                                    </div>
                                                </div>
                                            </section>
                                            <div role="status" className="max-w-sm animate-pulse">
                                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                                <span className="sr-only">Loading...</span>
                                            </div>


                                            <br />

                                            <div className='flex flex-col gap-5'>
                                                {[1, 2, 3, 4].map(e => {
                                                    return <article key={e} className='animate-pulse'>
                                                        <hr />
                                                        <div className="flex items-start mt-4">
                                                            <div className="flex-shrink-0">
                                                                <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                                                            </div>
                                                            <div className="ml-4 flex-grow">
                                                                <div className="w-24 h-3 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
                                                                <div className="w-12 h-2 bg-gray-200 rounded-full dark:bg-gray-700  mt-1"></div>
                                                                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700  mt-1"></div>
                                                                <div className="w-40 h-2 bg-gray-200 rounded-full dark:bg-gray-700  mt-2"></div>
                                                                <div className="w-24 h-3 bg-gray-200 rounded-full dark:bg-gray-700  mt-4"></div>
                                                                <div className="w-16 h-3 bg-gray-200 rounded-full dark:bg-gray-700  mt-1"></div>
                                                            </div>
                                                        </div>
                                                    </article>
                                                })}
                                            </div>



                                        </div>
                                    }
                                    {showDesc &&

                                        <div className='flex flex-col gap-5'>
                                            <h1 className='text-xl font-bold'>User's Questions</h1>
                                            {[1, 2, 3, 4].map(e => {
                                                return <div className='animate-pulse'>
                                                    <div className="flex-grow">
                                                        <div className="w-full h-3 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
                                                        <div className="w-20 h-2 bg-gray-200 rounded-full dark:bg-gray-700  mt-1"></div>
                                                        <div className="w-1/2 h-2 bg-gray-200 rounded-full dark:bg-gray-700  mt-1"></div>
                                                    </div>
                                                </div>
                                            })}
                                        </div>

                                    }


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
                                {[1, 2, 3, 4, 5, 6].map(e => {
                                    return <div key={e} role="status" className="xl:w-1/4 md:w-1/2 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                                        <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                            <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                        </div>
                                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>

                                        <span className="sr-only">Loading...</span>
                                    </div>
                                })}
                            </div>
                        </div>
                        <div className='flex m-auto justify-center'>
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More</button>
                        </div>
                    </section>

                </section> :
                productDoesntExist ?
                    <div>
                        <div className="flex items-center justify-center h-screen bg-gray-100">
                            <div className="max-w-md mx-auto p-6 bg-white shadow-md">
                                <img src='/images/logo.jpg' alt="Logo" className="w-20 h-20 mx-auto mb-4" />
                                <h2 className="text-center text-2xl font-bold mb-4">Product Not Found</h2>
                                <p className="text-center text-gray-600">Sorry, but there is no such product available.</p>
                            </div>
                        </div>
                    </div>
                    :
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
                                                {fetchProductsFromId?.pictures?.split(',')?.map(e => {
                                                    return <button id={e} type="button" className={`flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg text-center ${showImages === REACT_APP_API_URL + "/" + e ? `${cardClassName}` : ""} `} onClick={() => { setShowImages(REACT_APP_API_URL + "/" + e) }}>
                                                        <img className="h-full w-full object-cover" src={REACT_APP_API_URL + "/" + e} alt="" />
                                                    </button>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                                    <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{fetchProductsFromId?.title}</h1>

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
                                        <p className="ml-2 text-sm font-medium text-gray-500">{fetchProductsFromId?.reviews?.length} Reviews</p>
                                    </div>

                                    <h2 className="mt-8 text-base text-gray-900">Category {fetchProductsFromId?.category}</h2>
                                    <div className="mt-3 flex select-none flex-wrap items-center gap-1">
                                        {fetchProductsFromId?.desc}
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
                                            <h1 className="text-3xl font-bold">Nrs {fetchProductsFromId?.price}</h1>
                                        </div>

                                        <button onClick={addtoCart} type="button" className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-blue-600 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>
                                            {addToCartValue}
                                        </button>
                                    </div>

                                    <ul className="mt-8 space-y-2">
                                        <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                            <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className=""></path>
                                            </svg>
                                            Free shipping
                                        </li>

                                        <li className="flex items-center text-left text-sm font-medium text-gray-600">
                                            <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" className=""></path>
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
                                                <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"> {fetchProductsFromId?.reviews?.length} </span>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="mt-8 flow-root sm:mt-12">
                                        {showReviews &&
                                            <div>
                                                <div className="flex items-center mb-3">
                                                    <svg aria-hidden="true" className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg aria-hidden="true" className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg aria-hidden="true" className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg aria-hidden="true" className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">4.95 out of 5</p>
                                                </div>
                                                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{fetchProductsFromId?.reviews?.length} global ratings</p>
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
                                                    {fetchProductsFromId?.reviews.map(e => {
                                                        return <article className=''>
                                                            <hr />
                                                            <div key={e} className="flex items-center mt-2 space-x-4">
                                                                <img className="w-10 h-10 rounded-full" src={e?.profile} alt="" />
                                                                <div className="space-y-1 font-medium  text-black">
                                                                    <p>{e?.name} <time dateTime="2014-08-16 19:00" className="block text-sm text-gray-500 dark:text-gray-400">Joined on {e?.time}</time></p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center mb-1">
                                                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                                <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                                <h3 className="ml-2 text-sm font-semibold text-gray-900 dark:text-white">{e?.title}</h3>
                                                            </div>
                                                            <p className="mb-2 text-gray-500 dark:text-gray-400">{e?.comment}</p>

                                                            <aside>
                                                                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">{e?.support} people support this</p>
                                                                <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
                                                                    <button className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</button>
                                                                    <button className="pl-4 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Report abuse</button>
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
                                    {loader2 ? <div className="flex flex-wrap -m-4">
                                        {[1, 2, 3, 4, 5, 6].map(e => {
                                            return <div key={e} role="status" className="xl:w-1/4 md:w-1/2 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                                                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                                    <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                                </div>
                                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>

                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        })}
                                    </div> : allProducts.filter(e => e._id !== pid).map(e => {
                                        return <div key={e._id} className="xl:w-1/4 md:w-1/2 p-2">
                                            <div className="bg-gray-100 p-3 rounded-lg">
                                                <img className="h-40 rounded w-full object-cover object-center mb-6" src={REACT_APP_API_URL + "/" + e.pictures.split(',')[0]} alt="content" />
                                                <h3 className="tracking-widest text-blue-700 text-xs font-medium title-font">Nrs {e.price}</h3>
                                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{e.title.slice(0, 40)}...</h2>
                                                <p className="leading-relaxed text-base">{e.desc.slice(0, 90)}...</p>
                                                <NavLink to={`/product/${e._id}`} type="button" className="text-blue-500 text-sm underline">Expand details</NavLink>
                                            </div>
                                        </div>
                                    })

                                    }

                                </div>
                            </div>
                            <div className='flex m-auto justify-center'>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More</button>
                            </div>
                        </section>

                    </section>
            }
        </div >
    )
}
