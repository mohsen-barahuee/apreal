import { useContext, useState } from "react";
import React from "react";
import { Toast, ToastBody } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BasketContext } from "../../Context/BasketContext";
import "./Productpageitem.css";

export default function Productpageitem(props) {
  const { id, image, title, price } = props.itemValue;
  const { basketProduct, setBasketProduct } = useContext(BasketContext);
  const [productNumber, setProductNumber] = useState(1);

  const [showToast, setShowToast] = useState(false);

  const productNumberPluse = () => {
    setProductNumber((prev) => prev + 1);
  };

  const productNumberMines = () => {
    setProductNumber((prev) => prev - 1);
    if (productNumber <= 1) {
      setProductNumber(1);
    }
  };

  const closeToast = () => {
    setShowToast(false);
  };

  const addToBasketHandler = () => {
    let productBasketValue = {
      id: props.itemValue.id,
      image: props.itemValue.image,
      title: props.itemValue.title,
      price: props.itemValue.price,
      quantity: productNumber,
      total : productNumber * props.itemValue.price
    };

    setBasketProduct([...basketProduct, productBasketValue]);

    setShowToast(true);

    setTimeout(() => {
      closeToast();
    }, 2000);
  };

  return (
    <>
      <Toast
        className=" position-fixed   toast_container"
        show={showToast}
        onClose={closeToast}
      >
        <Toast.Header
          className=" font_abel justify-content-between p-3 fw-bolder fs-6 "
          closeButton="none"
        >
          MESSAGE
        </Toast.Header>
        <Toast.Body>
          PRODUCT ADDED
          
        </Toast.Body>
      </Toast>
      <div className=" d-flex flex-column flex-lg-row  w-100 justify-content-around gap-5">
        <div className=" w-100">
          <img
            src={image}
            alt=""
            className=" w-100"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className=" w-100 d-flex flex-column gap-2  mt-lg-5 ms-lg-5">
          <div className=" w-100  ">
            <span className=" font_abel mobile_font ">Jewelty / Earrings</span>
          </div>
          <div className=" mt-3">
            <span className=" font_abel fw-bolder fs-4">{title}</span>
          </div>
          <div>
            <span className=" font_abel product_page_item_text">
              Collection fw'20
            </span>
          </div>
          <div>
            <span className=" font_abel product_page_item_text">Black OAK</span>
          </div>
          <div>
            <span className=" font_abel product_page_item_text overflow-scroll">
              LARGE STATEMENT RING. BALL MEASURES 0.75 INCHES.
            </span>
          </div>

          <div className=" w-100 d-flex gap-5 mt-4 align-items-center">
            <div>
              <span className=" font_abel">Size</span>
            </div>
            <div className=" w-mobile-75 w-50">
              <select
                className=" w-100 p-2 font_abel rounded-0"
                style={{ outline: "none" }}
              >
                <option value="">XXL</option>
                <option value="">XL</option>
                <option value="">L</option>
                <option value="">M</option>
              </select>
            </div>
          </div>

          <div className=" w-100 mt-3 d-flex align-items-center gap-4">
            <div>
              <span className=" font_abel">Quantity</span>
            </div>
            <div className="quantity_container d-flex justify-content-around align-items-center">
              <div>{productNumber}</div>
              <div className=" d-flex flex-column">
                <div onClick={productNumberPluse} style={{ cursor: "pointer" }}>
                  <svg
                    width="6"
                    height="3"
                    viewBox="0 0 6 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M3 0L5.59808 3H0.401924L3 0Z" fill="#494949" />
                  </svg>
                </div>
                <div onClick={productNumberMines} style={{ cursor: "pointer" }}>
                  <svg
                    width="6"
                    height="3"
                    viewBox="0 0 6 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 3L0.401924 -4.89399e-07L5.59808 -3.51373e-08L3 3Z"
                      fill="#494949"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className=" mt-3">
            <span className=" font_abel fw-bolde fs-3">${price}</span>
          </div>

          <div className=" mt-5 mobile_container ">
            <button
              className="  w-100 border-1 p-2 btn btn-dark rounded-0 font_abel"
              onClick={addToBasketHandler}
            >
              ADD TO CART
            </button>
          </div>
          <div className=" mobile_container align-items-center justify-content-between mt-3 p-2 d-flex  justify-content-lg-between">
            <div className=" d-flex justify-content-start align-items-center gap-3 w-100">
              <div>
                <span className=" font_abel mobile_font">share</span>
              </div>
              <div>
                <svg
                  width="13"
                  height="9"
                  viewBox="0 0 13 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5357 7.42857V1.85714C12.5357 1.85714 6.9024 5.78809 6.35455 5.99207C5.81598 5.79738 0.154785 1.85714 0.154785 1.85714V7.42857C0.154785 8.20238 0.318833 8.35714 1.08336 8.35714H11.6072C12.39 8.35714 12.5357 8.22126 12.5357 7.42857ZM12.5268 0.764833C12.5268 0.20119 12.3624 0 11.6072 0H1.08336C0.306452 0 0.154785 0.241429 0.154785 0.804762L0.164071 0.891429C0.164071 0.891429 5.75686 4.7419 6.35455 4.95238C6.98598 4.70786 12.5357 0.804762 12.5357 0.804762L12.5268 0.764833Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.5006 0.0844727C2.50951 0.0844727 0.0844727 2.50951 0.0844727 5.5006C0.0844727 8.20351 2.06481 10.4438 4.65451 10.8517V7.06656H3.27868V5.5006H4.65451V4.30731C4.65451 2.94881 5.46322 2.19968 6.69985 2.19968C7.29243 2.19968 7.91318 2.30531 7.91318 2.30531V3.63726H7.22851C6.55685 3.63726 6.34668 4.05543 6.34668 4.48389V5.49951H7.84764L7.60768 7.06547H6.34668V10.8506C8.93639 10.4449 10.9167 8.20406 10.9167 5.5006C10.9167 2.50951 8.49168 0.0844727 5.5006 0.0844727Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="11"
                  height="9"
                  viewBox="0 0 11 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7811 1.22842C10.3926 1.396 9.96982 1.51661 9.53437 1.56358C9.98647 1.29499 10.325 0.870669 10.4865 0.37022C10.0623 0.622589 9.59754 0.799555 9.11289 0.893267C8.91033 0.676718 8.66534 0.504206 8.3932 0.38648C8.12105 0.268753 7.82757 0.208335 7.53105 0.20899C6.33135 0.20899 5.3665 1.18145 5.3665 2.37481C5.3665 2.54239 5.38682 2.70997 5.41982 2.8712C3.62344 2.77725 2.02129 1.91905 0.956152 0.605083C0.762073 0.936578 0.660369 1.31402 0.661621 1.69815C0.661621 2.44971 1.04375 3.11241 1.62646 3.50215C1.28306 3.48863 0.947701 3.39424 0.647656 3.22667V3.25333C0.647656 4.30577 1.3916 5.17794 2.38311 5.37852C2.19694 5.42688 2.00543 5.45162 1.81309 5.45215C1.67217 5.45215 1.53887 5.43819 1.4043 5.41915C1.67852 6.27735 2.47705 6.90069 3.42793 6.921C2.68398 7.50372 1.75215 7.84649 0.740332 7.84649C0.558789 7.84649 0.391211 7.84014 0.217285 7.81983C1.17705 8.43555 2.31582 8.79102 3.54219 8.79102C7.52344 8.79102 9.70195 5.49278 9.70195 2.62999C9.70195 2.53604 9.70195 2.4421 9.69561 2.34815C10.1171 2.03965 10.4865 1.65752 10.7811 1.22842Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div>
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.49475 0.0834961C2.50583 0.0834961 0.0834961 2.50637 0.0834961 5.49475C0.0834961 7.78708 1.5097 9.74683 3.52308 10.5355C3.47541 10.1076 3.43316 9.44891 3.5415 8.982C3.64008 8.5595 4.17633 6.29208 4.17633 6.29208C4.17633 6.29208 4.01437 5.96762 4.01437 5.48825C4.01437 4.73641 4.45041 4.17471 4.9937 4.17471C5.45575 4.17471 5.67837 4.52137 5.67837 4.93683C5.67837 5.40158 5.38262 6.09545 5.23041 6.73895C5.10312 7.27737 5.5007 7.71666 6.03154 7.71666C6.993 7.71666 7.73291 6.70266 7.73291 5.23854C7.73291 3.94287 6.80179 3.0372 5.47254 3.0372C3.93258 3.0372 3.02854 4.19204 3.02854 5.38533C3.02854 5.85008 3.20783 6.34895 3.43154 6.62033C3.45055 6.64077 3.46397 6.66576 3.47052 6.69289C3.47707 6.72003 3.47651 6.74839 3.46891 6.77525C3.42775 6.94587 3.3362 7.31366 3.31887 7.38896C3.29504 7.48808 3.24033 7.5092 3.13741 7.46154C2.46195 7.14683 2.03945 6.15883 2.03945 5.36475C2.03945 3.65795 3.27933 2.09037 5.615 2.09037C7.49241 2.09037 8.95112 3.42775 8.95112 5.21579C8.95112 7.08129 7.77516 8.58116 6.14312 8.58116C5.59441 8.58116 5.07929 8.29679 4.9027 7.96041L4.56525 9.24633C4.44337 9.7165 4.1135 10.3058 3.89304 10.6655C4.41202 10.8257 4.95214 10.907 5.49529 10.9065C8.48366 10.9065 10.9065 8.48366 10.9065 5.49529C10.9065 2.50691 8.48312 0.0834961 5.49475 0.0834961Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>

            <div className=" d-flex justify-content-end gap-3 w-100">
              <div>
                <span className=" font_abel mobile_font">Need Help?</span>
              </div>
              <div>
                <Link to={"/contacts"}>
                  <span className=" font_abel mobile_font text-decoration-underline">
                    Contact Us
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
