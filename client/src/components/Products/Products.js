import React, { useCallback, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import cate from '../CategoryJSON/category.json'
import Loader from './Loader';
export default function Products() {
    const [value, setValue] = useState(100000);
    // eslint-disable-next-line

    const [products, setProducts] = useState([])
    const [newProducts, setNewProducts] = useState(products)
    const [loader, setLoader] = useState(true)
    const [selectedValue, setSelectedValue] = useState('all');
    const [productFound, setProductFound] = useState(false);
    const [count, setCount] = useState(5)
    const [currDatas, setCurrDatas] = useState([]);
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;
    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };
    const handleRangeChange = (event) => {
        setValue(parseInt(event.target.value));
    };
    const clearFilters = () => {
        setValue(100000)
        setSelectedValue('all')
        setProductFound(true)
        setCurrDatas(products.slice(0, count));
    }
    const applyfilters = () => {
        if (selectedValue === "all") {
            setLoader(true)
            const filterCate = products.filter(e => e.price <= value)
            if (filterCate.length > 0) {
                setNewProducts(filterCate)
                setCurrDatas(filterCate.slice(0, 5));
                setLoader(false)
                setProductFound(true);
            }
            else {
                setLoader(false);
                setProductFound(false);
            }
        }
        else {
            setLoader(true)
            const filterCate = products.filter(e => e.category === selectedValue && e.price <= value)
            if (filterCate.length > 0) {
                setNewProducts(filterCate)
                setProductFound(true);
                setCurrDatas(filterCate.slice(0, 5));
                setLoader(false)
            }
            else {
                setLoader(false);
                setProductFound(false);
            }
        }
    }
    const fetchAlltheProducts = useCallback(() => {
        axios
            .get(`${REACT_APP_API_URL}/api/productactions/getproducts`)
            .then((response) => {
                if (response.status === 200 && response.data.status === 1) {
                    setProducts(response.data.data);
                    setNewProducts(response.data.data)
                    setLoader(false)
                    setProductFound(true);
                    setCount(response.data.data.length);
                    setCurrDatas(response.data.data.slice(0, count));
                }
                else {
                    setLoader(false)
                    setProductFound(false);
                }
            })
            .catch((err) => {
                setProductFound(false);
                setLoader(false)
            });
    }, [REACT_APP_API_URL, count]);
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        fetchAlltheProducts()
    }, [fetchAlltheProducts])

    const fetchData = () => {
        const infiniteScroll = newProducts?.slice(count, count + 5)
        setCurrDatas([...currDatas, ...infiniteScroll]);
        setCount(count + 5);
    }
    // const createMarkup = (html) => {
    //     return { __html: html };
    // };
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
                                {cate.map((e, index) => { return <option key={index} value={e.short}>{e.name}</option> })}
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
                                <div className="">
                                    {loader ?
                                        <Loader />
                                        :
                                        productFound === true && currDatas.length > 0 ?
                                            <>
                                                <div>
                                                    <div className="flex flex-wrap w-full mb-5">
                                                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">All Products</h1>
                                                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-wrap -m-4">
                                                        {currDatas?.map(e => {
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
                                                    <button type="button" disabled={newProducts.length === count} onClick={fetchData} className="disabled:bg-gray-500 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More</button>
                                                </div>
                                            </>
                                            :
                                            <div className="flex flex-wrap xl:w-1/3 border md:w-1/2">
                                                <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
                                                    <img src="/images/noproductfound.png" alt="No Product Found" className="w-full h-64 object-cover" />
                                                    <div className="px-6 py-4">
                                                        <div className="font-bold text-xl mb-2">No Product Found</div>
                                                        <p className="text-gray-700 text-base">
                                                            We apologize, but it seems that there are no products available at the moment.
                                                        </p>
                                                    </div>
                                                </div>
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