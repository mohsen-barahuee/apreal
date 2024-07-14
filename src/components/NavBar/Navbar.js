import React, { useState, useContext } from 'react'
import { Offcanvas, Accordion } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { BasketContext } from '../../Context/BasketContext'
import Cart from '../Cart/Cart.jsx'
import './Navbar.css'

export default function Navbar() {

    const [show, setShow] = useState(false);
    const [searchShow, setSearchShow] = useState(false);
    const { basketProduct, setBasketProduct } = useContext(BasketContext)
  



    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const removeCartHandler = (id) => {
        console.log(id);

        let newCart = basketProduct.filter((cart) => {
            return cart.id !== id;

        })

        setBasketProduct(newCart);

    }



    return (
        <>

            <>


                <Offcanvas show={show} onHide={handleClose} placement='end'>
                    <Offcanvas.Header >
                        <Offcanvas.Title>
                            <div className='basket_close_btn d-flex justify-content-center align-items-center ' onClick={handleClose}>
                                <div className='close_btn_line mb-1 '>

                                    <svg width="13.33" height="13.33" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.16602 2.1665L11.166 11.1665" stroke="white" stroke-width="1.4" />
                                        <path d="M11.166 2.1665L2.16602 11.1665" stroke="white" stroke-width="1.4" />
                                    </svg>

                                </div>

                            </div>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className=' container w-100 '>

                            {basketProduct.map(cart => {
                                return (
                                    <Cart key={cart.id} {...cart} onRemoveCart={removeCartHandler} />

                                )

                            })}

                            <div className=' w-100 d-flex justify-content-between'>
                                <div>
                                    <span className='font_abel'>Total</span>
                                </div>
                                <div>
                                    <span className='font_abel'>$ 1000 USD</span>
                                </div>
                            </div>

                            <div className=' w-100'>
                                <Link to={'/basketPage'}>
                                    <button className='  mt-4 w-100 cart_btn font_abel fw-bold' onClick={handleClose}>VIEW CART</button>
                                </Link>

                            </div>
                            <div className=' w-100'>
                                <Link to={'/checkout'}>
                                    <button className='  mt-4 w-100 bg-black text-light cart_btn2 font_abel fw-bold' onClick={handleClose}>CHECK OUT</button>

                                </Link>
                            </div>



                        </div>

                    </Offcanvas.Body>
                </Offcanvas>
            </>

            <div className='contianer mt-5'>
                <div>
                    <Link to='/'>
                        <img src="./images/logo.png" alt="" className='Logo mb-5' />
                    </Link>
                    <div>
                        <nav class="navbar ">
                            <div class="container-fluid justify-content-center mb-4 ">
                                <ul className='d-flex w-100 justify-content-center gap-5 list-unstyled'>
                                    <li className='position-relative me-4'>
                                        <div className='drop_down_container '>
                                            <a href="#" className='drop_down font_abel'>JEWELRY</a>
                                            <ul className='list-unstyled position-absolute  bg-light pe-4 ps-4 d-flex flex-column gap-3 pb-3 pt-2 mt-2 dropdown_contents'>
                                                <li className='dropdown_item font_abel'>Shop All</li>
                                                <Link to={'/earrings'}><li className='dropdown_item font_abel'>Earrings</li></Link>
                                                <li className='dropdown_item font_abel'>Necklaces</li>
                                                <li className='dropdown_item font_abel'>Brracelets</li>
                                                <li className='dropdown_item font_abel'>Rings</li>
                                            </ul>

                                        </div>

                                    </li>
                                    <li className='me-4'>
                                        <div className='drop_down_container '>
                                            <a href="#" className='drop_down font_abel'>CAMPAIGNS</a>
                                            <ul className='list-unstyled position-absolute  bg-light pe-4 ps-4 d-flex flex-column gap-3 pb-3 pt-2 mt-3 align-items-center dropdown_contents'>
                                                <Link to='/collection17'><li className='dropdown_item font_abel'>collection17</li></Link>
                                                <li className='dropdown_item font_abel'>Wood’n’Pearls</li>
                                                <li className='dropdown_item font_abel'>Chunky</li>
                                                <li className='dropdown_item font_abel'>Heart Collection</li>

                                            </ul>

                                        </div>

                                    </li>
                                    <li className='me-4'>
                                        <a href="#" className='font_abel'>PRESS</a>
                                    </li>
                                    <li className='me-4'>
                                        <a href="#" className='font_abel' onClick={() => {
                                            setSearchShow(!searchShow)
                                        }}>SEARCH</a>

                                    </li>
                                    <li className='me-4'>
                                        <a href="#" onClick={handleShow} className='font_abel'>CART({basketProduct.length})</a>
                                    </li>
                                </ul>
                                <div className={`w-100  d-flex  justify-content-center align-items-center serach_input_container ${searchShow ? 'd-block' : 'd-none'}`}>
                                    <div className='position-relative'>
                                        <input type="text" name="" className='search_input pb-3 ' placeholder='Looking for something? ' />

                                        <div >
                                            <svg style={{ cursor: 'pointer' }} className='position-absolute end-0 bottom-0 mb-3 ' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M12.0362 11.6741L15.9247 15.5625L15.9248 15.5626C15.9728 15.6107 15.9997 15.6759 15.9997 15.7439C15.9997 15.8119 15.9726 15.8772 15.9245 15.9253L16.278 16.2789L15.9245 15.9253C15.8764 15.9733 15.8111 16.0003 15.7431 16.0003C15.6751 16.0003 15.6098 15.9733 15.5618 15.9251L15.5616 15.925L11.5266 11.89L11.3107 11.6741H12.0362ZM11.2612 11.6246L11.2152 11.5785L10.8669 11.8483C9.76121 12.7047 8.37079 13.1077 6.9785 12.9753C5.58621 12.843 4.29663 12.1852 3.37212 11.1357C2.4476 10.0863 1.95759 8.72413 2.00177 7.32626C2.04595 5.92839 2.621 4.59985 3.60994 3.61092C4.59888 2.62198 5.92741 2.04693 7.32529 2.00275C8.72316 1.95857 10.0854 2.44858 11.1348 3.37309C12.1842 4.29761 12.842 5.58718 12.9743 6.97947C13.1067 8.37177 12.7037 9.76219 11.8473 10.8679L11.2612 11.6246ZM7.49958 12.4998C8.82566 12.4998 10.0974 11.973 11.0351 11.0353C11.9728 10.0977 12.4996 8.82589 12.4996 7.49981C12.4996 6.17373 11.9728 4.90196 11.0351 3.96427C10.0974 3.02659 8.82566 2.49981 7.49958 2.49981C6.1735 2.49981 4.90173 3.02659 3.96405 3.96427C3.02637 4.90196 2.49958 6.17373 2.49958 7.49981C2.49958 8.82589 3.02637 10.0977 3.96405 11.0353C4.90173 11.973 6.1735 12.4998 7.49958 12.4998Z" stroke="black" />
                                            </svg>


                                        </div>

                                    </div>

                                </div>
                            </div>
                        </nav>

                    </div>

                </div>

            </div>

        </>
    )
}
