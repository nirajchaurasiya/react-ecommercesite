import React from 'react'

export default function CheckoutTop() {
    return (
        <div className=''>
            <img className='h-24 w-24 rounded-2xl m-auto' src="/images/logo.jpg" alt="logo" />
            <p className="mb-3 text-xl flex text-black items-center mt-2 justify-center">
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                    className="inline-block fill-current h-8 w-8 mr-2"
                >
                    <path
                        d="m64 496l0-256 48 0 0-80c0-71 57-128 128-128l16 0c71 0 128 57 128 128l0 80 48 0 0 256z m172-131l-12 83 48 0-12-83c12-5 20-17 20-30 0-18-14-32-32-32-18 0-32 14-32 32 0 13 8 25 20 30z m100-197c0-49-39-88-88-88-49 0-88 39-88 88l0 72 176 0z"
                    />
                </svg>
                Secure Payment
            </p>
        </div>
    )
}
