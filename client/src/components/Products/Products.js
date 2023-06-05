import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Origintalproducts = [
    {
        id: 1,
        url: '/images/apple.jpeg',
        price: 40000,
        color: "red",
        category: "gm",
        name: "Apple Laptop 14 pro",
        desc: "Checkout the latest version of Apple Laptop. This has more features than the previous Laptops"
    },
    {
        id: 2,
        url: '/images/coat.jpg',
        price: 4000,
        color: "black",
        category: "op",
        name: "Waterproof Coat",
        desc: "Checkout the latest version of Coat. This has more features than the previous Laptops"
    },
    {
        id: 3,
        url: '/images/computer.jpg',
        price: 30000,
        color: "black",
        category: "sale",
        name: "Apple Computer 14 pro",
        desc: "Checkout the latest version of Apple Laptop. This has more features than the previous Laptops"
    },
    {
        id: 4,
        url: '/images/logo.jpg',
        price: 45000,
        color: "white",
        category: "gm",
        name: "Apple Logo 14 pro",
        desc: "Checkout the latest version of Apple Logo. This has more features than the previous Laptops"
    }
]
export default function Products() {
    const [value, setValue] = useState(100000);
    // eslint-disable-next-line
    const [products, setProducts] = useState(Origintalproducts)
    const [newProducts, setNewProducts] = useState(products)
    const [selectedValue, setSelectedValue] = useState('all');

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
        }
        else {
            const filterCate = products.filter(e => e.category == selectedValue && e.price <= value)
            console.log(filterCate)
            setNewProducts(filterCate);
        }
    }

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
                            <div className="flex border-t py-5 gap-2">
                                <button className="flex text-white bg-indigo-500 border-0 py-1.5 px-2 text-sm focus:outline-none hover:bg-indigo-600 rounded" onClick={applyfilters}>Apply filters</button>
                                <button className="flex text-white bg-gray-500 border-0 py-1.5 px-2 text-sm focus:outline-none hover:bg-gray-600 rounded" onClick={clearFilters}>Clear filters</button>
                            </div>
                        </div>

                        <section className="text-gray-600 body-font lg:w-3/4 w-full h-auto object-cover object-center rounded">
                            {newProducts.length >= 1 ? <div className="container px-5 py-12 mx-auto">
                                <div className="flex flex-wrap w-full mb-5">
                                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">All Products</h1>
                                        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                                    </div>
                                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Checkout our premium collection of different variety of Gamra</p>
                                </div>
                                <div className="flex flex-wrap -m-4">
                                    {newProducts.map(e => {
                                        return <div key={e.id} className="xl:w-1/3 md:w-1/2 p-2">
                                            <div className="bg-gray-100 p-3 rounded-lg">
                                                <img className="h-40 rounded w-full object-cover object-center mb-6" src={e.url} alt="content" />
                                                <h3 className="tracking-widest text-blue-700 text-xs font-medium title-font">Nrs {e.price}</h3>
                                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{e.name.slice(0, 40)}...</h2>
                                                <p className="leading-relaxed text-base">{e.desc.slice(0, 90)}...</p>
                                                <NavLink to={`/product/${e.id}`} type="button" className="text-blue-500 text-sm underline">Expand details</NavLink>
                                            </div>
                                        </div>
                                    })}
                                </div>
                                <div className='flex m-auto justify-center py-12'>
                                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More</button>
                                </div>
                            </div>

                                :

                                <div className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400" role="alert">
                                    <span className="font-medium">No Products!</span>
                                </div>}
                        </section>
                    </div>
                </div>
            </section>
        </div>
    )
}
