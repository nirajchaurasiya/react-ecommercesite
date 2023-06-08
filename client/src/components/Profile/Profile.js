import React, { useCallback, useEffect, useState } from 'react'
// import { AuthContext } from '../../Context/AuthContext'
import { TiTick } from 'react-icons/ti'
import { AiOutlineEye } from 'react-icons/ai'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
export default function Profile() {
    const [userDatas, setUserDatas] = useState()
    const [loader, setLoader] = useState(true)
    const [userDoesntExist, setUserDoesntExist] = useState(false)
    const navigate = useNavigate();
    const { uid } = useParams();
    // const { user } = useContext(AuthContext);
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    const handleLogOut = () => {
        navigate('/profile/logout');
    }
    const fetchUserDataFromDatabaseUsingID = useCallback((uid) => {
        try {
            axios.get(`${REACT_APP_API_URL}/api/personactions/getuser/${uid}`)
                .then((data) => {
                    if (data.status === 200 || data.data.status === 1) {
                        setUserDatas(data.data.data)
                        setLoader(false)
                        setUserDoesntExist(false);
                    } else {
                        setUserDoesntExist(true);
                        setLoader(false);
                    }
                })
                .catch(err => {
                    setLoader(false)
                    setUserDoesntExist(true);
                })
        } catch (error) {
            setUserDoesntExist(true);
        }
    }, [REACT_APP_API_URL]);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        fetchUserDataFromDatabaseUsingID(uid)
    }, [uid, fetchUserDataFromDatabaseUsingID])
    if (userDoesntExist) {
        return <div>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="max-w-md mx-auto p-6 bg-white shadow-md">
                    <img src='/images/usernotfound.jpg' alt="user" className="w-24 h-24 mx-auto mb-4" />
                    <h2 className="text-center text-2xl font-bold mb-4">User Not Found</h2>
                    <p className="text-center text-gray-600">Sorry, Looks like user not found or the server is temporarily down.</p>
                </div>
            </div>
        </div>
    }
    return (
        <>
            {loader ?
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
                                        <button className="flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded" onClick={() => { navigate('/profile/editprofile') }}>Edit Profile</button>
                                        <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={handleLogOut}>Logout</button>
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
                                        <NavLink to={`/product/status/${Math.round(Math.random * 1000)}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline flex items-center "><span>View</span><span className='ml-1 text-lg mt-0.5'><AiOutlineEye /></span></NavLink>
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
                </div> :
                <div>
                    <section className="text-gray-600 body-font overflow-hidden">
                        <div className="container px-5 py-24 mx-auto">
                            <div className="lg:w-2/3 mx-auto flex flex-wrap items-center">
                                <div className="lg:w-2/3 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{userDatas.fname + " " + userDatas.lname}</h1>

                                    <div className="flex border-t border-gray-200 py-2">
                                        <span className="text-gray-500">Email</span>
                                        <span className="ml-auto break-words text-gray-900">{userDatas.email}</span>
                                    </div>
                                    <div className="flex border-t border-gray-200 py-2">
                                        <span className="text-gray-500">Phone</span>
                                        <span className="ml-auto text-gray-900">{userDatas.phone}</span>
                                    </div>
                                    {userDatas.address1 && <div className="flex border-t border-gray-200 py-2">
                                        <span className="text-gray-500">Address1</span>
                                        <span className="ml-auto text-gray-900">{userDatas.address1}</span>
                                    </div>}
                                    {userDatas.address2 && <div className="flex border-t border-gray-200 py-2">
                                        <span className="text-gray-500">Address2</span>
                                        <span className="ml-auto text-gray-900">{userDatas.address2}</span>
                                    </div>}
                                    {userDatas.address3 && <div className="flex border-t border-gray-200 py-2">
                                        <span className="text-gray-500">Address3</span>
                                        <span className="ml-auto text-gray-900">{userDatas.address3}</span>
                                    </div>} <br />
                                    <div className="flex justify-between">
                                        <button className="flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded" onClick={() => { navigate('/profile/editprofile') }}>Edit Profile</button>
                                        <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={handleLogOut}>Logout</button>
                                    </div>
                                </div>
                                <img alt="ecommerce" className="lg:w-1/3 w-full lg:h-auto h-64 shadow-lg object-cover object-center rounded" src={`${REACT_APP_API_URL}/${userDatas.profile}`} />
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
                                        Apple MacBook Pro 17"
                                    </th>

                                    <td className="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td className="px-6 py-4">
                                        Nrs 40000
                                    </td>
                                    {/* <td className="px-6 py-4">
                                        <NavLink to={`/product/status/${Math.round(Math.random * 1000)}`} className="font-medium text-gray-600 dark:text-gray-500 cursor-not-allowed hover:underline flex items-center "><span>View</span><span className='ml-1 text-lg mt-0.5'><AiOutlineEye /></span></NavLink>
                                    </td> */}
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-600 dark:text-gray-500 cursor-not-allowed hover:underline flex items-center "><span>View</span><span className='ml-1 text-lg mt-0.5'><AiOutlineEye /></span></p>
                                    </td>
                                    <td className="px-6 py-4 flex items-center">
                                        Received <TiTick />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            }

        </>
    )
}
