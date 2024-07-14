import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileInformation(props) {
  const [mobileCheckBox2, setMobileCheckBox2] = useState(false);
  const [mobileCheckBox, setMobileCheckBox] = useState(false);

  const { ShowShiping } = props;

  const checkBoxHandler = () => {
    setMobileCheckBox(!mobileCheckBox);
  };

  const checkBoxHandler2 = () => {
    setMobileCheckBox2(!mobileCheckBox2);
  };

  return (
    <div>
      <div className=" d-flex gap-3 mt-4">
        <span className=" font_abel mobile_font">Cart</span>
        <span className=" font_abel mobile_font fw-bolder">Information</span>
        <span className=" font_abel mobile_font">Shiping</span>
        <span className=" font_abel mobile_font">Payment</span>
      </div>

      <div className=" mt-4">
        <span
          className=" font_abel text-uppercase"
          style={{ fontSize: "14px" }}
        >
          Contact information
        </span>
      </div>
      <div className=" mt-3">
        <input
          type="text"
          placeholder="Email or mobile phone number"
          className=" font_abel mobile_font w-100 border-1 p-2"
          style={{ outline: "none" }}
        />
      </div>
      <div className=" d-flex align-items-center mt-2 gap-2">
        <div
          className={
            !mobileCheckBox
              ? "mobile_checkbox  position-relative "
              : "mobile_checkbox  position-relative border-0 "
          }
          onClick={checkBoxHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="currentColor"
            class="bi bi-check-square-fill"
            viewBox="0 0 16 16"
            className={mobileCheckBox ? "d-block  position-absolute" : "d-none"}
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
          </svg>
        </div>

        <div>
          <span className=" font_abel mobile_font">
            Keep me up to date on news and exclusive offers
          </span>
        </div>
      </div>

      <div className=" mt-4">
        <span
          className=" text-uppercase font_abel"
          style={{ fontSize: "14px" }}
        >
          Shipping address
        </span>
      </div>

      <div className=" d-flex gap-3 mt-2">
        <input
          type="text"
          placeholder="First name (optionsl)"
          className=" w-100 border-1 p-2 font_abel mobile_font"
          style={{ outline: "none" }}
        />
        <input
          type="text"
          placeholder="Last name"
          className=" w-100 border-1 p-2 font_abel mobile_font"
          style={{ outline: "none" }}
        />
      </div>
      <div className=" mt-2">
        <input
          type="text"
          placeholder="Location"
          className="w-100 border-1 p-2 font_abel mobile_font"
          style={{ outline: "none" }}
        />
      </div>
      <div className=" mt-2">
        <input
          type="text"
          placeholder="Apartment, suite, ets. (optional)"
          className="w-100 border-1 p-2 font_abel mobile_font"
          style={{ outline: "none" }}
        />
      </div>
      <div className=" mt-2">
        <input
          type="text"
          placeholder="City"
          className="w-100 border-1 p-2 font_abel mobile_font"
          style={{ outline: "none" }}
        />
      </div>

      <div className=" d-flex gap-3 mt-2">
        <select
          name=""
          id=""
          className=" w-100 border-1 font_abel mobile_font"
          style={{ outline: "none" }}
        >
          <option value="">United Kingdom</option>
          <option value="">United Statet</option>
          <option value="">Canada</option>
          <option value="">Germany</option>
        </select>
        <input
          type="text"
          placeholder="Postal code"
          className=" w-100 border-1 p-2 font_abel mobile_font"
          style={{ outline: "none" }}
        />
      </div>
      <div className=" d-flex align-items-center mt-2 gap-2">
        <div
          className={
            !mobileCheckBox2
              ? "mobile_checkbox  position-relative "
              : "mobile_checkbox  position-relative border-0 "
          }
          onClick={checkBoxHandler2}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="currentColor"
            class="bi bi-check-square-fill"
            viewBox="0 0 16 16"
            className={
              mobileCheckBox2 ? "d-block  position-absolute" : "d-none"
            }
          >
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />
          </svg>
        </div>

        <div>
          <span className=" font_abel mobile_font">
            Save this information for next time
          </span>
        </div>
      </div>
      <div className=" d-flex w-100 justify-content-between mt-4 ">
        <div className=" d-flex align-items-center gap-2">
          <div>
            <svg
              width="5"
              height="8"
              viewBox="0 0 5 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 1L1 4L4 7" stroke="#494949" />
            </svg>
          </div>
          <div>
            <Link to={'/basketPage'}>
              <span className=" font_abel " style={{ fontSize: "14px" }}>
                Return to cart
              </span>
            </Link>
          </div>
        </div>
        <div className=" w-50">
          <button
            className=" font_abel border-0 w-100 p-2 bg-black text-light mobile_font"
            onClick={ShowShiping}
          >
            continue to shiping
          </button>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
}
