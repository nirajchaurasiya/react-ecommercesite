import React from 'react'

export default function Logout() {
    const logOut = () => {
        localStorage.removeItem('shopkartStore');
        window.location.href = '/';
    }
    return (
        <div className='flex justify-center py-24'>


            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-white dark:border-gray-700">
                <div>
                    <img className="p-8 rounded-full" src="/images/logo.jpg" alt="logout" />
                </div>
                <div className="px-5 pb-5">
                    <p>
                        <h5 className="text-xl font-semibold text-center tracking-tight text-gray-900 dark:text-gray">Are you sure, you want to logout?</h5>
                    </p>
                    <div className="flex mt-6">
                        <button onClick={logOut} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Logout</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
