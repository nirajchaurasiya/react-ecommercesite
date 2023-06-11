import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../Context/AuthContext'
export default function Loader() {
    const { user } = useContext(AuthContext);
    return (
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="flex justify-start item-start space-y-2 flex-col">
                <h1 className="text-3xl  lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                    <div role="status" className="max-w-sm animate-pulse">
                        <div className="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div></div></h1>
                <div className="text-base text-gray-300 font-medium leading-6 "><div role="status" className="max-w-sm animate-pulse">
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div></div></div>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start gap-4 items-start  bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl mb-4  font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>

                        {
                            [1, 2, 3].map(e => {
                                return <div key={e} role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                                    <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                                        <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                    </div>
                                    <div className="w-full">
                                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                    </div>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            })
                        }
                    </div>
                    <div className="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50  space-y-6">
                            <h3 className="text-xl  font-semibold leading-5 text-gray-800">Summary</h3>
                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                <div className="flex justify-between w-full">
                                    <p className="text-base  leading-4 text-gray-800">Subtotal</p>
                                    <div className="text-base text-gray-300 leading-4 ">
                                        <div className="text-base  font-semibold leading-4 text-left text-gray-800">
                                            <div role="status" className="max-w-sm animate-pulse"></div>
                                            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base  leading-4 text-gray-800">Discount <span className=" p-1 text-xs font-medium bg-white text-gray-800 leading-3 ">STUDENT</span></p>
                                    <div className="text-base text-gray-300 leading-4 ">
                                        <div className="text-base  font-semibold leading-4 text-left text-gray-800">
                                            <div role="status" className="max-w-sm animate-pulse"></div>
                                            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center w-full">
                                    <p className="text-base  leading-4 text-gray-800">Shipping</p>
                                    <div className="text-base text-gray-300 leading-4 ">
                                        <div className="text-base  font-semibold leading-4 text-left text-gray-800">
                                            <div role="status" className="max-w-sm animate-pulse"></div>
                                            <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center w-full">
                                <p className="text-base  font-semibold leading-4 text-gray-800">Total</p>
                                <div className="text-base text-gray-300 leading-4 ">
                                    <div className="text-base  font-semibold leading-4 text-left text-gray-800">
                                        <div role="status" className="max-w-sm animate-pulse"></div>
                                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-20"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50  space-y-6">
                            <h3 className="text-xl  font-semibold leading-5 text-gray-800">Shipping</h3>
                            <div className="flex justify-between items-start w-full">
                                <div className="flex justify-center items-center space-x-4">
                                    <div className="w-8 h-8">
                                        <div className="text-base text-gray-300 leading-4 ">
                                            <div className="text-base  font-semibold leading-4 text-left text-gray-800">
                                                <div role="status" className="max-w-sm animate-pulse"></div>
                                                <div className="h-10 w-10 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-start items-center">
                                        <p className="text-xs leading-6  font-semibold text-gray-800">Fast Delivery!<br /><span className="font-normal">Delivery with 1 to 2 days</span></p>
                                    </div>
                                </div>
                                <p className="text-lg font-semibold leading-6  text-gray-800">NRs. 200</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-50  w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                    <h3 className="text-xl  font-semibold leading-5 text-gray-800">Customer</h3>
                    <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                        <div className="flex flex-col justify-start items-start flex-shrink-0">
                            <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                <img src="/images/userimage.png" className='w-10 border p-2' alt="avatar" />
                                <div className="flex justify-start items-start flex-col space-y-2 gap-2">
                                    <div className="text-base  font-semibold leading-4 text-left text-gray-800">
                                        <div role="status" className="max-w-sm animate-pulse"></div>
                                        <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                                    </div>
                                    <div className="text-base  font-semibold leading-4 text-left text-gray-800"><div role="status" className="max-w-sm animate-pulse">
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-center text-gray-800  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">

                                <div role="status" className="max-w-sm animate-pulse">
                                    <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
                                </div>

                            </div>
                        </div>
                        <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                            <div className="flex justify-center  md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">

                                <div role="status" className="max-w-sm animate-pulse mt-10">
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                    <span className="sr-only">Loading...</span>
                                </div>


                                <div role="status" className="max-w-sm animate-pulse">
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                    <span className="sr-only">Loading...</span>
                                </div>

                            </div>

                            <div className="w-full flex justify-center items-center">
                                <button className=" bg-white text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full  text-base font-medium leading-4 ">Edit Profile</button>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
