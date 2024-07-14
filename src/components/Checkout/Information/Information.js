import React from "react";
import './information.css'

export default function Information(props) {
  return (
    <div>
      <div className=" d-flex gap-3">
        <div>
          <span className=" font_abel">Cart </span>
        </div>
        <div>
          <span className=" font_abel fw-bold">Information </span>
        </div>
        <div>
          <span className=" font_abel">Shiping </span>
        </div>
        <div>
          <span className=" font_abel">Payment</span>
        </div>
      </div>
      <div>
        <div className=" mt-4 ">
          <span className=" font_abel fs-5">Contact information</span>
          <div className=" mt-3">
            <input
              type="text"
              className=" font_abel check_out_email ps-3"
              placeholder="Email or mobile phone number"
            />
          </div>
          <div class="form-check mt-2 mb-3">
            <input
              class="form-check-input rounded-0"
              type="checkbox"
              value=""
            />
            <label class="form-check-label font_abel" for="flexCheckDefault">
              Keep me up to date on news and exclusive offers
            </label>
          </div>
        </div>

        <div className="">
          <span className="font_abel fs-5  text-uppercase">
            Shipping address
          </span>

          <div className="d-flex mt-3 gap-3">
            <div>
              <input
                type="text"
                className="check_out_information_input font_abel ps-2"
                placeholder="First name (optionsl)"
              />
            </div>
            <div>
              <input
                type="text"
                className="check_out_information_input font_abel ps-2"
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="mt-3">
            <input
              type="text"
              className=" font_abel check_out_email ps-3"
              placeholder="Country"
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              className=" font_abel check_out_email ps-3"
              placeholder="Apartment, suite, ets. (optional)"
            />
          </div>
          <div className="mt-3">
            <input
              type="text"
              className=" font_abel check_out_email ps-3"
              placeholder="City"
            />
          </div>

          <div className="d-flex mt-3 gap-3">
            <div>
              <input
                type="text"
                className="check_out_information_input font_abel ps-2"
                placeholder="Location"
              />
            </div>
            <div>
              <input
                type="text"
                className="check_out_information_input font_abel ps-2"
                placeholder="Postal code"
              />
            </div>
          </div>

          <div class="form-check mt-3">
            <input
              class="form-check-input rounded-0"
              type="checkbox"
              value=""
            />
            <label class="form-check-label font_abel" for="flexCheckDefault">
              Save this information for next time
            </label>
          </div>

          <div className=" mt-4 d-flex justify-content-between">
            <div className=" d-flex align-items-center gap-2 ">
              <div>
                <svg
                  width="5"
                  height="10"
                  viewBox="0 0 5 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 1L1 4L4 7" stroke="#494949" />
                </svg>
              </div>
              <div className="mt-1">

                <span className=" font_abel">
                  Return to Cart
                </span>

              </div>
            </div>

            <div>
              <button className=" font_abel  btn btn-dark continue_shoping_btn rounded-0" onClick={() => { props.showShiping() }}>
                continue to shipping
              </button>
            </div>
          </div>
          <div className=" mt-5">
            <hr />
            <p className=" font_abel">All rights reserved APAREls</p>
          </div>
        </div>
      </div>
    </div>
  );
}
