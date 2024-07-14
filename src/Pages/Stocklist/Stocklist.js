import React, { useState } from 'react'

import './Stocklist.css'

export default function Stocklist() {

  const [showList, setShowList] = useState(false)
  const [secondShowList, setSecondShowList] = useState(false)

  const listShowHandler = () => {
    setShowList(!showList)
  }

  const secondListShowHandler = () => {
    setSecondShowList(!secondShowList)
  }


  return (
    <div>
      <div className=' container-fluid stock_list_container'>


        <div>
          <img src="./images/stockLsitPic.png" alt="" className='w-100' />
        </div>

        <div className='mt-5 '>
          <span className=' fw-bold  stock_list_header ' style={{ fontSize: '12px' }}>SOTCKISTS</span>
        </div>

        <div className='w-100 mt-5'>

          <div>

            <div className='d-flex align-items-center gap-3 ' style={{ cursor: 'pointer' }} onClick={listShowHandler}>
              <span style={{ fontSize: '14px' }} className='show_stock_list'>UNITED KINGDOM</span>

              <div>

                <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg" className={showList ? 'arrow_svg' : ''}>
                  <path d="M4.75806 3.5L0.758057 6.5L0.758058 0.5L4.75806 3.5Z" fill="#494949" />
                </svg>

              </div>
            </div>


            <div className={`${showList ? 'd-block' : 'd-none'} mt-4 w-100 stock_list_container_desc d-flex justify-content-between`}>
              <div className='row'>
                <div className=' col-6 col-lg-4'>
                  <div className='d-flex flex-column gap-2'>
                    <span className=' fw-bold stock_list_footer_text_headr'>Showroomby18</span>
                    <ul className='list_contianer p-0 d-flex flex-column gap-2'>
                      <li className='list_stock_list_desc'>20 West Cote Drive Thackley Bradford, United Kingdom</li>
                      <li className='list_stock_list_desc'>Phone: +37529-653-64-93</li>
                      <li className='list_stock_list_desc'> Mo-Fr 13-20</li>
                      <li className='list_stock_list_desc'>  Sat 12-18</li>

                    </ul>

                  </div>

                </div>

                <div className=' col-6 col-lg-4'>
                  <div className='d-flex flex-column gap-2'>
                    <span className=' fw-bold stock_list_footer_text_headr'>UK fashion</span>
                    <ul className='list_contianer p-0 d-flex flex-column gap-2'>
                      <li className='list_stock_list_desc'>20 West Cote Drive Thackley Bradford, United Kingdom</li>
                      <li className='list_stock_list_desc'>Phone: +37529-653-64-93</li>
                      <li className='list_stock_list_desc'> Mo-Fr 12-19</li>
                      <li className='list_stock_list_desc'>   Sat 12-18</li>

                    </ul>

                  </div>

                </div>

                <div className=' col-6 col-lg-4'>
                  <div className='d-flex flex-column gap-2'>
                    <span className=' fw-bold stock_list_footer_text_headr'>Limited Showroom</span>
                    <ul className='list_contianer p-0 d-flex flex-column gap-2'>
                      <li className='list_stock_list_desc'> 20 West Cote Drive Thackley Bradford, United Kingdom</li>
                      <li className='list_stock_list_desc'> Phone: +37529-500-07-71</li>
                      <li className='list_stock_list_desc'> Mo-Fr 13-20</li>
                      <li className='list_stock_list_desc'>   Mo-Sun 10-21</li>

                    </ul>

                  </div>

                </div>

              </div>

            </div>

          </div>



        </div>

        <div className='w-100 mt-5'>

          <div>

            <div className='d-flex align-items-center gap-3 ' style={{ cursor: 'pointer' }} onClick={secondListShowHandler}>
              <span style={{ fontSize: '14px' }} className='show_stock_list'>CANADA</span>

              <div>

                <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg" className={secondShowList ? 'arrow_svg' : ''}>
                  <path d="M4.75806 3.5L0.758057 6.5L0.758058 0.5L4.75806 3.5Z" fill="#494949" />
                </svg>

              </div>
            </div>



            <div className={`${secondShowList ? 'd-block' : 'd-none'} mt-4 w-100 stock_list_container_desc d-flex justify-content-between`}>
              <div>
                <div className='col-6 col-lg-4'>
                  <div className='d-flex flex-column gap-2'>
                    <span className=' fw-bold stock_list_footer_text_headr'  style={{ fontSize: '12px' }}>CONCEPT CANADA</span>
                    <ul className='list_contianer p-0 d-flex flex-column gap-2'>
                      <li className='list_stock_list_desc'>20 West Cote Drive Thackley Bradford, CANADA</li>
                      <li className='list_stock_list_desc'>Phone: +37529-125-78-88</li>
                      <li className='list_stock_list_desc'>  Mo-Sun 11-20</li>

                    </ul>
                  </div>
                </div>
              </div>

            </div>


          </div>



        </div>


      </div>
    </div>
  )
}
