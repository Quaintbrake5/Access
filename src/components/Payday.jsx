/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../components/styles/payday.css'

const Payday = () => {
  return (
    <>
      <section className='payday-calc'>
        <div className='payday-container'>
            <div className='payday-calc-box'>
                <div className='calc-box-1'>
                    <h2>Payday Loan Calculator</h2>
                    <p className="payday-calc-box-text">
                        Your financial needs are important to us.
                        We know that some emergencies arise before payday and you may be low on cash.
                        With Payday Loan by Access, you can borrow money and pay back at the agreed time.
                    </p>

                    <div className="payday-calc-terms">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-circle mr-1 white-text">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="8" x2="12" y2="12"></line>
                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <p>* Terms and Conditions Apply</p>
                    </div>


                </div>

                <div className='calc-box-2'>
                    <p>What's your monthly salary</p>
                    <div className='loan-drag'>
                        <div className='loan-amount'>N5,000,000</div>
                        <div className='loan-circle'>
                            <div className='loan-drag-bot'></div>
                        </div>
                    </div>
                </div>

                <div className='calc-float'>
                    <div className='calc-float-text'>
                        <div className='float-top'>Eligible Loan Amount</div>
                        <div className='main-text'>NO</div>
                        <div className='light-text'>
                            <div className='medium'>Tenor:</div>
                            Your next pay day or 30 days, whichever comes first
                        </div>

                        <a href="https://www.accessbankplc.com/personal/borrowing/payday-loan" className="float-button">
                            Get Instant Loan Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Payday
