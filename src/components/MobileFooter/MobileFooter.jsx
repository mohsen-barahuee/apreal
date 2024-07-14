import React from "react";

import { Link } from "react-router-dom";
import "./MoblieFooter.css";

export default function MobileFooter() {
 
  return (
    <div>
     
      <div className=" container mobile_footer_container">
        <div className=" d-flex w-100 h-75 align-items-center justify-content-between">
          <div>
            <Link to={"/about"}>
              <p className="mobile_footer_text font_abel">ABOUT</p>
            </Link>
          </div>
          <div>
            <Link to={"/values"}>
              <p className="mobile_footer_text font_abel">VALUES</p>
            </Link>
          </div>
          <div>
            <Link to={"/contacts"}>
              <p className="mobile_footer_text font_abel">CONTACT</p>
            </Link>
          </div>
          <div>
            <p className="mobile_footer_text font_abel">POLICIES</p>
          </div>
          <div>
            <Link to={"/stocklist"}>
              <p className="mobile_footer_text font_abel">STOCKLIST</p>
            </Link>
          </div>
          <div>
            <p className="mobile_footer_text font_abel">INSTAGRAM</p>
          </div>
        </div>

        <div className="mb-3 font_abel">
          <p style={{ textAlign: "center", fontSize: "10px" }}>
            © 2020 all rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
