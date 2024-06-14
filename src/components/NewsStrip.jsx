/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import './styles/newsStrip.css'

export const NewsStrip = () => {
  return (
    <>
      <div className='news-strip'>
        <div className='news-flex'>
            <div className='tag'>
                <p>Latest News</p>
            </div>

            <span className='bend-line'></span>
            <marquee className='strip-wrap' onMouseOver= 'this.stop();' onMouseOut= 'this.start()'>
                <a href='https://www.accessbankplc.com/media/news/access-bank-zambia-limited-completes-acquisition-of-atlas-mara,-creates-one-of-zambia%E2%80%99s-top-five-ban' className='strip'>
                    Access Bank Zambia Limited Completes Acquisition of Atlas Mara, Creates one of Zambia's Top Five Banks
                </a>

                <a href='https://www.accessbankplc.com/media/news/notice-of-the-35th-annual-general-meeting-(agm)-of-access-bank-plc' className='strip'>
                    Notice of the 35th Annual General Meeting (AGM) of Access Bank PLC
                </a>

                <a href='https://www.accessbankplc.com/media/news/s-p-global-ratings-provides-aligned-opinion-on-access-bank-plc-s-sustainable-finance-framework' className='strip'>
                    S&P Global Ratings Provides Aligned Opinion on Access Bank PLC's Sustainable Finance Framework
                </a>

                <a href='https://www.accessbankplc.com/media/news/access-bank-plc-(access)-enters-into-acquisition-agreements-with-standard-chartered-bank' className='strip'>
                    Access Bank Plc (Access) enters into acquisition agreements with Standard Chartered Bank
                </a>

                <a href='https://www.accessbankplc.com/media/news/access-bank-launches-the-first-american-express%C2%AE-cards-to-be-issued-in-nigeria' className='strip'>
                    Access Bank launches the first American Express Cards to be issued to in Nigeria
                </a>
            </marquee>
        </div>

        <div className='multi-colored-line'></div>
      </div>
    </>
  )
}

export default NewsStrip
