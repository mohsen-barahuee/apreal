import React, { useState } from "react";
import "./Shiping.css";

export default function Shiping(props) {
  const [selectMethod1, setSelectMethod1] = useState(true);
  const [selectMethod2, setSelectMethod2] = useState(false);
  const [selectMethod3, setSelectMethod3] = useState(false);
  const [selectMethod4, setSelectMethod4] = useState(false);

  const choseMehod1 = () => {
    setSelectMethod1(true);
    setSelectMethod2(false);
    setSelectMethod3(false);
    setSelectMethod4(false);
  };
  const choseMehod2 = () => {
    setSelectMethod1(false);
    setSelectMethod2(true);
    setSelectMethod3(false);
    setSelectMethod4(false);
  };
  const choseMehod3 = () => {
    setSelectMethod1(false);
    setSelectMethod2(false);
    setSelectMethod3(true);
    setSelectMethod4(false);
  };
  const choseMehod4 = () => {
    setSelectMethod1(false);
    setSelectMethod2(false);
    setSelectMethod3(false);
    setSelectMethod4(true);
  };

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
          <span className=" font_abel fw-bolder">Shiping </span>
        </div>
        <div>
          <span className=" font_abel">Payment</span>
        </div>
      </div>

      <div className=" mt-4 shiping_container p-2">
        <div className=" d-flex justify-content-between align-items-center ">
          <div className="d-flex gap-3">
            <div>
              <span className="shiping_text shiping_text_title font_abel fw-bolder">
                Contact
              </span>
            </div>
            <div>
              <span className="shiping_text font_abel">example@gmail.com</span>
            </div>
          </div>
          <div>
            <span className="shiping_text font_abel text-decoration-underline">
              Change
            </span>
          </div>
        </div>

        <hr />

        <div>
          <div className=" d-flex justify-content-between align-items-center w-100">
            <div className="d-flex gap-3">
              <div>
                <span className="shiping_text shiping_text_title font_abel fw-bolder">
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
              <span className="shiping_text font_abel text-decoration-underline">
                Change
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className=" mt-4 mb-3">
        <span className=" font_abel">Shipping method</span>
      </div>

      <div className="shiping_method_container p-2">
        <div className="d-flex justify-content-between align-content-center ">
          <div className="d-flex gap-3 align-items-center">
            <div>
              <div
                className={`circle_check ${
                  selectMethod1 ? "bg-black" : ""
                } rounded-circle d-flex justify-content-center align-items-center`}
                onClick={choseMehod1}
              >
                <div className="circle_in rounded-circle"></div>
              </div>
            </div>
            <div >
              <span className={`shiping_text ${selectMethod1? 'text-black' : ''}`}>
                Canada Post Small Packet International Surface
              </span>
              <p className={`shiping_text ${selectMethod1? 'text-black' : ''}`}>28 to 84 business days</p>
            </div>
          </div>

          <div>
            <span className={`shiping_text ${selectMethod1? 'text-black' : ''}`}>$9.68</span>
          </div>
        </div>

        <div className="d-flex justify-content-between align-content-center ">
          <div className="d-flex gap-3 align-items-center">
            <div>
              <div
                className={`circle_check ${
                  selectMethod2 ? "bg-black" : ""
                } rounded-circle d-flex justify-content-center align-items-center`}
                onClick={choseMehod2}
              >
                <div className="circle_in rounded-circle"></div>
              </div>
            </div>
            <div className="">
              <span className={`shiping_text ${selectMethod2? 'text-black' : ''}`}>
                Canada Post Small Packet International Air{" "}
              </span>
              <p className={`shiping_text ${selectMethod2? 'text-black' : ''}`}>6 to 10 business days</p>
            </div>
          </div>

          <div>
            <span className={`shiping_text ${selectMethod2? 'text-black' : ''}`}>$11.63</span>
          </div>
        </div>
        <div className="d-flex justify-content-between align-content-center ">
          <div className="d-flex gap-3 align-items-center">
            <div>
              <div
                className={`circle_check ${
                  selectMethod3 ? "bg-black" : ""
                } rounded-circle d-flex justify-content-center align-items-center`}
                onClick={choseMehod3}
              >
                <div className="circle_in rounded-circle"></div>
              </div>
            </div>
            <div className="">
              <span className={`shiping_text ${selectMethod3? 'text-black' : ''}`}>
                Canada Post Small Packet International Air{" "}
              </span>
              <p className={`shiping_text ${selectMethod3? 'text-black' : ''}`}>28 to 84 business days</p>
            </div>
          </div>

          <div>
            <span className={`shiping_text ${selectMethod3? 'text-black' : ''}`}>$50.57</span>
          </div>
        </div>
        <div className="d-flex justify-content-between align-content-center ">
          <div className="d-flex gap-3 align-items-center">
            <div>
              <div
                className={`circle_check ${
                  selectMethod4 ? "bg-black" : ""
                } rounded-circle d-flex justify-content-center align-items-center`}
                onClick={choseMehod4}
              >
                <div className="circle_in rounded-circle"></div>
              </div>
            </div>
            <div className="">
              <span className={`shiping_text ${selectMethod4? 'text-black' : ''}`}>
                Canada Post Small Packet International Air{" "}
              </span>
              <p className={`shiping_text ${selectMethod4? 'text-black' : ''}`}>4 to 7 business days</p>
            </div>
          </div>

          <div>
            <span className={`shiping_text ${selectMethod4? 'text-black' : ''}`}>$82.18</span>
          </div>
        </div>
      </div>
      <div className=" mt-4 d-flex justify-content-between">
        <div
          className=" d-flex align-items-center gap-2 "
          onClick={() => {
            props.returnShiping();
          }}
        >
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
            <span className=" font_abel" style={{cursor:'pointer'}}>Return to Billing</span>
          </div>
        </div>

        <div>
          <button
            className=" font_abel  btn btn-dark continue_shoping_btn rounded-0"
            onClick={() => {
              props.showPayment();
            }}
          >
            continue to payment
          </button>
        </div>
      </div>
      <div className=" mt-5">
        <hr />
        <p className=" font_abel">All rights reserved APAREls</p>
      </div>
    </div>
  );
}
