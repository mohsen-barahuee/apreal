import React, { useEffect, useContext, useState } from "react";
import { useLocation } from "react-router-dom";

import Productpageitem from "../../components/ProductPage/Productpageitem.jsx";
import "./Productpage.css";

export default function Productpage() {
  const location = useLocation();

  

  const [locationState, setLocationState] = useState();

  useEffect(() => {
    if (location.state) {
      let state = location.state;
      setLocationState(state);
    }
  }, [location, locationState]);



  return (
    <div>
      {locationState && (<Productpageitem itemValue={locationState}/>)}

      
    </div>
  );
}
