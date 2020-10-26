import React from  'react' ;
import ReactDOM from 'react-dom';
import Navbar from "./component/Navbar";
import Body from "./component/Body";
import Footer from "./component/Footer";


ReactDOM.render(
   <React.StrictMode>
        <Navbar/>
        <Body />
        <Footer/>
   </React.StrictMode>,
    document.querySelector('#root')
 );

 