import React from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
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
export default function Search() {
    const navigate = useNavigate();
    const { query } = useParams();
    return (
        <div>
            <section className="text-gray-600 body-font w-[90vw] m-auto ">
                <div className="container px-5 py-12 mx-auto">
                    <div className="flex flex-wrap w-full mb-5">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="text-2xl font-bold title-font text-gray-900">Search results for {query}</h1>
                        </div>
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
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">More</button>
                        </div>
                    </div>
                    {/* <img className="rounded-lg h-auto mt-12 mb-12 max-w-full border" src="/images/noresultfound.png" alt="description" /> */}

                </div>
            </section>
        </div>
    )
}
