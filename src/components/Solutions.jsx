/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import '../components/styles/solution.css'

const Solutions = () => {
  return (
    <>
      <section className='solution-section'>
        <div className='solution-container'>
            <div className="solution-div">
                <span> 
                <strong>explore more </strong>
                than banking
                </span>
            
            <div className="solution-text">
                <p>Whether it's your child's first savings account, your personal savings account, your first home or retirement plan, we offer personal banking products and services.</p>
            </div>
            
            </div>

            <div className='solution-banking'>
                <div className='solution-card-0'>
                    <div className='blue'>
                        <h3 className="finance">Financing</h3>
                        <div className="bluetext">
                            <p>Based on specific requirements to bridge funding gaps with flexible repayment structures.</p>
                        </div>
                        <a href='https://www.accessbankplc.com/contact-us/agency-banking'>access more</a>
                    </div>

                </div>

                <div className='solution-card-1'>
                    <div className='blue'>
                        <h3 className="finance">Equipping Growing Businesses</h3>
                        <div className="bluetext">
                            <p>We believe in growth and sustainability and we want to grow your business with you. See how we can help.</p>
                        </div>
                        <a href='https://www.accessbankplc.com/contact-us/agency-banking'>access more</a>
                    </div>

                </div>

                <div className='solution-card-2'>
                    <div className='blue'>
                        <h3 className="finance">Sustainable Banking</h3>
                        <div className="bluetext">
                            <p>For over two decades, we have been taking actionable steps towards sustainability in a rapidly changing world.</p>
                        </div>
                        <a href='https://www.accessbankplc.com/contact-us/agency-banking'>access more</a>
                    </div>

                </div>

                <br/>

            </div>
        </div>
      </section>
    </>
  )
}

export default Solutions
