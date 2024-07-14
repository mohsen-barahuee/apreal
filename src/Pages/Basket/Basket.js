import React, { useContext, useState } from 'react'
import { BasketContext } from '../../Context/BasketContext'
import CartBasket from '../../components/CartBasket/CartBasket.jsx'
import { Link } from 'react-router-dom'
import "./Basket.css"




export default function Basket() {


    const { basketProduct, setBasketProduct } = useContext(BasketContext)
    const [productNumbers, setProductNumbers] = useState(1)



    const removeFromBasket = (id) => {

        let newCart = basketProduct.filter((cart) => {
            return cart.id !== id;

        })

        setBasketProduct(newCart);


    }


    return (
        <div className=' container mt-lg-0 mt-4'>
            <div className=' w-100 d-flex justify-content-between align-items-center'>
                <div>
                    <span className='font_abel mobile_font'>PRODUCT</span>
                </div>

                <div className='d-flex justify-content-around w-50'>
                    <span className='font_abel mobile_font'>PRICE</span>
                    <span className='font_abel mobile_font'>QUANTITY</span>
                    <span className='font_abel mobile_font'>TOTAL</span>
                </div>
            </div>

            <hr />

            {basketProduct.map(product => {
                return (
                    <>
                        <CartBasket key={product.id}
                            {...product}
                            removeFromBasket={removeFromBasket}
                            productNumbers={productNumbers}
                        />

                    </>

                )
            })}

            <div className=' w-100'>
                <div className=' w-100  mt-4'>
                    <p className=' text-end font_abel mobile_font'>Subtotal $1,095.00 USD</p>
                    <p className=' text-end font_abel' style={{ fontSize: '12px', color: '#4F4F4F' }}>Taxes and shipping calculated at checkout</p>
                </div>

                <div className='w-100 d-flex flex-column flex-column-reverse flex-lg-row justify-content-between align-items-center gap-3 gap-lg-0'>
                    <div className='d-flex align-items-center gap-3'>
                        <div>
                            <svg width="5" height="10" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 1L1 4L4 7" stroke="#494949" />
                            </svg>
                        </div>
                        <div>
                            <Link to={'/earrings'}>
                                <span className=' font_abel text-decoration-underline mobile_font' style={{ cursor: 'pointer' }}>Back to shopping</span>
                            </Link>
                        </div>
                    </div>

                    <div className='d-flex gap-2'>
                        <div>
                            <button className='reload_btn'>
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.00626 0C2.25282 0 0 2.25 0 5C0 7.75 2.25282 10 5.00626 10C6.38298 10 7.65957 9.4625 8.5607 8.55L7.65957 7.65C6.98373 8.325 6.04506 8.75 4.99374 8.75C2.91615 8.75 1.23905 7.075 1.23905 5C1.23905 2.925 2.91615 1.25 4.99374 1.25C6.03254 1.25 6.93367 1.7 7.60951 2.3875L6.24531 3.75H10V0L8.51064 1.4875C7.60951 0.5875 6.37046 0 4.99374 0H5.00626Z" fill="black" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <Link to={'/checkout'}>
                                <button className=' font_abel fw-bold check_out_btn border-0' style={{ fontSize: '12px' }} >CHECK OUT</button>

                            </Link>
                        </div>
                    </div>

                </div>

            </div>




        </div>
    )
}
