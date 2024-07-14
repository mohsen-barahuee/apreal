import React from 'react'
import './Notfound.css'
import { Link } from 'react-router-dom'

export default function Notfound() {
  return (
    <div>
      <div className=' container-fluid'>
        <div className='not_found_contianer d-flex flex-column justify-content-center align-items-center'>

          <div>
            <h1 className=' fw-bolder text-center font_abel'>SORRY,</h1>
            <p style={{ textTransform: 'uppercase' }} className=' text-center not_found_desc mt-3 font_abel  fw-bold'>the page you were looking for could not be found.</p>
          </div>

          <div >
            <Link to={'/'}>
              <button style={{ textTransform: 'uppercase', width: '278px', height: '40px', fontSize: '10px' }} className=' border-0 btn btn-dark rounded-0 mt-4 fw-bold '>return to the home page</button>

            </Link>
          </div>

        </div>

      </div>
    </div>
  )
}
