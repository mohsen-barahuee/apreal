import React, { useState } from "react";
import "./PaymentMobile.css";

export default function PaymentMobile(props) {
  const { returnToShiping } = props;
  const [selectMethod1, setSelectMethod1] = useState(true);
  const [selectMethod2, setSelectMethod2] = useState(false);
  const choseMehod2 = () => {
    setSelectMethod2(true);
    setSelectMethod1(false);
  };
  const choseMehod1 = () => {
    setSelectMethod1(true);
    setSelectMethod2(false);
  };

  return (
    <div>
      <div className=" w-100  mt-3 p-3" style={{ border: "1px solid black" }}>
        <div className=" d-flex justify-content-between">
          <div className=" d-flex gap-2">
            <div>
              <span className=" font_abel mobile_font fw-bold">Contact</span>
            </div>
            <div>
              <span className=" font_abel mobile_font">example@gmail.com</span>
            </div>
          </div>

          <div>
            <span className=" font_abel mobile_font text-decoration-underline">
              Change
            </span>
          </div>
        </div>
        <hr />

        <div className=" d-flex justify-content-between border-1">
          <div className=" d-flex gap-2">
            <div>
              <span className=" font_abel mobile_font fw-bold ">Ship to</span>
            </div>
            <div>
              <div className=" d-flex flex-column justify-content-center ms-2">
                <span className=" font_abel mobile_font">
                  20 West Cote Drive
                </span>
                <span className=" font_abel mobile_font">
                  Thackley Bradford, United Kingdom
                </span>
              </div>
            </div>
          </div>

          <div>
            <span className=" font_abel mobile_font text-decoration-underline">
              Change
            </span>
          </div>
        </div>
        <hr />
        <div className=" d-flex justify-content-between align-items-center border-1">
          <div className=" d-flex align-items-center  gap-2">
            <div>
              <span className=" font_abel mobile_font fw-bold ">Method</span>
            </div>
            <div>
              <div className=" d-flex gap-1 align-items-center ms-2">
                <span className=" font_abel mobile_font">Product Name</span>
                <span className=" font_abel mobile_font">$9.22</span>
              </div>
            </div>
          </div>

          <div>
            <span className=" font_abel mobile_font text-decoration-underline">
              Change
            </span>
          </div>
        </div>
      </div>

      <div className=" mt-4">
        <span className=" font_abel text-uppercase ">shiping method</span>
        <p className=" font_abel mobile_font">
          All transactions are secure and encrypted.
        </p>
      </div>

      <div className=" w-100 mt-3 " style={{ border: "1px solid black" }}>
        <div className=" d-flex justify-content-between align-items-center p-3 ">
          <div>
            <span
              className=" font_abel text-uppercase "
              style={{ fontSize: "13px" }}
            >
              credit card
            </span>
          </div>
          <div className=" bg-warning text-light  d-flex align-content-center justify-content-center rounded-1 ps-3 pe-3">
            <span>B</span>
          </div>
        </div>

        <div
          style={{ backgroundColor: "#F7F7F7" }}
          className=" w-100 p-2  pb-4"
        >
          <div className=" w-100 mt-3">
            <div className=" w-100 position-relative">
              <input
                type="text"
                placeholder="Card number "
                style={{ outline: "none" }}
                className=" w-100 border-1 font_abel mobile_font p-2"
              />

              <div className=" position-absolute top-0 end-0 me-2 mt-1">
                <svg
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 6C10 5.3382 9.43937 4.8 8.75 4.8H8.125V3C8.125 1.3458 6.72312 0 5 0C3.27688 0 1.875 1.3458 1.875 3V4.8H1.25C0.560625 4.8 0 5.3382 0 6V10.8C0 11.4618 0.560625 12 1.25 12H8.75C9.43937 12 10 11.4618 10 10.8V6ZM3.125 3C3.125 2.0076 3.96625 1.2 5 1.2C6.03375 1.2 6.875 2.0076 6.875 3V4.8H3.125V3Z"
                    fill="#BDBDBD"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className=" mt-2">
            <input
              type="text"
              placeholder="Name on Card "
              style={{ outline: "none" }}
              className=" w-100 border-1 font_abel mobile_font p-2"
            />
          </div>

          <div className=" w-100 mt-2 gap-2 d-flex justify-content-between">
            <di className="w-100">
              <input
                type="text"
                placeholder="Expiration date (MM / YY) "
                style={{ outline: "none" }}
                className=" w-100 border-1 font_abel mobile_font p-2"
              />
            </di>
            <div className="w-100">
              <div className=" w-100 position-relative">
                <input
                  type="text"
                  placeholder="Security code "
                  style={{ outline: "none" }}
                  className=" w-100 border-1 font_abel mobile_font p-2"
                />
                <div className=" position-absolute top-0 end-0 me-2 mt-1">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14ZM6.36396 8.83054C6.40396 8.87527 6.45063 8.89764 6.50396 8.89764H7.48396C7.61063 8.89764 7.70063 8.80444 7.75396 8.61806C7.76063 8.55096 7.77729 8.42422 7.80396 8.23783C7.84396 8.02908 7.92063 7.83524 8.03396 7.65631C8.15396 7.46993 8.32063 7.24627 8.53396 6.98533C8.83396 6.62747 9.05729 6.31434 9.20396 6.04595C9.35729 5.7701 9.43396 5.44206 9.43396 5.06183C9.43396 4.7338 9.35063 4.41694 9.18396 4.11127C9.02396 3.8056 8.76396 3.55584 8.40396 3.362C8.05063 3.16071 7.59729 3.06006 7.04396 3.06006C6.51729 3.06006 6.05729 3.17189 5.66396 3.39555C5.27063 3.61176 4.97063 3.89879 4.76396 4.25665C4.55729 4.61451 4.44729 4.99846 4.43396 5.40851C4.43396 5.49052 4.45396 5.55762 4.49396 5.60981C4.53396 5.65454 4.58729 5.6769 4.65396 5.6769H5.50396C5.65063 5.6769 5.74729 5.59117 5.79396 5.41969C5.92729 4.69652 6.32063 4.33493 6.97396 4.33493C7.26729 4.33493 7.51729 4.42812 7.72396 4.61451C7.93063 4.79344 8.02063 5.03574 7.99396 5.34141C7.97396 5.52034 7.90729 5.69554 7.79396 5.86702C7.68063 6.03849 7.51396 6.24351 7.29396 6.48209C6.99396 6.82504 6.76063 7.13071 6.59396 7.3991C6.43396 7.66004 6.33729 7.96571 6.30396 8.31612V8.67397C6.30396 8.73362 6.32396 8.78581 6.36396 8.83054ZM6.30396 10.9218C6.35063 10.974 6.40729 11.0001 6.47396 11.0001H7.44396C7.51729 11.0001 7.57729 10.974 7.62396 10.9218C7.67063 10.8696 7.69396 10.8062 7.69396 10.7317V9.75874C7.69396 9.67673 7.67063 9.60963 7.62396 9.55744C7.57729 9.50525 7.51729 9.47916 7.44396 9.47916H6.47396C6.40729 9.47916 6.35063 9.50898 6.30396 9.56862C6.25729 9.62081 6.23396 9.68418 6.23396 9.75874V10.7317C6.23396 10.8062 6.25729 10.8696 6.30396 10.9218Z"
                      fill="#C4C4C4"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-4">
        <span className=" font_abel text-uppercase ">Billing address</span>
        <p className=" font_abel mobile_font">
          Select the address that matches your card or payment method.
        </p>
      </div>
      <div className="mobile_shiping_method_container w-100 mt-3 ps-3 p-3 pe-2 ">
        <div
          className=" d-flex w-100 justify-content-start gap-3 align-items-center"
          onClick={choseMehod1}
        >
          <div
            className={`circle_mobile_method ${
              selectMethod1 ? "bg-black" : ""
            } rounded-circle d-flex justify-content-center align-items-center`}
          >
            <div className="circle_mobile_method2 bg-light rounded-circle"></div>
          </div>

          <div className=" d-flex flex-column">
            <span
              className={`font_abel mobile_font ${
                selectMethod1 ? "fw-bolder" : ""
              }`}
            >
              Canada Post Small Packet International Surface
            </span>
          </div>
        </div>
        <hr />
        <div
          className=" d-flex w-100 justify-content-start gap-3 align-items-center"
          onClick={choseMehod2}
        >
          <div
            className={`circle_mobile_method ${
              selectMethod2 ? "bg-black" : ""
            } rounded-circle d-flex justify-content-center align-items-center`}
          >
            <div className="circle_mobile_method2 bg-light rounded-circle"></div>
          </div>

          <div className=" d-flex flex-column">
            <span
              className={`font_abel mobile_font ${
                selectMethod2 ? "fw-bolder" : ""
              }`}
            >
              Canada Post Small Packet International Surface
            </span>
          </div>
        </div>
      </div>
      <div className=" d-flex w-100 justify-content-between mt-4 ">
        <div className=" d-flex align-items-center gap-2" onClick={returnToShiping}>
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
            <span className=" font_abel " style={{ fontSize: "14px" }}>
              Return to Billing
            </span>
          </div>
        </div>
        <div className=" w-50">
          <button className=" font_abel border-0 w-100 p-2 bg-black text-light mobile_font">
            continue to payment
          </button>
        </div>
      </div>
      <br />
      <hr />
    </div>
  );
}
