import React, { useEffect } from 'react'

export default function Contact() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, [])
    return (
        <div>
            <div className="flex flex-col justify-center items-center py-24">
                <div>
                    <img className="h-40 mx-auto py-2" src="/images/logo.jpg" alt="logo" />
                    <p className="text-center text-xl lg:text-2xl font-medium leading-tight">Feel free to ask us anything!</p>
                    <p className="py-4 px-4 text-md lg:text-md leading-tight text-center">If you have any questions regarding  your order, feel free to send email, call or Whatsapp us on our support number</p>

                    <div className="flex justify-between"><div className="text-center px-5 md:px-0 md:text-left py-10"><span className="font-bold">Corporate Address</span>
                        <br />Kathmandu, Nepal (🇳🇵) <br />Kirtipur, Ring Road, Tribhuva University<br />Nayabazar, Panga<br /></div>
                        <div className="text-center px-5 md:px-0 md:text-left py-10">
                            <span className="font-bold">Customer Support</span>
                            <br />
                            Call/Whatsapp:
                            <a className="underline text-blue-600 dark:text-blue-400" rel="noreferrer" target="_blank" href="https://wa.link/rkzsx1">+977 9828758167</a><br />
                            Email: care@codeswear.in<br />Morning: 10AM - 6PM<br /></div>
                    </div>
                </div>
            </div>

        </div>
    )
}
