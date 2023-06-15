import React, { useCallback, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import category from '../CategoryJSON/category.json'
import axios from 'axios';
export default function CategoryProduct() {
    // eslint-disable-next-line
    const [loader, setLoader] = useState(true);
    const [fullName, setFullName] = useState('')
    const [searchProductWithCategory, setSearchProductWithCategory] = useState([])
    const [productDoesntExist, setProductDoesntExist] = useState(true)
    const { query } = useParams();
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    const getFullName = useCallback((query) => {
        category.forEach((e) => {
            if (e.short === query) {
                setFullName(e.name)
            }
            else {
                return;
            }
        })
    }, [])
    const getProduct = useCallback((query) => {
        try {
            axios.get(`${REACT_APP_API_URL}/api/productactions/getproducts/category/${query}`)
                .then((response) => {
                    console.log(typeof (response.data));
                    if (response.status === 200 || response.data.status === 1) {
                        console.log(response.data)
                        setSearchProductWithCategory(response.data.data)
                        setLoader(false)
                        setProductDoesntExist(false);
                    }
                    else {
                        setLoader(false)

                        setProductDoesntExist(true);
                    }
                })
                .catch((err) => {
                    console.log("catch")
                    setProductDoesntExist(true);
                    setLoader(false)
                });
        } catch (error) {
            setLoader(false);
            console.log("catch2")
            setProductDoesntExist(true)
        }
    }, [REACT_APP_API_URL])
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        getFullName(query);
        getProduct(query);
    }, [query, getFullName, getProduct])
    return (
        <div>
            <div>
                <section className="text-gray-600 body-font w-[90vw] m-auto ">
                    <div className="container px-5 py-12 mx-auto">
                        <div className="flex flex-wrap w-full mb-5">
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                <h1 className="text-2xl font-bold title-font text-gray-900">Search results for {fullName}</h1>
                            </div>
                        </div>


                        {loader ?
                            <div className="flex flex-wrap -m-4">
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(e => {
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
                            :
                            !productDoesntExist && searchProductWithCategory.length > 0 ?
                                <>
                                    <div className="flex flex-wrap -m-4 mt-5">
                                        {searchProductWithCategory.map((e) => {

                                            return (
                                                <div key={e._id} className="xl:w-1/4 md:w-1/3 p-2">
                                                    <div className="bg-gray-100 p-3 rounded-lg">
                                                        <img className="h-40 rounded w-full object-cover object-center mb-6" src={`${REACT_APP_API_URL}/${e.pictures.split(',')[0]}`} alt="content" />
                                                        <h3 className="tracking-widest text-blue-700 text-xs font-medium title-font">Nrs {e.price}</h3>
                                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{e.title.slice(0, 40)}...</h2>
                                                        {/* <div className="text-lg text-gray-900 font-medium title-font mb-4" dangerouslySetInnerHTML={createMarkup(e.title.slice(0, 40))} /> */}
                                                        <p className="leading-relaxed text-base">{e.desc.slice(0, 90)}...</p>

                                                        <NavLink to={`/product/${e._id}`} type="button" className="text-blue-500 text-sm underline">Expand details</NavLink>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className='flex justify-center mt-10'>
                                        <NavLink to='/products'>
                                            <button type="button" className="text-white disabled:bg-gray-600 bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More</button>
                                        </NavLink>
                                    </div>
                                </>
                                :
                                <div className="flex flex-wrap xl:w-1/3 mt-12 mb-12 md:w-1/2">
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
                                        <img src="/images/noproductfound.png" alt="No Product Found" className="w-full h-64 object-cover" />
                                        <div className="px-6 py-4">
                                            <div className="font-bold text-xl mb-2">No Product Found</div>
                                            <p className="text-gray-700 text-base">
                                                Currently, there are no any product with category <span className='font-bold' >{fullName}</span>
                                            </p>
                                        </div>
                                    </div>

                                </div>
                        }
                    </div>
                </section>
            </div>
        </div>
    )
}
