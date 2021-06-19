import React from 'react'
import { Link } from "react-router-dom"
import Image from 'react-bootstrap/Image'
import headerlogo from '../assets/homepage/header-logo.png'
import cleaningbanner from '../assets/images/img.jpg'
import { API } from "../backend";
import "../Style.css";
import "../Responsive.css";
import { Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Multiselect } from 'multiselect-react-dropdown';

const emailRegex = RegExp(
	/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
);
const validPassword = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

const phoneRegex = RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

const formValid = ({ formErrors, ...rest }) => {
	let valid = true;

	// validate form errors being empty
	Object.values(formErrors).forEach(val => {
		val === null || val.length > 0 && (valid = false);
	});

	// validate the form was filled out
	Object.values(rest).forEach(val => {
		val === null && (valid = false);
	});

	return valid;
};
const formBlank = (stateValues, data) => {
	if (data == 1) {
		if (stateValues.first_name.length < 1 || stateValues.last_name.length < 1 || stateValues.email.length < 1 || stateValues.password.length < 1 || stateValues.re_password.length < 1 || stateValues.phone.length < 1 || stateValues.address.length < 1 || stateValues.postal_code.length < 1 || stateValues.country.length < 1 || stateValues.state.length < 1 || stateValues.city.length < 1) {
			return true
		}
		else {
			return false
		}
	}
	else if (data == 2) {
		if (stateValues.category.length < 1 || stateValues.subcategory.length < 1 || stateValues.question1.length < 1 || stateValues.subcategory.length < 1 || stateValues.question2.length < 1 || stateValues.question3.length < 1 || stateValues.question4.length < 1) {
			return true
		}
		else {
			return false
		}
	}
	else if (data == 3) {
		if (stateValues.visa_document.length < 1 || stateValues.vulnebrity_check.length < 1 || stateValues.question1.length < 1 || stateValues.work_reference.length < 1 || stateValues.child_abuse.length < 1 || stateValues.background.length < 1) {
			return true
		}
		else {
			return false
		}
	}
};
class Joinform extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			options: [{ name: 'Srigar', id: 1 }, { name: 'Sam', id: 2 }],
			redirect: false,
			count: false,
			categorys2: [],
			categorys: [],
			first_name: "",
			middle_name: "",
			last_name: "",
			isage: "",
			email: "",
			password: "",
			re_password: "",
			phone: "",
			address: "",
			city: "",
			state: '',
			category: "",
			country: '',
			postal_code: '',
			subcategory: [],
			background: "",
			child_abuse: "",
			vulnebrity_check: "",
			photo_id: "",
			visa_document: "",
			work_reference: '',
			question1: "",
			question2: "",
			question3: "",
			question4: "",
			question5: "",
			question6: "",
			question7: "",
			formErrors: {
				first_name: "",
				last_name: "",
				email: "",
				password: "",
				re_password: "",
				phone: "",
				address: "",
				isage: "",
				city: "",
				state: '',
				category: "",
				country: '',
				postal_code: '',
				category: "",
				subcategory: "",
				background: null,
				child_abuse: null,
				vulnebrity_check: null,
				photo_id: null,
				visa_document: null,
				work_reference: null,
				question1: "",
				question2: "",
				question3: "",
				question4: "",
				question5: "",
				question6: "",
				question7: ""
			},
			values: []
		};
		this.handleChange2 = this.handleChange2.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleChangeHandler = this.handleChangeHandler.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleFieldSet = this.handleFieldSet.bind(this);
		this.goBack = this.goBack.bind(this);

	}
	getCategory() {
		if (!this.state.count) {
			this.state.count = true
			fetch(`${API}/admin/getAllCategory`, {
				method: "GET",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			})
				.then((response) =>
					response.json().then((data) => {
						if (response.status == 200) {
							this.state.categorys = data
							// localStorage.setItem('data', {
							// 	data: data
							// })
						} else {
							toast.error("Ooops!! Failed to fetch data.");
						}
					})
				)
				.catch((err) => toast.error("Ooops!! Something went wrong."));
		}
	};
	goBack(data) {
		let fld1 = document.getElementById('fieldset1')
		let fld2 = document.getElementById('fieldset2')
		let fld3 = document.getElementById('fieldset3')
		switch (data) {
			case 2:
				fld1.classList.remove('hide');
				fld2.classList.add('hide');
				fld3.classList.add('hide');
				break;
			case 3:
				fld1.classList.add('hide');
				fld2.classList.remove('hide');
				fld3.classList.add('hide');
				break;
		}
	}
	redirect() {
		if (this.state.redirect) {
			toast.success("Registration Successful")
			return <Redirect to="/#" />

		}
	}
	handleFieldSet(data) {
		let fld1 = document.getElementById('fieldset1')
		let fld2 = document.getElementById('fieldset2')
		let fld3 = document.getElementById('fieldset3')

		let formErrors = this.state;
		if (formBlank(formErrors, data)) {
			toast.error("All fields are mandatory")
			if (data == 3) {
				return false
			}
			data = data - 1

		}
		else if (data == 3) {
			return true
		}
		switch (data) {
			case 0:
				fld1.classList.remove('hide');
				fld2.classList.add('hide');
				fld3.classList.add('hide');
				break;
			case 1:
				fld1.classList.add('hide');
				fld2.classList.remove('hide');
				fld3.classList.add('hide');
				break;
			case 2:
				fld1.classList.add('hide');
				fld2.classList.add('hide');
				fld3.classList.remove('hide');
				break;
		}

	}
	handleChangeHandler(event) {
		const { name, value } = event.target;
		let newarr = event.target.files[0]
		if (newarr) {
			newarr.col_name = name
			this.setState({
				[name]: newarr
			})
		}
		let formErrors = this.state.formErrors;
		switch (name) {
			case "background":
				formErrors.background = event.target.files.length < 1 ? "This field is required" : "";
				break;
			case "child_abuse":
				formErrors.child_abuse =
					event.target.files.length < 1 ? "This field is required" : "";
				break;
			case "vulnebrity_check":
				formErrors.vulnebrity_check =
					event.target.files.length < 1 ? "This field is required" : "";
				break;
			case "photo_id":
				formErrors.photo_id =
					event.target.files.length < 1 ? "This field is required" : "";
				break;
			case "visa_document":
				formErrors.visa_document =
					event.target.files.length < 1 ? "This field is required" : "";
				break;
			case "work_reference":
				formErrors.work_reference =
					event.target.files.length < 1 ? "This field is required" : "";
				break;
		}
	}
	handleChange2(e) {
		this.state.subcategory = []
		e.map((y) => {
			let x = y.name
			this.state.subcategory.push(x)
			// checksub.push(y.name)
			console.log(this.state.subcategory)
			// this.state.subcategory.push({ "value": x.name, "id": x.id.i })
			// this.setState({ [subcategory]:{ ...this.state.subcategory , y.name }})
			// let sum = false
			// for (var x of this.state.subcategory) {
			// 	if (x.id == y.id.i) {
			// 		sum = true
			// 	}
			// }
			// if (sum == false) {
			// 	this.state.subcategory.push({ "value": y.name, "id": y.id.i })
			// }
			console.log(this.state.subcategory)

		})

		console.log(this.state.subcategory)
		this.valueexit()
	}
	valueexit() {
		// this.state.subcategory.map((val) => {
		// 	// console.log(val)
		// })
	}
	handleChange(event) {
		const { name, value } = event.target;
		let formErrors = this.state.formErrors;

		switch (name) {
			case "first_name":
				formErrors.first_name =
					value.length < 3 ? "Minimum 3 characters required" : "";
				break;
			case "last_name":
				formErrors.last_name =
					value.length < 3 ? "Minimum 3 characters required" : "";
				break;
			case "email":
				formErrors.email = emailRegex.test(value)
					? ""
					: "Invalid email address";
				break;
			case "phone":
				formErrors.phone =
					phoneRegex.test(value) ? "" : "Invalid phone number";
				break;
			case "address":
				formErrors.address =
					value.length < 3 ? "Minimum 3 characters required" : "";
				break;
			case "postal_code":
				formErrors.postal_code =
					value.length < 3 ? "Minimum 3 characters required" : "";
				break;
			case "city":
				formErrors.postal_code =
					value.length < 3 ? "Minimum 3 characters required" : "";
				break;
			case "country":
				formErrors.postal_code =
					value.length < 3 ? "Minimum 3 characters required" : "";
				break;
			case "state":
				formErrors.postal_code =
					value.length < 3 ? "Minimum 3 characters required" : "";
				break;
			case "password":
				formErrors.password =
					validPassword.test(value) ? "" : "Example( Test@123 )";
				formErrors.re_password =
					this.state.re_password != value ? "Password do not match" : "";
				break;
			case "re_password":
				formErrors.re_password =
					value != this.state.password ? "Password do not match" : "";
				break;
			case "category":
				formErrors.category =
					value.length < 1 ? "This field is required" : "";
				break;
			case "subcategory":
				formErrors.subcategory =
					value.length < 1 ? "This field is required" : "";
				break;
			case "question1":
				formErrors.question1 =
					value.length < 1 ? "This field is required" : "";
				break;
			case "question2":
				formErrors.question2 =
					value.length < 1 ? "This field is required" : "";
				break;
			case "question3":
				formErrors.question3 = value.length < 1 ? "This field is required" : "";
				break;
			case "question4":
				formErrors.question4 =
					value.length < 1 ? "This field is required" : "";
				break;
			case "question5":
				formErrors.question5 =
					value.length < 1 ? "This field is required" : "";
				break;
			case "question5":
				formErrors.question6 =
					value.length < 1 ? "This field is required" : "";
				break;
			case "question5":
				formErrors.question7 =
					value.length < 1 ? "This field is required" : "";
				break;

			default:
				break;
		}
		this.setState({ formErrors, [name]: value });
		// console.log(event.target.value);
	}

	handleSubmit(event) {
		let data = new FormData()

		event.preventDefault();

		if (formValid(this.state) && this.handleFieldSet(3)) {
			data.append("first_name", this.state.first_name);
			data.append("middle_name", this.state.middle_name ? this.state.middle_name : "");
			data.append("last_name", this.state.last_name);
			data.append("email", this.state.email);
			data.append("postal_code", this.state.postal_code);
			data.append("isage", this.state.isage);
			data.append("city", this.state.city);
			data.append("country", this.state.country);
			data.append("state", this.state.state);
			data.append("password", this.state.password);
			data.append("mobile_number", this.state.phone);
			data.append("address", this.state.address);
			data.append("category", this.state.category);
			data.append("subcategory", this.state.subcategory);
			data.append("file", this.state.background, 'background');
			data.append("file", this.state.child_abuse, 'child_abuse');
			data.append("file", this.state.vulnebrity_check, 'vulnebrity_check');
			data.append("file", this.state.photo_id, 'photo_id');
			data.append("file", this.state.visa_document, 'visa_document');
			data.append("file", this.state.work_reference, 'work_reference');
			data.append("question1", this.state.question1);
			data.append("question2", this.state.question2);
			data.append("question3", this.state.question3);
			data.append("question4", this.state.question4);
			data.append("question5", this.state.question5);
			data.append("isProvider", 1);
			return fetch(`${API}/user/signupprofessional`, {
				method: "POST",
				body: data
			})
				.then(response => response.json().then(data => {
					if (response.status == 200) {
						toast.success("Registration Successful. Please Login");
						alert('done')
						// this.setState({
						// 	redirect: true
						// })
					}
					else {
						toast.error(data.msg);
					}

				})
				)
				.catch(err => console.log(err));
		} else {
			// console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
		}
	}

	catSelectItems() {
		if (this.state.categorys.length > 0) {
			let items = [];
			for (let i = 0; i < this.state.categorys.length; i++) {
				items.push(<option key={i} value={this.state.categorys[i].category}>{this.state.categorys[i].category}</option>);
				//here I will be creating my options dynamically based on
				//what props are currently passed to the parent component
			}
			return items;
		}
	}

	addClick() {
		this.setState(prevState => ({ values: [...prevState.values, ''] }))
	}
	subcatSelectItems() {
		if (this.state.categorys.length > 0 && this.state.category) {
			let items = [];
			let index = this.state.categorys.findIndex(x => { return x.category == this.state.category })
			for (let i = 0; i < this.state.categorys[index].subcategory.length; i++) {
				items.push({ name: this.state.categorys[index].subcategory[i].value, id: { i } })
				// items.push(<option key={i} value={this.state.categorys[index].subcategory[i].value}>{this.state.categorys[index].subcategory[i].value}</option>);
				//here I will be creating my options dynamically based on
				//what props are currently passed to the parent component
			}
			console.log(items)
			return items;
		}
	}
	// const [show, setShow] = useState(false);
	// const handleClose = () => setShow(false);
	// const handleShow = () => setShow(true);

	createUI() {
		return this.state.values.map((el, i) =>
			<div className="form-group col-md-6" key={i}>
				<select className="form-control" required id={"subcategory" + i} onChange={this.handleChange2} value={this.valueget} name={"subcategory" + i}>
					<option >Select Sub Category</option>
					{this.subcatSelectItems()}
				</select>
			</div>
		)
	}
	render() {
		const { formErrors } = this.state;
		{ this.getCategory() }
		return (
			<>
				{/* <ToastContainer
					position="top-center"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable={false}
					pauseOnHover
				/> */}
				<div className="container">

					<div className="row mt-3">
						<div className="col-sm-4">
							<Link to="/"	><Image src={headerlogo} fluid /></Link>
						</div>
					</div>
				</div>
				<div className="container Create-account ">
					<h1 className="text-center main_heading mb-3 pb-2" >Become a Professional</h1>
					<div className="row">
						<div className="col">
							<form id="regiration_form" onSubmit={this.handleSubmit} >
								<fieldset id="fieldset1" >
									<div className="row">
										{/* <h2 className="form-group col-sm-12 main_heading mb-5 pb-2" style={{ fontWeight: '700' }}>Create Account</h2> */}
										<div className="form-group col-sm-4">
											<label for="fName">First Name</label>
											<input type="text" className={formErrors.first_name.length > 0 ? "error" : ""} required name="first_name" id="fName" onChange={this.handleChange} value={this.state.first_name} />
											{formErrors.first_name.length > 0 && (<span className="errorMessage">{formErrors.first_name}</span>)}
										</div>
										<div className="form-group col-sm-4">
											<label for="fName">Middle Name</label>
											<input type="text" name="middle_name" id="mName" onChange={this.handleChange} value={this.state.middle_name} />
										</div>
										<div className="form-group col-sm-4">
											<label for="fName">Last Name</label>
											<input type="text" className={formErrors.last_name.length > 0 ? "error" : ""} required name="last_name" id="lName" onChange={this.handleChange} value={this.state.last_name} />
											{formErrors.last_name.length > 0 && (<span className="errorMessage">{formErrors.last_name}</span>)}
										</div>
									</div>
									<div className="row">
										<div className="form-group col-sm-12">
											<label for="fName">Email Address</label>
											<input type="email" className={formErrors.email.length > 0 ? "error" : ""} required id="email" name="email" onChange={this.handleChange} value={this.state.email} />
											{formErrors.email.length > 0 && (<span className="errorMessage">{formErrors.email}</span>)}
										</div>
									</div>
									<div className="row">
										<div className="form-group col-sm-6">
											<label for="fName">Password</label>

											<input type="password" className={formErrors.password.length > 0 ? "error" : ""} required id="password" name="password" onChange={this.handleChange} value={this.state.password} />
											{formErrors.password.length > 0 && (<span className="errorMessage">{formErrors.password}</span>)}
										</div>
										<div className="form-group col-sm-6">
											<label for="fName">Confirm Password</label>
											<input type="password" className={formErrors.re_password.length > 0 ? "error" : ""} required id="re_password" name="re_password" onChange={this.handleChange} value={this.state.re_password} />
											{formErrors.re_password.length > 0 && (<span className="errorMessage">{formErrors.re_password}</span>)}
										</div>
									</div>

									<div className="row">
										<div className="form-group col-sm-6">
											<label for="fName">Phone Number</label>
											<input type="number" className={formErrors.phone.length > 0 ? "error" : ""} required id="phone" name="phone" onChange={this.handleChange} value={this.state.phone} />
											{formErrors.phone.length > 0 && (<span className="errorMessage">{formErrors.phone}</span>)}
										</div>
										<div className="form-group col-sm-6">
											<label for="fName">Address</label>
											<input id="" className={formErrors.address.length > 0 ? "error" : ""} required name="address" onChange={this.handleChange} value={this.state.address} />
											{formErrors.address.length > 0 && (<span className="errorMessage">{formErrors.address}</span>)}
										</div>
									</div>
									<div className="row">
										<div className="form-group col-sm-6">
											<label for="fName">City</label>
											<input id="city" className={formErrors.city.length > 0 ? "error" : ""} required name="city" onChange={this.handleChange} value={this.state.city} />			            	{formErrors.address.length > 0 && (<span className="errorMessage">{formErrors.address}</span>)}
										</div>
										<div className="form-group col-sm-6">
											<label for="fName">Province</label>
											<input id="state" className={formErrors.state.length > 0 ? "error" : ""} required name="state" onChange={this.handleChange} value={this.state.state} />			            	{formErrors.address.length > 0 && (<span className="errorMessage">{formErrors.address}</span>)}
										</div>
									</div>
									<div className="row">
										<div className="form-group col-sm-6">
											<label for="fName">Country</label>
											<input id="country" className={formErrors.country.length > 0 ? "error" : ""} required name="country" onChange={this.handleChange} value={this.state.country} />			            	{formErrors.address.length > 0 && (<span className="errorMessage">{formErrors.address}</span>)}
										</div>
										<div className="form-group col-sm-6">
											<label for="fName">Postal Code</label>
											<input id="postal_code" className={formErrors.postal_code.length > 0 ? "error" : ""} required name="postal_code" onChange={this.handleChange} value={this.state.postal_code} />			            	{formErrors.address.length > 0 && (<span className="errorMessage">{formErrors.address}</span>)}
										</div>
									</div>
									<input type="button" name="next" className="next btn btn-info btn-lg col-sm-3 mt-3 mb-5" onClick={() => { this.handleFieldSet(1) }} value="Next" />

								</fieldset>



								<fieldset id="fieldset2" className="hide">
									{/* <h1 className="text-center main_heading ">Select Category</h1> */}
									<div className="row">
										<div className="form-group col-sm-12">
											<label for="fName" className="askedQuestion ">Select Category</label>
											<select className={formErrors.category.length > 0 ? "error" : ""} required id="category" name="category" onChange={this.handleChange} value={this.state.category}>
												<option >Select Category</option>
												{this.catSelectItems()}
											</select>
											{formErrors.category.length > 0 && (<span className="errorMessage">{formErrors.category}</span>)}
										</div>
										<div className="form-group col-sm-12">
											<label for="fName" className="askedQuestion ">Select Subcategory</label>
											<Multiselect
												className={formErrors.subcategory.length > 0 ? "error" : ""}
												options={this.subcatSelectItems()}
												onSelect={(e) => this.handleChange2(e)} event
												onRemove={this.onRemove, (e) => this.handleChange2(e)}
												displayValue="name"
												placeholder="Subcategory"
											/>
											{/* <select className={formErrors.subcategory.length > 0 ? "error" : ""} required id="subcategory" onChange={this.handleChange2} value={this.valueget} name="subcategory" >
												<option >Select Sub Category</option>
												{console.log(this.subcatSelectItems())}
											</select> */}
											{formErrors.subcategory.length > 0 && (<span className="errorMessage">{formErrors.subcategory}</span>)}

										</div>
										{this.createUI()}
									</div>

									{/* <div className="row">
										<div className="form-group col-sm-4 col-md-4 col-lg-4">
											<input type="button" name="add-more" onClick={this.addClick.bind(this)} className="add-more btn btn-info  btn-lg" value="+ Add More" />
										</div>
									</div> */}
									<div className="row ">
										<div className="form-group col-sm-12">
											<label for="fName" className="askedQuestion ">Are You legally entitled to work in Canada?</label>
											<select className={formErrors.question1.length > 0 ? "error" : ""} required id="category" name="question1" onChange={this.handleChange} value={this.state.question1}>
												<option >Select answer</option>
												<option name="question1" value="yes">Yes</option>
												<option name="question1" value="no">No</option>
											</select>
											{formErrors.question1.length > 0 && (<span className="errorMessage">{formErrors.question1}</span>)}
										</div>
									</div>


									{/* <div className="row ">
			            <div className="form-group col-sm-6">
			              <label for="fName" className="askedQuestion ">Age</label>

			                <input type="number" className={formErrors.age.length > 0 ? "error" : ""} required name="age" id="category" onChange={this.handleChange} value={this.state.age} placeholder="age" />
						  {formErrors.age.length> 0 && (<span className="errorMessage">{formErrors.age}</span>)}
						</div>
						<div className="form-group col-sm-6">
						<label for="fName" className="askedQuestion ml-3">Status</label>
			                <select className={formErrors.status.length > 0 ? "error" : ""} required id="category" name="status" onChange={this.handleChange} value={this.state.status}>
			                    <option >Select status</option>
			                    <option name="status" value="married">Married</option>
			                    <option name="status" value="unmarried">Unmarried</option>
			                </select>
							{formErrors.status.length> 0 && (<span className="errorMessage">{formErrors.status}</span>)}
			            </div>

		            </div>
					 */}
									<div className="row ">
										<div className="form-group col-sm-12">
											<label for="fName" className="askedQuestion "> Are you 18 years of age or older?</label>

											<select className={formErrors.isage.length > 0 ? "error" : ""} required id="category" name="isage" onChange={this.handleChange} value={this.state.isage}>
												<option >Select Option</option>
												<option name="status" value="Yes">Yes</option>
												<option name="status" value="No">No</option>
											</select>
											{formErrors.isage.length > 0 && (<span className="errorMessage">{formErrors.isage}</span>)}
										</div>

									</div>
									<div className="row">
										<label className=" askedQuestion  ml-3" for="fName">What is the highest level of education, you have?</label>
										<div className="form-group col-sm-12">
											<select className={formErrors.question5.length > 0 ? "error" : ""} required id="category" name="question5" onChange={this.handleChange} value={this.state.question5}>
												<option >Education</option>
												<option name="education" value="No certificate, diploma or degree">No certificate, diploma or degree</option>
												<option name="education" value="High school diploma or equivalent">High school diploma or equivalent</option>
												<option name="education" value="Post secondary certificate or diploma">Post secondary certificate or diploma</option>
												<option name="education" value="Bachelor's degree">Bachelor's degree</option>
												<option name="education" value="Master's degree">Master's degree</option>
												<option name="education" value="Doctorate degree">Doctorate degree</option>
											</select>
											{formErrors.question5.length > 0 && (<span className="errorMessage">{formErrors.question5}</span>)}
										</div>
									</div>

									<div className="row ">
										<label className="askedQuestion  ml-3" for="fName">Do you have professional certificate/degree?</label>
										<div className="form-group col-sm-12">
											<select className={formErrors.question2.length > 0 ? "error" : ""} required id="category" name="question2" onChange={this.handleChange} value={this.state.question2}>
												<option>Select answer</option>
												<option name="question2" value="yes">Yes</option>
												<option name="question2" value="no">No</option>
											</select>
											{formErrors.question2.length > 0 && (<span className="errorMessage">{formErrors.question1}</span>)}
										</div>
									</div>
									<div className="row " >
										<label for="fName" className=" askedQuestion  ml-3">Do you have any experience in the profession,service you wish to choose?</label>
										<div className="form-group col-sm-12">
											<select className={formErrors.question3.length > 0 ? "error" : ""} required id="category" name="question3" onChange={this.handleChange} value={this.state.question3}>
												<option>Select answer</option>
												<option name="question3" value="yes">Yes</option>
												<option name="question3" value="no">No</option>
											</select>
											{formErrors.question3.length > 0 && (<span className="errorMessage">{formErrors.question3}</span>)}
										</div>
									</div>
									<div className="row">
										<label for="fName" className="askedQuestion  ml-3">Do you have necessary tools for the completion of service?</label>
										<div className="form-group col-sm-12">
											<select className={formErrors.question4.length > 0 ? "error" : ""} required id="category" name="question4" onChange={this.handleChange} value={this.state.question4}>
												<option>Select answer</option>
												<option name="question4" value="yes">Yes</option>
												<option name="question4" value="no">No</option>
											</select>
											{formErrors.question4.length > 0 && (<span className="errorMessage">{formErrors.question4}</span>)}
										</div>
									</div>
									<input type="button" name="next" className="next btn btn-info col-sm-2 btn-lg mt-3 mb-5" onClick={() => { this.handleFieldSet(2) }} value="Next" />
									<input type="button" name="previous" className="previous btn btn-info col-sm-2 mr-3 btn-lg mt-3 mb-5" onClick={() => { this.goBack(2) }} value="Back" />

								</fieldset>




								<fieldset id="fieldset3" className="hide">

									<h3 className="text-center main_heading mb-2">Registration Complete</h3>

									<div className="row">
										<div className=" col-sm-12">
											<h3 className="">Upload Documents</h3>
										</div>
									</div>

									<div className="row">
										<label for="fName" className="ml-3">Background</label>
										<div className="form-group  col-sm-12">
											<input type="file" className="form-control custom-file-input  upload-document" id="background" name="background" onChange={this.handleChangeHandler} placeholder="background" />
											<label className="new-btn" for="background">Choose file</label>
										</div>
									</div>
									<div className="row">
										<label for="fName" className="ml-3">Child Abuse</label>

										<div className="form-group col-sm-12">
											<input type="file" className="form-control upload-document custom-file-input" id="child_abuse" name="child_abuse" onChange={this.handleChangeHandler} placeholder="photo_id" />
											<label className="new-btn" for="child_abuse">Choose file</label>
										</div>
									</div>
									<div className="row">
										<label for="fName" className="ml-3">Vulnebrity Check</label>

										<div className="form-group col-sm-12">
											<input type="file" className="form-control upload-document custom-file-input" id="vulnebrity_check" name="vulnebrity_check" onChange={this.handleChangeHandler} placeholder="photo_id" />
											<label className="new-btn" for="vulnebrity_check">Choose file</label>
										</div>
									</div>
									<div className="row">

										<label for="fName" className="ml-3">Photo Id</label>
										<div className="form-group col-sm-12">
											<input type="file" className="form-control upload-document custom-file-input" id="photo_id" name="photo_id" onChange={this.handleChangeHandler} placeholder="photo_id" />
											<label className="new-btn" for="photo_id">Choose file</label>
										</div>
									</div>
									<div className="row">
										<label for="fName" className="ml-3">Visa Document</label>

										<div className="form-group col-sm-12">
											<input type="file" className="form-control upload-document custom-file-input" id="visa_document" name="visa_document" onChange={this.handleChangeHandler} placeholder="visa_document" />
											<label className="new-btn" for="visa_document">Choose file</label>
										</div>
									</div>
									<div className="row">

										<label for="fName" className="ml-3">Work References</label>
										<div className="form-group col-sm-12">
											<input type="file" className="form-control upload-document custom-file-input" id="work_reference" name="work_reference" onChange={this.handleChangeHandler} placeholder="Document" />
											<label className="new-btn" for="work_reference">Choose file</label>
										</div>
									</div>


									<input type="submit" name="submit" className="submit btn btn-info col-sm-3 btn-lg mt-3 mb-5" value="Submit" />
									<input type="button" name="previous" className="previous btn btn-info col-sm-3 btn-lg  mr-3  mt-3 mb-5" onClick={() => { this.goBack(3) }} value="Back" />


								</fieldset>
							</form>
						</div>
						<div className="col-5 text-right cleaningbanners col-xs-12">
							<Image className="cleaningbanner" src={cleaningbanner} fluid />
						</div>
					</div>
					{this.redirect()}
				</div>




			</>
		);
	}
}
export default Joinform;