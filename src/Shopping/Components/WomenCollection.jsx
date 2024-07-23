import React from 'react'

const WomenCollection = (props) => {
    const{title, image1,image2,image3,image4,image5,image6}= props.womenFashion
  return (
    <div>
         <div className='banner-box'>
        <img src="/public/assets/LadiesBanner.gif" alt={title} />
    </div>
        <h2>{title}</h2><br />
        <div className="menImages">
            <img src={image1} alt={title} />
            <img src={image2} alt={title} />
            <img src={image3} alt={title} />
            <img src={image4} alt={title} />
            <img src={image5} alt={title} />
            <img src={image6} alt={title} />
        </div>

    </div>
  )
}

export default WomenCollection