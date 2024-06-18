// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../assets/nigeria.svg'
import '../assets/congo.svg'
import '../assets/search.svg'
import '../assets/padlock.svg'
import '../components/styles/navbar.css'




export const TopNavbar = () => {

  // const navLink = [
  //     '',
  //     '',
  //     '',
  //     '',
  //     ''
  // ]

  return (
    <>
    <div className='desktop-nav'>
      <div className='primary-nav'>
          <div className='primary-nav-container'>
            <div className='d-flex'>
              {/* Left */}
              <div className='primary-nav-left'>
                <ul className='flex-left'>
                  {/* {navLink.map((navLink)=>
                  // eslint-disable-next-line react/jsx-key */}
                  <li>
                    <a className="nav-link" href="https://www.accessbankplc.com/about-us">About Us</a>
                  </li>

                  <li>
                    <a className="nav-link" href="https://www.accessbankplc.com/sustainable-banking">Sustainable Banking</a>
                  </li>

                  <li>
                    <a className="nav-link" href="https://investorrelations.accessbankplc.com/">Investor Relations</a>
                  </li>

                  <li>
                    <a className="nav-link" href="https://www.accessbankplc.com/media">Media</a>
                  </li>

                  <li>
                    <a className="nav-link" href="https://www.accessbankplc.com/careers">Careers</a>
                  </li>

                  <li>
                    <a className="nav-link" href="https://www.accessbankplc.com/contact-us/branch-atm-locator">Branch &amp; ATM Locator</a>
                  </li>

                  <li>
                    <a className="nav-link" href="https://theaccessservicehub.accessbankplc.com/">Help</a>
                  </li>

                </ul>

                {/* Right */}
                <div className='location'>
                  <a href='#' className='dropdown-toggle'>Country Locations
                    <img src='../assets/nigeria.svg'></img>
                  </a>

                  {/* <ul className='location-list'>
                    <li>
                      <a className="nav-link" href="https://congo.accessbankplc.com" target="_blank">
                        <img src="../assets/congo.svg">Congo</img>
                      </a>
                    </li>

                    <li>
                    <a className="nav-link" href="https://gambia.accessbankplc.com" target="_blank">
                      <img src="../assets/gambia.svg" alt="">Gambia</img>
                    </a>
                    </li>

                    <li></li>
                  </ul> */}
                </div>

              </div>

            </div>

          </div>

      </div>

      <div className='main-nav'>
          {/* left */}
          <div className='left-item'>
            <a href='/' target='_self'>
              <img src = 'https://www.accessbankplc.com/Content/images/access-lg-logo.png' className='imgFluid'></img>
            </a>
          </div>

          {/* Center*/}
          <div className='center-item'>
            <ul className='main-menu'>
            <li className="mega-link">
              <a href="/">Home</a>
            </li>

            <li className="mega-link">
              <a href="/personal">Personal</a>
            </li>

            <li className='mega-link'>
              <a href="/business">Business</a>
            </li>

            <li className='mega-link'>
              <a href="/corporate">Corporate</a>
            </li>

            <li className='mega-link'>
              <a href="/private">Private</a>
            </li>

            <li className='mega-link'>
              <a href="/ways-to-bank">Ways to Bank</a>
            </li>

            <li className='mega-link'>
              <a href="/contact-us">Contact Us</a>
            </li>

            <li className='mega-link'>
              <a href="#">I am ...</a>
            </li>
            </ul>
            
          </div>

          {/* Right */}
          <div className='right-item'>
            <button className='search-field'>
              <span>Search...</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </button>

            {/* Internet Banking */}
            <div className='internet-banking'>
              <a href='#' className='toggle' data-toggle= 'dropdown' id='internet-banking'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-lock mr-1"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                <p>
                  <span>Internet Banking</span>
                </p>
              </a>
            </div>

          </div>
          
        </div>
    </div>
    </>
  )
}

export default TopNavbar
