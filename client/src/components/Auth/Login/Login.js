import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import axios from 'axios'
export default function Login() {
    const email = useRef();
    const password = useRef();
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);
    const [message, setMessage] = useState('')
    const [progress, setProgress] = useState(0)
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL
    const handleLoginPage = () => {
        try {
            if (email.current.value || password.current.value) {
                axios.post(`${REACT_APP_API_URL}/api/auth/login`, {
                    email: email.current.value,
                    password: password.current.value,
                })
                    .then(data => {
                        setProgress(20)
                        if (data.data.status === 1) {
                            setSuccessAlert(true);
                            localStorage.setItem('shopkartStore', JSON.stringify(data.data.data));
                            window.location.href = '/';
                        }
                        else {
                            setErrorAlert(true)
                        }
                        setProgress(40);
                        setMessage(data.data.msg)
                        setProgress(60);
                        setTimeout(() => {
                            setErrorAlert(false)
                            setSuccessAlert(false)
                        }, 2000);
                        setProgress(100);
                    })
                    .catch(err => {
                        setProgress(20)
                        setErrorAlert(true);
                        setProgress(40)
                        setSuccessAlert(false);
                        setProgress(60)
                        setMessage('Login failed, please try again later.')
                        setProgress(80)
                        setTimeout(() => {
                            setErrorAlert(false)
                            setSuccessAlert(false)
                        }, 2000);
                        setProgress(100)
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
            }
        } catch (error) {
            setErrorAlert(true)
            setMessage('Looks like, our server are busy to handle other requests, pleas try again later.')
            setTimeout(() => {
                setErrorAlert(false)
                setSuccessAlert(false)
            }, 2000);
        }
    }
    return (
        <>
            {successAlert && <div className="p-4 mb-4 transition ease-in-out delay-150 text-sm text-green-800 bg-green-50 dark:bg-gray-800 dark:text-green-400 sticky top-0 z-10" role="alert">
                <span className="font-medium">{message}</span>
            </div>}
            {errorAlert && <div className="p-4 transition ease-in-out delay-150 mb-4 text-sm text-yellow-800 bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300 sticky top-0 z-10" role="alert">
                <span className="font-medium">{message}</span>
            </div>}
            <div className='py-16'>

                <LoadingBar
                    color='#f11946'
                    progress={progress}
                    onLoaderFinished={() => setProgress(0)}
                />
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
                            className="block w-full bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
                            type="submit" onClick={handleLoginPage}
                        >Login</button><br />

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
