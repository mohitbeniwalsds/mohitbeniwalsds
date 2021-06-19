import React from 'react'
import { Link } from 'react-router-dom'
import footerlogo from '../assets/homepage/footer-logo.png'
import Image from 'react-bootstrap/Image';
import "../Style.css";
import { FaTwitter, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';
function Footer() {
  return (
    <>

      <footer className="page-footer footer-heading font-small stylish-color-dark pt-4">
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-4 mx-auto">
              <Link to="/"><Image src={footerlogo} fluid /></Link>
              <div className="col-md-12 footer-sm-link mt-5 pl-0 pt-3">
              <ul className="list-unstyled list-inline text-center" id="social-icons">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/" target="_blank" className="btn-floating btn-tw mx-1">
                    <FaFacebook />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.youtube.com/" target="_blank" className="btn-floating btn-gplus mx-1">
                    <FaYoutube />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/" target="_blank" className="btn-floating btn-li mx-1">
                    <FaTwitter />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://instagram.com/" target="_blank" className="btn-floating btn-dribbble mx-1">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
            </div>
            <hr className="clearfix w-100 d-md-none"></hr>
            <div className="col-md-2 mx-auto">
              <h2 class="ftr">THEOM</h2>

              <ul className="list-unstyled">
                <li>
                  <Link to="/pricing">Find a Professional</Link>
                </li>
                <li>
                  <Link to="/How-it-works">How it works</Link>
                </li>
                <li>
                  <Link to="/pricing">Login</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </div>
            <hr className="clearfix w-100 d-md-none"></hr>
            <div className="col-md-3 mx-auto">
              <h2 class="ftr">For Professional</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/serviceprovider">Join as Pro</Link>
                </li>
                <li>
                  <Link to="/need-help">Help Center</Link>
                </li>
              </ul>
            </div>
            <hr className="clearfix w-100 d-md-none"></hr>
            <div className="col-md-2 mx-auto">
              <h2 class="ftr">Our Links</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="/pricing">Our Mission</Link>
                </li>
                <li>
                  <Link to="/pricing">Team</Link>
                </li>
                <li>
                  <Link to="/careers">Career</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-8 footer-sm-link">
              <ul className="list-unstyled list-inline text-center" id="social-icons">
                <li className="list-inline-item">
                  <a href="https://www.facebook.com/" target="_blank" className="btn-floating btn-tw mx-1">
                    <FaFacebook />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://www.youtube.com/" target="_blank" className="btn-floating btn-gplus mx-1">
                    <FaYoutube />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://twitter.com/" target="_blank" className="btn-floating btn-li mx-1">
                    <FaTwitter />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="https://instagram.com/" target="_blank" className="btn-floating btn-dribbble mx-1">
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
        </div>
        <hr className="footer-line"></hr>
        <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-5">
              <div className="footer-copyright container">Copyright © 2020
              THEOM, All Rights Reserved
        </div>
            </div>
            <div className="col-md-7">
              <ul className="list-unstyled list-inline  text-center float-left" id="footer-privacy">
                <li className="list-inline-item">
                  <Link to="/pricing">Terms of Services</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="/pricing">Sitemap</Link>
                </li>


              </ul>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
export default Footer