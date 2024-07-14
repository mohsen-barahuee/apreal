import React from 'react'

import './About.css'

export default function About() {
  return (
    <div className=' container-fluid mb-5 mb-lg-0 '>
      <div className='row'>
        <div className='col-12 col-lg-6'>
          <div>
            <img src="./images/aboutPic.png" alt="" className='about_pic' />
          </div>

        </div>
        <div className='col-12 col-lg-6 d-flex flex-column justify-content-center gap-4 gap-lg-5 mt-5 mt-lg-0 ps-lg-5 ps-xl-0'>


          <div>
            <span className='About_title'>APAREls Wearable History</span>
          </div>

          <div >
            <span >
              APARELS was founded by our designer and creator Lily Chen in the fictional city of Riverside in 2018. The Obsidian in our product line inherits its deep black color from being woven from fine, dark threads. Our stunning fabric draws upon its rich history in a contemporary way. Our unique product line presents the dedicated individually handcrafted precision of artistry and design.
            </span>
            <br />
            <br />
            <span>
              While developing a new piece, Lily is not focused on the historical or aesthetic value - she is dedicatedly working on it, focusing on the end result and trying to technically realize the very vision of the piece in her mind.
            </span>
            <br />
            <br />
            <span>
              While we cater to various market needs, our goal is to design and create bespoke, authentically handcrafted pieces of clothing that will be cherished and worn with a personalized touch for many generations to come.

            </span>
          </div>




        </div>

      </div>
    </div>
  )
}
