import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
    const [stepOne, setStepOne] = useState(true);
    const [steptwo, setSteptwo] = useState(false);
    const [stepThree, setStepThree] = useState(false);
    const [stepFour, setStepFour] = useState(false)
    const [cashOnDelivery, setCashOnDelivery] = useState(false)
    const [gateaWay, setGateaWay] = useState(false);
    const navigate = useNavigate();
    return (
        <div className=''>

            <form className='bg-white shadow-2xl mx-auto w-[90vw] rounded-lg p-10'>
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
                        <h1 className='text-black font-bold mb-2 underline'>Step 1: Review your details</h1>
                        <div className="grid gap-6 mb-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First name</label>
                                <input type="text" id="first_name" className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last name</label>
                                <input type="text" id="last_name" className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                            </div>
                            <div>
                                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Company</label>
                                <input type="text" id="company" className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
                            </div>
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Phone number</label>
                                <input type="tel" id="phone" className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                            </div>
                            <div>
                                <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Website URL</label>
                                <input type="url" id="website" className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required />
                            </div>
                            <div>
                                <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Unique visitors (per month)</label>
                                <input type="number" id="visitors" className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email address</label>
                            <input type="email" id="email" className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                            <input type="password" id="password" className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Confirm password</label>
                            <input type="password" id="confirm_password" className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                        </div>
                        <div className="flex items-start mb-6">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded focus:ring-3 focus:ring-blue-300 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                            </div>
                            <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">I agree with the <span href="#" className="text-gray-900 hover:underline dark:text-gray-900 underline">terms and conditions</span>.</label>
                        </div>
                        <button onClick={() => { setStepOne(false); setSteptwo(true) }} type="submit" className="text-white font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </div>}

                {
                    steptwo &&
                    <>
                        <h1 className='text-black font-bold mb-2 underline'>Step 2: Choose your payment option</h1>
                        <section className="text-gray-600 body-font">
                            <div className="container py-5 mx-auto">
                                <div className="flex flex-wrap -m-4">

                                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                        <div className="block relative h-48 rounded overflow-hidden">
                                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/images/payments.png" />
                                        </div>
                                        <div className="mt-4 text-center">
                                            <h2 className="text-gray-900 title-font text-lg font-medium">Option 1</h2>
                                            <p className="mt-1">$16.00</p>
                                            <div className='flex justify-center mt-2'>
                                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 w-[70%] py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { setSteptwo(false); setStepThree(true); setGateaWay(true) }}>Choose</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
                                        <span className="block relative h-48 rounded overflow-hidden">
                                            <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="/images/cod.png" />
                                        </span>
                                        <div className="mt-4 text-center">
                                            <h2 className="text-gray-900 title-font text-lg font-medium text-center">Cash On Delivery</h2>
                                            <p className="mt-1">$16.00</p>
                                            <div className='flex justify-center mt-2'>
                                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-sm px-2 w-[70%] py-2 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { setSteptwo(false); setStepThree(true); setCashOnDelivery(true) }}>Choose</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>
                    </>
                }

                {
                    stepThree &&
                    <>
                        <h1 className='text-black font-bold mb-2 underline'>Step 3: Checkout {cashOnDelivery ? "Cash On Delivery" : "Payment Gateaway"}</h1>
                        {cashOnDelivery &&
                            <section className="text-gray-600 body-font py-12">
                                <div class="p-4 mb-4 text-md text-black rounded-lg bg-blue-50 " role="alert">You chose,
                                    <span class="font-medium"> Cash On Delivery! </span>
                                    Please be ready with Nrs 400. Your product will reach to you within 1 to 2 days. <br /> <br />
                                    <span class="font-sm">
                                        Your receipt number is <span className='font-bold'>1241421312312 </span>
                                    </span>and will be available in your profile page where you can use track your product location. <br />
                                    <button type="button" className="mt-5 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium text-md px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => navigate('/profile')}>View Profile</button>
                                </div>
                            </section>}
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
                }

                {
                    stepFour && <section className='m-auto'>
                        <section class="text-gray-600 body-font">
                            <div class="container px-5 py-24 mx-auto">
                                <div class="flex flex-col text-center w-full mb-20">
                                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Please Wait, while we redirect you to the payment page</h1>
                                    <div role="status" className='m-auto mt-12'>
                                        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                        </svg>
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </section>
                }
            </form>

        </div>
    )
}
