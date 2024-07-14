import Home from "./Pages/Home/Home";
import Earrings from "./Pages/Earrings/Earrings.js";
import About from "./Pages/About/About";
import Values from "./Pages/Values/Values";
import Contacts from "./Pages/Contacts/Contacts";
import Stocklist from "./Pages/Stocklist/Stocklist";
import Collection17 from "./Pages/Collection17/Collection17";
import Notfound from "./Pages/NotFound/Notfound";
import Basket from "./Pages/Basket/Basket.js";
import CheckOut from "./Pages/CheckOut/CheckOut.js";
import Productpage from "./Pages/ProductPage/Productpage.jsx";


let routes = [
    { path: '/apreal', element: <Home /> },
    { path: '/earrings', element: <Earrings /> },
    { path: '/about', element: <About /> },
    { path: '/values', element: <Values /> },
    { path: '/contacts', element: <Contacts /> },
    { path: '/stocklist', element: <Stocklist /> },
    { path: '/collection17', element: <Collection17 /> },
    // { path: '/*', element: <Notfound /> },
    { path: '/basketPage', element: <Basket /> },
    {path : '/checkout',element : <CheckOut /> },
    {path : '/productpage',element : <Productpage /> },
   
  
  

]


export default routes;