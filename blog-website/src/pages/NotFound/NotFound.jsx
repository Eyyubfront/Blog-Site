import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div id="notfound">
<div className="notfound__container">
    <div className="notfound__box">
        <div className="notfound__information">

        <div className="notfound__tittle">
           <h2 className='title'>404</h2>
        </div>
        <div className="notfound__message">
<p className='mesage'>Sorry! <br />
The link is broken, try to refresh or go to home</p>
        </div>
        <div className="notfound__bottom">
            <Link style={{textDecoration:"none",color:"aliceblue"}} to="/">
            Go to home 
            </Link>
        </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default NotFound