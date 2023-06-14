import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
export default function Register() {
    const [profile, setProfile] = useState('')
    const [successAlert, setSuccessAlert] = useState(false);
    const [errorAlert, setErrorAlert] = useState(false);
    const [message, setMessage] = useState('')
    const [setLoginText, setSetLoginText] = useState(true)
    const [showSpinner, setShowSpinner] = useState(false)
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
        setShowSpinner(true)
        setSetLoginText(false);
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
                                setMessage(data.data.msg)
                                setShowSpinner(false)
                                setSetLoginText(true);
                            }
                            else {
                                setMessage(data.data.msg)
                                setErrorAlert(true)
                                setShowSpinner(false)
                                setSetLoginText(true);
                            }
                            setTimeout(() => {
                                setErrorAlert(false)
                                setSuccessAlert(false)
                                // navigate('/login')
                                setShowSpinner(false)
                                setSetLoginText(true);
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
                            setShowSpinner(false)
                            setSetLoginText(true);
                        })



                } catch (error) {
                    setErrorAlert(true)
                    setSuccessAlert(false);
                    setMessage('Looks like, our server are busy to handle another request, pleas try again later.')
                    setTimeout(() => {
                        setErrorAlert(false)
                        setSuccessAlert(false)
                    }, 2000);
                    setShowSpinner(false)
                    setSetLoginText(true);
                }
            } else {
                setErrorAlert(true)
                setMessage('Looks like, password and confirm password are not equal.')
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
                    <button onClick={handleRegisterData} type="submit" className="text-white font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        {setLoginText && <span>
                            Create Account</span>} {showSpinner && <div role="status">
                                <svg aria-hidden="true" class="w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>}
                    </button>
                </div>
            </div >
        </>
    )
}
