import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../../Context/AuthContext'
import { TiTick } from 'react-icons/ti'
import { NavLink, useNavigate } from 'react-router-dom';
export default function Profile() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    const handleLogOut = () => {
        navigate('/profile/logout');
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-2/3 mx-auto flex flex-wrap items-center">
                        <div className="lg:w-2/3 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{user.fname + " " + user.lname}</h1>

                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Email</span>
                                <span className="ml-auto break-words text-gray-900">{user.email}</span>
                            </div>
                            <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Phone</span>
                                <span className="ml-auto text-gray-900">{user.phone}</span>
                            </div>
                            {user.address1 && <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Address1</span>
                                <span className="ml-auto text-gray-900">{user.address1}</span>
                            </div>}
                            {user.address2 && <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Address2</span>
                                <span className="ml-auto text-gray-900">{user.address2}</span>
                            </div>}
                            {user.address3 && <div className="flex border-t border-gray-200 py-2">
                                <span className="text-gray-500">Address3</span>
                                <span className="ml-auto text-gray-900">{user.address3}</span>
                            </div>} <br />
                            <div className="flex justify-between">
                                <button className="flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-700 rounded" onClick={() => { navigate('/profile/editprofile') }}>Edit Profile</button>
                                <button className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded" onClick={handleLogOut}>Logout</button>
                            </div>
                        </div>
                        <img alt="ecommerce" className="lg:w-1/3 w-full lg:h-auto h-64 shadow-lg object-cover object-center rounded" src={`${REACT_APP_API_URL}/${user.profile}`} />
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
                            <td className="px-6 py-4">
                                <NavLink to={`/product/status/${Math.round(Math.random * 1000)}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</NavLink>
                            </td>
                            <td className="px-6 py-4 flex items-center">
                                Received <TiTick />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
