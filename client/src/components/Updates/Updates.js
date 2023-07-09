import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
export default function Updates() {
    const [allUpdates, setAllUpdates] = useState([])
    const [isThereUpdate, setIsThereUpdate] = useState(true)
    const [loader, setLoader] = useState(true);
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    const navigate = useNavigate();
    const getAllUpdates = useCallback(() => {
        axios.get(`${REACT_APP_API_URL}/api/updates/getallupdates`)
            .then((response) => {
                if (response.status === 200 && response.data.status === 1) {
                    setAllUpdates(response.data.data)
                    setLoader(false)
                    setIsThereUpdate(true)
                    // console.log(object)
                } else {
                    setIsThereUpdate(false)
                    setLoader(false)
                }
            })
            .catch((err) => {
                setIsThereUpdate(false)
                setLoader(false)
                console.log(err);
            });
    }, [REACT_APP_API_URL]);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        getAllUpdates();
    }, [getAllUpdates])

    return (
        <div>
            {loader ?
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto lg:w-[85vw]">
                        <div className='mb-5 text-xl font-bold text-black underline'>
                            Recent Updates...
                        </div>
                        <div className="-my-8 divide-y-2 divide-gray-100">

                            {[1, 2, 3, 4, 5].map(e => {
                                return <div key={e} className="py-8 flex flex-wrap md:flex-nowrap">
                                    <span className='mr-3'>
                                        <div role="status" className="max-w-sm animate-pulse">
                                            <div className="h-5 w-5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4">
                                            </div>
                                        </div>
                                    </span>
                                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col gap-1">
                                        <div role="status" className="max-w-sm animate-pulse">
                                            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4">
                                            </div>
                                        </div>
                                        <div role="status" className="max-w-sm animate-pulse">
                                            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4">
                                            </div>
                                        </div>
                                        <div className='h-auto w-48' >
                                            <div role="status" className="flex items-center justify-center h-44 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                                                <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 384 512"><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" /></svg>
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:flex-grow">
                                        <h2 className="text-2xl font-medium text-gray-900 title-font mb-2"><div role="status" className="max-w-sm animate-pulse">
                                            <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4">
                                            </div>
                                        </div></h2>
                                        <div className="leading-relaxed">

                                            <div role="status" className="space-y-2.5 mb-10 animate-pulse max-w-xl">
                                                <div className="flex items-center w-full space-x-2">
                                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                                </div>
                                                <div className="flex items-center w-full space-x-2 max-w-[480px]">
                                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                                </div>
                                                <div className="flex items-center w-full space-x-2 max-w-[400px]">
                                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                                </div>
                                                <div className="flex items-center w-full space-x-2 max-w-[480px]">
                                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                                </div>
                                                <div className="flex items-center w-full space-x-2 max-w-[440px]">
                                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                                                </div>
                                                <div className="flex items-center w-full space-x-2 max-w-[360px]">
                                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                                                </div>
                                                <span className="sr-only">Loading...</span>
                                            </div>

                                        </div>
                                        <button className="flex items-center text-white font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">Learn More
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </section> :

                !isThereUpdate || allUpdates.length < 1 ?
                    <div className="flex items-center justify-center h-screen ">
                        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                className="w-full h-72 object-cover"
                                src="/images/noupdate.jpg"
                                alt="No Updates"
                            />
                            <div className="p-4">
                                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                                    No Updates
                                </h2>
                                <p className="text-gray-600">
                                    There are currently no updates available.
                                </p>
                            </div>
                        </div>
                    </div>
                    :
                    <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-24 mx-auto lg:w-[85vw]">
                            <div className='mb-5 text-xl font-bold text-black underline'>
                                Recent Updates...
                            </div>
                            <div className="-my-8 divide-y-2 divide-gray-100">

                                {
                                    allUpdates?.map((e, index) => {
                                        return <div key={e._id} className="py-8 flex flex-wrap md:flex-nowrap">
                                            <span className='mr-3'>{index + 1})</span>
                                            <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col gap-1">
                                                <div className='flex items-center'>
                                                    <span className="font-semibold title-font text-gray-700 pr-1">CATEGORY</span>
                                                    <hr className='w-4' />
                                                    <span className="font-thin title-font text-gray-700 pl-1">{e.category}</span>
                                                </div>
                                                <div className='flex items-center'>
                                                    <span className="font-semibold text-gray-700 text-sm pr-1">DATE</span>
                                                    <hr className='w-4' />
                                                    <span className="font-thin title-font text-gray-700 pl-1">{e.createdAt.slice(0, 10).replace('-', '/').replace('-', '/')}</span>
                                                </div>
                                                <img className='h-auto w-48 border mt-5' src={`${REACT_APP_API_URL}/${e.image.split(',')[0]}`} alt="" />
                                            </div>
                                            <div className="md:flex-grow">
                                                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">{e?.title.slice(0, 100)}...</h2>
                                                <p className="leading-relaxed">
                                                    {e.desc.slice(0, 400)}...
                                                </p>
                                                <p className="leading-relaxed">
                                                    Price : <span className='text-bold text-gray-800'>NRs {e.price}</span>
                                                </p>
                                                <button onClick={() => { navigate(`/product/${e.pid}`) }} className="bg-indigo-600 p-2 text-white rounded-md active:ring-2 select-none inline-flex items-center mt-4">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </section>
            }
        </div>
    )
}
