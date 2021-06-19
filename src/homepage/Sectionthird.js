import React  from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import sectionthird from '../assets/homepage/7.png'

class Sectionthird extends React.Component{
	render() {
		const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
    };
		return (
			<section className="sec-3">
            <Container>
				  <Row>
				    <Col md={6} className="mt-5 mb-5" ><Image  src={sectionthird} fluid  /></Col>
				    <Col md={6} className="mt-5 mb-5">
				    <h1 className="secheading mt-5 mb-5"><span className="heading-1">CONSUMER</span>&nbsp;<span className="heading-2">STORIES</span></h1>

					<div className="container">
					  <Slider {...settings}>
		                    <div>
		           			       <p>Coming Soon</p>

		                   </div>
		                    <div>
					             <p>Coming Soon</p>
		                   </div>
		                    <div>
					             <p>Coming Soon </p>
		                   </div>
		                    <div>
					             <p>Coming Soon</p>
		                   </div>
                          </Slider>
						</div>
				     </Col>
				  </Row>
                  </Container>
			</section>
			);
		}


	}
	export default Sectionthird
