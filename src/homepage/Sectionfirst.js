// MyComponent.js
import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import sectionfirst from '../assets/homepage/banner.jpg'
import '../Style.css'
import { FaMapMarkerAlt} from 'react-icons/fa';
import {countryOptions} from'../common/apiConfig'

import CreatableSelect from 'react-select/creatable';


class Sectionfirst extends React.Component<*,state> {


    handleChanges = (newValue: any, actionMeta: any) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

  handleInputChange = (inputValue: any, actionMeta: any) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };

	render() {
		return (
  		<>
			<section className="sec-1">
				<div className="find-the-perfect justify-content-sm-center">
					<h1 className="homepage-heading">Get Started,</h1>
					<h1 className="homepage-heading1">Search for Professionals</h1>
					<p className="sub-heading" > Get free quotes within minutes</p>
					<form>
						<ul className="list-unstyled list-inline text-center search-box">
							<li className="list-inline-item search-field">
           						<CreatableSelect
                        			onChange={this.handleChanges}
                        			onInputChange={this.handleInputChange}
                                    options={countryOptions}
                                   	placeholder="What service are you looking for?"
                 				/>
							</li>
							<li className="list-inline-item" id="map-icon">
               <input className="first-searchs"
                id="first"
                type="text"
                placeholder="What service you are looking for?"
                aria-label="Search"
               />
                <input className=""
									id="second-search"
									type="text"
									placeholder="Postal Code"
									aria-label="Search"
								/>
							</li>
							<li className="list-inline-item">
								<button id="search"
								type="button"
								className="btn btn-primary mr-5"
								id="search-button">Search</button>
							</li>
						</ul>
					</form>
				</div>
				<Image className="imageBanner" src={sectionfirst} fluid  />
			</section>
     </>
		);
  }
}
export default Sectionfirst;
