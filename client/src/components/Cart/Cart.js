import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
export default function Cart() {
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL
    const [loader, setLoader] = useState(true);
    const [count, setCount] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [showWarning, setShowWarning] = useState(false)
    const [localStoreDatas, setLocalStoreDatas] = useState()
    const [uniquePidsState, setUniquePidsState] = useState(null)

    const deleteTheProductFromArray = (pid) => {
        const updatedData = localStoreDatas.filter(e => e.pid !== pid);
        localStorage.setItem('shopkartCarts', JSON.stringify(updatedData));
        getAllProductFromLocalStore();
    }
    const getAllProductFromLocalStore = () => {
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
    }

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
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        getAllProductFromLocalStore();
    }, []);

    return (
        <div className=''>
            {loader ?
                <div className="bg-gray-100 pt-20">
                    <h1 className="text-center text-2xl mb-10 font-bold">Cart Items</h1>
                    <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0 py-2">
                        <div className="rounded-lg md:w-2/3 flex flex-col gap-5">
                            {[1, 2, 3, 4].map(e => {
                                return <div role="status" key={e} className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">
                                    <div className="flex items-center justify-center w-full h-36 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                                        <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" ariaHidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                    </div>
                                    <div className="w-full">
                                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                                    </div>
                                    <span className="sr-only">Loading...</span>
                                </div>

                            })}

                        </div>
                        <div className="mt-6 h-full rounded-lg bg-white p-6 shadow-md md:mt-0 md:w-1/3">

                            <div role="status" className="max-w-sm p-4 rounded animate-pulse md:p-6 dark:border-gray-700">
                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>

                                <span className="sr-only">Loading...</span>
                            </div>

                            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" >Check out</button>
                        </div>
                    </div>
                </div> :
                localStoreDatas?.length >= 1 ?
                    <div className=" bg-gray-100 pt-20">
                        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                            <div className="rounded-lg md:w-2/3">
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
                                                            className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
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
                                                            className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                                            onClick={() => handleQuantityChange(pid, index, 'add')}
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                    <div className="flex items-center space-x-4">
                                                        <p className="text-sm">Nrs {product?.price}</p>
                                                        <button onClick={() => { deleteTheProductFromArray(pid) }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    })}
                            </div>
                            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
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
                                <NavLink to={`/checkout`}>
                                    <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600" >Check out</button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    :
                    <div className=" bg-gray-100 pt-20 pb-32">
                        <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                            <div className="rounded-lg md:w-2/3">
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
                            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
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
    )
}
