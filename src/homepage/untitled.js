 <div className="row">
			            <div className=" col-sm-12">
			                <h1 className="">Upload Documents</h1>
			            </div>
		            </div>
		           
		            <div className="row">
			                 <label for="fName" className="ml-3">Background</label>
			            <div className="form-group  col-sm-12">
			                <input type="file" className="form-control custom-file-input upload-document" name="background" onChange={this.handleChangeHandler}  placeholder="background"/>
			            </div>
		            </div>
		              <div className="row">
			                 <label for="fName" className="ml-3">Background</label>

			            <div className="form-group col-sm-12">
			                <input type="file" className="form-control upload-document custom-file-input" id="child_abuse" name="child_abuse" onChange={this.handleChangeHandler}  placeholder="photo_id"/>
			            </div>
		            </div>
		             <div className="row">
			                 <label for="fName" className="ml-3">Vulnebrity Check</label>

			            <div className="form-group col-sm-12">
			                <input type="file" className="form-control upload-document custom-file-input" id="vulnebrity_check" name="vulnebrity_check" onChange={this.handleChangeHandler}  placeholder="photo_id"/>
			            </div>
		            </div>
		            <div className="row">

			                 <label for="fName" className="ml-3">Photo Id</label>
			            <div className="form-group col-sm-12">
			                <input type="file" className="form-control upload-document custom-file-input" id="photo_id" name="photo_id" onChange={this.handleChangeHandler}  placeholder="photo_id"/>
			            </div>
		            </div>
		            <div className="row">
			                 <label for="fName" className="ml-3">Visa Document</label>

			            <div className="form-group col-sm-12">
			                <input type="file" className="form-control upload-document custom-file-input" id="visa_document" name="visa_document" onChange={this.handleChangeHandler}   placeholder="visa_document"/>
			            </div>
		            </div>
		            <div className="row">

			                 <label for="fName" className="ml-3">Work References</label>
			            <div className="form-group col-sm-12">
			                <input type="file" className="form-control upload-document custom-file-input" id="work_reference" name="work_reference" onChange={this.handleChangeHandler}  placeholder="Document"/>
			            </div>
		            </div>











		            .custom-file-input{
    position: relative;
    z-index: 2;
    width: 100%;
    height: calc(2.5em + .75rem + 2px);
    margin: 0;
    opacity: 1; 
    color: ghostwhite;
    background: ghostwhite;}
.custom-file-input::-webkit-file-upload-button {
  visibility: hidden;
}
form {
  width: 100%;
  flex-wrap: wrap;
}
input.error {
  border: 1px solid red;
}
.errorMessage {
  color: red;
  font-size: 0.75em;
  display: relative;
}
.custom-file-input::before {
  content: 'Choose File';
  display: block;
  background: linear-gradient(top, #f9f9f9, #e3e3e3);
  /*border: 1px solid #999;*/
  /*/*padding: 5px 8px;*/
  outline: none;
  white-space: nowrap;
  -webkit-user-select: none;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  /*font-weight: 700;*/
   font-size: 20pt;
  width: 25%;
  text-align: center;
  background:gainsboro ;
  margin-left: 77%;
  height: inherit;
  color: #FFF;
  margin-top: -7px;
  padding: 6px;
}



// MyComponent.js
import React, { Component } from 'react';
import Image from 'react-bootstrap/Image'
import sectionfirst from '../assets/homepage/banner.jpg'
import '../Style.css'
import { FaMapMarker} from 'react-icons/fa';
import CreatableSelect from 'react-select/creatable';
import {countryOptions} from'../common/apiConfig'

function Sectionfirst() {
constructor(props) {
    super(props);
    this.state = {
    	first_name: "",
    	
		  }
	this.handleChanges = this.handleChanges.bind(this);
	this.handleInputChange = this.handleInputChange.bind(this);
    };
var country;
var any

   const handleChanges = (newValue= any, actionMeta= any) => {
   	if(newValue){

        country = newValue['value'];
   	}
        console.log(country);
    };
  const  handleInputChange = (inputValue=any, actionMeta= any) => {
  };
		return (
			<section className="sec-1">
			<div className="find-the-perfect  justify-content-sm-center"><h1 className="homepage-heading">Find the perfect</h1><h1 className="homepage-heading1">professional for you</h1>
			<p className="sub-heading" > Get free quotes within minutes</p>
			<form>
			<ul className="list-unstyled list-inline text-center">
			<li className="list-inline-item search-field">
			 <CreatableSelect isClearable
                        onChange={handleChanges}
                        onInputChange={handleInputChange}
                                     options={countryOptions}
                                    
                     placeholder="What service are you looking for?" 
                 
                   
                    />

			</li>
			<li className="list-inline-item">
			<input className="form-control sm-3" id="second-search" type="text" placeholder="Postal Code" aria-label="Search" />
			</li>
			<li className="list-inline-item">
			<button id="search" type="button" className="btn btn-primary  mr-5" id="search-button">Search</button>
			</li>
			
			
			</ul>
			</form>
			</div>
			<Image  src={sectionfirst} fluid  />
			</section>);
		
	}
	export default Sectionfirst;




	.slick-image:hover  {
    /*border: solid 1px #CCC;*/
    -moz-box-shadow: 1px 1px 5px #999;
    -webkit-box-shadow: 1px 1px 5px #999;
        box-shadow: 1px 1px 5px #999;
        transform: scale(1.05);
}