import React from 'react'

export default function Loader() {
    return (
        <section className="py-12 sm:py-16 m-auto w-[90vw]">

            <div className="container mx-auto px-4">

                <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
                    <div className="lg:col-span-3 lg:row-end-1">
                        <div className="lg:flex lg:items-start">
                            <div className="lg:order-2 lg:ml-5">
                                <div className="max-w-xl overflow-hidden rounded-lg">
                                    <img className="h-full w-full max-w-full object-cover" src="/images/message.png" alt="" />
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
                                <input type="number" id="serviceability" className="bg-gray-50 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your pincode" />
                                <button className='text-xs border text-white font-sans p-1.5 bg-blue-600 rounded-lg' >Check</button>
                            </div>
                            <span className='text-xs text-indigo-500'>3243</span>
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
                                <div title="" className=" py-4 text-sm font-medium text-gray-600  hover:text-gray-800 cursor-pointer"> Description </div>

                                <div title="" className="inline-flex items-center  border-transparent py-4 text-sm font-medium text-gray-600 hover:text-gray-800 cursor-pointer" >
                                    Reviews
                                    <div className="bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                    <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100"></span>
                                </div>
                            </nav>
                        </div>
                        <div className="mt-8 flow-root">
                            <div>

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
                                    {[1, 2, 3, 4]?.map(e => {
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

                            <div className='flex flex-col gap-5'>
                                <h1 className='text-xl font-bold'>User's Questions</h1>
                                {[1, 2, 3, 4]?.map(e => {
                                    return <div key={e} className='animate-pulse'>
                                        <div className="flex-grow">
                                            <div className="w-full h-3 bg-gray-200 rounded-full dark:bg-gray-700 "></div>
                                            <div className="w-20 h-2 bg-gray-200 rounded-full dark:bg-gray-700  mt-1"></div>
                                            <div className="w-1/2 h-2 bg-gray-200 rounded-full dark:bg-gray-700  mt-1"></div>
                                        </div>
                                    </div>
                                })}
                            </div>

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
                        {[1, 2, 3, 4, 5, 6]?.map(e => {
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
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >More</button>
                </div>
            </section>

        </section>
    )
}
