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
import { FaTwitter,FaInstagram,FaYoutube ,FaFacebook } from 'react-icons/fa';



const  BlogDetails = ()=>{

	return(
		<>
        <Header/>
         <hr></hr>
             <div className="container mt-5 mb-5">
              <div className="row">
              <div className="col-sm-2"></div>
                <div className="col-sm-8">
                <h3 className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h3>
                <div className="row">
                        <div className="col-sm-12">
                            <div className="page-title-box">
                                <div className="float-left">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item"><a className="breadcrumbColor" href="javascript:void(0);">Home</a></li>
                                        <li className="breadcrumb-item active"><a className="breadcrumbColor" href="/blog">Blog</a></li>
                                        <li className="breadcrumb-item active"><a className="breadcrumbColor" href="">Marketing Blog</a></li>
                                    </ol>
                                </div>
                                <h5 className="blogWriter float-right">November 30,2202</h5>
                            </div>
                        </div>
                    </div>
                 <div className="">
                  <img className="blogImage" src={blog1}  alt="Responsive image"/>
                  <p className="mt-2 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                  <p className="mt-2 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy setting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>

                  <div>
                   <ul className="listUnstyled list-inline text-center float-right">
                   <li className="list-inline-item">
                        <a href="javascript:void(0);"  className="btn-floating btn-tw mx-1 blogWriter">
                        Share On
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.facebook.com/" target="_blank" className="btn-floating btn-tw mx-1">
                        <FaFacebook/>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.youtube.com/" target="_blank" className="btn-floating btn-gplus mx-1">
                        <FaYoutube/>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://twitter.com/" target="_blank" className="btn-floating btn-li mx-1">
                        <FaTwitter/>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://instagram.com/" target="_blank" className="btn-floating btn-dribbble mx-1">
                        <FaInstagram/>
                        </a>
                    </li>
                    </ul>
                    </div>
                    <div className="pt-3">
                     <hr className="mt-5"></hr>
                    </div>
                    <h3 className="pt-3 pb-3">About The Author</h3>
                    <div className="user_image">
                    <img className="review-image img-fluid" src={blog1}  />
                     <h4 className="author-name">Dennis Hammer<ul className="listUnstyled list-inline text-center float-right">
                   
                    <li className="list-inline-item">
                        <a href="https://www.facebook.com/" target="_blank" className="btn-floating btn-tw mx-1">
                        <FaFacebook/>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://www.youtube.com/" target="_blank" className="btn-floating btn-gplus mx-1">
                        <FaYoutube/>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://twitter.com/" target="_blank" className="btn-floating btn-li mx-1">
                        <FaTwitter/>
                        </a>
                    </li>
                    <li className="list-inline-item">
                        <a href="https://instagram.com/" target="_blank" className="btn-floating btn-dribbble mx-1">
                        <FaInstagram/>
                        </a>
                    </li>
                    </ul>
                    <span className="about-author">
                    <p>(Eg. Software Developer)</p>
                    <p className="mt-2 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                 </span>
             </h4>
            </div>
            <hr className="mt-3"></hr>
            <h3 className="pt-3 pb-3">More From Theom</h3>
            <div className="row">
                <div className="col-sm-6 pl-0 pr-0 ">
                <a href="/blog-details">
                <div className="blogContent">
                  <img className="blogImage" src={blog1}  alt="Responsive image"/>
                  <h5 className="mt-2 blogText text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry,</h5>
                  <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                   <h5 className="blogWriter">Denish Hammer | November 30,2202</h5>
                </div>
                </a>
                </div>
                <div className="col-sm-6 pr-0 pl-0">
                <a href="/blog-details">
                 <div className="blogContent">
                  <img className="blogImage" src={blog3}  alt="Responsive image"/>
                  <h5 className="mt-2 blogText text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>
                  <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                  <h5 className="blogWriter">Denish Hammer | November 25,2020</h5>

                </div>
                </a>
                </div>
                </div>
            <div>

            </div>
                </div>
                <div className="col-sm-2"></div>
                </div>
              </div>
             </div>  

		<Footer/>
		</>
	)
}
export default BlogDetails