import React, { useContext, useState } from 'react'
import products from '../../Data'
import { Link } from 'react-router-dom'
import './Earrings.css'
import { Accordion } from 'react-bootstrap'




export default function Earrings() {

  const [GroupStyle, SetGroupStyle] = useState(true)

 

  return (

    <div>
      <header>
        <p className='header_title font_abel'>earring</p>
      </header>
      <main>


        <div className='d-none d-lg-block'>
          <section className='d-flex justify-content-between'>
            <div className='me-5 '>

              <p className='font_abel'>Home / Earrings</p>


            </div>


            <div className='d-none d-lg-block'>
              <div className='d-flex '>
                <div className='d-flex position-relative '>
                  <p className='me-3' style={{ fontSize: '12px', cursor: 'default' }}>Sort By Latest</p>

                  <div className='position-absolute end-0'>
                    <svg className='mb-2' width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1L3.5 3.5L6 1" stroke="black" />
                    </svg>

                  </div>

                </div>
                <div className='d-flex ms-3 gap-3'>
                  <div style={{ cursor: 'pointer' }}>

                    <svg width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => SetGroupStyle(false)}>
                      <rect x="0.5" y="0.5" width="10" height="18" fill="white" stroke="black" />
                      <rect x="12.5" y="0.5" width="10" height="18" fill="white" stroke="black" />
                    </svg>

                  </div>
                  <div style={{ cursor: 'pointer' }}>

                    <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => SetGroupStyle(true)}>
                      <rect x="0.5" y="0.5" width="5" height="8" fill="white" stroke="black" />
                      <rect x="0.5" y="10.5" width="5" height="8" fill="white" stroke="black" />
                      <rect x="14.5" y="0.5" width="5" height="8" fill="white" stroke="black" />
                      <rect x="14.5" y="10.5" width="5" height="8" fill="white" stroke="black" />
                      <rect x="7.5" y="0.5" width="5" height="8" fill="white" stroke="black" />
                      <rect x="7.5" y="10.5" width="5" height="8" fill="white" stroke="black" />
                    </svg>


                  </div>
                </div>





              </div>


            </div>

          </section>
        </div>
        <div className=' d-lg-none '>
          <div className='d-flex w-100 justify-content-between align-items-center ps-2 pe-2'>
            <div>
              <span className='mobile_erring_nav_title font_abel'>Filter(1)</span>
            </div>

            <div className='d-flex align-items-center gap-1'>
              <span className='mobile_erring_nav_title font_abel'>Sort by latest</span>
              <div>

                <svg width="7" height="5" viewBox="0 0 7 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L3.5 3.5L6 1" stroke="black" />
                </svg>

              </div>
            </div>

          </div>

        </div>
        <section className='d-flex justify-content-around'>

          <div className='d-none d-lg-block'>
            <hr />
            <Accordion className='Accordion' >
              <Accordion.Item eventKey="0" className='Accordion_item'>
                <Accordion.Header className='font_abel'>Collection</Accordion.Header>
                <Accordion.Body>
                  <ul class="list-group list-group-flush w-100 d-block">
                    <li class="list-group-item font_abel">Dress</li>
                    <li class="list-group-item font_abel">Neckles</li>
                    <li class="list-group-item font_abel">Clothe</li>

                  </ul>

                </Accordion.Body>
              </Accordion.Item>
              <hr />
              <Accordion.Item eventKey="1" className='Accordion_item'>
                <Accordion.Header className='font_abel'>Size</Accordion.Header>
                <Accordion.Body>
                  <ul class="list-group list-group-flush w-100 d-block">
                    <li class="list-group-item font_abel">XXL</li>
                    <li class="list-group-item font_abel">XL</li>
                    <li class="list-group-item font_abel">L</li>
                    <li class="list-group-item font_abel">M</li>
                    <li class="list-group-item font_abel">s</li>

                  </ul>
                </Accordion.Body>
              </Accordion.Item>
              <hr />
            </Accordion>

          </div>

          <div className=' container   me-lg-5 mt-3 product_container'>
            <div className='row p-0 '>

              {products.map(product => {
                return (
                  <div className={`col-6  col-lg-${GroupStyle ? '4' : '6'}  `} key={product.id} >
                    <Link to={'/productpage'} state={{id: product.id , image : product.image ,title : product.title , price : product.price}}>
                      <div className='card border-0 rounded-0 position-relative card_image_container'>

                        <img key={product.id} src={product.image} className='card-img-top' />
                        <div className=' position-absolute  product_buy_btn_container  ' >
                          <h2 className=' w-100 mb-3 border-0 p-2 text-light  add_cart_btn font_abel text-uppercase text-center  fw-bolder' >view more</h2>
                        </div>

                        <div className='card-body'>
                          <h5 className='card-title'>{product.title}</h5>
                          <p className='card-text'>${product.price}</p>
                        </div>

                      </div>
                    </Link>

                  </div>
                )
              })}
            </div>
          </div>

        </section>

      </main>
      <footer className='footer mt-2 mt-lg-5 m-auto '>
        <div className='d-flex flex-column flex-lg-row justify-content-around gap-2 gap-lg-0'>

          <div className='d-flex flex-column  justify-content-center align-items-center'>
            <div>

              <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.65112 0.841954C6.55412 0.80308 6.44588 0.80308 6.34888 0.841954L1.49987 2.78139L3.45312 3.5622L8.45325 1.56264L6.65112 0.841954ZM9.54688 2.00058L4.54675 4.00014L6.5 4.78095L11.5001 2.78139L9.54688 2.00058ZM12.1875 3.38183L6.90625 5.49433V9.93095L12.1875 7.81845V3.38183ZM6.09375 9.93176V5.49352L0.8125 3.38183V7.81926L6.09375 9.93176ZM6.04744 0.0871411C6.33796 -0.029047 6.66204 -0.029047 6.95256 0.0871411L12.7449 2.40439C12.8202 2.43457 12.8847 2.48661 12.9302 2.5538C12.9757 2.62099 13 2.70026 13 2.78139V7.81926C12.9999 7.98162 12.9512 8.14022 12.8601 8.27462C12.769 8.40901 12.6397 8.51303 12.4889 8.57327L6.65112 10.9084C6.55412 10.9473 6.44588 10.9473 6.34888 10.9084L0.511875 8.57327C0.360954 8.51316 0.231516 8.40919 0.140272 8.27479C0.0490276 8.14038 0.000167643 7.98171 0 7.81926L0 2.78139C1.88825e-05 2.70026 0.0243293 2.62099 0.0697994 2.5538C0.11527 2.48661 0.179817 2.43457 0.255125 2.40439L6.04744 0.0871411Z" fill="black" />
              </svg>

            </div>

            <div>
              <span className='footer_title font_abel'>Free Express Shipping</span>
            </div>

            <div>
              <span style={{ fontSize: '12px' }} className='font_abel'>On all orders, no minimum</span>
            </div>

          </div>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <div>

              <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 6L6 11L16 1" stroke="black" />
              </svg>


            </div>

            <div>
              <span className='footer_title font_abel'>Duties and taxes guaranteed</span>
            </div>

            <div>
              <span style={{ fontSize: '12px' }} className='font_abel'>On all orders, no minimum</span>
            </div>

          </div>
          <div className='d-flex flex-column justify-content-center align-items-center'>
            <div>


              <svg width="12" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.25 0H0.75C0.551088 0 0.360322 0.0790176 0.21967 0.21967C0.0790176 0.360322 0 0.551088 0 0.75V8.25C0 8.44891 0.0790176 8.63968 0.21967 8.78033C0.360322 8.92098 0.551088 9 0.75 9H11.25C11.4489 9 11.6397 8.92098 11.7803 8.78033C11.921 8.63968 12 8.44891 12 8.25V0.75C12 0.551088 11.921 0.360322 11.7803 0.21967C11.6397 0.0790176 11.4489 0 11.25 0ZM10.6725 8.25H1.3725L3.9975 5.535L3.4575 5.01375L0.75 7.815V1.32L5.41125 5.95875C5.55177 6.09844 5.74186 6.17684 5.94 6.17684C6.13814 6.17684 6.32823 6.09844 6.46875 5.95875L11.25 1.20375V7.76625L8.49 5.00625L7.96125 5.535L10.6725 8.25ZM1.24125 0.75H10.6425L5.94 5.42625L1.24125 0.75Z" fill="black" />
              </svg>

            </div>

            <div>
              <span className='footer_title font_abel'>Customer love</span>
            </div>

            <div>
              <span style={{ fontSize: '12px' }} className='font_abel'>We got you via phone, email, or text</span>
            </div>

          </div>


        </div>


      </footer>


    </div>

  )
}
