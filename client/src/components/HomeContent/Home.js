import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
export default function Home() {
    const navigate = useNavigate();
    const numberOfProduct = [
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
    return (
        <div className=''>
            <div className='m-auto lg:w-[85vw]'>
                <section className="text-gray-600 body-font">
                    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-xl mb-4 font-medium text-gray-900">ShopKart: Streamlined
                                <br className="hidden lg:inline-block" />E-commerce for Effortless Online Shopping
                            </h1>
                            <p className="mb-8 leading-relaxed">Discover a seamless online shopping experience at ShopSmart. Browse a wide range of products, enjoy secure transactions, and get your purchases delivered right to your doorstep. With user-friendly navigation and trusted sellers, finding what you need has never been easier.</p>
                            <div className="flex justify-center">
                                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-3 text-sm lg:text-lg focus:outline-none hover:bg-indigo-600 rounded lg:px-6" onClick={() => { navigate('/products') }}>Browse Product</button>
                            </div>
                        </div>
                        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                            <img className="object-cover object-center rounded" alt="hero" src="/images/mainimage.png" />
                        </div>
                    </div>
                </section>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 mx-auto">
                        <div className="flex flex-wrap w-full mb-6">
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Special Garam Masala Products</h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Checkout our premium collection of different variety of Gamra</p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {numberOfProduct.map(e => {
                                return <div key={e.id} className="xl:w-1/4 md:w-1/2 p-2">
                                    <div className="bg-gray-100 p-3 rounded-lg">
                                        <img className="h-40 rounded w-full object-cover object-center mb-6" src={e.url} alt="content" />
                                        <h3 className="tracking-widest text-blue-700 text-xs font-medium title-font">Nrs {e.price}</h3>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{e.name.slice(0, 40)}...</h2>
                                        <p className="leading-relaxed text-base">{e.desc.slice(0, 90)}...</p>
                                        <NavLink to={`/product/${e.id}`} type="button" className="text-blue-500 text-sm underline">Expand details</NavLink>
                                    </div>
                                </div>
                            })}
                            <div className='flex m-auto'>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { navigate('/products') }}>More</button>
                            </div>
                        </div>
                    </div>

                </section>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto">
                        <div className="flex flex-wrap w-full mb-5">
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Other Products</h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Checkout our premium collection of different variety of Gamra</p>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {numberOfProduct.map(e => {
                                return <div key={e.id} className="xl:w-1/4 md:w-1/2 p-2">
                                    <div className="bg-gray-100 p-3 rounded-lg">
                                        <img className="h-40 rounded w-full object-cover object-center mb-6" src={e.url} alt="content" />
                                        <h3 className="tracking-widest text-blue-700 text-xs font-medium title-font">Nrs {e.price}</h3>
                                        <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{e.name.slice(0, 40)}...</h2>
                                        <p className="leading-relaxed text-base">{e.desc.slice(0, 90)}...</p>
                                        <NavLink to={`/product/${e.id}`} type="button" className="text-blue-500 text-sm underline">Expand details</NavLink>
                                    </div>
                                </div>
                            })}
                            <div className='flex m-auto'>
                                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { navigate('/products') }}>More</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-12 mx-auto">
                        <div className="flex flex-wrap w-full mb-5">
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Verified Sources</h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            <div className="xl:w-1/4 md:w-1/2 p-4 m-auto">
                                <div className=" p-1 rounded-lg">
                                    <img className="h-40 rounded w-full object-cover object-center" src="/images/khalti.png" alt="content" />
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4 m-auto">
                                <div className=" p-1 rounded-lg">
                                    <img className="h-40 rounded w-full object-cover object-center" src="/images/esewa.png" alt="content" />
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4 m-auto">
                                <div className=" p-1 rounded-lg">
                                    <img className="h-40 rounded w-full object-cover object-center" src="/images/imepay.jpg" alt="content" />
                                </div>
                            </div>
                            <div className="xl:w-1/4 md:w-1/2 p-4 m-auto">
                                <div className=" p-1 rounded-lg">
                                    <img className="h-40 rounded w-full object-cover object-center" src="/images/qpay.png" alt="content" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
