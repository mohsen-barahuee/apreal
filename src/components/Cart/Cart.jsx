import React from 'react'
import './Cart.css'

export default function Cart(props) {


    const removeCartHandler = (id) =>{
        props.onRemoveCart(id)
    } 

    return (

        <div>
            <div>
                <div className='d-flex w-100 justify-content-around basket_container '>
                    <div className='d-flex w-100'>
                        <div className='basket_img '>
                            <img src={props.image} alt="" className='w-100 h-100' />
                        </div>
                        <div className='d-flex flex-column justify-content-between ms-3 p-1'>
                            <span>{props.title}</span>

                            <span>{props.quantity} *{props.price}</span>
                        </div>

                    </div>
                    <div className=' me-2' onClick={()=> removeCartHandler(props.id)} style={{cursor:"pointer"}}>

                        <svg width="7" height="7" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.68848 0.131836L3.19287 2.63281L4.71631 0.131836H6.09375L3.84668 3.52148L6.16357 7H4.80518L3.21826 4.42285L1.63135 7H0.266602L2.57715 3.52148L0.336426 0.131836H1.68848Z" fill="#717171" />
                        </svg>

                    </div>

                </div>

                <div className='basket-line w-100 mt-4 mb-4'></div>



            </div></div>
    )
}
