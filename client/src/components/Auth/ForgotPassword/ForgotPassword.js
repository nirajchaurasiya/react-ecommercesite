import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
export default function ForgotPassword() {
    const email = useRef();
    const OTP = useRef();
    const password = useRef();
    const Cpassword = useRef();
    const [stepOne, setstepOne] = useState(true)
    const [stepTwo, setstepTwo] = useState(false)
    const [stepThree, setstepThree] = useState(false)
    const [successMsg, setSuccessMsg] = useState(false)
    const [successAlert, setSuccessAlert] = useState(false)
    const [errorAlert, setErrorAlert] = useState(false)
    const [message, setMessage] = useState('');
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL
    const send_email = (e) => {
        e.preventDefault();
        try {
            axios.post(`${REACT_APP_API_URL}/api/forget-password/forget-password`, { email: email.current.value })
                .then((response) => {
                    if (response.data.status === 1) {
                        setstepOne(false)
                        setstepTwo(true)
                        setMessage('Code successfully sent to your requested email.');
                        setSuccessAlert(true)
                        setTimeout(() => {
                            setSuccessAlert(false)
                        }, 2000);
                    } else if (response.data.status === 0) {
                        setMessage("Account with this email doesn't exists");
                        setErrorAlert(true);
                        setTimeout(() => {
                            setErrorAlert(false)
                        }, 2000);
                    }
                    else if (response.data.status === 2) {
                        setMessage("Something went wrong.");
                        setErrorAlert(true)
                        setTimeout(() => {
                            setErrorAlert(false)
                        }, 2000);
                    }
                })
                .catch((err) => {
                    setMessage("Something went wrong.");
                    setErrorAlert(true)
                    setTimeout(() => {
                        setErrorAlert(false)
                    }, 2000);
                })
        } catch (error) {
            setMessage("Something went wrong.");
            setErrorAlert(true)
            setTimeout(() => {
                setErrorAlert(false)
            }, 2000);
        }
    }

    const submit_OTP = (e) => {
        e.preventDefault();
        try {
            setstepTwo(false)
            setstepThree(true)
        } catch (error) {

        }
    }

    const submit_password = (e) => {
        e.preventDefault();
        setstepThree(false)
        setSuccessMsg(true)

    }
    return (
        <>

            {successAlert && <div id="toast-notification" className="fixed right:0 lg:right-2 bottom-0 lg:bottom-2 w-full md:max-w-xs lg:max-w-xs p-4 text-gray-900 bg-white lg:rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">
                <div className="flex items-center">
                    <div className="ml-3 text-sm font-normal">
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">Success!</div>
                        <div className="text-sm font-normal">{message}</div>
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
                    </div>
                </div>
            </div>}
            {errorAlert && <div id="toast-notification" className="fixed right:0 lg:right-2 bottom-0 lg:bottom-2 w-full md:max-w-xs lg:max-w-xs p-4 text-gray-900 bg-white lg:rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">
                <div className="flex items-center">
                    <div className="ml-3 text-sm font-normal">
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">Warning!</div>
                        <div className="text-sm font-normal">{message}</div>
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
                    </div>
                </div>
            </div>}
            {/* Form to send OTP */}
            {stepOne && <div className='py-16'>
                <div className='flex justify-center '>
                    <img className='h-24 w-24' src="/images/logo.jpg" alt="logo" />
                </div>
                <p className="text-gray-700 text-center mx-auto -mb-16">
                    Did you forget your password?
                </p>

                <form className="bg-white shadow-lg mb-4 justify-center flex flex-wrap py-24 w-[90vw] mx-auto ">

                    <div className=" md:w-1/3 bg-blue-600 p-6 text-white ml-4">

                        <p className="mb-8 text-3xl flex items-center">
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
                            Don't worry!
                        </p>
                        <div className="mb-4">
                            <input ref={email}
                                className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                placeholder="Enter your account email"
                            />
                        </div>
                        <button
                            className="block w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                            type="submit" onClick={send_email}
                        >Request OTP</button><br />
                    </div>
                    <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">

                        <NavLink
                            className="block w-full mb-8 text-sm text-center text-blue-600 hover:text-blue-700"
                            to='/login'
                        >Remember Accout, Login Now!</NavLink>

                    </div>
                </form>
            </div >}


            {/* Form to submit OTP */}

            {stepTwo && <div className='py-16'>
                <div className='flex justify-center '>
                    <img className='h-24 w-24' src="/images/logo.jpg" alt="logo" />
                </div>
                <p className="text-gray-700 text-center mx-auto -mb-16">
                    Did you forget your password?
                </p>

                <form className="bg-white shadow-lg mb-4 justify-center flex flex-wrap py-24 w-[90vw] mx-auto ">

                    <div className=" md:w-1/3 bg-blue-600 p-6 text-white ml-4">

                        <p className="mb-8 text-3xl flex items-center">
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
                            Don't worry!
                        </p>
                        <div className="mb-4">
                            <input ref={OTP}
                                className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                placeholder="Enter the OTP number sent to your gmail."
                            />
                        </div>
                        <button
                            className="block w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                            type="submit" onClick={submit_OTP}
                        >Submit OTP</button><br />
                    </div>
                </form>
            </div >}

            {/* Password Submission */}

            {stepThree && <div className='py-16'>
                <div className='flex justify-center '>
                    <img className='h-24 w-24' src="/images/logo.jpg" alt="logo" />
                </div>
                <p className="text-gray-700 text-center mx-auto -mb-16">
                    Did you forget your password?
                </p>

                <form className="bg-white shadow-lg mb-4 justify-center flex flex-wrap py-24 w-[90vw] mx-auto ">

                    <div className=" md:w-1/3 bg-blue-600 p-6 text-white ml-4">

                        <p className="mb-8 text-3xl flex items-center">
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
                            Don't worry!
                        </p>
                        <div className="mb-4">
                            <input ref={password}
                                className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                placeholder="Enter your account new password"
                            />

                        </div>
                        <div className="mb-4">
                            <input ref={Cpassword}
                                className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                placeholder="Confirm your password"
                            />

                        </div>
                        <button
                            className="block w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                            type="submit" onClick={submit_password}
                        >Submit Password</button><br />
                    </div>
                </form>
            </div >}

            {/* Success Msg */}
            {successMsg && <div className='bg-white shadow-lg mb-4 justify-center py-24 min-h-full w-[90vw] mx-auto'>
                <div className='flex justify-center '>
                    <img className='h-24 w-24' src="/images/logo.jpg" alt="logo" />
                </div>
                <div className="flex items-center justify-center text-center">
                    <div className="max-w-md mx-auto p-8">
                        <h2 className="text-2xl font-bold mb-4">Password Reset Successful</h2>
                        <p className="text-gray-700 mb-6">
                            Your password has been successfully reset. You can now log in with your new password.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Log In
                        </button>
                    </div>
                </div>
            </div >}
        </>
    )
}
