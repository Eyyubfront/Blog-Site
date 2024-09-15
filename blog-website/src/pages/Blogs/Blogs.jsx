import React, { useEffect, useState } from 'react'
import { getBlogs } from '../../../blogService'
import Card from '../../components/Card/Card'

const Blogs = () => {
    const [blogs,setBlogs] = useState([])
    useEffect(()=>{
        getBlogs().then((res)=>setBlogs(res))
    },[])
  return (
    <>
    <div id="blogs">
<div className="blogs__container">
    <div className="blogs__information">

    <div className="blogs__top">
        <p className='blogsname'>OUR BLOGS</p>
    </div>
    <div className="blogs__tittle">
       <h2 className='blogstittle'>Find our all blogs from here</h2>
    </div>
    <div className="blogs__bottom">
       <p className='blogsbotoms'>our blogs are written from very research research and well known writers writers so that  we can provide you the best blogs and articles articles for you to read them all along</p>
    </div>
    </div>
</div>
   <div className='blog__cards'>
   {
        blogs.map((item,index)=>{
return <Card key={index} item={item}/>
        })
    }
   </div>
    </div>
    </>
  )
}

export default Blogs