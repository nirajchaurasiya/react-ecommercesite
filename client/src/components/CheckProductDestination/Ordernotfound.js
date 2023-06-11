import React from 'react'

export default function Ordernotfound() {
    return (
        <div>
            <div className="flex items-center justify-center h-screen">
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center">
                    <img
                        src="/images/logo.jpg"
                        alt="Logo"
                        className="h-24 w-24 mb-4"
                    />
                    <h3 className="text-xl font-semibold mb-4">Order Not Found</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-center">
                        Sorry, the order you are looking for doesn't exist. Please check back later.
                    </p>
                </div>
            </div>
        </div>
    )
}
