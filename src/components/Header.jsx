/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import './scripts/slider'
import '../assets/account.svg'
import '../assets/card.svg'
import '../assets/money.svg'
import '../image/access-business-3_1.png'
import '../image/amex-banner.jpg'
import '../image/corporatebanking.png'
import '../image/Private-Bank-Banner3-1-(1).png'
import '../image/stop-fraud-slider.jpg'


export const Header = () => {
  return (
    <>
        {/* Banners begin */}
        <section className='banner-section'>
            <div className='slideshow'>
                <div className='inner-slideshow'>
                <div className="slider-container">
                    <div className="slider">
                        <img src="../image/amex-banner.jpg" alt="Image 1"></img>
                        <img src="../image/Private-Bank-Banner3-1-(1).png" alt="Image 2"></img>
                        <img src="../image/corporatebanking.png" alt="Image 3"></img>
                        <img src="../image/access-business-3_1.png" alt="Image 4"></img>
                        <img src="../image/stop-fraud-slider.jpg" alt="Image 5"></img>
                    </div>
                </div>

                    {/* <button className="prev" onClick="prevSlide()">&#10094;</button>
                    <button className="next" onClick="nextSlide()">&#10095;</button> */}
                </div>
            </div>  
        </section>

        <section className='featured-box'>
            <div className='box-container'>
                <div className='swiper-wrap'>
                    <div className='swiper-slide'>
                        <a href='https://www.accessbankplc.com/personal/everyday-accounts'>
                            <div className='icon'>
                                <img src='https://www.accessbankplc.com/getmedia/80749f4d-6bba-47ed-bc26-c4f864a222ad/create-account.svg?ext=.svg'></img>
                            </div>

                            <div className='content'>
                                <h4 className='featured-title'>
                                    Open an account.
                                </h4>
                                <p className='featured-text'>
                                    Open an account and open your world to more
                                </p>
                            </div>
                        </a>

                        <a href='https://www.accessbankplc.com/ways-to-bank/cards'>
                            <div className='icon'>
                                <img src='https://www.accessbankplc.com/getmedia/9efcad3f-a131-4f25-b5cd-df3eca9f4f1d/cards.svg?ext=.svg'></img>
                            </div>

                            <div className='content'>
                                <h4 className='featured-title'>
                                    Cards
                                </h4>
                                <p className='featured-text'>
                                    Cards you can use anywhere for your financial...
                                </p>
                            </div>
                        </a>
                        
                        <a href='https://www.accessbankplc.com/personal/borrowing'>
                            <div className='icon'>
                                <img src='https://www.accessbankplc.com/getmedia/a71cc7e4-229c-4861-95c7-163a161b65c4/quick-loans.svg?ext=.svg'></img>
                            </div>

                            <div className='content'>
                                <h4 className='featured-title'>
                                    Quick Loans
                                </h4>
                                <p className='featured-text'>
                                    Need quick cash for Quick fixes?
                                    <br/>
                                    See how we can help 
                                </p>
                            </div>
                        </a>

                        <a href='https://www.accessbankplc.com/personal/borrowing'>
                            <div className='icon'>
                                <img src='https://www.accessbankplc.com/getmedia/d1646ff7-3958-45ee-baf3-4171788bcd9c/money-transfer.svg?ext=.svg'></img>
                            </div>

                            <div className='content'>
                                <h4 className='featured-title'>
                                    Money Transfer
                                </h4>
                                <p className='featured-text'>
                                    Reliable, safe and secure ways to
                                    <br/>
                                    send and receive money
                                </p>
                            </div>
                        </a>    

                    </div>
                    {/* <span className='swiper-notifications'>
                        
                    </span> */}
                </div>
            </div>
        </section>
    </>
  )
}
<script src='../components/scripts/slider.js'></script>
export default Header
