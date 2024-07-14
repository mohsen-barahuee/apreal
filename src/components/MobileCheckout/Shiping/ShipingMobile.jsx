import React,{useState} from "react";

import "./ShipingMobile.css";

export default function ShipingMobile(props) {

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


  const {returnToInformation , ShowPay} = props;
  return (
    <div>
      <div className=" d-flex gap-3 mt-4">
        <span className=" font_abel mobile_font">Cart</span>
        <span className=" font_abel mobile_font ">Information</span>
        <span className=" font_abel mobile_font fw-bolder">Shiping</span>
        <span className=" font_abel mobile_font">Payment</span>
      </div>

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
      </div>

      <div>
        <div className="  mt-4">
          <span className=" font_abel text-uppercase">Shipping method</span>
        </div>

        <div className="mobile_shiping_method_container w-100 mt-3 ps-3 p-3 pe-2 ">

          <div className=" d-flex w-100 justify-content-between align-items-center" onClick={choseMehod1}>
            <div className={`circle_mobile_method ${selectMethod1 ? 'bg-black' : ''} rounded-circle d-flex justify-content-center align-items-center`}>
              <div className="circle_mobile_method2 bg-light rounded-circle">
              
              </div>
            </div>

            <div className=" d-flex flex-column">
              <span className={`font_abel mobile_font ${selectMethod1 ? 'fw-bolder' : ''}`}>
                Canada Post Small Packet International Surface{" "}
              </span>
              <span className={`font_abel mobile_font ${selectMethod1 ? 'fw-bolder' : ''}`}>
                28 to 84 business days
              </span>
            </div>

            <div>
              <span className={`font_abel mobile_font ${selectMethod1 ? 'fw-bolder' : ''}`}>$9.68</span>
            </div>
          </div>
          <hr />
          <div className=" d-flex w-100 justify-content-between align-items-center" onClick={choseMehod2}>
            <div className={`circle_mobile_method ${selectMethod2 ? 'bg-black' : ''} rounded-circle d-flex justify-content-center align-items-center`} >
              <div className="circle_mobile_method2 bg-light rounded-circle">
                {" "}
              </div>
            </div>

            <div className=" d-flex flex-column">
              <span className={`font_abel mobile_font ${selectMethod2 ? 'fw-bolder' : ''}`}>
                Canada Post Small Packet International Air{" "}
              </span>
              <span className={`font_abel mobile_font ${selectMethod2 ? 'fw-bolder' : ''}`}>
                6 to 10 business days
              </span>
            </div>

            <div>
              <span className={`font_abel mobile_font ${selectMethod2 ? 'fw-bolder' : ''}`}>$11.63</span>
            </div>
          </div>
          <hr />
          <div className=" d-flex w-100 justify-content-between align-items-center" onClick={choseMehod3}>
            <div className={`circle_mobile_method ${selectMethod3 ? 'bg-black' : ''} rounded-circle d-flex justify-content-center align-items-center`}>
              <div className="circle_mobile_method2 bg-light rounded-circle">
                {" "}
              </div>
            </div>

            <div className=" d-flex flex-column">
              <span className={`font_abel mobile_font ${selectMethod3 ? 'fw-bolder' : ''}`}>
                Canada Post Small Packet International Surface{" "}
              </span>
              <span className={`font_abel mobile_font ${selectMethod3 ? 'fw-bolder' : ''}`}>
                28 to 84 business days
              </span>
            </div>

            <div>
              <span className={`font_abel mobile_font ${selectMethod3 ? 'fw-bolder' : ''}`}>$50.57</span>
            </div>
          </div>
          <hr />
          <div className=" d-flex w-100 justify-content-between align-items-center" onClick={choseMehod4}>
            <div className={`circle_mobile_method ${selectMethod4 ? 'bg-black' : ''} rounded-circle d-flex justify-content-center align-items-center`}>
              <div className="circle_mobile_method2 bg-light rounded-circle">
                {" "}
              </div>
            </div>

            <div className=" d-flex flex-column">
              <span className={`font_abel mobile_font ${selectMethod4 ? 'fw-bolder' : ''}`}>
                Canada Post Small Packet International Surface{" "}
              </span>
              <span className={`font_abel mobile_font ${selectMethod4 ? 'fw-bolder' : ''}`}>
                4 to 7 business days
              </span>
            </div>

            <div>
              <span className={`font_abel mobile_font ${selectMethod4 ? 'fw-bolder' : ''}`}>$82.18</span>
            </div>
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
              <span className=" font_abel " style={{ fontSize: "14px" }} onClick={returnToInformation}>
                Return to Billing
              </span>
            </div>
          </div>
          <div className=" w-50">
            <button className=" font_abel border-0 w-100 p-2 bg-black text-light mobile_font" onClick={ShowPay}>
              continue to payment
            </button>
          </div>
        </div>
        <br />
        <hr />
      </div>
    </div>
  );
}
