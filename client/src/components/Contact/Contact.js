import React from 'react'

export default function Contact() {
    return (
        <div>
            <div class="flex flex-col justify-center items-center py-24">
                <div>
                    <img class="h-40 mx-auto py-2" src="/images/logo.jpg" alt="logo" />
                    <p class="text-center text-xl lg:text-2xl font-medium leading-tight">Feel free to ask us anything!</p>
                    <p class="py-4 px-4 text-md lg:text-md leading-tight text-center">If you have any questions regarding  your order, feel free to send email, call or Whatsapp us on our support number</p>

                    <div class="flex justify-between"><div class="text-center px-5 md:px-0 md:text-left py-10"><span class="font-bold">Corporate Address</span>
                        <br />CWH Solutions<br />94, Ghair Saifuddin Domehla Road,<br />Rampur, Uttar Pradesh, 244901<br /></div>
                        <div class="text-center px-5 md:px-0 md:text-left py-10">
                            <span class="font-bold">Customer Support</span>
                            <br />
                            Call/Whatsapp:
                            <a class="underline text-blue-600 dark:text-blue-400" rel="noreferrer" target="_blank" href="https://wa.me/7078073838?text=Hi,%20I%20need%20to%20enquire%20about%20products%20on%20CodesWear">+91 707 807 3838</a><br />
                            Email: care@codeswear.in<br />Morning: 10AM - 6PM<br /></div>
                    </div>
                </div>
            </div>

        </div>
    )
}
