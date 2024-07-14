import React from 'react'
import './Contacts.css'

export default function Contacts() {
  return (
    <div className=' container-fluid'>
      <div className=' d-flex justify-content-center'>
        <img src="./images/contactPic.png" alt=""  className='contact_image'/>
      </div>

      <div className='d-flex justify-content-center mt-5'>
        <div className='contact_input_container'>
          <div className='mb-4'>
            <span className=' fw-bold font_abel'>CONTACT US</span>
          </div>

          <div className='w-100 gap-2 gap-lg-0 d-flex justify-content-between'>
            <div>
              <input type="text" placeholder='Name' className='contact_input' />

            </div>

            <div>
              <input type="text" placeholder='Email' className='contact_input' />
            </div>

          </div>

          <div className='mt-4'>
            <input type="text" placeholder='Phone' className='w-100 contact_input font_abel' />
          </div>

          <div className='mt-4'>
            <textarea name="" className='w-100 msg_input font_abel' placeholder='Message'></textarea>

          </div>


          <div className='mt-4'>
            <button className='w-100 border-0 contact_btn font_abel'>SEND</button>

          </div>

          <div className='w-100 mt-3 mt-lg-5'>

            <input type="text" className='w-100 mt-3 mt-lg-5 pb-2 pb-lg-4 contact_email_input font_abel' placeholder='E-mail' />
          </div>

          <div className='mt-4 d-flex gap-3' style={{cursor:'pointer'}}>
            <div >

              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.3536 8.35355C14.5488 8.15829 14.5488 7.84171 14.3536 7.64645L11.1716 4.46447C10.9763 4.2692 10.6597 4.2692 10.4645 4.46447C10.2692 4.65973 10.2692 4.97631 10.4645 5.17157L13.2929 8L10.4645 10.8284C10.2692 11.0237 10.2692 11.3403 10.4645 11.5355C10.6597 11.7308 10.9763 11.7308 11.1716 11.5355L14.3536 8.35355ZM1 8.5H14V7.5H1V8.5Z" fill="black" />
              </svg>


            </div>
            <div className='mb-4 mb-lg-0'> 
              <span className='sign_up_contact_text font_abel'>Sign up for our newsletter</span>
            </div>
          </div>


        </div>


      </div>
    </div>
  )
}
