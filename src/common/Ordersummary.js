import React from 'react'
import Footer from './Footer'
import Header from '../homepage/Header'
import AfterLoginHeader from '../homepage/AfterLoginHeader'

import {Link} from 'react-router-dom'
import categoryBanner from '../assets/AllServices/beauty-banner.jpg';
import { grey } from '@material-ui/core/colors';
const  Ordersummary = ()=>{

	return(
		<>
        <AfterLoginHeader/>
        <hr className="headerLine"></hr>
         <div className="container">
			<div className="row conatiner mt-5 pt-2">
                <div className="col-sm-6 col-md-6 col-lg-6">
                <h1 className="secheading"><span className="heading-1">ORDER</span>&nbsp;&nbsp;<span className="heading-2">SUMMARY</span></h1>
                </div>
                <div className="col-sm-5 col-md-5 col-lg-5 text-right">
                    <a className="cancel-Post" href="#"><button  type="button" id="cancelPost" className="btn btn-primary">Cancel/Post review</button></a>
                </div>
		    </div>
             <div className="row col-sm-10 mt-3 container mb-5" style={{backgroundColor:"#eeeeee4d",padding:40,marginLeft:92,color:"#666"}}>
			      <div className="col-sm-12 col-md-12 col-lg-12">
                   <span className="col-sm-8  mr-5 mb-4">Order Number</span><span className="col-sm-8 ml-5 mb-4 float-right">1</span><br></br>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                   <span className="col-sm-8 mt-4 mr-5">Order Status</span><span className="col-sm-8 mb-4 ml-5 float-right">Active</span><br></br>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                   <span className="col-sm-8 mb-4 mr-5">Service Name</span><span className="col-sm-8 mb-4 ml-5 float-right">House Cleaning</span><br></br>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                   <span className="col-sm-8 mb-4 mr-5">Order Type</span><span className="col-sm-8 mb-4 ml-5 float-right">House Cleaning</span><br></br>
                   </div>
                   <div className="col-sm-12 col-md-12 col-lg-12">
                   <span className="col-sm-8 mb-4 mr-5">Order Date & Time</span><span className="col-sm-8 mb-4 ml-5 float-right">20 june 20,02:20pm</span><br></br>
                   </div>
                   <div className="col-sm-12 col-md-12 col-lg-12 mt-4 mb-1">
                   <h5 className="col-sm-12 mb-4 mr-5" style={{color:"#000",fontWeight: "700"}}>Professional Details</h5>
                   </div>
                   <div className="col-sm-12 col-md-12 col-lg-12">
                   <span className="col-sm-8 mb-4 mr-5">Name </span><span className="col-sm-8 mb-4 ml-5 float-right">Loren</span><br></br>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                   <span className="col-sm-8 mb-4 mr-5">Address</span><span className="col-sm-8 mb-4 ml-5 float-right">Loren ipsum</span><br></br>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                   <span className="col-sm-8 mb-4 mr-5">Email</span><span className="col-sm-8 mb-4 ml-5 float-right">loren@gmail.com</span><br></br>
                   </div>
                   <div className="col-sm-12 col-md-12 col-lg-12">
                   <span className="col-sm-8 mb-4 mr-5">Phone Number</span><span className="col-sm-8 mb-4 ml-5 float-right">88080765432</span><br></br>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12 mb-1 mt-4">
                   <h5 className="col-sm-12 mb-4 mr-5" style={{color:"#000",fontWeight: "700"}}>Payment Details</h5>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                   <span className="col-sm-8 mb-4 mr-5">Cardholder Name</span><span className="col-sm-8 mb-4 ml-5 float-right">loren ipsum</span><br></br>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12">
                   <span className="col-sm-8 mb-4 mr-5">Card Number</span><span className="col-sm-8 mb-4 ml-5 float-right">4242 4242 4242 4242</span><br></br>
                   </div>
                   <div className="col-sm-12 col-md-12 col-lg-12">
                   <span className="col-sm-8 mb-4 mr-5">validity</span><span className="col-sm-8 mb-4 ml-5 float-right">12/49</span><br></br>
                   </div>
                   <div className="col-sm-12 col-md-12 col-lg-12">

                   <span className="col-sm-8 mb-4 mr-5">CVV</span><span className="col-sm-8 mb-4 ml-5 float-right">190</span><br></br>

                 </div>
                
		    </div>
        </div>
      
		<Footer/>
		</>
	)
}
export default Ordersummary