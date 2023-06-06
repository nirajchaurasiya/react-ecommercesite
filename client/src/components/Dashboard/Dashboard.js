import React, { useRef, useState } from 'react'
import axios from 'axios'
export default function Dashboard() {
    // eslint-disable-next-line
    const [showAdminPanel, setShowAdminPanel] = useState(false);
    const [addProduct, setAddProduct] = useState(false);
    const [showDashboard, setshowDashboard] = useState(true)
    const email = useRef();
    const password = useRef();
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL
    const handleAdminPanel = () => {
        try {
            axios.post(`${REACT_APP_API_URL}/api/auth/adminlogin`,
                {
                    email: email.current.value,
                    password: password.current.value
                }
            )
                .then((data) => {
                    if (data.data.status === 1) {
                        setShowAdminPanel(true);
                    }
                    else {
                        alert(data.data.msg)
                    }
                })
                .catch((err) => {
                    console.log(err);
                })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className=''>
            {!showAdminPanel && <section className="bg-gray-50">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-8">
                    <div className="text-2xl font-semibold text-gray-900 dark:text-gray-900">
                        <img className="w-24 h-24 m-auto" src="/images/logo.jpg" alt="logo" />
                    </div>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-900">
                                Sign in to Admin Panel
                            </h1>
                            <div className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Your email</label>
                                    <input ref={email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Password</label>
                                    <input ref={password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                </div>
                                <button onClick={handleAdminPanel} type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>}
            {
                showAdminPanel && <body className="relative bg-indigo-50 overflow-hidden max-h-screen">
                    <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
                        <div className="flex flex-col justify-between h-full">
                            <div className="flex-grow">
                                <div className="px-4 py-6 text-center border-b">
                                    <h1 className="text-xl font-bold leading-none"><span className="text-indigo-700">Task Manager</span> App</h1>
                                </div>
                                <div className="p-4">
                                    <ul className="space-y-1">
                                        <li onClick={() => { setAddProduct(false); setshowDashboard(true) }} >
                                            <p className="flex items-center bg-indigo-200 rounded-xl font-bold text-sm text-indigo-900 py-3 px-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                                                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                                                </svg> Dashboard
                                            </p>
                                        </li>
                                        <li onClick={() => { setAddProduct(true); setshowDashboard(false) }} >
                                            <p className="flex bg-white hover:bg-indigo-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                                                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                                                </svg>Add Product
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="p-4">
                                <button type="button" className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="" viewBox="0 0 16 16">
                                        <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>
                                </button> <span className="font-bold text-sm ml-2">Logout</span>
                            </div>
                        </div>
                    </aside>

                    {showDashboard && <main className="ml-60 max-h-screen ">
                        <div className="px-6 py-8">
                            <div className="max-w-4xl mx-auto">
                                <div className="bg-white rounded-3xl p-8 mb-5">
                                    <h1 className="text-3xl font-bold mb-10">Messaging ID framework development for the marketing branch</h1>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-stretch">
                                            <div className="text-gray-400 text-xs">Members<br />connected</div>
                                            <div className="h-100 border-l mx-4"></div>
                                            <div className="flex flex-nowrap -space-x-3">
                                                <div className="h-9 w-9">
                                                    <img className="object-cover w-full h-full rounded-full" src="https://ui-avatars.com/api/?background=random" />
                                                </div>
                                                <div className="h-9 w-9">
                                                    <img className="object-cover w-full h-full rounded-full" src="https://ui-avatars.com/api/?background=random" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-x-2">
                                            <button type="button" className="inline-flex items-center justify-center h-9 px-3 rounded-xl border hover:border-gray-400 text-gray-800 hover:text-gray-900 transition">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-chat-fill" viewBox="0 0 16 16">
                                                    <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z" />
                                                </svg>
                                            </button>
                                            <button type="button" className="inline-flex items-center justify-center h-9 px-5 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
                                                Open
                                            </button>
                                        </div>
                                    </div>

                                    <hr className="my-10" />

                                    <div className="grid grid-cols-2 gap-x-20">
                                        <div>
                                            <h2 className="text-2xl font-bold mb-4">Stats</h2>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div className="col-span-2">
                                                    <div className="p-4 bg-green-100 rounded-xl">
                                                        <div className="font-bold text-xl text-gray-800 leading-none">Good day, <br />Kristin</div>
                                                        <div className="mt-5">
                                                            <button type="button" className="inline-flex items-center justify-center py-2 px-3 rounded-xl bg-white text-gray-800 hover:text-green-500 text-sm font-semibold transition">
                                                                Start tracking
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-4 bg-indigo-100 rounded-xl text-gray-800">
                                                    <div className="font-bold text-2xl leading-none">20</div>
                                                    <div className="mt-2">Tasks finished</div>
                                                </div>
                                                <div className="p-4 bg-indigo-100 rounded-xl text-gray-800">
                                                    <div className="font-bold text-2xl leading-none">5,5</div>
                                                    <div className="mt-2">Tracked hours</div>
                                                </div>
                                                <div className="col-span-2">
                                                    <div className="p-4 bg-purple-100 rounded-xl text-gray-800">
                                                        <div className="font-bold text-xl leading-none">Your daily plan</div>
                                                        <div className="mt-2">5 of 8 completed</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold mb-4">Your tasks today</h2>

                                            <div className="space-y-4">
                                                <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                                    <div className="flex justify-between">
                                                        <div className="text-gray-400 text-xs">Number 10</div>
                                                        <div className="text-gray-400 text-xs">4h</div>
                                                    </div>
                                                    <p className="font-bold hover:text-indigo-800 hover:underline">Blog and social posts</p>
                                                    <div className="text-sm text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                        </svg>Deadline is today
                                                    </div>
                                                </div>
                                                <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                                    <div className="flex justify-between">
                                                        <div className="text-gray-400 text-xs">Grace Aroma</div>
                                                        <div className="text-gray-400 text-xs">7d</div>
                                                    </div>
                                                    <p className="font-bold hover:text-indigo-800 hover:underline">New campaign review</p>
                                                    <div className="text-sm text-gray-600">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-gray-800 inline align-middle mr-1" viewBox="0 0 16 16">
                                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                        </svg>New feedback
                                                    </div>
                                                </div>
                                                <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                                                    <div className="flex justify-between">
                                                        <div className="text-gray-400 text-xs">Petz App</div>
                                                        <div className="text-gray-400 text-xs">2h</div>
                                                    </div>
                                                    <p className="font-bold hover:text-indigo-800 hover:underline">Cross-platform and browser QA</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>}
                    {
                        addProduct &&
                        <div className='w-[85vw] p-12 ml-auto'>
                            <div className="grid gap-6 mb-6 md:grid-cols-2">
                                <div>
                                    <label for="website" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Website URL</label>
                                    <input type="url" id="website" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required />
                                </div>
                                <div>
                                    <label for="visitors" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Unique visitors (per month)</label>
                                    <input type="number" id="visitors" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                                </div>
                            </div>
                            <div className="mb-6">
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Email address</label>
                                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                            </div>
                            <div className="mb-6">
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Password</label>
                                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                            </div>
                            <div className="mb-6">
                                <label for="confirm_password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Confirm password</label>
                                <input type="password" id="confirm_password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required />
                            </div>
                            <div className="flex items-start mb-6">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                                </div>
                                <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>.</label>
                            </div>
                            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </div>

                    }
                </body>
            }
        </div>
    )
}
