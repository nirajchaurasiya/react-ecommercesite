import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
export default function ForgotPassword() {
    const email = useRef();
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL
    const send_email = (e) => {
        e.preventDefault();
        try {
            axios.post(`${REACT_APP_API_URL}/api/forget-password/forget-password`, { email: email })
                .then((response) => {
                    console.log(response)
                })
                .catch((err) => {
                    console.log("Err");
                })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='py-16'>
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
                        <input
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
        </div >
    )
}
