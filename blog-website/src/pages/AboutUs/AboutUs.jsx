import React from 'react'
import aboutus from "../../assets/images/aboutus/aboutus.png"
const AboutUs = () => {
  return (
    <>
    <div id="aboutUs">
<div className="aboutUs__container">
    <div className="AboutUs__information">

<div className="AboutUs__top">
<p className='aboutustopname'>ABOUT US</p>
</div>
<div className="AboutUs__tittle">
<p className='aboutustittle'>Creative Blog Writting and publishing site</p>
</div>
<div className="AboutUs__text">
<p>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
</div>
<div className="AboutUs__bottom">
<img className='aboutusphoto' src={aboutus} alt="" />
</div>
    </div>
</div>
    </div>
    </>
  )
}

export default AboutUs