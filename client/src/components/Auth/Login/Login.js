import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
export default function Login() {
    const email = useRef();
    const password = useRef();
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);
    const [setLoginText, setSetLoginText] = useState(true)
    const [showSpinner, setShowSpinner] = useState(false)
    const [message, setMessage] = useState('')
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL
    const handleLoginPage = () => {
        setShowSpinner(true)
        setSetLoginText(false);
        try {
            if (email.current.value || password.current.value) {
                axios.post(`${REACT_APP_API_URL}/api/auth/login`, {
                    email: email.current.value,
                    password: password.current.value,
                })
                    .then(data => {
                        if (data.data.status === 1) {
                            setSuccessAlert(true);
                            console.log(data.data.data)
                            localStorage.setItem('shopkartStore', JSON.stringify(data.data.data));
                            window.location.href = '/';
                        }
                        else {
                            setErrorAlert(true)
                            setShowSpinner(false)
                            setSetLoginText(true);
                        }
                        setMessage(data.data.msg)
                        setTimeout(() => {
                            setErrorAlert(false)
                            setSuccessAlert(false)
                        }, 2000);
                        setShowSpinner(false)
                        setSetLoginText(true);
                    })
                    .catch(err => {
                        setErrorAlert(true);
                        setSuccessAlert(false);
                        setMessage('Login failed, please try again later.')
                        setTimeout(() => {
                            setErrorAlert(false)
                            setSuccessAlert(false)
                        }, 2000);
                        setShowSpinner(false)
                        setSetLoginText(true);
                    })
            }
            else {
                setErrorAlert(true)
                setSuccessAlert(false);
                setMessage('All the input fields are mandatory. Pleas fill all the fields before submitting the form.')
                setTimeout(() => {
                    setErrorAlert(false)
                    setSuccessAlert(false)
                }, 2000);
                setShowSpinner(false)
                setSetLoginText(true);
            }
        } catch (error) {
            setErrorAlert(true)
            setMessage('Looks like, our server are busy to handle other requests, pleas try again later.')
            setTimeout(() => {
                setErrorAlert(false)
                setSuccessAlert(false)
            }, 2000);
            setShowSpinner(false)
            setSetLoginText(true);
        }
    }
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])
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
            <div className='py-16'>


                <div className='flex justify-center '>
                    <img className='h-24 w-24' src="/images/logo.jpg" alt="logo" />
                </div>
                <p className="text-gray-700 text-center mx-auto -mb-16">
                    Login to order the products!
                </p>
                <div className="bg-white shadow-lg mb-4 justify-center flex flex-wrap py-24 w-[90vw] mx-auto ">

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
                            Login Now
                        </p>
                        <div className="mb-4">
                            <input ref={email}
                                className="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="mb-6">
                            <input ref={password}
                                className="appearance-none border w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <button
                            className="flex mx-auto justify-center items-center gap-2 w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                            type="submit" onClick={handleLoginPage}
                        >{setLoginText && <span>
                            Login</span>} {showSpinner && <div role="status">
                                <svg aria-hidden="true" class="w-6 h-6 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>}


                        </button><br />

                        <label className="block text-sm mb-4">
                            <input type="checkbox" /> Remember me
                        </label>

                        <NavLink
                            className="block w-full text-sm text-right text-white hover:text-gray-300"
                            to="/forgotpassword"
                        >Forgot Password?</NavLink>
                    </div>
                    <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">

                        <NavLink
                            className="block w-full mb-8 text-sm text-center text-blue-600 hover:text-blue-700"
                            to='/register'
                        >Don't have an account? Register Now!</NavLink>

                        <p className="mb-4 text-center">OR</p>
                        <hr className="block w-full mb-4 border-0 border-t border-gray-300" />

                        <div className="flex flex-wrap justify-center">
                            <div className="w-full sm:w-1/2 sm:pr-2 mb-3 sm:mb-0">
                                <button
                                    className="w-full bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                                    type="button"
                                >Login with Facebook</button>
                            </div>
                            <div className="w-full sm:w-1/2 sm:pl-2">
                                <button
                                    className="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                                    type="button"
                                >Login with Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
} 
