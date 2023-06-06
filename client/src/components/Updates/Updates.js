import React from 'react'

export default function Updates() {
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto lg:w-[85vw]">
                    <div className="-my-8 divide-y-2 divide-gray-100">

                        {[1, 2, 3, 4, 5, 6, 7, 8].map(e => {
                            return <div key={e} className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span className="font-semibold title-font text-gray-700">CATEGORY</span>
                                    <span className="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">Meditation bushwick direct trade taxidermy shaman</h2>
                                    <p className="leading-relaxed">Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.</p>
                                    <div className="text-indigo-500 inline-flex items-center mt-4">Learn More
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}
