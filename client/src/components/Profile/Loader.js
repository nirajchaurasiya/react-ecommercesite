import React from 'react'

export default function Loader() {
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-2/3 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-2/3 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
                                <div role="status" className="max-w-sm animate-pulse">
                                    <div className="h-7 bg-gray-200 rounded-md dark:bg-gray-700 w-48 mb-4"></div>
                                </div>
                            </h1>

                            <div className="flex items-center justify-between border-t border-gray-200 py-2">
                                <span className="text-gray-500">Email</span>
                                <div role="status" className="max-w-sm animate-pulse">
                                    <div className="h-2 bg-gray-200 rounded-md dark:bg-gray-700 w-48"></div>
                                </div>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Phone</span>
                                <span className="ml-auto text-gray-900">
                                    <div role="status" className="max-w-sm animate-pulse">
                                        <div className="h-2 bg-gray-200 rounded-md dark:bg-gray-700 w-48"></div>
                                    </div>
                                </span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Address1</span>
                                <span className="ml-auto text-gray-900">
                                    <div role="status" className="max-w-sm animate-pulse">
                                        <div className="h-2 bg-gray-200 rounded-md dark:bg-gray-700 w-48"></div>
                                    </div>
                                </span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Address2</span>
                                <span className="ml-auto text-gray-900">
                                    <div role="status" className="max-w-sm animate-pulse">
                                        <div className="h-2 bg-gray-200 rounded-md dark:bg-gray-700 w-48"></div>
                                    </div>
                                </span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Address3</span>
                                <span className="ml-auto text-gray-900">
                                    <div role="status" className="max-w-sm animate-pulse">
                                        <div className="h-2 bg-gray-200 rounded-md dark:bg-gray-700 w-48"></div>
                                    </div>
                                </span>
                            </div> <br />
                            <div className="flex justify-between">
                                <button className="flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded">Edit Profile</button>
                                <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Logout</button>
                            </div>
                        </div>

                        <div role="status" className="lg:w-1/3 w-full lg:h-auto shadow-lg object-cover object-center  flex items-center justify-center h-56 max-w-sm bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                            <svg className="w-12 lg:h-96 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 384 512">
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>

                    </div>

                </div>
            </section>
            <div className="relative order_products_table_wefweew overflow-x-scroll w-[98vw] lg:w-[90vw] m-auto sm:rounded-lg">
                <h1 className='font-bold text-xl mb-5 underline'>Your Orders:</h1>
                <table className="w-full text-sm text-left text-white dark:text-white">
                    <thead className="text-xs text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className='text-white'>
                            <th scope="col" className="px-6 py-3">
                                Product name
                            </th>

                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap dark:text-white">
                                <div role="status" className="max-w-sm animate-pulse">
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48"></div>
                                </div>
                            </th>

                            <td className="px-6 py-4">
                                <div role="status" className="max-w-sm animate-pulse">
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 "></div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <div role="status" className="max-w-sm animate-pulse">
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 "></div>
                                </div>
                            </td>
                            <td className="px-6 py-4">
                                <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex items-center "><span>View</span><span className='ml-1 text-lg mt-0.5'></span></p>
                            </td>
                            <td className="px-6 py-4 flex items-center">
                                <div role="status" className="max-w-sm animate-pulse">
                                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 "></div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
