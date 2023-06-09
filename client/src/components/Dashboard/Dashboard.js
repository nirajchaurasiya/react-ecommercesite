import React, { useCallback, useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import cate from '../CategoryJSON/category.json'
const revenueData = [
    { month: 'Jan', revenue: '$37,500' },
    { month: 'Feb', revenue: '$45,000' },
    { month: 'Mar', revenue: '$47,500' },
    { month: 'Apr', revenue: '$50,000' },
    { month: 'May', revenue: '$47,500' },
    { month: 'Jun', revenue: '$55,000' },
    { month: 'Jul', revenue: '$60,000' },
    { month: 'Aug', revenue: '$57,500' },
    { month: 'Sep', revenue: '$67,500' },
    { month: 'Oct', revenue: '$65,000' },
    { month: 'Nov', revenue: '$70,000' },
    { month: 'Dec', revenue: '$75,000' },
]
export default function Dashboard() {
    // eslint-disable-next-line
    const [showAdminPanel, setShowAdminPanel] = useState(false);
    const [selectedValue, setSelectedValue] = useState('all');
    const [addProduct, setAddProduct] = useState(false);
    const [showDashboard, setshowDashboard] = useState(true)
    const [products, setProducts] = useState([])
    const [newProducts, setNewProducts] = useState(products)
    const [numberOfUsers, setNumberOfUsers] = useState(0)
    const [loader, setLoader] = useState(true)
    const [selectedImages, setSelectedImages] = useState([]);
    const [addClassToNav, setAddClassToNav] = useState('white')
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

    const title = useRef();
    const desc = useRef();
    const price = useRef();
    const category = useRef();

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setSelectedImages(files);
        console.log(files);
    };

    const uploadProduct = (e) => {
        e.preventDefault();
        try {
            const pd = new FormData();
            pd.append('title', title.current.value);
            pd.append('desc', desc.current.value);
            pd.append('price', price.current.value);
            pd.append('category', category.current.value);
            Object.values(selectedImages).forEach(file => {
                pd.append("pictures", file);
            });
            axios.post(`${REACT_APP_API_URL}/api/productactions/addproduct`, pd)
                .then((data) => {
                    if (data.data.status) {
                        alert('Success')
                        fetchAlltheProducts();
                    }
                    else {
                        alert("Failed to add a new product");
                    }
                })
                .catch((er) => {
                    console.log(er);
                })
        } catch (error) {
            console.log(error);
        }

    }
    // eslint-disable-next-line
    const email = useRef();
    const password = useRef();
    const fetchAlltheProducts = useCallback(() => {
        axios
            .get(`${REACT_APP_API_URL}/api/productactions/getproducts`)
            .then((data) => {
                setProducts(data.data.data);
                setNewProducts(data.data.data);
                setLoader(false)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [REACT_APP_API_URL]);
    const getAllUser = useCallback(() => {
        try {
            axios.get(`${REACT_APP_API_URL}/api/personactions/getusers`)
                .then((data) => {
                    if (data.data.status === 1 || data.status === 200) {
                        setNumberOfUsers(data.data.msg)
                    }
                    else {
                        setNumberOfUsers(0);
                    }
                })
                .catch(err => {
                    setNumberOfUsers(0);
                });
        } catch (error) {
            setNumberOfUsers(0);
        }
    }, [REACT_APP_API_URL])
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        fetchAlltheProducts()
        getAllUser();
    }, [fetchAlltheProducts, getAllUser])

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
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };
    return (
        <div className='overflow-hidden'>
            {!showAdminPanel &&
                <section className="bg-gray-50">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-8">
                        <div className="text-2xl font-semibold text-gray-900 dark:text-gray-900">
                            <img className="w-24 h-24 m-auto" src="/images/logo.jpg" alt="logo" />
                        </div>
                        <div className="w-full bg-white rounded-md shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-white dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-gray-900">
                                    Sign in to Admin Panel
                                </h1>
                                <div className="space-y-4 md:space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Your email</label>
                                        <input ref={email} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Password</label>
                                        <input ref={password} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-md focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>
                                    <button onClick={handleAdminPanel} type="submit" className="w-full text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-md text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>}
            {
                showAdminPanel &&
                <div className="relative pl-72 flex m-auto">
                    <aside className="fixed -top-3 inset-y-[50%] left-0 bg-transparent shadow-md w-60">
                        <div className="flex flex-col justify-between h-[50%]">
                            <div className="flex-grow">
                                <div className="px-4 py-6 text-center border-b">
                                    <h1 className="text-xl font-bold leading-none"><span className="text-indigo-700">Task Manager</span> App</h1>
                                </div>
                                <div className="p-4">
                                    <ul className="space-y-1">
                                        <li className='cursor-pointer select-none' onClick={() => { setAddProduct(false); setshowDashboard(true); }} >
                                            <p className={`flex bg-${addClassToNav} hover:bg-indigo-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                                                    <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-3.5-7h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                                                </svg> Dashboard
                                            </p>
                                        </li>
                                        <li className='cursor-pointer select-none' onClick={() => { setAddProduct(true); setshowDashboard(false); }} >
                                            <p className={`flex bg-${addClassToNav} hover:bg-indigo-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4`}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="text-lg mr-4" viewBox="0 0 16 16">
                                                    <path d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5 4h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1zm0 2h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1z" />
                                                </svg>Add Product
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="p-4 fixed left-0 top-[41%] bg-white shadow-lg border w-60 cursor-pointer">
                                <button onClick={() => { window.location.reload() }} type="button" className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="" viewBox="0 0 16 16">
                                        <path d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>
                                </button> <span className="font-bold text-sm ml-2">Logout</span>
                            </div>
                        </div>
                    </aside>
                    {showDashboard &&
                        <div>
                            <section className="text-gray-600 body-font">
                                <div className="container px-5 py-24 w-[90vw] mx-auto ">

                                    <div className='flex items-center gap-4'>
                                        <div className="flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg shadow-xl sm:p-8">
                                            <h2 className="text-xl font-bold">Monthly Revenue</h2>
                                            <span className="text-sm font-semibold text-gray-500 mb-6">2023</span>
                                            <div className="flex items-end flex-grow w-full mt-2 space-x-2 sm:space-x-3">
                                                {revenueData.map((data, index) => {
                                                    const previousRevenue = index > 0 ? revenueData[index - 1].revenue : 0;
                                                    const colorClass = data.revenue > previousRevenue ? 'bg-green-400' : 'bg-red-400';

                                                    return (
                                                        <div key={index} className="relative flex flex-col items-center flex-grow pb-5 group">
                                                            <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                                                                {data.revenue}
                                                            </span>
                                                            <div className={`relative flex justify-center w-full h-10 ${colorClass}`}></div>
                                                            <div className={`relative flex justify-center w-full h-8 ${colorClass}`}></div>
                                                            <div className={`relative flex justify-center w-full h-20 ${colorClass}`}></div>
                                                            <span className="absolute bottom-0 text-xs font-bold">{data.month}</span>
                                                            <span className='text-xs absolute top-16 font-thin' >{data.revenue}</span>
                                                        </div>
                                                    );
                                                })}




                                            </div>
                                        </div>
                                        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-800">All Users</h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Number of User: {numberOfUsers}</p>
                                            {/* <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Actions
                                                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </div> */}
                                        </div>
                                        <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
                                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-800">All Products</h5>
                                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Number of Product: {newProducts?.length}</p>
                                            {/* <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                Actions
                                                <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                            </div> */}
                                        </div>
                                    </div>
                                    <br />
                                    <div className="flex flex-wrap">

                                        {/*  */}
                                        <section className="text-gray-600 body-font lg:w-5/6 w-full h-auto object-cover object-center rounded">
                                            <div className="container px-5 py-12 mx-auto">
                                                <div className="flex flex-wrap -m-9">
                                                    {loader ?
                                                        [1, 2, 3, 4, 5, 6].map(e => {
                                                            return <div key={e} role="status" className="xl:w-1/3 md:w-1/2 p-4 rounded shadow animate-pulse md:p-6 dark:border-gray-700">
                                                                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                                                                    <svg className="w-12 h-12 text-gray-200 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                                                </div>
                                                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>

                                                                <span className="sr-only">Loading...</span>
                                                            </div>
                                                        })

                                                        :

                                                        newProducts.length > 1 ?
                                                            <>

                                                                <div>
                                                                    <div className="flex flex-wrap w-full mb-5">
                                                                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                                                            <h1 className="sm:text-3xl lg:text-xl font-medium title-font mb-2 text-gray-900">All Products ({newProducts.length}) </h1>
                                                                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-wrap -m-4">
                                                                        {newProducts.slice(0, 30)?.map(e => {
                                                                            return <div key={e._id} className="xl:w-1/4 md:w-1/2 p-2">
                                                                                <div className="bg-gray-100 p-3 rounded-lg">
                                                                                    <h3 className="tracking-widest text-blue-700 text-xs font-medium title-font">Nrs {e.price}</h3>
                                                                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{e.title.slice(0, 40)}...</h2>
                                                                                    <p className="leading-relaxed text-base">{e.desc.slice(0, 60)}...</p>
                                                                                    <NavLink to={`/product/${e._id}`} type="button" className="text-blue-500 text-sm underline">Expand details</NavLink>
                                                                                </div>
                                                                            </div>
                                                                        })}

                                                                    </div>
                                                                </div>
                                                                <div>
                                                                    <div className="flex flex-wrap w-full mb-5">
                                                                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                                                            <h1 className="sm:text-3xl lg:text-xl font-medium title-font mb-2 text-gray-900">All Products ({newProducts.length}) </h1>
                                                                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex flex-wrap -m-4">
                                                                        {newProducts.slice(0, 30)?.map(e => {
                                                                            return <div key={e._id} className="xl:w-1/4 md:w-1/2 p-2">
                                                                                <div className="bg-gray-100 p-3 rounded-lg">
                                                                                    <h3 className="tracking-widest text-blue-700 text-xs font-medium title-font">Nrs {e.price}</h3>
                                                                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{e.title.slice(0, 40)}...</h2>
                                                                                    <p className="leading-relaxed text-base">{e.desc.slice(0, 60)}...</p>
                                                                                    <NavLink to={`/product/${e._id}`} type="button" className="text-blue-500 text-sm underline">Expand details</NavLink>
                                                                                </div>
                                                                            </div>
                                                                        })}

                                                                    </div>
                                                                </div>
                                                            </>
                                                            : <div className="p-4 mb-4 w-full text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300" role="alert">
                                                                <span className="font-medium">Sorry!</span> But, no product found. Change a few things up and try submitting again.
                                                            </div>
                                                    }
                                                </div>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </section>
                        </div>
                    }
                    {
                        addProduct &&
                        <form className='w-[85vw] p-12 flex flex-col gap-5 ml-auto' encType='multipart/form-data'>
                            <div>
                                <label for="Title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Title</label>
                                <textarea ref={title} type="text" id="Title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required />
                            </div>
                            <div>
                                <label for="Description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Unique Description</label>
                                <textarea type="text" ref={desc} id="Description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
                            </div>
                            <div className="">
                                <label for="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Price</label>
                                <input type="text" id="price" ref={price} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
                            </div>
                            <div className="">
                                <label for="Category" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Category</label>
                                <select value={selectedValue}
                                    onChange={handleSelectChange} className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                                    {
                                        cate?.map(e => {
                                            return <option key={e.name} value={e.short}>{e.name}</option>
                                        })
                                    }
                                </select></div>
                            <div className="">
                                <label for="pictures" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">pictures</label>
                                <input type="file" onChange={handleImageChange} id="pictures" accept="image/*" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" multiple />
                            </div>
                            <button onClick={uploadProduct} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                        </form>
                    }
                </div>
            }
        </div>
    )
}
