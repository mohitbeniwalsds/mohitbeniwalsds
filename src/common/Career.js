import React from 'react'
import Footer from './Footer'
import Header from '../homepage/Header'
import {Link} from 'react-router-dom'
import careerBanner from '../assets/Career Page/career-banner.jpg';

const  Career = ()=>{

	return(
		<>
        <Header/>
         <div className="Banner">
			<div className="row">
			    <div className="col-sm-12 col-md-12 col-lg-12">
				     <img className="Banner" src={careerBanner}  alt="Responsive image"/>
				    <div className="bannerText">
                       <h1 className="secheading mt-5 mb-5"><span className="bannerHeading">CAREERS</span></h1>
                    </div>
			    </div>
		    </div>
            <h1 className="secheading mt-5 mb-5"><span className="heading-1">EXPLORE CAREERS</span>&nbsp;<span className="heading-2">AT THEOM!</span></h1>
           <div className="container mb-5 pb-3">
            <h3 className=" pricingHeading mt-3 mb-3">Why Join Us?</h3>
            <p className="mt-4">
            Join our team of highly motivated and inspired individuals.We are in market that has great potential to evolve,which gives us chance to take up new challenges 
            We are focused to have an equilibrium in work and personal life.If you got that oomph factor,we would be glad to hear that.
             </p>
             <p className="mt-4">
                 Feeling excited to get started,we would love to meet you! 
                 </p>
                 <p className="lineSpace">
                 Send your CV and cover letter to <a href = "mailto:info@theom.ca"><span className="heading-2">info@theom.ca</span></a>
             </p>
             <p className="mt-4">
                 Want to join as service provider?<Link to="/serviceprovider">Join as a Pro</Link>
             </p>
             </div>
        </div>
		<Footer/>
		</>
	)
}
export default Career