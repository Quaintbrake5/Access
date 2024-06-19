/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../components/styles/service.css'

const Service = () => {
  return (
    <>
        <section className='service-section'>
            <div className="main-Div">
                <span> 
                <strong>access more </strong>
                banking services
                </span>
            
                <div className="accesstext">
                    <p>Whether it's your child's first savings account, your personal savings account, your first retirement plan or a business loan, we offer personal and corporate banking products and services tailored to meet your needs.</p>
                </div>
            </div>

            <br/>

            <div className='service-container'>
                <div className='service-swiper'>
                    {/* <div className='service-swiper-slide'>
                        <button className="prev" onClick="prevSlide()">
                            <strong>&#10094;</strong>
                        </button>
                    </div> */}

                    <div className='service-swiper-slide-0'>
                        <div>
                            <div className='inner-slide'>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="iconstyle" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#333" d="M435.7 558.7c-.6-3.9-4-6.7-7.9-6.7H166.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248zM196.5 748l20.7-128h159.5l20.7 128H196.5zm709.4 58.7l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H596.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.3-.7 7.3-4.8 6.6-9.2zM626.5 748l20.7-128h159.5l20.7 128H626.5zM342 472h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H382.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8zm91.2-196h159.5l20.7 128h-201l20.8-128z"></path><path fill="#E6E6E6" d="M592.7 276H433.2l-20.8 128h201zM217.2 620l-20.7 128h200.9l-20.7-128zm430 0l-20.7 128h200.9l-20.7-128z"></path>
                                </svg>

                                <p className='blur'>Online Banking</p>
                            </div>
                        </div>
                    </div>

                    <div className='service-swiper-slide-1'>
                        <div>
                            <div className='inner-slide'>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" className="iconstyle" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#333" d="M435.7 558.7c-.6-3.9-4-6.7-7.9-6.7H166.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248zM196.5 748l20.7-128h159.5l20.7 128H196.5zm709.4 58.7l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H596.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8h342c.4 0 .9 0 1.3-.1 4.3-.7 7.3-4.8 6.6-9.2zM626.5 748l20.7-128h159.5l20.7 128H626.5zM342 472h342c.4 0 .9 0 1.3-.1 4.4-.7 7.3-4.8 6.6-9.2l-40.2-248c-.6-3.9-4-6.7-7.9-6.7H382.2c-3.9 0-7.3 2.8-7.9 6.7l-40.2 248c-.1.4-.1.9-.1 1.3 0 4.4 3.6 8 8 8zm91.2-196h159.5l20.7 128h-201l20.8-128z"></path><path fill="#E6E6E6" d="M592.7 276H433.2l-20.8 128h201zM217.2 620l-20.7 128h200.9l-20.7-128zm430 0l-20.7 128h200.9l-20.7-128z"></path>
                                </svg>

                                <p className='blur'>American Express Cards</p>
                            </div>
                        </div>
                    </div>

                    <div className='service-swiper-slide-2'>
                        <div>
                            <div className='inner-slide'>
                                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="iconstyle" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="256" height="480" x="128" y="16" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" rx="48" ry="48"></rect>
                                    <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M176 16h24a8 8 0 0 1 8 8h0a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16h0a8 8 0 0 1 8-8h24"></path>
                                </svg>

                                <p className='blur'>Mobile Banking</p>
                            </div>
                        </div>
                    </div>

                    {/* <div className='service-swiper-slide'>
                        <button className="prev" onClick="prevSlide()">
                            <strong>&#10095;</strong>
                        </button>
                    </div> */}

                </div>
            </div>
        </section>  
      
    </>
  )
}

export default Service
