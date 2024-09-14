import React from 'react'
import detailimg from "../../assets/images/detail/detail.png"
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
const Detail = () => {
    return (
        <>
        <div id="detail">
<div className="detail__container">
    <div className="detail__top">
    How to make a Game look more attractive with New VR & AI Technology
    </div>
    <div className="detail__img">
        <img className='detailimgs' src={detailimg} alt="" />
    </div>
    <div className="detail__about">
  <p className='about__top'>Google has been investing in AI for many years and bringing its benefits to individuals, businesses and communities. Whether it’s publishing state-of-the-art research, building helpful products or developing tools and resources that enable others, we’re committed to making AI accessible to everyone.</p>
<p className='about__bottom'>We’re now at a pivotal moment in our AI journey. Breakthroughs in generative AI are fundamentally changing how people interact with technology — and at Google, we’ve been responsibly developing large language models so we can safely bring them to our products. Today, we’re excited to share our early progress. Developers and businesses can now try new APIs and products that make it easy, safe and scalable to start building with Google’s best AI models through Google Cloud and a new prototyping environment called MakerSuite. And in Google Workspace, we’re introducing new features that help people harness the power of generative AI to create, connect and collaborate.</p>
    </div>
    <div className="detail__icons">
   <div className="detail__Like">
   <AiOutlineLike />
<p>Bəyən</p>
   </div>
   <div className="detail__coments">
   <FaRegCommentDots />
<p>Yorum </p>
   </div>
    </div>
</div>
        </div>
        </>
    )
}

export default Detail