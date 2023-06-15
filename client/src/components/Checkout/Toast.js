import React from 'react'

export default function Toast() {
    return (
        <>
            <div id="toast-notification" className="fixed right:0 lg:right-2 bottom-0 lg:bottom-2 w-full md:max-w-xs lg:max-w-xs p-4 text-gray-900 bg-white lg:rounded-lg shadow dark:bg-gray-800 dark:text-gray-300" role="alert">
                <div className="flex items-center">
                    <div className="ml-3 text-sm font-normal">
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">Warning!</div>
                        <div className="text-sm font-normal">Please add a item to continue.</div>
                        <span className="text-xs font-medium text-blue-600 dark:text-blue-500">a few seconds ago</span>
                    </div>
                </div>
            </div>
        </>
    )
}
