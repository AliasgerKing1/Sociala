import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";

import AllData from "../../../Hooks/ProfileHook";
import { getUsers,totalUser,deleteUser } from "../../../Services/AdminService/AdminService";
import Header from "../../shared/Header/Header";
import Footer from "../../shared/Footer/Footer";
import NotificationModel from "../../shared/NotificationModel/NotificationModel";
import RightMenu from "../../shared/RightMenu/RightMenu";
import ChooseLayout from "../../shared/ChooseLayout/ChooseLayout";


const Setting = () => {
    let [users, setUsers] = useState([]);
    let [deleteUserId, setDeleteUserId] = useState([]);
    let confirmDelete = (user) => {
        setDeleteUserId(user)
        }
        let removeUser = () => {
         deleteUser(deleteUserId._id).then(result=> {
          setUsers((preData)=> {
        return preData.filter(item => item != deleteUserId);
          })
        
         })
        } 
  return (
    <>
    {/* <!-- Begin page --> */}
    <div id="layout-wrapper">
    <Header />

<NotificationModel />
<RightMenu />
        {/* <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== --> */}
        <div className="main-content">

            <div className="page-content">
                <div className="container-fluid">

                    <div className="position-relative mx-n4 mt-n4">
                        <div className="profile-wid-bg profile-setting-img">
                            <img src="/assets/images/profile-bg.jpg" className="profile-wid-img" alt="" />
                            <div className="overlay-content">
                                <div className="text-end p-3">
                                    <div className="p-0 ms-auto rounded-circle profile-photo-edit">
                                        <input id="profile-foreground-img-file-input" type="file" className="profile-foreground-img-file-input" />
                                        <label for="profile-foreground-img-file-input" className="profile-photo-edit btn btn-light">
                                            <i className="ri-image-edit-line align-bottom me-1"></i> Change Cover
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-xxl-3">
                            <div className="card mt-n5">
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <div className="profile-user position-relative d-inline-block mx-auto  mb-4">
                                            <img src="/assets/images/users/avatar-1.jpg" className="rounded-circle avatar-xl img-thumbnail user-profile-image" alt="user-profile-image" />
                                            <div className="avatar-xs p-0 rounded-circle profile-photo-edit">
                                                <input id="profile-img-file-input" type="file" className="profile-img-file-input" />
                                                <label for="profile-img-file-input" className="profile-photo-edit avatar-xs">
                                                    <span className="avatar-title rounded-circle bg-light text-body">
                                                        <i className="ri-camera-fill"></i>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <h5 className="fs-17 mb-1">Anna Adame</h5>
                                        <p className="text-muted mb-0">Lead Designer / Developer</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!--end card--> */}
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-5">
                                        <div className="flex-grow-1">
                                            <h5 className="card-title mb-0">Complete Your Profile</h5>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <a href="#" className="badge bg-light text-primary fs-12"><i className="ri-edit-box-line align-bottom me-1"></i> Edit</a>
                                        </div>
                                    </div>
                                    <div className="progress animated-progress custom-progress progress-label">
                                        <div className="progress-bar bg-danger" role="progressbar" style={{width: '30%'}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">
                                            <div className="label">30%</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="flex-grow-1">
                                            <h5 className="card-title mb-0">Portfolio</h5>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <a href="#" className="badge bg-light text-primary fs-12"><i className="ri-add-fill align-bottom me-1"></i> Add</a>
                                        </div>
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-dark text-light">
                                                <i className="ri-github-fill"></i>
                                            </span>
                                        </div>
                                        <input type="email" className="form-control" id="gitUsername" placeholder="Username" defualtValue="@daveadame" />
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-primary">
                                                <i className="ri-global-fill"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" id="websiteInput" placeholder="www.example.com" defualtValue="www.velzon.com" /> 
                                    </div>
                                    <div className="mb-3 d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-success">
                                                <i className="ri-dribbble-fill"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" id="dribbleName" placeholder="Username" defualtValue="@dave_adame" />
                                    </div>
                                    <div className="d-flex">
                                        <div className="avatar-xs d-block flex-shrink-0 me-3">
                                            <span className="avatar-title rounded-circle fs-16 bg-danger">
                                                <i className="ri-pinterest-fill"></i>
                                            </span>
                                        </div>
                                        <input type="text" className="form-control" id="pinterestName" placeholder="Username" defualtValue="Advance Dave" />
                                    </div>
                                </div>
                            </div>
                            {/* <!--end card--> */}
                        </div>
                        {/* <!--end col--> */}
                        <div className="col-xxl-9">
                            <div className="card mt-xxl-n5">
                                <div className="card-header">
                                    <ul className="nav nav-tabs-custom rounded card-header-tabs border-bottom-0" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" data-bs-toggle="tab" href="#personalDetails" role="tab">
                                                <i className="fas fa-home"></i>
                                                Personal Details
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-bs-toggle="tab" href="#changePassword" role="tab">
                                                <i className="far fa-user"></i>
                                                Change Password
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-bs-toggle="tab" href="#experience" role="tab">
                                                <i className="far fa-envelope"></i>
                                                Experience
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-bs-toggle="tab" href="#privacy" role="tab">
                                                <i className="far fa-envelope"></i>
                                                Privacy Policy
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-body p-4">
                                    <div className="tab-content">
                                        <div className="tab-pane active" id="personalDetails" role="tabpanel">
                                            <form action="#">
                                                <div className="row">
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label for="firstnameInput" className="form-label">First
                                                                Name</label>
                                                            <input type="text" className="form-control" id="firstnameInput" placeholder="Enter your firstname" defualtValue="Dave" />
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label for="lastnameInput" className="form-label">Last
                                                                Name</label>
                                                            <input type="text" className="form-control" id="lastnameInput" placeholder="Enter your lastname" defualtValue="Adame" />
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label for="phonenumberInput" className="form-label">Phone
                                                                Number</label>
                                                            <input type="text" className="form-control" id="phonenumberInput" placeholder="Enter your phone number" defualtValue="+(1) 987 6543" />
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label for="emailInput" className="form-label">Email
                                                                Address</label>
                                                            <input type="email" className="form-control" id="emailInput" placeholder="Enter your email" defualtValue="daveadame@velzon.com" />
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-lg-12">
                                                        <div className="mb-3">
                                                            <label for="JoiningdatInput" className="form-label">Joining
                                                                Date</label>
                                                            <input type="text" className="form-control" data-provider="flatpickr" id="JoiningdatInput" data-date-format="d M, Y" data-deafult-date="24 Nov, 2021" placeholder="Select date" />
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-lg-12">
                                                        <div className="mb-3">
                                                            <label for="skillsInput" className="form-label">Skills</label>
                                                            <select className="form-control" name="skillsInput" data-choices data-choices-removeItem multiple id="skillsInput">
                                                                <option defualtValue="illustrator">Illustrator</option>
                                                                <option defualtValue="photoshop">Photoshop</option>
                                                                <option defualtValue="css">CSS</option>
                                                                <option defualtValue="html">HTML</option>
                                                                <option defualtValue="javascript" selected>Javascript</option>
                                                                <option defualtValue="python">Python</option>
                                                                <option defualtValue="php">PHP</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label for="designationInput" className="form-label">Designation</label>
                                                            <input type="text" className="form-control" id="designationInput" placeholder="Designation" defualtValue="Lead Designer / Developer" />
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-lg-6">
                                                        <div className="mb-3">
                                                            <label for="websiteInput1" className="form-label">Website</label>
                                                            <input type="text" className="form-control" id="websiteInput1" placeholder="www.example.com" defualtValue="www.velzon.com" />
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-lg-4">
                                                        <div className="mb-3">
                                                            <label for="cityInput" className="form-label">City</label>
                                                            <input type="text" className="form-control" id="cityInput" placeholder="City" defualtValue="California" />
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-lg-4">
                                                        <div className="mb-3">
                                                            <label for="countryInput" className="form-label">Country</label>
                                                            <input type="text" className="form-control" id="countryInput" placeholder="Country" defualtValue="United States" />
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-lg-4">
                                                        <div className="mb-3">
                                                            <label for="zipcodeInput" className="form-label">Zip
                                                                Code</label>
                                                            <input type="text" className="form-control" minlength="5" maxlength="6" id="zipcodeInput" placeholder="Enter zipcode" defualtValue="90011" />
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-lg-12">
                                                        <div className="mb-3 pb-2">
                                                            <label for="exampleFormControlTextarea" className="form-label">Description</label>
                                                            <textarea className="form-control" id="exampleFormControlTextarea" placeholder="Enter your description" rows="3">Hi I'm Anna Adame,It will be as simple as Occidental; in fact, it will be Occidental. To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family.</textarea>
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-lg-12">
                                                        <div className="hstack gap-2 justify-content-end">
                                                            <button type="submit" className="btn btn-primary">Updates</button>
                                                            <button type="button" className="btn btn-soft-success">Cancel</button>
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                </div>
                                                {/* <!--end row--> */}
                                            </form>
                                        </div>
                                        {/* <!--end tab-pane--> */}
                                        <div className="tab-pane" id="changePassword" role="tabpanel">
                                            <form>
                                                <div className="row g-2">
                                                    <div className="col-lg-4">
                                                        <div>
                                                            <label for="oldpasswordInput" className="form-label">Old
                                                                Password*</label>
                                                            <input type="password" className="form-control" id="oldpasswordInput" placeholder="Enter current password" />
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-lg-4">
                                                        <div>
                                                            <label for="newpasswordInput" className="form-label">New
                                                                Password*</label>
                                                            <input type="password" className="form-control" id="newpasswordInput" placeholder="Enter new password" />
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-lg-4">
                                                        <div>
                                                            <label for="confirmpasswordInput" className="form-label">Confirm
                                                                Password*</label>
                                                            <input type="password" className="form-control" id="confirmpasswordInput" placeholder="Confirm password" />
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-lg-12">
                                                        <div className="mb-3">
                                                            <a href="#" className="link-primary text-decoration-underline">Forgot
                                                                Password ?</a>
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                    <div className="col-lg-12">
                                                        <div className="text-end">
                                                            <button type="submit" className="btn btn-success">Change
                                                                Password</button>
                                                        </div>
                                                    </div>
                                                    {/* <!--end col--> */}
                                                </div>
                                                {/* <!--end row--> */}
                                            </form>
                                            <div className="mt-4 mb-3 border-bottom pb-2">
                                                <div className="float-end">
                                                    <a href="#" className="link-primary">All Logout</a>
                                                </div>
                                                <h5 className="card-title">Login History</h5>
                                            </div>
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="flex-shrink-0 avatar-sm">
                                                    <div className="avatar-title bg-light text-primary rounded-3 fs-18">
                                                        <i className="ri-smartphone-line"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6>iPhone 12 Pro</h6>
                                                    <p className="text-muted mb-0">Los Angeles, United States - March 16 at
                                                        2:47PM</p>
                                                </div>
                                                <div>
                                                    <a href="#">Logout</a>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="flex-shrink-0 avatar-sm">
                                                    <div className="avatar-title bg-light text-primary rounded-3 fs-18">
                                                        <i className="ri-tablet-line"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6>Apple iPad Pro</h6>
                                                    <p className="text-muted mb-0">Washington, United States - November 06
                                                        at 10:43AM</p>
                                                </div>
                                                <div>
                                                    <a href="#">Logout</a>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center mb-3">
                                                <div className="flex-shrink-0 avatar-sm">
                                                    <div className="avatar-title bg-light text-primary rounded-3 fs-18">
                                                        <i className="ri-smartphone-line"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6>Galaxy S21 Ultra 5G</h6>
                                                    <p className="text-muted mb-0">Conneticut, United States - June 12 at
                                                        3:24PM</p>
                                                </div>
                                                <div>
                                                    <a href="#">Logout</a>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-center">
                                                <div className="flex-shrink-0 avatar-sm">
                                                    <div className="avatar-title bg-light text-primary rounded-3 fs-18">
                                                        <i className="ri-macbook-line"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6>Dell Inspiron 14</h6>
                                                    <p className="text-muted mb-0">Phoenix, United States - July 26 at
                                                        8:10AM</p>
                                                </div>
                                                <div>
                                                    <a href="#">Logout</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end tab-pane--> */}
                                        <div className="tab-pane" id="experience" role="tabpanel">
                                            <form>
                                                <div id="newlink">
                                                    <div id="1">
                                                        <div className="row">
                                                            <div className="col-lg-12">
                                                                <div className="mb-3">
                                                                    <label for="jobTitle" className="form-label">Job
                                                                        Title</label>
                                                                    <input type="text" className="form-control" id="jobTitle" placeholder="Job title" defualtValue="Lead Designer / Developer" />
                                                                </div>
                                                            </div>
                                                            {/* <!--end col--> */}
                                                            <div className="col-lg-6">
                                                                <div className="mb-3">
                                                                    <label for="companyName" className="form-label">Company
                                                                        Name</label>
                                                                    <input type="text" className="form-control" id="companyName" placeholder="Company name" defualtValue="Themesbrand" />
                                                                </div>
                                                            </div>
                                                            {/* <!--end col--> */}
                                                            <div className="col-lg-6">
                                                                <div className="mb-3">
                                                                    <label for="experienceYear" className="form-label">Experience Years</label>
                                                                    <div className="row">
                                                                        <div className="col-lg-5">
                                                                            <select className="form-control" data-choices data-choices-search-false name="experienceYear" id="experienceYear">
                                                                                <option defualtValue="">Select years</option>
                                                                                <option defualtValue="Choice 1">2001</option>
                                                                                <option defualtValue="Choice 2">2002</option>
                                                                                <option defualtValue="Choice 3">2003</option>
                                                                                <option defualtValue="Choice 4">2004</option>
                                                                                <option defualtValue="Choice 5">2005</option>
                                                                                <option defualtValue="Choice 6">2006</option>
                                                                                <option defualtValue="Choice 7">2007</option>
                                                                                <option defualtValue="Choice 8">2008</option>
                                                                                <option defualtValue="Choice 9">2009</option>
                                                                                <option defualtValue="Choice 10">2010</option>
                                                                                <option defualtValue="Choice 11">2011</option>
                                                                                <option defualtValue="Choice 12">2012</option>
                                                                                <option defualtValue="Choice 13">2013</option>
                                                                                <option defualtValue="Choice 14">2014</option>
                                                                                <option defualtValue="Choice 15">2015</option>
                                                                                <option defualtValue="Choice 16">2016</option>
                                                                                <option defualtValue="Choice 17" selected>2017
                                                                                </option>
                                                                                <option defualtValue="Choice 18">2018</option>
                                                                                <option defualtValue="Choice 19">2019</option>
                                                                                <option defualtValue="Choice 20">2020</option>
                                                                                <option defualtValue="Choice 21">2021</option>
                                                                                <option defualtValue="Choice 22">2022</option>
                                                                            </select>
                                                                        </div>
                                                                        {/* <!--end col--> */}
                                                                        <div className="col-auto align-self-center">
                                                                            to
                                                                        </div>
                                                                        {/* <!--end col--> */}
                                                                        <div className="col-lg-5">
                                                                            <select className="form-control" data-choices data-choices-search-false name="choices-single-default2">
                                                                                <option defualtValue="">Select years</option>
                                                                                <option defualtValue="Choice 1">2001</option>
                                                                                <option defualtValue="Choice 2">2002</option>
                                                                                <option defualtValue="Choice 3">2003</option>
                                                                                <option defualtValue="Choice 4">2004</option>
                                                                                <option defualtValue="Choice 5">2005</option>
                                                                                <option defualtValue="Choice 6">2006</option>
                                                                                <option defualtValue="Choice 7">2007</option>
                                                                                <option defualtValue="Choice 8">2008</option>
                                                                                <option defualtValue="Choice 9">2009</option>
                                                                                <option defualtValue="Choice 10">2010</option>
                                                                                <option defualtValue="Choice 11">2011</option>
                                                                                <option defualtValue="Choice 12">2012</option>
                                                                                <option defualtValue="Choice 13">2013</option>
                                                                                <option defualtValue="Choice 14">2014</option>
                                                                                <option defualtValue="Choice 15">2015</option>
                                                                                <option defualtValue="Choice 16">2016</option>
                                                                                <option defualtValue="Choice 17">2017</option>
                                                                                <option defualtValue="Choice 18">2018</option>
                                                                                <option defualtValue="Choice 19">2019</option>
                                                                                <option defualtValue="Choice 20" selected>2020
                                                                                </option>
                                                                                <option defualtValue="Choice 21">2021</option>
                                                                                <option defualtValue="Choice 22">2022</option>
                                                                            </select>
                                                                        </div>
                                                                        {/* <!--end col--> */}
                                                                    </div>
                                                                    {/* <!--end row--> */}
                                                                </div>
                                                            </div>
                                                            {/* <!--end col--> */}
                                                            <div className="col-lg-12">
                                                                <div className="mb-3">
                                                                    <label for="jobDescription" className="form-label">Job
                                                                        Description</label>
                                                                    <textarea className="form-control" id="jobDescription" rows="3" placeholder="Enter description">You always want to make sure that your fonts work well together and try to limit the number of fonts you use to three or less. Experiment and play around with the fonts that you already have in the software you're working with reputable font websites. </textarea>
                                                                </div>
                                                            </div>
                                                            {/* <!--end col--> */}
                                                            <div className="hstack gap-2 justify-content-end">
                                                                <a className="btn btn-success" href="javascript:deleteEl(1)">Delete</a>
                                                            </div>
                                                        </div>
                                                        {/* <!--end row--> */}
                                                    </div>
                                                </div>
                                                <div id="newForm" style={{display: 'none'}}>

                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="hstack gap-2">
                                                        <button type="submit" className="btn btn-success">Update</button>
                                                        <a href="javascript:new_link()" className="btn btn-primary">Add
                                                            New</a>
                                                    </div>
                                                </div>
                                                {/* <!--end col--> */}
                                            </form>
                                        </div>
                                        {/* <!--end tab-pane--> */}
                                        <div className="tab-pane" id="privacy" role="tabpanel">
                                            <div className="mb-4 pb-2">
                                                <h5 className="card-title text-decoration-underline mb-3">Security:</h5>
                                                <div className="d-flex flex-column flex-sm-row mb-4 mb-sm-0">
                                                    <div className="flex-grow-1">
                                                        <h6 className="fs-15 mb-1">Two-factor Authentication</h6>
                                                        <p className="text-muted">Two-factor authentication is an enhanced
                                                            security meansur. Once enabled, you'll be required to give
                                                            two types of identification when you log into Google
                                                            Authentication and SMS are Supported.</p>
                                                    </div>
                                                    <div className="flex-shrink-0 ms-sm-3">
                                                        <a href="#" className="btn btn-sm btn-primary">Enable Two-facor
                                                            Authentication</a>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                                                    <div className="flex-grow-1">
                                                        <h6 className="fs-15 mb-1">Secondary Verification</h6>
                                                        <p className="text-muted">The first factor is a password and the
                                                            second commonly includes a text with a code sent to your
                                                            smartphone, or biometrics using your fingerprint, face, or
                                                            retina.</p>
                                                    </div>
                                                    <div className="flex-shrink-0 ms-sm-3">
                                                        <a href="#" className="btn btn-sm btn-primary">Set
                                                            up secondary method</a>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column flex-sm-row mb-4 mb-sm-0 mt-2">
                                                    <div className="flex-grow-1">
                                                        <h6 className="fs-15 mb-1">Backup Codes</h6>
                                                        <p className="text-muted mb-sm-0">A backup code is automatically
                                                            generated for you when you turn on two-factor authentication
                                                            through your iOS or Android Twitter app. You can also
                                                            generate a backup code on twitter.com.</p>
                                                    </div>
                                                    <div className="flex-shrink-0 ms-sm-3">
                                                        <a href="#" className="btn btn-sm btn-primary">Generate backup codes</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <h5 className="card-title text-decoration-underline mb-3">Application
                                                    Notifications:</h5>
                                                <ul className="list-unstyled mb-0">
                                                    <li className="d-flex">
                                                        <div className="flex-grow-1">
                                                            <label for="directMessage" className="form-check-label fs-15">Direct messages</label>
                                                            <p className="text-muted">Messages from people you follow</p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="directMessage" checked />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex mt-2">
                                                        <div className="flex-grow-1">
                                                            <label className="form-check-label fs-15" for="desktopNotification">
                                                                Show desktop notifications
                                                            </label>
                                                            <p className="text-muted">Choose the option you want as your
                                                                default setting. Block a site: Next to "Not allowed to
                                                                send notifications," click Add.</p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="desktopNotification" checked />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex mt-2">
                                                        <div className="flex-grow-1">
                                                            <label className="form-check-label fs-15" for="emailNotification">
                                                                Show email notifications
                                                            </label>
                                                            <p className="text-muted"> Under Settings, choose Notifications.
                                                                Under Select an account, choose the account to enable
                                                                notifications for. </p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="emailNotification" />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex mt-2">
                                                        <div className="flex-grow-1">
                                                            <label className="form-check-label fs-15" for="chatNotification">
                                                                Show chat notifications
                                                            </label>
                                                            <p className="text-muted">To prevent duplicate mobile
                                                                notifications from the Gmail and Chat apps, in settings,
                                                                turn off Chat notifications.</p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="chatNotification" />
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className="d-flex mt-2">
                                                        <div className="flex-grow-1">
                                                            <label className="form-check-label fs-15" for="purchaesNotification">
                                                                Show purchase notifications
                                                            </label>
                                                            <p className="text-muted">Get real-time purchase alerts to
                                                                protect yourself from fraudulent charges.</p>
                                                        </div>
                                                        <div className="flex-shrink-0">
                                                            <div className="form-check form-switch">
                                                                <input className="form-check-input" type="checkbox" role="switch" id="purchaesNotification" />
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h5 className="card-title text-decoration-underline mb-3">Delete This
                                                    Account:</h5>
                                                <p className="text-muted">Go to the Data & Privacy section of your profile
                                                    Account. Scroll to "Your data & privacy options." Delete your
                                                    Profile Account. Follow the instructions to delete your account :
                                                </p>
                                                <div>
                                                    <input type="password" className="form-control" id="passwordInput" placeholder="Enter your password" defualtValue="make@321654987" style={{maxWidth: '265px'}} />
                                                </div>
                                                <div className="hstack gap-2 mt-3">
                                                    <a href="#" data-bs-toggle="modal" data-bs-target="delModal" className="btn btn-soft-danger" onClick={()=> confirmDelete({ age : 5})}>Close &
                                                        Delete This Account</a>
                                                    <a href="#" className="btn btn-light">Cancel</a>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!--end tab-pane--> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!--end col--> */}
                    </div>
                    {/* <!--end row--> */}

                </div>
                {/* <!-- container-fluid --> */}
            </div>
            {/* <!-- End Page-content --> */}

       <Footer/>
        </div>
        {/* <!-- end main content--> */}

    </div>
    {/* <!-- END layout-wrapper --> */}


    {/* <!--start back-to-top--> */}
    <button className="btn btn-danger btn-icon" id="back-to-top">
        <i className="ri-arrow-up-line"></i>
    </button>
    {/* <!--end back-to-top--> */}

    {/* <!--preloader--> */}
    {/* <div id="preloader">
        <div id="status">
            <div className="spinner-border text-primary avatar-sm" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    </div> */}

    <div className="customizer-setting d-none d-md-block">
        <div className="btn-info btn-rounded shadow-lg btn btn-icon btn-lg p-2" data-bs-toggle="offcanvas" data-bs-target="#theme-settings-offcanvas" aria-controls="theme-settings-offcanvas">
            <i className='mdi mdi-spin mdi-cog-outline fs-22'></i>
        </div>
    </div>

    {/* <!-- Theme Settings --> */}
    <ChooseLayout />


          {/* <!-- removeNotificationModal --> */}
          <div id="delModal" className="modal fade zoomIn" tabIndex="-1" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="NotificationModalbtn-close"></button>
            </div>
            <div className="modal-body">
                <div className="mt-2 text-center">
                    <lord-icon src="https://cdn.lordicon.com/gsqxdxog.json" trigger="loop" colors="primary:#f7b84b,secondary:#f06548" style={{width:'100px',height:'100px'}}></lord-icon>
                    <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
                        <h4>Are you sure ?</h4>
                        <p className="text-muted mx-4 mb-0">Are you sure you want to remove this User ?</p>
                    </div>
                </div>
                <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
                    <button type="button" className="btn w-sm btn-light" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn w-sm btn-danger" id="delete-notification" onClick={removeUser}>

                    Yes, Delete It!</button>
                </div>
            </div>

        </div>
        {/* <!-- /.modal-content --> */}
    </div>
    {/* <!-- /.modal-dialog --> */}
</div>
{/* <!-- /.modal --> */}
    </>
  )
}

export default Setting