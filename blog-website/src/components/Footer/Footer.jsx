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
            <Link style={{textDecoration:"none"}} className='links'  to="/"  >
              <p>Home</p>
            </Link>
            <Link  to="/blogs" className='links'>
              <p>Blog</p>
            </Link>
            <Link  to="/aboutus" className='links'>
              <p>About </p>
            </Link>
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