import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="footer__container">
          <div className="footer__top">

          </div>
          <div className="footer__link">
            <Link  >
              <p>Home</p>
            </Link>
            <Link className='links'>
              <p>Blog</p>
            </Link>
            <Link className='links'>
              <p>About </p>
            </Link>
            <Link className='links'>
              <p>Contact Us</p>
            </Link>
          </div>
          <div className="footer__icons">
            <span className='icons__card'>FB</span>
            <span className='icons__card'>IG</span>
            <span className='icons__card'>LN</span>
            <span className='icons__card'>YT</span>
          </div>
          <div className="footer__line">

          </div>
          <div className="footer__copyright">
            Copyright Ideapeel Inc © 2023. All Right Reserved
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer