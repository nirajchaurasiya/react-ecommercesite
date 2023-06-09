import React, { useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Loader from './Loader';
export default function Checkout() {
    const [stepOne, setStepOne] = useState(true);
    const [steptwo, setSteptwo] = useState(false);
    // eslint-disable-next-line
    const [stepThree, setStepThree] = useState(false);
    // eslint-disable-next-line
    const [stepFour, setStepFour] = useState(false)
    const [userData, setUserData] = useState([])
    const [cashOnDelivery, setCashOnDelivery] = useState(false)
    const [orderID, SetOrderID] = useState('')
    // eslint-disable-next-line
    const [loader, setLoader] = useState(true);
    const [count, setCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [uniquePidsState, setUniquePidsState] = useState(null)
    const [userid, setUserid] = useState('')
    const [showWarning, setShowWarning] = useState(false)
    const [localStoreDatas, setLocalStoreDatas] = useState([])
    // eslint-disable-next-line
    const [reviews, setReviews] = useState(true);
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

    const deleteTheProductFromArray = (pid) => {
        const updatedData = localStoreDatas.filter(e => e.pid !== pid);
        localStorage.setItem('shopkartCarts', JSON.stringify(updatedData));
        getAllProductFromLocalStore();
    }
    const getAllProductFromLocalStore = useCallback(() => {
        if (localStorage.getItem('shopkartCarts')) {
            const storedCartValue = localStorage.getItem('shopkartCarts');
            const parsedCartValue = JSON.parse(storedCartValue);
            setLocalStoreDatas(parsedCartValue);
            const uniquePids = [...new Set(parsedCartValue.map(item => item.pid))];
            const pidCounts = {};
            let price = 0
            parsedCartValue.forEach(e => {
                price += parseInt(e.price)
            });
            setTotalPrice(price);
            uniquePids.forEach(pid => {
                const count = parsedCartValue.filter(item => item.pid === pid).length;
                pidCounts[pid] = count;
            });

            setUniquePidsState(uniquePids);
            setLoader(false);
            setCount(2)
        }
        else {
            setLoader(false);
        }
    }, [])

    const handleQuantityChange = (pid, newQuantity, action) => {
        if (action === "sub") {
            const indexToDelete = localStoreDatas.findIndex(item => item.pid === pid);
            if (indexToDelete !== -1) {
                localStoreDatas.splice(indexToDelete, 1);
            }

            localStorage.setItem('shopkartCarts', JSON.stringify(localStoreDatas));
            getAllProductFromLocalStore();
        } else {
            let updateProduct = [];
            const e = localStoreDatas.filter(item => item.pid === pid)[newQuantity];
            if (e) {
                updateProduct.push(e);
                const updatedCartValue = localStoreDatas.concat(updateProduct);
                // console.log(updateProduct.length)
                if (updateProduct.length > 0) {
                    console.log(updatedCartValue);
                    localStorage.setItem('shopkartCarts', JSON.stringify(updatedCartValue));
                    getAllProductFromLocalStore()
                }
            } else {
                console.log("null")
            }
        }
    };
    const handleMessage = () => {
        setShowWarning(true)
        setTimeout(() => {
            setShowWarning(false);
        }, 2000);
    }

    const fetchuserProfile = useCallback((uid) => {
        try {
            axios.get(`${REACT_APP_API_URL}/api/personactions/getuser/${uid}`)
                .then((data) => {
                    if (data.status === 200) {
                        if (data.data.status === 1) {
                            setUserData(data.data.data)
                        }
                        else {
                        }
                    } else {
                    }
                })
                .catch(err => {
                })
        } catch (error) {
        }
    }, [REACT_APP_API_URL])
    useEffect(() => {
        if (localStorage.getItem('shopkartStore')) {
            const uid = localStorage.getItem('shopkartStore').replace(/"/g, '');
            fetchuserProfile(uid);
            setUserid(uid);
            getAllProductFromLocalStore();
        }

    }, [fetchuserProfile, getAllProductFromLocalStore])

    const startReviews = (uid, orderDatas) => {
        try {
            if (uid && orderDatas && orderDatas.length > 0) {
                console.log("User ID:", uid);
                console.log("Order Data:", orderDatas);
                const orderData = {
                    uid: uid,
                    orderItems: orderDatas
                }
                // Send the order data to the backend API
                axios.post(`${REACT_APP_API_URL}/api/orderactions/orders`, orderData)
                    .then(response => {
                        if (response.status === 201) {
                            SetOrderID(response.data._id)
                            setReviews(false);
                            localStorage.removeItem('shopkartCarts');
                        }
                        else {
                            alert("An error occurred while posting the order. Please try again later.");
                            setReviews(false);
                        }
                    })
                    .catch(error => {
                        console.error("Error posting the order:", error);
                        alert("An error occurred while posting the order. Please try again later.");
                    });

                // Add your logic for handling the order and reviews here
            }
        } catch (error) {
            console.error("An error occurred:", error);
            alert("We are really sorry, but an error occurred. Please try again later.");
        }
    };


    if (cashOnDelivery) {
        return (
            <section className="text-gray-600 body-font" >
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <img className='h-24 w-24 rounded-2xl m-auto' src="/images/logo.jpg" alt="logo" />
                        {
                            reviews ?
                                <>
                                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Please Wait, while we review your products</h1>
                                    <div role="status" className='m-auto mt-12'>
                                        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </>
                                :
                                <>
                                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-1 text-gray-500">Review completed. <br /> Below is your track ID <br /> <div className='text-gray-900 text-bold'><div className="bg-white rounded-lg shadow-md p-4">
                                        <h3 className="text-lg font-semibold mb-4">Order Details</h3>
                                        <div className="flex flex-col">
                                            <p className="mb-2">
                                                <strong>Order ID:</strong> <span>{orderID}</span>
                                            </p>
                                            {/* Add other order details such as date, status, etc. */}
                                        </div>
                                    </div></div> you can use it to track your orders.</h1>
                                    <h1 className="sm:text-2xl text-xl font-medium title-font mb-4 text-gray-500">Thank you for choosing us.</h1>

                                </>
                        }
                    </div>
                </div>
            </section>
        )
    }



    return (
        <div className='py-14 w-[90vw] m-auto bg-white shadow-md '>

            <div className='flex flex-wrap'>
                <form className='py-14 mx-auto  rounded-lg p-10'>
                    <div className=''>
                        <img className='h-24 w-24 rounded-2xl m-auto' src="/images/logo.jpg" alt="logo" />
                        <p className="mb-3 text-xl flex text-black items-center mt-2 justify-center">
                            <svg
                                width="32"
                                height="32"
                                viewBox="0 0 512 512"
                                className="inline-block fill-current h-8 w-8 mr-2"
                            >
                                <path
                                    d="m64 496l0-256 48 0 0-80c0-71 57-128 128-128l16 0c71 0 128 57 128 128l0 80 48 0 0 256z m172-131l-12 83 48 0-12-83c12-5 20-17 20-30 0-18-14-32-32-32-18 0-32 14-32 32 0 13 8 25 20 30z m100-197c0-49-39-88-88-88-49 0-88 39-88 88l0 72 176 0z"
                                />
                            </svg>
                            Secure Payment
                        </p>
                    </div>
                    {stepOne &&
                        <div>
                            <h1 className='text-black font-bold  underline'>Step 1: Review your details </h1>
                            <span className='text-xs mb-2'>If you want to update your profile, first go to your profile page and update and then come back.</span>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First name</label>
                                    <p type="text" placeholder={userData.fname} id="first_name" className="border border-gray-300  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3 select-none dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required >{userData.fname}</p>
                                </div>
                                <div>
                                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last name</label>
                                    <p type="text" placeholder={userData.lname} id="last_name" className="border border-gray-300  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3 select-none dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required >{userData.lname}</p>
                                </div>
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
                                    <p type="text" id="email" placeholder={userData.email} className="border border-gray-300  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3 select-none dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required >{userData.email}</p>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Phone number</label>
                                    <p type="tel" id="phone" placeholder={userData.phone} className="border border-gray-300  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3 select-none dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required >{userData.phone}</p>
                                </div>
                                <div>
                                    <label htmlFor="address1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Address 1</label>
                                    <p type="text" id="address1" placeholder={userData.address1} className="border border-gray-300  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3 select-none dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required >{userData.address1}</p>
                                </div>
                                <div>
                                    <label htmlFor="address2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Address 2</label>
                                    <p type="text" id="address2" placeholder={userData.address2} className="border border-gray-300  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3 select-none dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required >{userData.address2}</p>
                                </div>
                                <div>
                                    {
                                        userData?.address3 && <div>
                                            <label htmlFor="address2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Address 3</label>
                                            <p type="text" id="address2" placeholder={userData.address2} className="border border-gray-300  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3 select-none dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required >{userData.address3}</p>
                                        </div>
                                    }
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="flex items-center h-5 mb-3">
                                    <input id="terms" type="checkbox" placeholder="" className="w-4  h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                </div>
                                <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">I agree with the <NavLink to='/' className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</NavLink></label>
                            </div>
                            <button onClick={() => { setStepOne(false); localStoreDatas.length > 0 ? setSteptwo(true) : setShowWarning(true) }} type="submit" className="text-white font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </div>}
                    {
                        steptwo &&
                        <>
                            <h1 className='text-black font-bold mb-2 underline'>Step 2: Choose your payment option</h1>
                            <section className="text-gray-600 body-font">
                                <div className="container py-5 mx-auto">
                                    <div className="flex flex-wrap -m-4">

                                        <div className="lg:w-full md:w-1/2 p-4 w-full">
                                            <span className="block relative h-48 rounded overflow-hidden">
                                                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/images/cod.png" />
                                            </span>
                                            <div className="mt-4 text-center">
                                                <h2 className="text-gray-900 title-font text-lg font-medium text-center">Cash On Delivery</h2>
                                                <div className='flex justify-center mt-2'>
                                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 w-[70%] py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { startReviews(userid, localStoreDatas); setSteptwo(false); setStepThree(true); setCashOnDelivery(true) }}>Choose</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </section>
                        </>
                    }

                    {/* {
                        stepThree &&
                        <>
                            <h1 className='text-black font-bold mb-2 underline'>Step 3: Checkout {cashOnDelivery ? "Cash On Delivery" : "Payment Gateaway"}</h1>
                            {cashOnDelivery &&
                                <section className="text-gray-600 body-font">
                                    <div className="container px-5 py-24 mx-auto">
                                        <div className="flex flex-col text-center w-full mb-20">
                                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Please Wait, while we redirect you to the payment page</h1>
                                            <div role="status" className='m-auto mt-12'>
                                                <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                </svg>
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                        </div>
                                    </div>
                                </section>

                            }
                            {
                                gateaWay &&
                                <section className="text-gray-600 body-font">
                                    <div className="container py-5 mx-auto">
                                        <div className="flex flex-wrap -m-4">

                                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                                <span className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/images/esewa.png" />
                                                </span>
                                                <div className="mt-4 text-center">
                                                    <p className="mt-1">$16.00</p>
                                                    <div className='flex justify-center mt-2'>
                                                        <button onClick={() => { setStepThree(false); setStepFour(true) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 w-[70%] py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Choose</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                                <span className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/images/imepay.jpg" />
                                                </span>
                                                <div className="mt-4 text-center">
                                                    <p className="mt-1">$16.00</p>
                                                    <div className='flex justify-center mt-2'>
                                                        <button onClick={() => { setStepThree(false); setStepFour(true) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 w-[70%] py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Choose</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                                <span className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/images/khalti.png" />
                                                </span>
                                                <div className="mt-4 text-center">
                                                    <p className="mt-1">$16.00</p>
                                                    <div className='flex justify-center mt-2'>
                                                        <button onClick={() => { setStepThree(false); setStepFour(true) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 w-[70%] py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Choose</button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                                <span className="block relative h-48 rounded overflow-hidden">
                                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/images/qpay.png" />
                                                </span>
                                                <div className="mt-4 text-center">
                                                    <p className="mt-1">$16.00</p>
                                                    <div className='flex justify-center mt-2'>
                                                        <button onClick={() => { setStepThree(false); setStepFour(true) }} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 w-[70%] py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" >Choose</button>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </section>
                            }


                        </>
                    } */}

                    {
                        stepFour && <section className='m-auto'>
                            <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 mx-auto">
                                    <div className="flex flex-col text-center w-full mb-20">
                                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Please Wait, while we redirect you to the payment page</h1>
                                        <div role="status" className='m-auto mt-12'>
                                            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </section>
                    }
                </form>

                <div className=''>
                    {loader ?
                        <Loader /> :
                        localStoreDatas?.length >= 1 ?
                            <div className=" pt-20 pb-32">
                                <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                                <div className="mx-auto max-w-5xl justify-center px-6 xl:px-0">
                                    <div className="rounded-lg md:w-2/3 lg:w-full">
                                        {count > 1 &&
                                            uniquePidsState?.map((pid, index) => {
                                                const product = localStoreDatas?.find(item => item.pid === pid);
                                                const length = localStoreDatas?.filter(item => item.pid === pid)?.length
                                                return <div key={pid} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                                    <NavLink to={`/product/${pid}`}>
                                                        <img src={`${REACT_APP_API_URL}/${product.image}`} alt="product" className="w-full rounded-lg sm:w-32 h-20 overflow-hidden object-cover" />
                                                    </NavLink>
                                                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                                        <div className="mt-5 sm:mt-0">
                                                            <h2 className="text-lg font-bold text-gray-900">{product?.name}</h2>
                                                            <p className="mt-1 text-xs text-gray-700">36EU - 4US</p>
                                                        </div>
                                                        <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                                            <div className="flex items-center border-gray-100">
                                                                <button
                                                                    className="cursor-pointer rounded-l py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                                                    onClick={() => handleQuantityChange(pid, index, 'sub')}
                                                                >
                                                                    -
                                                                </button>
                                                                <input
                                                                    className="h-8 w-8 border bg-white text-center text-xs outline-none"
                                                                    type="number"
                                                                    value={length}
                                                                    min="1"
                                                                    readOnly
                                                                />
                                                                <button
                                                                    className="cursor-pointer rounded-r py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                                                    onClick={() => handleQuantityChange(pid, index, 'add')}
                                                                >
                                                                    +
                                                                </button>
                                                            </div>
                                                            <div className="flex items-center space-x-4">
                                                                <p className="text-sm">Nrs {product?.price}</p>
                                                                <button onClick={() => { deleteTheProductFromArray(pid) }}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            })}
                                    </div>
                                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 lg:w-full">
                                        <div className="mb-2 flex justify-between">
                                            <p className="text-gray-700">Subtotal</p>
                                            <p className="text-gray-700">NRs. {totalPrice}</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-gray-700">Shipping</p>
                                            <p className="text-gray-700">NRs. 200</p>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="flex justify-between">
                                            <p className="text-lg font-bold">Total</p>
                                            <div className="">
                                                <p className="mb-1 text-lg font-bold">NRs. {Math.round(1.13 * totalPrice + 200)}</p>
                                                <p className="text-sm text-gray-700">including VAT <span className='font-thin text-xs'>(13%)</span> </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className=" pt-20 pb-32">
                                <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                                <div className="mx-auto max-w-5xl justify-center px-6 xl:px-0">
                                    <div className="rounded-lg lg:w-full">
                                        <div className="h-full w-full flex items-center justify-center">
                                            <div className="bg-white p-6 shadow-md">
                                                <p className="text-lg font-bold mb-2">Your cart is empty</p>
                                                <p>Please add items to your cart before checking out.</p>
                                                <NavLink to='/products'>
                                                    <button type="submit" className="mt-10 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Start shopping</button>
                                                </NavLink>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 lg:w-full md:w-1/3">
                                        <div className="mb-2 flex justify-between">
                                            <p className="text-gray-700">Subtotal</p>
                                            <p className="text-gray-700">NRs 0</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="text-gray-700">Shipping</p>
                                            <p className="text-gray-700">NRs. 0</p>
                                        </div>
                                        <hr className="my-4" />
                                        <div className="flex justify-between">
                                            <p className="text-lg font-bold">Total</p>
                                            <div className="">
                                                <p className="mb-1 text-lg font-bold">NRs. 0</p>
                                                <p className="text-sm text-gray-700">including VAT <span className='font-thin text-xs'>(13%)</span> </p>
                                            </div>
                                        </div>
                                        <button onClick={handleMessage} className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" >Check out</button>
                                    </div>
                                </div>
                            </div>
                    }

                    {showWarning && <div id="toast-notification" className="fixed right:0 lg:right-2 bottom-0 lg:bottom-2 w-full md:max-w-xs lg:max-w-xs p-4 text-gray-900 bg-white lg:rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">
                        <div className="flex items-center">
                            <div className="ml-3 text-sm font-normal">
                                <div className="text-sm font-semibold text-gray-900 dark:text-white">Warning!</div>
                                <div className="text-sm font-normal">Please add a item to continue.</div>
                                <span className="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
                            </div>
                        </div>
                    </div>}
                </div>
            </div>

        </div>
    )
}
