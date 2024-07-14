import React, { useState, useContext } from 'react'
import Information from '../../components/Checkout/Information/Information.js'
import Shiping from '../../components/Checkout/Shiping/Shiping.jsx'
import Payment from '../../components/Checkout/Payment/Payment.jsx'
import { BasketContext } from '../../Context/BasketContext.js'
import MobileInformation from '../../components/MobileCheckout/Information/InformationMobile.jsx'
import ShipingMobile from '../../components/MobileCheckout/Shiping/ShipingMobile.jsx'
import PaymentMobile from '../../components/MobileCheckout/Payment/PaymentMobile.jsx'
import './CheckOut.css'

export default function CheckOut() {


    const [informationShow, setInformationShow] = useState(true)
    const [shipingsShow, setShipingsShow] = useState(false)
    const [paymentShow, setPaymentShow] = useState(false)
    const [orderSummaryShow, setOrderSummaryShow] = useState(true)



    const { basketProduct, setBasketProduct } = useContext(BasketContext)

    const ShowShiping = () => {
        setShipingsShow(true)
        setInformationShow(false)
        setPaymentShow(false)
    }

    const ShowPay = () => {
        setPaymentShow(true)
        setShipingsShow(false)
        setInformationShow(false)


    }

    const returnToInformation = () => {
        setInformationShow(true)
        setShipingsShow(false)
        setPaymentShow(false)

    }

    const returnToShiping = () => {

        setInformationShow(false)
        setPaymentShow(false)
        setShipingsShow(true)
    }


    const showOrderSummary = () => {
        setOrderSummaryShow(!orderSummaryShow)
    }




    return (
        <>
            {/* Desktop Template */}
            <div className=' container-fluid d-none d-lg-block'>
                <div className='d-lg-flex justify-content-center gap-5'>
                    <div className='me-5 mt-5' >

                        {informationShow && (<Information showShiping={ShowShiping} />)}
                        {shipingsShow && (<Shiping showPayment={ShowPay} returnShiping={returnToInformation} />)}
                        {paymentShow && (<Payment returnShiping={returnToShiping} />)}

                    </div>


                    <div className='check_out_line ms-5 me-5'></div>

                    <div className='ms-5 w-100 mt-5'>
                        {basketProduct.map(product => {
                            return (
                                <div className=' d-flex justify-content-between mb-5'>
                                    <div className=' d-flex gap-4'>
                                        <div className=' position-relative final_basket_img'>
                                            <img src={product.image} className='w-100' alt="" />

                                            <div className=' position-absolute   product_number d-flex justify-content-center align-items-center rounded-circle'>
                                                <span className=' text-dark text-center'>{product.quantity}</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className=' font_abel'>{product.title}</span>
                                        </div>

                                    </div>
                                    <div>
                                        <span>${product.price}</span>
                                    </div>

                                </div>

                            )
                        })}


                        <hr />
                        <div className=' d-flex justify-content-between mt-4'>
                            <div>
                                <span className=' font_abel'>Subtotal</span>
                            </div>
                            <div>
                                <span className=' font_abel'>$1,095.00</span>
                            </div>

                        </div>
                        <div className=' d-flex justify-content-between mt-3 mb-4'>
                            <div>
                                <span className=' font_abel'>Shipping</span>
                            </div>
                            <div>
                                <span className=' font_abel'>Calculated at next step</span>
                            </div>

                        </div>
                        <hr />
                        <div className=' d-flex justify-content-between mt-3 mb-4'>
                            <div>
                                <span className=' font_abel fw-bolder'>Total</span>
                            </div>
                            <div>
                                <span className=' font_abel fw-bolder'>$1,095.00</span>
                            </div>

                        </div>



                    </div>


                </div>


            </div>




            {/* Mobile Template */}
            <div className='  d-block d-lg-none'>
                <div className=' w-100 d-flex justify-content-between '>
                    <div className=' d-flex gap-2' onClick={showOrderSummary}>
                        <div>
                            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <path d="M18.375 3.5H1.75V5.25H3.7625L6.63425 13.1469C6.81942 13.6525 7.15514 14.0893 7.59618 14.3983C8.03721 14.7073 8.56237 14.8737 9.10087 14.875H16.625V13.125H9.10087C8.73425 13.125 8.4035 12.8931 8.27838 12.5492L7.85137 11.375H15.9653C16.744 11.375 17.4353 10.8517 17.6479 10.1054L19.2167 4.61563C19.2534 4.48538 19.2595 4.34841 19.2345 4.21543C19.2095 4.08244 19.1541 3.95704 19.0726 3.84903C18.9911 3.74101 18.8857 3.6533 18.7647 3.59275C18.6437 3.5322 18.5103 3.50046 18.375 3.5ZM15.9653 9.625H7.21525L5.6245 5.25H17.2156L15.9653 9.625Z" fill="black" />
                                <path d="M9.1875 18.375C9.91237 18.375 10.5 17.7874 10.5 17.0625C10.5 16.3376 9.91237 15.75 9.1875 15.75C8.46263 15.75 7.875 16.3376 7.875 17.0625C7.875 17.7874 8.46263 18.375 9.1875 18.375Z" fill="black" />
                                <path d="M14.4375 18.375C15.1624 18.375 15.75 17.7874 15.75 17.0625C15.75 16.3376 15.1624 15.75 14.4375 15.75C13.7126 15.75 13.125 16.3376 13.125 17.0625C13.125 17.7874 13.7126 18.375 14.4375 18.375Z" fill="black" />
                            </svg>
                        </div>
                        <div>
                            <span className=' font_abel' style={{ fontSize: '14px' }}>Show order summary</span>
                        </div>
                        <div>

                            <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg" className={orderSummaryShow ? 'mobile_show_summery' : ''}>
                                <path d="M7 1L4 4L1 1" stroke="black" />
                            </svg>

                        </div>

                    </div>
                    <div>
                        <span className=' font_abel'>$1,095.00 USD</span>
                    </div>

                </div>


                <div className={`w-100  ${orderSummaryShow ? 'd-block' : 'd-none'}`} style={{ backgroundColor: '#F7F7F7' }}>
                    {basketProduct.map(product => {
                        return (
                            <>
                                <hr />
                                <div className=' d-flex justify-content-between'>
                                    <div className=' d-flex  gap-3'>
                                        <div className=' cart_basket_mobile_image position-relative'>
                                            <img src={product.image} alt="" className=' w-100' />
                                            <span className=' product_number position-absolute d-flex justify-content-center align-items-center rounded-circle' style={{ fontSize: '10px' }}>
                                                {product.quantity}
                                            </span>
                                        </div>
                                        <div>
                                            <span className=' font_abel' style={{ fontSize: '14px' }}>{product.title}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className=' font_abel'>${product.price}</span>
                                    </div>

                                </div>
                            </>

                        )
                    })}
                    <div className=' d-flex justify-content-between mt-4'>
                        <span className=' font_abel mobile_font fw-light'>Subtotal</span>
                        <span className=' font_abel'>$1,095.00</span>
                    </div>
                    <div className=' d-flex justify-content-between mt-2'>
                        <span className=' font_abel mobile_font fw-light'>Shipping</span>
                        <span className=' font_abel'>Calculated at next step</span>
                    </div>
                    <hr />

                    <div className=' d-flex justify-content-between mt-4'>
                        <span className=' font_abel  fw-bolder'>Total</span>
                        <span className=' font_abel fw-bolder'>$1090 USD</span>
                    </div>







                </div>
                {informationShow && (<MobileInformation ShowShiping={ShowShiping} />)}
                {shipingsShow && (<ShipingMobile returnToInformation={returnToInformation} ShowPay={ShowPay} />)}
                {paymentShow && (<PaymentMobile returnToShiping={returnToShiping} />)}


            </div>

        </>

    )
}
