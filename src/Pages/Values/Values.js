import React from 'react'
import './Values.css'

export default function Values() {
  return (
    <div className='container-fluid '>

      <div className='row'>
        <div className='col-12 col-lg-12 d-flex flex-column align-items-center'>
          <img src="./images/valuePic.png" alt="" className='Value_image' />

          <div className='Value_desc_container mt-4'>
            <div >
              <span className='Value_desc_title font_abel'>APARELS VALUES</span>
            </div>
            <br />
            <div>
              <span className='font_abel'>Our Obsidian fabric inherits its deep black color from being woven from fine, dark threads.</span>
            </div>
            <br />
            <div>
              <span className='font_abel'>Right from the extraction of the fibers and their transportation for processing and drying, great care is taken to preserve the environment and foster an eco-centric attitude towards the vulnerable surrounding nature.</span>
            </div>
          </div>
          <div className='Value_desc_container mt-5 mb-5 mb-lg-0'>
            <div className='mt-5' >
              <span className='Value_desc_title font_abel'>OUR PHILOSOPHY</span>
            </div>
            <br />
            <div>
              <span className='font_abel'>APAREls seeks to enhance a harmonious relationship between Bog Silk and humanity. The beauty of each of our dedicatedly worked-on pieces transcends our materialistic world. Our jewelry is passionately handcrafted by local artisans based in Belarus, with years of experience in traditional methods of craftsmanship and technical innovation.</span>
            </div>
            <br />
            <div>
              <span className='font_abel'>At APAREls, we believe in sustainability and ethical practices. We source our materials responsibly, ensuring that they are environmentally friendly and conflict-free. Our artisans are paid fair wages and work in safe and healthy conditions. We are committed to reducing our carbon footprint and minimizing waste in every aspect of our business.</span>
            </div>
            <br />
            <div>
              <span className='font_abel'>
                Our relics are dedicated to connecting with our world to promote true happiness that goes beyond what meets the eye and strives towards what you feel deep within your soul. We find beauty in the everyday routine - in talking, touching, kissing, listening, and creating.
              </span>
            </div>
            <br />
            <div>
              <span className='font_abel'>APAREls is not about us. It's about you and the world around you. It's a wearable history in which each piece captures your moment and imagination, embodying your desired and personalized concept.</span>
            </div>
            <br />
            <div>
              <i className=' fw-light'>
                We continue to work in making our environment and world a safer place to live in more than one way…
              </i>
            </div>
          </div>



        </div>

      </div>
    </div>
  )
}
