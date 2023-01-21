import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useFormik} from "formik"
import {updateUser} from "../../../../../services/userService/userService"

import FormErrors from '../../../shared/Errors/FormErrors';
import AccountInfo from "../../../../../Schemas/AccountInfoSchema";

import Header from '../../../shared/Header/Header';
import LeftSection from '../../../shared/left/LeftSection/LeftSection';
import Contact from '../../../shared/very_right/Contact/Contact';
import Group from '../../../shared/very_right/Group/Group';
import Pages from '../../../shared/very_right/Pages/Pages';
import FooterBar from '../../../shared/FooterBar/FooterBar';

import Text from '../../../shared/AllInputTypes/Text';
import Email from "../../../shared/AllInputTypes/Email"
import Select from '../../../shared/AllInputTypes/Select';
import Textarea from '../../../shared/AllInputTypes/Textarea';


const initialValues = {
name : "",
email : "",
phone : "",
intrest : "",
country : "",
town : "",
address : "",
bio : "",
}
export const Accountinfo = () => {
    let [id, setId] = useState("");
    let navigate = useNavigate();
    let {values, handleBlur, handleChange, handleSubmit, errors, touched} = useFormik({
        initialValues : initialValues,
        validationSchema : AccountInfo,
        
        onSubmit : ()=> {
         updateUser(id,values).then(result=> {
        if(result.data.status == 200) {
          navigate("/")
        }else {
        }
        }).catch(error=> {
         }) 
        }
          });
  return (
    <div>

<div className="color-theme-blue mont-font">

    {/* <div className="preloader"></div> */}

    
    <div className="main-wrapper">

   {/* <!-- navigation top--> */}
   <Header/>
          {/* <!-- navigation top --> */}

          {/* <!-- navigation left --> */}
         

            <LeftSection/>

          {/* <!-- navigation left --> */}
        {/* <!-- main content --> */}
        <div className="main-content bg-lightblue theme-dark-bg right-chat-active">
            
            <div className="middle-sidebar-bottom">
                <div className="middle-sidebar-left">
                    <div className="middle-wrap">
                        <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                            <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-3">
                                <Link to="/setting" className="d-inline-block mt-2"><i className="ti-arrow-left font-sm text-white"></i></Link>
                                <h4 className="font-xs text-white fw-600 ms-4 mb-0 mt-2">Account Details</h4>
                            </div>
                            <div className="card-body p-lg-5 p-4 w-100 border-0 ">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 text-center">
                                    <figure className="avatar ms-auto me-auto mb-0 mt-2 w100"><img src="/assets/images/pt-120.png" alt="image" className="shadow-sm rounded-3 w-100" /></figure>
                                    <h2 className="fw-700 font-sm text-grey-900 mt-3">Surfiya Zakir</h2>
                                    <h4 className="text-grey-500 fw-500 mb-3 font-xsss mb-4">Brooklyn</h4>    
                                    {/* <!-- <a href="#" className="p-3 alert-primary text-primary font-xsss fw-500 mt-2 rounded-3">Upload New Photo</a> --> */}
                                </div>
                            </div>

                            <form onSubmit={handleSubmit}>
                                {/* <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss">First Name</label>
                                            <input type="text" className="form-control" />
                                        </div>        
                                    </div>

                                    <div className="col-lg-12 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss">Last Name</label>
                                            <input type="text" className="form-control" />
                                        </div>        
                                    </div>
                                </div> */}
                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss">FullName</label>
                                            <Text name="name" autocomplete="off" placeholder="" change={handleChange} blur={handleBlur} classes={"form-control " + (errors.name && touched.name ? "is-invalid" : "")}/>
                                            <FormErrors errMsg={errors.name} touched={touched.name}/>
                                        </div>        
                                    </div>

                                    <div className="col-lg-6 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss">Intrests</label>
                                           <Select name="intrest" change={handleChange} blur={handleBlur} classes={"form-control " + (errors.intrest && touched.intrest ? "is-invalid" : "")} />
                                            <FormErrors errMsg={errors.intrest} touched={touched.intrest}/>
                                        </div>        
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss">Email</label>
                                            <Email name="email" autocomplete="off" change={handleChange} blur={handleBlur} classes={"form-control " + (errors.email && touched.email ? "is-invalid" : "")}/>
<FormErrors errMsg={errors.email} touched={touched.email}/>
                                        </div>        
                                    </div>

                                    <div className="col-lg-6 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss">Phone</label>
                                           <Text name="phone" autocomplete="off" placeholder="" change={handleChange} blur={handleBlur} classes={"form-control " + (errors.phone && touched.phone ? "is-invalid" : "")}/>
                                           <FormErrors errMsg={errors.phone} touched={touched.phone}/>
                                        </div>        
                                    </div>
                                </div>

                                <div className="row">
                                    {/* <div className="col-lg-12 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss">Country</label>
                                           <Text name="name" autocomplete="off" placeholder="" change={handleChange} blur={handleBlur} classes={"form-control" + (errors.name && touched.name ? "is-invalid" : "")}/>
                                        </div>        
                                    </div> */}

                                    <div className="col-lg-12 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss">Address</label>
                                            <Text name="address" autocomplete="off" placeholder="" change={handleChange} blur={handleBlur} classes={"form-control " + (errors.address && touched.address ? "is-invalid" : "")}/>
                                           <FormErrors errMsg={errors.address} touched={touched.address}/>
                                        </div>        
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-6 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss">Town / City</label>
                                            <Select name="city" change={handleChange} blur={handleBlur} classes={"form-control " + (errors.city && touched.city ? "is-invalid" : "")} />
                                           <FormErrors errMsg={errors.city} touched={touched.city}/>
                                        </div>        
                                    </div>
                                    <div className="col-lg-6 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss">Country</label>
                                            <Select name="country" change={handleChange} blur={handleBlur} classes={"form-control " + (errors.country && touched.country ? "is-invalid" : "")} />
                                           <FormErrors errMsg={errors.country} touched={touched.country}/>
                                        </div>        
                                    </div>

                                    {/* <div className="col-lg-12 mb-3">
                                        <div className="form-group">
                                            <label className="mont-font fw-600 font-xsss">Country</label>
                                            <Text name="country" autocomplete="off" placeholder="" change={handleChange} blur={handleBlur} classes={"form-control" + (errors.country && touched.country ? "is-invalid" : "")}/>
                                           <FormErrors errMsg={errors.country} touched={touched.country}/>
                                        </div>        
                                    </div> */}


                                    <div className="col-lg-12 mb-3">
                                        <div className="card mt-3 border-0">
                                            <div className="card-body d-flex justify-content-between align-items-end p-0">
                                                <div className="form-group mb-0 w-100">
                                                <label className="mont-font fw-600 font-xsss">Change Profile Image</label>
                                                    <input type="file" name="file" id="file" className="input-file" />
                                                    <label htmlFor="file" className="rounded-3 text-center bg-white btn-tertiary js-labelFile p-4 w-100 border-dashed">
                                                    <i className="ti-cloud-down large-icon me-3 d-block"></i>
                                                    <span className="js-fileName">Drag and drop or click to replace</span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 mb-3">
                                        <label className="mont-font fw-600 font-xsss">Bio</label>
                                        <Textarea classes={"form-control mb-0 p-3 h100 bg-greylight lh-16 " + (errors.address && touched.address ? "is-invalid" : "")} name='bio' rows="5" change={handleChange} blur={handleBlur} placeholder="Write your message..." />
                                        <FormErrors errMsg={errors.address} touched={touched.address}/>
                                    </div>

                                    <div className="col-lg-12">
                                        <a href="#" className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-3 d-inline-block">Save</a>
                                    </div>
                                </div>

                            </form>
                            </div>
                        </div>
                        {/* <!-- <div className="card w-100 border-0 p-2"></div> --> */}
                    </div>
                </div>
                 
            </div>            
        </div>
        {/* <!-- main content --> */}

                {/* <!-- right chat --> */}
        <div className="right-chat nav-wrap mt-2 right-scroll-bar">
            <div className="middle-sidebar-right-content bg-white shadow-xss rounded-xxl">

                {/* <!-- loader wrapper --> */}
                <div className="preloader-wrap p-3">
                    <div className="box shimmer">
                        <div className="lines">
                            <div className="line s_shimmer"></div>
                            <div className="line s_shimmer"></div>
                            <div className="line s_shimmer"></div>
                            <div className="line s_shimmer"></div>
                        </div>
                    </div>
                    <div className="box shimmer mb-3">
                        <div className="lines">
                            <div className="line s_shimmer"></div>
                            <div className="line s_shimmer"></div>
                            <div className="line s_shimmer"></div>
                            <div className="line s_shimmer"></div>
                        </div>
                    </div>
                    <div className="box shimmer">
                        <div className="lines">
                            <div className="line s_shimmer"></div>
                            <div className="line s_shimmer"></div>
                            <div className="line s_shimmer"></div>
                            <div className="line s_shimmer"></div>
                        </div>
                    </div>
                </div>
                        {/* <!-- loader wrapper --> */}

                        <Contact/>
              
              <Group/>
              
              <Pages/>


            </div>
        </div>

        
       {/* <!-- right chat --> */}
        
       <FooterBar/>

        <div className="app-header-search">
            <form className="search-form">
                <div className="form-group searchbox mb-0 border-0 p-1">
                    <input type="text" className="form-control border-0" placeholder="Search..." />
                    <i className="input-icon">
                        <ion-icon name="search-outline" role="img" className="md hydrated" aria-label="search outline"></ion-icon>
                    </i>
                    <a href="#" className="ms-1 mt-1 d-inline-block close searchbox-close">
                        <i className="ti-close font-xs"></i>
                    </a>
                </div>
            </form>
        </div>

    </div> 

</div>
</div>
  )
}

export default Accountinfo;