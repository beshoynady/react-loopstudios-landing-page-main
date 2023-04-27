import React from 'react'
import image from '../../images/desktop/image-interactive.jpg';
import './Interactive.css';
const Interactive = () => {
  return (
    <section >
      <div className=' container'>
        <div className='interactive'>
          <div className='image'>
              <img src={image} alt="" srcset="" />
          </div>
          <div className='text-box'>
            <h1>The leader in interactive VR</h1>
            <p>Founded in 2011, Loopstudios has been producing world-class virtual reality 
              projects for some of the best companies around the globe. Our award-winning 
              creations have transformed businesses through digital experiences that bind 
              to their brand.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Interactive