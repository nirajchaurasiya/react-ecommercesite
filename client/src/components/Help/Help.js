import React, { useEffect } from 'react'

export default function Help() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <div>
            <section>
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-black">Support</h2>
                    <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-700 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Let us know. Open a ticket now!</p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">Your name</label>
                            <input type="text" id="name" className="shadow-sm bg-gray-50 border border-indigo-300 text-gray-900 text-sm rounded-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">Your email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-indigo-300 text-gray-900 text-sm rounded-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                        </div>
                        <div>
                            <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-sm border border-indigo-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-indigo-500 dark:focus:border-indigo-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-700">Your message</label>
                            <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-sm shadow-sm border border-indigo-300 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-indigo-500 dark:focus:border-indigo-500" placeholder="Leave a comment..."></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-sm bg-indigo-700 sm:w-fit hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Open ticket</button>

                    </form>
                </div>
            </section>
        </div>
    )
}
