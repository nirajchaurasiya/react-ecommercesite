import React, { useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

export default function Products() {
    const [value, setValue] = useState(100000);
    // eslint-disable-next-line
    const [products, setProducts] = useState([])
    const [newProducts, setNewProducts] = useState(products)
    const [loader, setLoader] = useState(true)
    const [selectedValue, setSelectedValue] = useState('all');
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleRangeChange = (event) => {
        setValue(parseInt(event.target.value));
    };
    const clearFilters = () => {
        setValue(100000)
        setSelectedValue('all')
        setNewProducts(products)
    }
    const applyfilters = () => {
        console.log(selectedValue)
        if (selectedValue === "all") {
            const filterCate = products.filter(e => e.price <= value)
            console.log(filterCate)
            setNewProducts(filterCate);
            setLoader(false)
        }
        else {
            const filterCate = products.filter(e => e.category === selectedValue && e.price <= value)
            console.log(filterCate)
            setNewProducts(filterCate);
            setLoader(false)
        }
    }
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
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        fetchAlltheProducts()
    }, [fetchAlltheProducts])

    return (
        <div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 w-[90vw] mx-auto ">
                    <div className="flex flex-wrap">
                        <div className="lg:w-1/4 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Search by filters</h1>

                            <select value={selectedValue}
                                onChange={handleSelectChange} className="px-4 py-3 w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0 text-sm">
                                <option value="all"  >All Products</option>
                                <option value="gm">Garam Masala</option>
                                <option value="op">Others Product</option>
                                <option value="sale">Sale</option>
                            </select>

                            <div className="mb-4">
                                <p id="selected-price" className="mt-2">Selected Price: NRs {value} </p>
                                <input
                                    type="range"
                                    min="100"
                                    max="100000"
                                    step="1"
                                    value={value}
                                    onChange={handleRangeChange}
                                    className="w-full h-2 appearance-none bg-gray-200 rounded-md"
                                />
                            </div>

                            <div className="flex border-t py-5 gap-2">
                                <button className="flex text-white bg-indigo-500 border-0 py-1.5 px-2 text-sm focus:outline-none hover:bg-indigo-600 rounded" onClick={applyfilters}>Apply filters</button>
                                <button className="flex text-white bg-gray-500 border-0 py-1.5 px-2 text-sm focus:outline-none hover:bg-gray-600 rounded" onClick={clearFilters}>Clear filters</button>
                            </div>
                        </div>

                        <section className="text-gray-600 body-font lg:w-3/4 w-full h-auto object-cover object-center rounded">
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
                                                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">All Products</h1>
                                                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                                                        </div>
                                                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Checkout our premium collection of different variety of Gamra</p>
                                                    </div>
                                                    <div className="flex flex-wrap -m-4">
                                                        {newProducts?.map(e => {
                                                            return <div key={e._id} className="xl:w-1/3 md:w-1/2 p-2">
                                                                <div className="bg-gray-100 p-3 rounded-lg">
                                                                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={`${REACT_APP_API_URL}/${e.pictures.split(',')[0]}`} alt="content" />
                                                                    <h3 className="tracking-widest text-blue-700 text-xs font-medium title-font">Nrs {e.price}</h3>
                                                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{e.title.slice(0, 40)}...</h2>
                                                                    <p className="leading-relaxed text-base">{e.desc.slice(0, 90)}...</p>
                                                                    <NavLink to={`/product/${e._id}`} type="button" className="text-blue-500 text-sm underline">Expand details</NavLink>
                                                                </div>
                                                            </div>
                                                        })}

                                                    </div>

                                                </div>
                                                <div className='flex m-auto justify-center py-12'>
                                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More</button>
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
    )
}



{/* <div className="flex border-t justify-between border-gray-200 py-2">
                                <input
                                    className="justify-end cursor-pointer bg-red-300"
                                    type="checkbox"
                                    name="checkbox1"
                                    checked={checkboxes.checkbox1}
                                    value={checkboxes.checkbox1}
                                    onChange={handleCheckboxChange}
                                />
                                <input
                                    className="justify-end cursor-pointer bg-red-300"
                                    type="checkbox"
                                    name="checkbox2"
                                    checked={checkboxes.checkbox2}
                                    value={checkboxes.checkbox2}
                                    onChange={handleCheckboxChange}
                                />
                                <input
                                    className="justify-end cursor-pointer bg-red-300"
                                    type="checkbox"
                                    name="checkbox3"
                                    checked={checkboxes.checkbox3}
                                    value={checkboxes.checkbox3}
                                    onChange={handleCheckboxChange}
                                />
                                <input
                                    className="justify-end cursor-pointer bg-red-300"
                                    type="checkbox"
                                    name="checkbox4"
                                    checked={checkboxes.checkbox4}
                                    value={checkboxes.checkbox4}
                                    onChange={handleCheckboxChange}
                                />
                            </div> */}
{/* <div className="flex border-gray-200 py-2">
                                <span className="text-gray-500 text-sm">Red</span>
                                <span className="ml-auto text-gray-900 text-sm">Black</span>
                                <span className="ml-auto text-gray-900 text-sm">White</span>
                                <span className="ml-auto text-gray-900 text-sm">Yellow</span>
                            </div> */}