import React from 'react'
import Footer from './Footer'
import Header from '../homepage/Header'
import pricingbanner from '../assets/PricingPage/pricing-banner.jpg';

const  Pricing = ()=>{

	return(
		<>
        <Header/>
         <div className="pricingBanner">
			<div className="row">
			    <div className="col-sm-12 col-md-12 col-lg-12">
				<img className="pricingBanner" src={pricingbanner}  alt="Responsive image"/>
				<div class="bannerText">			<h1 className="secheading mt-5 mb-5"><span className="bannerHeading">PRICING</span></h1>
</div>
			    </div>
			</div>
			<div className="container">
			<div className="row mt-2 mb-5">
			    <div className="col-sm-12 text-center">
				<em><h1 className="mt-3 mb-4 priceMainHeading">"Don't let your budget limit yourself."</h1></em>	
				<h4 className="pricingHeading mt-3 mb-3">Find the average price range of services. </h4>
				<ul className="mainList">
					<li className="mt-3"><span class="dot"></span>&nbsp;&nbsp;With more than 500 services to choose from</li>
					<li className="mt-1"><span class="dot"></span>&nbsp;&nbsp;Service quality you can trust upon.</li>
					<li className="mt-1"><span class="dot"></span>&nbsp;&nbsp;Best services at the best prices.</li>
				</ul>
                </div>
			</div>
			<div className="container">
				<div className="row mb-5">
					<div className="col-sm-6 col-md-6 col-lg-6">
					<h3 className=" pricingHeadingThird mt-3 mb-3">Popular Services Show Popular Prices.</h3>
					<ul className="ServicList">
						<li className="">Carpet Cleaning-&#65129;</li>
						<li className="">Event Management-&#65129;</li>
						<li className="">Life Coaching-&#65129;</li>
						<li className="">Photography-&#65129;</li>
						<li className="">Tarot Card Reading-&#65129;</li>
					

					</ul>
					</div>
					<div className="col-sm-6 col-md-6 col-lg-6">
					<h3 className="pricingHeadingThird mt-3 mb-3">Self Improvisation Demands a Special Service.</h3>
					<ul className="ServicList">
						<li className="">Yoga Trainer-&#65129;</li>
						<li className="">Personal Fitness Trainer-&#65129;</li>
						<li className="">Psychiatrist-&#65129;</li>
						<li className="">Physiotherapist-&#65129;</li>
						<li className="">Chiropractic-&#65129;</li>
					

					</ul>
					</div>
					<div className="col-sm-6 col-md-6 col-lg-6">
					<h3 className="pricingHeadingThird mt-3 mb-3">For all Special Occasions.</h3>
					<ul className="ServicList">
						<li className="">Wedding Photographer-&#65129;</li>
						<li className="">Event Planner-&#65129;</li>
						<li className="">Psychiatrist-&#65129;</li>
						<li className="">Decoration Services-&#65129;</li>
						<li className="">Catering Services-&#65129;</li>
						<li className="">Florist-&#65129;</li>
						<li className="">Bridal Makeup-&#65129;</li>

					</ul>
					</div>
					<div className="col-sm-6 col-md-6 col-lg-6">
					<h3 className="pricingHeadingThird mt-3 mb-3">Quantity and Peace of Mind comes Before Price.</h3>
					<ul className="ServicList">
						<li className="">Handyman-&#65129;</li>
						<li className="">Carpenter-&#65129;</li>
						<li className="">Electricial-&#65129;</li>
						<li className="">Carpet Cleaning-&#65129;</li>
						<li className="">Home Cleaning and organization-&#65129;</li>
						<li className="">Housekeeping-&#65129;</li>
						<li className="">House Painter-&#65129;</li>

					</ul>
					</div>
					<div className="col-sm-12 col-md-12 col-lg-12">
					<h3 className="pricingHeadingThird mt-3 mb-3">From Anything to Everything you need.</h3>
					<ul className="ServicList">
						<li className="">All the rest of services according to their senority of addition on platform.</li>
						

					</ul>
					</div>
				</div>
			</div>	
			</div>
		 </div>
		<Footer/>
		</>
	)
}
export default Pricing