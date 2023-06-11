import axios from 'axios';
import React, { useCallback, useContext, useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import SomeQuestions from './SomeQuestions';
import Loader from './Loader';
import { AuthContext } from '../../Context/AuthContext';

export default function CheckProductDestination() {
    const [ordersData, setOrdersData] = useState([])
    const [loader, setLoader] = useState(true)
    const [ordersdoesntExist, setOrdersdoesntExist] = useState(false)
    const [userData, setUserData] = useState([])
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    const { orderID } = useParams();
    const { user } = useContext(AuthContext)
    const fetchOrderDatas = useCallback((orderID) => {
        try {
            axios.get(`${REACT_APP_API_URL}/api/orderactions/getAllOrders/${orderID}`)
                .then((response) => {
                    if (response.status === 200 || response.status === 201 || response.data.status === 1) {
                        setOrdersData(response.data.data)
                    } else {
                        console.log("Error");
                        setOrdersdoesntExist(true);
                    }
                    setLoader(false);
                })
                .catch((err) => {
                    console.log(err)
                    setOrdersdoesntExist(true);
                    setLoader(false);
                })
        } catch (error) {
            console.log(error)
            setOrdersdoesntExist(true);
            setLoader(false);
        }


    }, [REACT_APP_API_URL]);
    const fetchuserData = useCallback((userID) => {
        try {
            axios.get(`${REACT_APP_API_URL}/api/personactions/getuser/${userID}`)
                .then((response) => {
                    if (response.status === 200 || response.status === 201 || response.data.status === 1) {
                        setUserData(response.data.data)
                    } else {
                        console.log("Error");
                        setOrdersdoesntExist(true);
                    }
                    setLoader(false);
                })
                .catch((err) => {
                    console.log(err)
                    setOrdersdoesntExist(true);
                    setLoader(false);
                })
        } catch (error) {
            setOrdersdoesntExist(true);
            setLoader(false);
        }
    }, [REACT_APP_API_URL])

    useEffect(() => {
        // window.scrollTo({
        //     top: 0,
        //     behavior: 'smooth'
        // });
        fetchOrderDatas(orderID);
        fetchuserData(user);
    }, [fetchOrderDatas, orderID, user, fetchuserData])


    if (ordersdoesntExist) {
        return (
            <div className="flex items-center justify-center h-screen">
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
                    <img
                        src="/images/logo.jpg"
                        alt="Logo"
                        className="h-24 w-24 mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-4">Order Not Found</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center">
                        Sorry, the order you are looking for doesn't exist. Please check back later.
                    </p>
                </div>
            </div>
        )
    }
    return (
        <div className='lg:w-[80vw] md:w-[90vw] w-[98vw] sm:w-[95vw] m-auto mt-10'>
            {loader ?
                <Loader />
                :
                ordersData ? ordersData.length > 0 &&
                    <div>
                        <ol className="flex items-center justify-center w-full text-sm font-medium text-center text-gray-700 sm:text-base">
                            <li className="flex md:w-full items-center text-blue-600  sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 after:border-gray-700">
                                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500">
                                    <svg aria-hidden="true" className="w-4 h-4 mr-2 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path className='' fill="blue" fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                    Verifying <span className="hidden sm:inline-flex sm:ml-2">product</span>
                                </span>
                            </li>
                            <li className="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-1 after:hidden sm:after:inline-block after:mx-6 xl:after:mx-10 after:border-gray-700">
                                <span className="flex items-center after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-500">
                                    <span className="mr-2">2</span>
                                    Shipping <span className="hidden sm:inline-flex sm:ml-2">Product</span>
                                </span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">3</span>
                                Delivered
                            </li>
                        </ol>
                        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                            <div className="flex justify-start item-start space-y-2 flex-col">
                                <h1 className="md:text-2xl sm:text-xl lg:text-2xl font-semibold leading-7 lg:leading-6 text-gray-800">Order #{ordersData.map(e => e._id)}</h1>
                                <p className="text-base text-gray-300 font-medium leading-6 ">{ordersData.map(e => <span key={Math.floor(Math.random() * 1000)}>{e.createdAt.slice(0, 10)}</span>)}</p>
                            </div>
                            <div className="mt-5 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                                    <div className="flex flex-col justify-start items-start  bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                                        <p className="text-lg md:text-xl  font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
                                        {
                                            ordersData && ordersData.length > 0 ? (
                                                ordersData.map((e, index) => {

                                                    const renderedProductIds = [];

                                                    return e.status === true
                                                        ? (
                                                            e?.orderItems?.map((data, innerIndex) => {
                                                                // Check if the product ID has already been rendered
                                                                if (renderedProductIds.includes(data.pid)) {
                                                                    return null; // Skip rendering for duplicate product IDs
                                                                }

                                                                renderedProductIds.push(data.pid);

                                                                const productQuantity = e.orderItems.reduce((total, item) => {
                                                                    if (item.pid === data.pid) {
                                                                        return total + item.quantity;
                                                                    }
                                                                    return total;
                                                                }, 0);

                                                                return (
                                                                    <div key={innerIndex} className="mt-12 md:mt-12 flex flex-col md:flex-row justify-start md:space-x-6 xl:space-x-8 w-full">
                                                                        <NavLink to={`/product/${data.pid}`}>
                                                                            <div className="pb-4 md:pb-8 w-full md:w-40">
                                                                                <img className="w-48 md:block" src={`${REACT_APP_API_URL}/${data.image}`} alt="dress" />
                                                                            </div>
                                                                        </NavLink>
                                                                        <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                                                                            <div className="w-full flex flex-col justify-start items-start">
                                                                                <h3 className="text-xl  xl:text-lg font-semibold leading-6 text-gray-800">{data.name.slice(0, 30)}...</h3>
                                                                                <div className="flex justify-start items-start flex-col space-y-1">
                                                                                    <p className="text-xs  leading-none text-gray-800"><span className="text-gray-400 ">Category: {data.category}</span></p>
                                                                                    <p className="text-xs text-gray-800"><span className="text-gray-400 font-extralight"></span> {data.desc.slice(0, 100)}...</p>
                                                                                </div>
                                                                            </div>
                                                                            <div className="flex justify-between space-x-8 items-start w-full">
                                                                                <p className="text-base  xl:text-lg leading-6">NRs. {data.price}</p>
                                                                                <p className="text-base  xl:text-lg leading-6 text-gray-800">{productQuantity}</p>
                                                                                <p className="text-base  xl:text-lg font-semibold leading-6 text-gray-800">NRs. {data.price * productQuantity}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                );
                                                            })
                                                        )
                                                        : (
                                                            <div className="flex items-center justify-center h-screen">
                                                                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
                                                                    <img
                                                                        src="/images/logo.jpg"
                                                                        alt="Logo"
                                                                        className="h-24 w-24 mb-4"
                                                                    />
                                                                    <h3 className="text-xl font-semibold mb-4">Order Not Found</h3>
                                                                    <p className="text-gray-600 dark:text-gray-400 text-center">
                                                                        Sorry, the order you are looking for doesn't exist. Please check back later.
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        );
                                                })
                                            ) :
                                                <div className="flex items-center justify-center h-screen">
                                                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
                                                        <img
                                                            src="/images/logo.jpg"
                                                            alt="Logo"
                                                            className="h-24 w-24 mb-4"
                                                        />
                                                        <h3 className="text-xl font-semibold mb-4">Order Not Found</h3>
                                                        <p className="text-gray-600 dark:text-gray-400 text-center">
                                                            Sorry, the order you are looking for doesn't exist. Please check back later.
                                                        </p>
                                                    </div>
                                                </div>
                                        }
                                    </div>
                                    <div className="flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                                        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50  space-y-6">
                                            <h3 className="text-xl  font-semibold leading-5 text-gray-800">Summary</h3>
                                            <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                                                <div className="flex justify-between w-full">
                                                    <p className="text-base  leading-4 text-gray-800">Subtotal</p>
                                                    <p className="text-base text-gray-300 leading-4 ">$56.00</p>
                                                </div>
                                                <div className="flex justify-between items-center w-full">
                                                    <p className="text-base  leading-4 text-gray-800">Discount <span className=" p-1 text-xs font-medium bg-white text-gray-800 leading-3 ">STUDENT</span></p>
                                                    <p className="text-base text-gray-300 leading-4 ">-$28.00 (50%)</p>
                                                </div>
                                                <div className="flex justify-between items-center w-full">
                                                    <p className="text-base  leading-4 text-gray-800">Shipping</p>
                                                    <p className="text-base text-gray-300 leading-4 ">$8.00</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center w-full">
                                                <p className="text-base  font-semibold leading-4 text-gray-800">Total</p>
                                                <p className="text-base text-gray-300 font-semibold leading-4 ">$36.00</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50  w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
                                    <h3 className="text-xl  font-semibold leading-5 text-gray-800">Customer</h3>
                                    <div className="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
                                        <div className="flex flex-col justify-start items-start flex-shrink-0">
                                            <div className="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                                                <img src={`${REACT_APP_API_URL}/${userData.profile}`} className='w-10 border p-2' alt="avatar" />
                                                <div className="flex justify-start items-start flex-col">
                                                    <p className="text-base  font-semibold leading-4 text-left text-gray-800">{userData?.fname + " " + userData?.lname}</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-center text-gray-800 md:justify-start items-center space-x-4 py-3 border-b border-gray-200 w-full">
                                                <p className="cursor-pointer text-sm leading-5 ">{userData?.email}</p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
                                            <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
                                                <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-1 xl:mt-8">
                                                    <p className="text-base  font-semibold leading-4 text-center md:text-left text-gray-800">Shipping Address</p>
                                                    <p className="w-48 lg:w-full text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 ">{userData?.address1}</p>
                                                </div>
                                                <div className="flex justify-center md:justify-start items-center md:items-start flex-col space-y-1">
                                                    <p className="text-base  font-semibold leading-4 text-center md:text-left text-gray-800">Billing Address</p>
                                                    <p className="w-48 lg:w-full text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 ">{userData?.address2}</p>
                                                    <p className="w-48 lg:w-full text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 ">{userData?.address3}</p>
                                                </div>
                                            </div>
                                            <NavLink to={`/profile/${user}`}>
                                                <div className="w-full flex justify-center items-center">
                                                    <button className=" bg-white text-gray-800 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full  text-base font-medium leading-4 ">Edit Profile Details</button>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    :
                    <div className="flex items-center justify-center h-screen">
                        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
                            <img
                                src="/images/logo.jpg"
                                alt="Logo"
                                className="h-24 w-24 mb-4"
                            />
                            <h3 className="text-xl font-semibold mb-4">Order Not Found</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-center">
                                Sorry, the order you are looking for doesn't exist. Please check back later.
                            </p>
                        </div>
                    </div>
            }
            <SomeQuestions />
        </div>
    )
}
