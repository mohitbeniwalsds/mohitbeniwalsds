import React from 'react'
import Footer from './Footer'
import Header from '../homepage/Header'
import Howitworksbanner from '../assets/How-it-works/howitworks-banner.jpg';
import search from '../assets/How-it-works/1.jpg';
import choose from '../assets/How-it-works/2.jpg';
import connect from '../assets/How-it-works/3.jpg';
import pay from '../assets/How-it-works/4.jpg';


const  Howitwork = ()=>{

	return(
		<>
        <Header/>
         <div className="Banner">
			<div className="row">
			    <div className="col-sm-12 col-md-12 col-lg-12">
				<img className="Banner" src={Howitworksbanner}  alt="Responsive image"/>
                    <div className="bannerText">
                        <h1 className="secheading mt-5 mb-5"><span className="bannerHeading">HOW IT WORKS</span></h1>
                    </div>
			    </div>
			</div>			
			<div className="container mt-5 mb-5">
				<div className="row">
					<div className="col-sm-5 col-md-5 col-lg-5">
					   <h3 className="howItWorkHeading" id="searchHeading">SEARCH</h3>
                        <h3 className="mt-2" id="searchHeadingSecond">Look for nearby services</h3>
					</div>
                    <div className="col-sm-2 col-md-2 col-lg-2 text-center dotSetting">
				     	<span className="firestDots">1</span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
					</div>
					<div className="col-sm-5 col-md-5 col-lg-5">
                       <img className="" src={search}  alt="search"/>
					</div>
                    <div className="col-sm-5 col-md-5 col-lg-5 chooseBannerPosition">
                      <img className="chooseBanner" src={choose}  alt="nearby"/>
					</div>
                    <div className="col-sm-2 col-md-2 col-lg-2 text-center dotSetting ">
					    <span className="firestDots2">2</span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>

					</div>
					<div className="col-sm-5 col-md-5 col-lg-5 chooseBannerPosition">
                        <h3 className="howItWorkHeading" id="chooseHeading">CHOOSE</h3>
                        <h3 className=" mt-2">Explore from 100+ profiles and select the professional that best suits your need</h3> 
					</div>
					<div className="col-sm-5 col-md-5 col-lg-5 chooseBannerPosition">
					   <h3 className="howItWorkHeading" id="connectHeading">COONECT</h3>
                        <h3 className=" mt-2" id="connectHeadingSecond">Connect with the service provider to discuss project details</h3>
					</div>
                    <div className="col-sm-2 col-md-2 col-lg-2 text-center dotSetting">
					    <span className="firestDots3">3</span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>

					</div>
					<div className="col-sm-5 col-md-5 col-lg-5 chooseBannerPosition">
                       <img className="" src={connect}  alt="search"/>

					</div>
                    <div className="col-sm-5 col-md-5 col-lg-5 chooseBannerPosition">
                      <img className="payBanner" src={pay}  alt="nearby"/>
					</div>
                    <div className="col-sm-2 col-md-2 col-lg-2 text-center">
					    <span className="firestDots4">4</span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
						<span className="dots"></span>
					</div>
					<div className="col-sm-5 col-md-5 col-lg-5 chooseBannerPosition">
                        <h3 className="howItWorkHeading" id="payHeading">PAY</h3>
                        <h3 className="mt-2">Book & pay for the service and provide feedback</h3> 
					</div>
				</div>
			 </div>	
			</div>
		<Footer/>
		</>
	)
}
export default Howitwork