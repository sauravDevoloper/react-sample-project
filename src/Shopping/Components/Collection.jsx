import React from 'react'

const Collection = (props) => {
    const{title, image1,image2,image3,image4,image5,image6}= props.mensFashion
  return (
    <div className='Collection-section'>
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

export default Collection