import React from 'react'

export default function Formdata({ userData }) {
    return (
        <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">First name</label>
                <p type="text" placeholder={userData.fname} id="first_name" className="border border-gray-300  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3 select-none dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required >{userData.fname}</p>
            </div>
            <div>
                <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Last name</label>
                <p type="text" placeholder={userData.lname} id="last_name" className="border border-gray-300  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3 select-none dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required >{userData.lname}</p>
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email</label>
                <p type="text" id="email" placeholder={userData.email} className="border border-gray-300  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3 select-none dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required >{userData.email}</p>
            </div>
            <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Phone number</label>
                <p type="tel" id="phone" placeholder={userData.phone} className="border border-gray-300  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3 select-none dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required >{userData.phone}</p>
            </div>
            <div>
                <label htmlFor="address1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Address 1</label>
                <p type="text" id="address1" placeholder={userData.address1} className="border border-gray-300  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3 select-none dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required >{userData.address1}</p>
            </div>
            <div>
                <label htmlFor="address2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Address 2</label>
                <p type="text" id="address2" placeholder={userData.address2} className="border border-gray-300  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3 select-none dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required >{userData.address2}</p>
            </div>
            <div>
                {
                    userData?.address3 && <div>
                        <label htmlFor="address2" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Address 3</label>
                        <p type="text" id="address2" placeholder={userData.address2} className="border border-gray-300  text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-3 select-none dark:border-gray-600 dark:placeholder-gray-800 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required >{userData.address3}</p>
                    </div>
                }
            </div>
        </div>
    )
}
