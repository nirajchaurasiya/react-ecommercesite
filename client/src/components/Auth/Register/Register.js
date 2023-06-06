import React, { useRef, useState } from 'react'
import axios from 'axios'
export default function Register() {
    const [profile, setProfile] = useState('')
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);
    const [message, setMessage] = useState('')
    const fname = useRef();
    const lname = useRef();
    const email = useRef();
    const phone = useRef();
    const address1 = useRef();
    const address2 = useRef();
    const address3 = useRef();
    const password = useRef();
    const cpassword = useRef();
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL
    const handleRegisterData = () => {
        try {
            if (password.current.value === cpassword.current.value) {
                const fd = new FormData();
                fd.append('fname', fname.current.value);
                fd.append('lname', lname.current.value);
                fd.append('email', email.current.value);
                fd.append('phone', phone.current.value);
                fd.append('profile', profile);
                fd.append('address1', address1.current.value);
                fd.append('address2', address2.current.value);
                fd.append('address3', address3.current.value);
                fd.append('password', password.current.value);
                try {
                    axios.post(`${REACT_APP_API_URL}/api/auth/register`, fd)
                        .then(data => {
                            if (data.data.status === 1) {
                                setSuccessAlert(true);
                            }
                            else {
                                setErrorAlert(true)
                            }
                            setMessage(data.data.msg)
                            setTimeout(() => {
                                setErrorAlert(false)
                                setSuccessAlert(false)
                            }, 2000);
                        })
                        .catch(err => {
                            setErrorAlert(true);
                            setSuccessAlert(false);
                            setMessage('Registration failed, please try again later.')
                            setTimeout(() => {
                                setErrorAlert(false)
                                setSuccessAlert(false)
                            }, 2000);
                        })
                } catch (error) {
                    setErrorAlert(true)
                    setSuccessAlert(false);
                    setMessage('Looks like, our server are busy to handle another requests, pleas try again later.')
                    setTimeout(() => {
                        setErrorAlert(false)
                        setSuccessAlert(false)
                    }, 2000);
                }
            } else {
                setErrorAlert(true)
                setMessage('Looks like, password and confirm password are not equal.')
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
            <div className='py-8 w-[90vw] m-auto'>

                <div className='flex justify-center '>
                    <img className='h-24 w-24' src="/images/logo.jpg" alt="logo" />
                </div>
                <p className="text-gray-700 text-center mx-auto">
                    Secure Registration
                </p>
                <div className='mt-10'>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First name</label>
                            <input type="text" ref={fname} id="first_name" className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last name</label>
                            <input type="text" ref={lname} id="last_name" className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
                            <input type="email" id="email" ref={email} className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Phone number</label>
                            <input type="tel" id="phone" ref={phone} className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        </div>
                        <div>
                            <label htmlFor="address_line_1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Address Line 1</label>
                            <input type="text" id="address_line_1" ref={address1} className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required />
                        </div>
                        <div>
                            <label htmlFor="address_line_2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Address Line 2</label>
                            <input type="text" id="address_line_2" ref={address2} className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required />
                        </div>
                        <div>
                            <label htmlFor="address_line_3" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Address Line 3</label>
                            <input type="text" id="address_line_3" ref={address3} className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required />
                        </div>
                        <div>
                            <label htmlFor="profilePicture" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">profilePicture</label>
                            <input type="file" id="profilePicture" onChange={(e) => { setProfile(e.target.files[0]) }} className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required />
                        </div>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Password</label>
                        <input type="password" id="password" ref={password} className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Confirm password</label>
                        <input type="password" ref={cpassword} id="confirm_password" className="border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                    </div>
                    <div className="flex items-start mb-6">
                        <div className="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded focus:ring-3 focus:ring-blue-300 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">I agree with the <a href="/" className="text-gray-900 hover:underline dark:text-gray-900 underline">terms and conditions</a>.</label>
                    </div>
                    <button onClick={handleRegisterData} type="submit" className="text-white font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>
            </div >
        </>
    )
}
