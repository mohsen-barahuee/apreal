import React, { useState } from "react";
import "./Payment.css";

export default function Payment(props) {
  const [method1, setMethod1] = useState(true);
  const [method2, setMethod2] = useState(false);

  const selectFirstMethod = ()=>{
    setMethod1(true)
    setMethod2(false)
  }

  const selectSecondMethod = ()=>{
    setMethod1(false)
    setMethod2(true)
  }

  return (
    <div>
      <div className=" d-flex gap-3 w-100">
        <div>
          <span className=" font_abel">Cart </span>
        </div>
        <div>
          <span className=" font_abel ">Information </span>
        </div>
        <div>
          <span className=" font_abel ">Shiping </span>
        </div>
        <div>
          <span className=" font_abel fw-bolder">Payment</span>
        </div>
      </div>
      <div className=" mt-4 shiping_container_payment p-2">
        <div className=" d-flex justify-content-between align-items-center ">
          <div className="d-flex gap-3">
            <div>
              <span className="shiping_text shiping_text_title font_abel fw-bolder text-black">
                Contact
              </span>
            </div>
            <div>
              <span className="shiping_text font_abel">example@gmail.com</span>
            </div>
          </div>
          <div>
            <span className="shiping_text font_abel text-decoration-underline text-black">
              Change
            </span>
          </div>
        </div>

        <hr />

        <div>
          <div className=" d-flex justify-content-between align-items-center w-100">
            <div className="d-flex gap-3">
              <div>
                <span className="shiping_text shiping_text_title font_abel fw-bolder text-black">
                  Shiping
                </span>
              </div>
              <div>
                <span className="shiping_text font_abel">
                  20 West Cote Drive Thackley Bradford, United Kingdom
                </span>
              </div>
            </div>
            <div>
              <span className="shiping_text font_abel text-decoration-underline text-black">
                Change
              </span>
            </div>
          </div>
        </div>
        <hr />
        <div className="pb-2">
          <div className=" d-flex justify-content-between align-items-center w-100">
            <div className="d-flex gap-3">
              <div>
                <span className="shiping_text shiping_text_title font_abel fw-bolder text-black">
                  Method
                </span>
              </div>
              <div>
                <span className="shiping_text font_abel">
                  Product Name $17.39
                </span>
              </div>
            </div>
            <div>
              <span className="shiping_text font_abel text-decoration-underline text-black">
                Change
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-4">
        <span className="font_abel text-uppercase">Shipping method</span>
      </div>
      <div>
        <span className="font_abel" style={{ fontSize: "12px" }}>
          All transactions are secure and encrypted.
        </span>
      </div>

      <div className="credit_card_container">
        <div className=" d-flex justify-content-between align-items-center ps-2 pe-2 pb-3 pt-3 bg-light">
          <div>
            <span
              className=" font_abel text-uppercase"
              style={{ fontSize: "13px" }}
            >
              credit card
            </span>
          </div>
          <div>
            <div className="b_container font_abel d-flex justify-content-center align-items-center">
              B
            </div>
          </div>
        </div>

        <div className="  p-3" style={{ backgroundColor: "#F7F7F7" }}>
          <div className=" mb-2">
            <input
              type="text"
              placeholder="Card number"
              className=" font_abel w-100 pt-2 pb-2 ps-2"
              style={{ fontSize: "13px", outline: "none" }}
            />
          </div>
          <div className=" mb-2">
            <input
              type="text"
              placeholder="Name on Card"
              className=" font_abel w-100 pt-2 pb-2 ps-2"
              style={{ fontSize: "13px", outline: "none" }}
            />
          </div>

          <div className="w-100 d-flex justify-content-between gap-2">
            <div className="w-100">
              <input
                type="text"
                className=" font_abel w-100 pt-2 pb-2 ps-2"
                placeholder="Expiration date (MM / YY)"
                style={{ fontSize: "13px", outline: "none" }}
              />
            </div>
            <div className=" w-100">
              <input
                type="text"
                placeholder="Security code"
                className=" font_abel w-100 pt-2 pb-2 ps-2"
                style={{ fontSize: "13px", outline: "none" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-3">
        <span className=" font_abel text-uppercase">Billing address</span>
      </div>
      <div>
        <span className=" font_abel">
          Select the address that matches your card or payment method.
        </span>
      </div>
      <div className="select_address_container mt-3">
        <div className=" w-100 d-flex align-items-center justify-content-start gap-2" onClick={selectFirstMethod}>
          <div>
            <div>
              <div
                className={`circle_check ${
                  method1 ? "bg-black" : ""
                } rounded-circle d-flex justify-content-center align-items-center`}
              >
                <div className="circle_in rounded-circle"></div>
              </div>
            </div>
          </div>
          <div>
            <span style={{ fontSize: "13px" }} className=" font_abel">
              Canada Post Small Packet International Surface{" "}
            </span>
          </div>
        </div>
        <hr />
        <div className=" w-100 d-flex align-items-center justify-content-start gap-2 pb-2" onClick={selectSecondMethod}>
          <div>
            <div>
              <div
                className={`circle_check ${
                  method2 ? "bg-black" : ""
                }  rounded-circle d-flex justify-content-center align-items-center`}
              >
                <div className="circle_in rounded-circle"></div>
              </div>
            </div>
          </div>
          <div>
            <span style={{ fontSize: "13px" }} className=" font_abel">
              Canada Post Small Packet International Surface
            </span>
          </div>
        </div>
      </div>

      <div className=" mt-5 d-flex justify-content-between">
        <div className=" d-flex align-items-center gap-2">
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
          <div
            onClick={() => {
              props.returnShiping();
            }}
          >
            <span
              className=" font_abel"
              style={{ fontSize: "14px", cursor: "pointer" }}
            >
              Return to shipping
            </span>
          </div>
        </div>

        <div>
          <button className=" font_abel  btn btn-dark continue_shoping_btn rounded-0">
            continue to payment
          </button>
        </div>
      </div>
    </div>
  );
}
