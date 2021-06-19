import React from 'react'
import Footer from './Footer'
import Header from '../homepage/Header'
import {Link} from 'react-router-dom'
import careerBanner from '../assets/blog/Blog-banner.jpg';
import blog1 from '../assets/blog/01.jpg';
import blog2 from '../assets/blog/001.jpg';
import blog3 from '../assets/blog/02.jpg';
import blog4 from '../assets/blog/002.jpg';
import blog5 from '../assets/blog/03.jpg';
import blog6 from '../assets/blog/04.jpg';


const  Blog = ()=>{

	return(
		<>
        <Header/>
         <div className="Banner">
			<div className="row">
			    <div className="col-sm-12 col-md-12 col-lg-12">
				     <img className="Banner" src={careerBanner}  alt="Responsive image"/>
				    <div className="bannerText">
                       <h1 className="secheading mt-5 mb-5"><span className="bannerHeading">BLOG</span></h1>
                    </div>
			    </div>
		    </div>
            

             </div>
             <div className="container mt-5 mb-5">
              <div className="row">
                <div className="col-sm-6  ">
                <a href="/blog-details">
                <div className="blogContent">
                  <img className="blogImage" src={blog1}  alt="Responsive image"/>
                  <h5 className="mt-2 blogText text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>
                  <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                   <h5 className="blogWriter">Denish Hammer | November 30,2202</h5>
                </div>
                </a>
                </div>
                <div className="col-sm-6 ">
                <a href="/blog-details">
                 <div className="blogContent">
                  <img className="blogImage" src={blog3}  alt="Responsive image"/>
                  <h5 className="mt-2 blogText text-justify ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>
                  <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  <h5 className="blogWriter">Denish Hammer | November 25,2020</h5>

                </div>
                </a>
                </div>
                <div className="col-sm-6 ">
                <a href="/blog-details">
                 <div className="blogContent">
                  <img className="blogImage" src={blog2}  alt="Responsive image"/>
                  <h5 className="mt-2 blogText text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>
                  <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  <h5 className="blogWriter">Denish Hammer | November 20,2020</h5>

                </div>
                </a>
                </div>
                <div className="col-sm-6 ">
                 <a href="/blog-details">
                 <div className="blogContent">
                  <img className="blogImage" src={blog4}  alt="Responsive image"/>
                  <h5 className="mt-2 blogText text-justify" max-length="{{5}}">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h5>
                  <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  <h5 className="blogWriter">Denish Hammer | November 20,2020</h5>

                </div>
                </a>
                </div>
            </div>
             </div>  

		<Footer/>
		</>
	)
}
export default Blog