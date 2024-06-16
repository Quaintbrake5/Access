/* eslint-disable no-unused-vars */
import React from 'react'
import '../assets/pin.svg'

export const MainSection = () => {
  return (
    <>
      <div className='private-text'>
        <div className='access-top'>
            <div className='access-top-title'>
                <span className="font-weight-bold">
                    access more 
                </span>
                ways to bank
            </div>

            <p className='access-top-subtitle'>                
                The less time you spend in a bank, the more time you have for yourself. Choose from a variety of easy and secure ways to manage your money on-the-go.
            </p>
        </div>

         <div className='access-more'>
            <div className='swiper-wrapper'>
              <div className='swiper-slide'>
                <a href='https://www.accessbankplc.com/ways-to-bank/mobile-banking'>

                </a>
              </div>
            </div>
         </div>


      </div>
    </>
  )
}

export default MainSection
