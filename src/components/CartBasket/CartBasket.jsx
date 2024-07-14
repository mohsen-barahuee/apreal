import React from "react";
import "./CartBasket.css";

export default function CartBasket(props) {
  const {
    title,
    id,
    image,
    price,
    removeFromBasket,
    quantity,
    total,
  } = props;

  return (
    <>
      <div className="  w-100 d-flex justify-content-between mt-4 mb-4">
        <div className="  w-25 d-flex">
          <img src={image} alt="" className=" cart_basket_mobile_image" />
          <div className="d-flex flex-column justify-content-between ms-4">
            <div>
              <span className=" mobile_font">{title}</span>
            </div>

            <div
              className="d-flex  gap-2  "
              style={{ cursor: "pointer" }}
              onClick={() => {
                removeFromBasket(id);
              }}
            >
              <div>
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M1 1L8.5 8.5" stroke="black" />
                  <path d="M8.5 1L1 8.5" stroke="black" />
                </svg>
              </div>
              <span className=" text-decoration-underline mobile_font">
                Remove
              </span>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-around align-items-center w-50">
          <span className="font_abel mobile_font">{price}</span>
          <div className="numbers_box">
            <div className="  d-flex justify-content-center w-100 align-items-center ">
              <span className="mobile_font mt-2">{quantity}</span>
            </div>
          </div>
          <span className="font_abel mobile_font">{total}</span>
        </div>
      </div>
      <hr />
    </>
  );
}
