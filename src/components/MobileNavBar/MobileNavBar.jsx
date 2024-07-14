import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BasketContext } from "../../Context/BasketContext";
import "./MobileNavbar.css";

export default function MobileNavBar() {
  // Navr Bar Modals
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const [jewelryShow, setJewelryShow] = useState(false);
  const [campingyShow, setCampingShow] = useState(false);

  const { basketProduct, setBasketProduct } = useContext(BasketContext);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  const jewerlyHandler = () => {
    setJewelryShow(!jewelryShow);
  };
  const campingHandler = () => {
    setCampingShow(!campingyShow);
  };

  return (
    <div>
      {/* NavBar Modal */}
      <Modal
        show={show}
        fullscreen={fullscreen}
        onHide={() => setShow(false)}
        className="d-block d-lg-none"
      >
        <Modal.Body>
          <div className=" container">
            <div onClick={handleClose}>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M22.8397 7.61328L7.61324 22.8398" stroke="black" />
                <path d="M22.8397 22.8398L7.61325 7.61337" stroke="black" />
              </svg>
            </div>

            <div>
              <div className="mt-5">
                <ul className=" list-unstyled w-100 d-flex flex-column gap-4">
                  <li className="mobile_navbar_item">
                    <p onClick={jewerlyHandler} className="font_abel">
                      JEWELRY
                    </p>
                    <ul
                      className={`list-unstyled d-flex flex-column gap-3 ms-3  ${
                        jewelryShow ? "d-block" : "d-none"
                      }`}
                    >
                      <li className="mobile_navbar_items font_abel">
                        Shop All
                      </li>
                      <li className="mobile_navbar_items font_abel">
                        <Link to={"/earrings"} onClick={handleClose}>
                          Earrings
                        </Link>
                      </li>
                      <li className="mobile_navbar_items font_abel">
                        Necklaces
                      </li>
                      <li className="mobile_navbar_items font_abel">
                        Brracelets
                      </li>
                      <li className="mobile_navbar_items font_abel">Rings</li>
                    </ul>
                  </li>

                  <li className="mobile_navbar_item font_abel">
                    <p className=" font_abel" onClick={campingHandler}>
                      CAMPAIGNS
                    </p>
                    <ul
                      className={`list-unstyled d-flex flex-column gap-3 ms-3  ${
                        campingyShow ? "d-block" : "d-none"
                      }`}
                    >
                      <li className="mobile_navbar_items font_abel">
                        <Link to={"/collection17"} onClick={handleClose}>collection 17</Link>
                      </li>
                      <li className="mobile_navbar_items font_abel">
                        Wood’n’Pearls
                      </li>
                      <li className="mobile_navbar_items font_abel">Chunky</li>
                      <li className="mobile_navbar_items font_abel">
                        Heart Collection
                      </li>
                    </ul>
                  </li>
                  <li className="mobile_navbar_item font_abel">
                    <p className=" font_abel">PRESS</p>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mt-3">
                <div className=" position-relative w-100">
                  <div className=" w-100">
                    <input
                      type="text"
                      name=""
                      id=""
                      className=" mobile_search p-1 pb-2 w-100"
                      placeholder="Looking for something?"
                    />
                  </div>

                  <div className=" position-absolute end-0 top-0">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.1625 8.44923L13.8524 11.1392C13.947 11.2338 14 11.3621 14 11.4958C14 11.6296 13.9468 11.7579 13.8522 11.8524C13.7576 11.947 13.6293 12 13.4955 12C13.3617 12 13.2335 11.9468 13.1389 11.8522L10.4491 9.16222C9.64496 9.78504 8.6338 10.0781 7.62127 9.98188C6.60874 9.88561 5.67091 9.40723 4.99857 8.64403C4.32622 7.88084 3.96987 6.89017 4.002 5.87356C4.03413 4.85695 4.45233 3.89076 5.17152 3.17155C5.89071 2.45234 6.85688 2.03413 7.87346 2.002C8.89005 1.96987 9.88069 2.32623 10.6439 2.99859C11.407 3.67095 11.8854 4.6088 11.9817 5.62136C12.0779 6.63391 11.7848 7.64511 11.162 8.44923H11.1625ZM8.00019 8.99972C8.7958 8.99972 9.55882 8.68366 10.1214 8.12106C10.684 7.55846 11 6.79542 11 5.99979C11 5.20415 10.684 4.44111 10.1214 3.87851C9.55882 3.31591 8.7958 2.99985 8.00019 2.99985C7.20457 2.99985 6.44155 3.31591 5.87896 3.87851C5.31638 4.44111 5.00033 5.20415 5.00033 5.99979C5.00033 6.79542 5.31638 7.55846 5.87896 8.12106C6.44155 8.68366 7.20457 8.99972 8.00019 8.99972Z"
                        fill="black"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <div className=" container mobile_container mb-1 ">
        <div className="d-flex  justify-content-between p-2 align-items-center w-100 h-100">
          <div onClick={handleShow}>
            <svg
              width="20"
              height="14"
              viewBox="0 0 20 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="20" height="2" fill="black" />
              <rect y="6" width="20" height="2" fill="black" />
              <rect y="12" width="20" height="2" fill="black" />
            </svg>
          </div>
          <div>
            <Link to={"/"}>
              <img src="./images/logo.png" alt="" className="mobile_logo" />
            </Link>
          </div>
          <Link to={"/basketPage"}>
            <div style={{ fontSize: "12px" }} className="font_abel">
              CART({basketProduct.length})
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
