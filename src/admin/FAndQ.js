import React from 'react';
import Showreview from "../review/Showreview";
import service5 from '../assets/homepage/service1.png';


export default function FAndQ() {

	return (
    <div className="container">
      <h3 className="mt-5 mb-2"><span className="heading-2">REVIEWS</span></h3>
        <div className=" row-width  reviews row">
            <div className=" col-xs-12  col-sm-12 col-md-12">
            <div className="user_image">
                   <img className="review-image img-fluid" src={service5}  />
                   <h4 className="reviewer-name">Shaurabh
                      <span className="review">Lorem Ipsum is simply dummy text of the printing </span>
                    <Showreview/>
                   </h4>
                   </div>
            </div>
            
        </div>
        <div className=" row-width  reviews row">
            <div className=" col-xs-12  col-sm-12 col-md-12">
            <div className="user_image">
                   <img className="review-image img-fluid" src={service5}  />
                   <h4 className="reviewer-name">Shaurabh
                      <span className="review">Lorem Ipsum is simply dummy text of the printing </span>
                    <Showreview/>
                   </h4>
                   </div>
            </div>
            
        </div>

      <h3 className="mt-5 mb-2"><span className="heading-2">Feedbacks</span></h3>
        <div className=" row-width">
            <div className=" col-xs-12  col-sm-12 col-md-12">
              <textarea></textarea>
            </div>
            
        </div>
        <div className=" row-width ">
            <div className=" col-xs-12  col-sm-12 col-md-12">
              <textarea></textarea>
            </div>
        </div>

      <h3 className="mt-5 mb-2"><span className="heading-2">Questions</span></h3>
        <div className=" row-width">
            <div className=" col-xs-12  col-sm-12 col-md-12">
              <input type="text" />
            </div>
            
        </div>
        <div className=" row-width ">
            <div className=" col-xs-12  col-sm-12 col-md-12">
              <input type="text" />
            </div>
        </div>
    </div>
	);
}