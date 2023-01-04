import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../shared/Header';
import LeftSection from '../../shared/left/LeftSection';
import Contact from '../../shared/very_right/Contact';
import Group from '../../shared/very_right/Group';
import Pages from '../../shared/very_right/Pages';
import FooterBar from '../../shared/FooterBar';


function Notifications() {
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
        <div className="main-content right-chat-active">
            
            <div className="middle-sidebar-bottom">
                <div className="middle-sidebar-left pe-0">
                    <div className="row">
                           
                        <div className="col-xl-12">
                            <div className="chat-wrapper p-3 w-100 position-relative scroll-bar bg-white theme-dark-bg">
                                <h2 className="fw-700 mb-4 mt-2 font-md text-grey-900 d-flex align-items-center">Notification
                                <span className="circle-count bg-warning text-white font-xsssss rounded-3 ms-2 ls-3 fw-600 p-2  mt-0">23</span> 
                                    <a href="#" className="ms-auto btn-round-sm bg-greylight rounded-3"><i className="feather-hard-drive font-xss text-grey-500"></i></a> 
                                    <a href="#" className="ms-2 btn-round-sm bg-greylight rounded-3"><i className="feather-alert-circle font-xss text-grey-500"></i></a> 
                                    <a href="#" className="ms-2 btn-round-sm bg-greylight rounded-3"><i className="feather-trash-2 font-xss text-grey-500"></i></a></h2> 
                                    
                                <ul className="notification-box">
                                    <li>
                                        <a href="#" className="d-flex align-items-center p-3 rounded-3 bg-lightblue theme-light-bg">
                                            <img src="/assets/images/user-7.png" alt="user" className="w45 me-3" />
                                            <i className="feather-heart text-white bg-red-gradiant me-2 font-xssss notification-react"></i>
                                            <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Victor Exrixon</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span className="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 0l-auto"> 12 minutes ago</span> </h6>
                                            <i className="ti-more-alt text-grey-500 font-xs ms-auto"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="d-flex align-items-center p-3 rounded-3">
                                            <span className="btn-round-md me-3 bg-warning font-xs fw-700 text-white">M</span>
                                            <i className="feather-thumbs-up text-white bg-primary-gradiant me-2 font-xssss notification-react"></i>
                                            <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Surfiya Zakir</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span className="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 0l-auto">30 minutes ago</span> </h6>
                                            <i className="ti-more-alt text-grey-500 font-xs ms-auto"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="d-flex align-items-center p-3 rounded-3">
                                            <img src="/assets/images/user-4.png" alt="user" className="w45 me-3" />
                                            <i className="feather-thumbs-up text-white bg-primary-gradiant me-2 font-xssss notification-react"></i>
                                            <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Goria Coast</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span className="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 0l-auto">1 hours ago</span> </h6>
                                            <i className="ti-more-alt text-grey-500 font-xs ms-auto"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="d-flex align-items-center p-3 rounded-3">
                                            <img src="/assets/images/user-3.png" alt="user" className="w45 me-3" />
                                            <i className="feather-message-square text-white bg-mini-gradiant me-2 font-xssss notification-react"></i>
                                            <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Hurin Seary</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span className="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 0l-auto">2 hours ago</span> </h6>
                                            <i className="ti-more-alt text-grey-500 font-xs ms-auto"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex align-items-center p-3 rounded-3 bg-lightgreen theme-light-bg">
                                            <img src="/assets/images/user-2.png" alt="user" className="w45 me-3" />
                                            <i className="feather-message-square text-white bg-mini-gradiant me-2 font-xssss notification-react"></i>
                                            <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Victor Exrixon</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span className="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 0l-auto">6 hours ago</span> </h6>
                                            <i className="ti-more-alt text-grey-500 font-xs ms-auto"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex align-items-center p-3 rounded-3">
                                            <span className="btn-round-md me-3 bg-danger font-xs fw-700 text-white">S</span>
                                            <i className="feather-thumbs-up text-white bg-primary-gradiant me-2 font-xssss notification-react"></i>
                                            <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Surfiya Zakir</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span className="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 0l-auto">11 hours ago</span> </h6>
                                            <i className="ti-more-alt text-grey-500 font-xs ms-auto"></i>
                                        </a>
                                    </li>

                                    <h4 className="fw-600 mb-4 mt-2 font-xssss text-grey-500 d-flex align-items-center mt-4">Yesterday</h4>

                                    <li>
                                        <a href="#" className="d-flex align-items-center p-3 rounded-3 bg-lightgrey theme-light-bg">
                                            <img src="/assets/images/user-4.png" alt="user" className="w45 me-3" />
                                            <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Goria Coast</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span className="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto">12:48PM</span> </h6>
                                            <i className="ti-more-alt text-grey-500 font-xs ms-auto"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="d-flex align-items-center p-3 rounded-3">
                                            <img src="/assets/images/user-3.png" alt="user" className="w45 me-3" />
                                            <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Hurin Seary</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span className="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto">12:48PM</span> </h6>
                                            <i className="ti-more-alt text-grey-500 font-xs ms-auto"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="d-flex align-items-center p-3 rounded-3">
                                            <img src="/assets/images/user-8.png" alt="user" className="w45 me-3" />
                                            <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Surfiya Zakir</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span className="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto"> 12:48PM</span> </h6>
                                            <i className="ti-more-alt text-grey-500 font-xs ms-auto"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="d-flex align-items-center p-3 rounded-3 bg-lightblue theme-light-bg">
                                            <img src="/assets/images/user-2.png" alt="user" className="w45 me-3" />
                                            <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Victor Exrixon</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span className="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto">  12:48PM</span> </h6>
                                            <i className="ti-more-alt text-grey-500 font-xs ms-auto"></i>
                                        </a>
                                    </li>
                                    <h4 className="fw-600 mb-4 mt-2 font-xssss text-grey-500 d-flex align-items-center mt-4">12 July 2021</h4>
                                    <li>
                                        <a href="#" className="d-flex align-items-center p-3 rounded-3 bg-lightblue theme-light-bg">
                                            <img src="/assets/images/user-8.png" alt="user" className="w45 me-3" />
                                            <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Surfiya Zakir</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span className="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto">12:48PM</span> </h6>
                                            <i className="ti-more-alt text-grey-500 font-xs ms-auto"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="d-flex align-items-center p-3 rounded-3">
                                            <img src="/assets/images/user-4.png" alt="user" className="w45 me-3" />
                                            <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Goria Coast</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span className="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto">12:48PM</span> </h6>
                                            <i className="ti-more-alt text-grey-500 font-xs ms-auto"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="d-flex align-items-center p-3 rounded-3">
                                            <img src="/assets/images/user-3.png" alt="user" className="w45 me-3" />
                                            <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Hurin Seary</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span className="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto">12:48PM</span> </h6>
                                            <i className="ti-more-alt text-grey-500 font-xs ms-auto"></i>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" className="d-flex align-items-center p-3 rounded-3">
                                            <img src="/assets/images/user-8.png" alt="user" className="w45 me-3" />
                                            <h6 className="font-xssss text-grey-900 text-grey-900 mb-0 mt-0 fw-500 lh-20"><strong>Surfiya Zakir</strong> posted in <strong>UI/UX Community</strong> : “Mobile Apps UI Designer is required for Tech…” <span className="d-block text-grey-500 font-xssss fw-600 mb-0 mt-0 ms-auto"> 12:48PM</span> </h6>
                                            <i className="ti-more-alt text-grey-500 font-xs ms-auto"></i>
                                        </a>
                                    </li>




                                </ul>                                 
                            </div>
                        </div>
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

    <div className="modal bottom side fade" id="Modalstries" tabIndex="-1" role="dialog" style={{ overflowY: 'auto'}}>
         <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-0 bg-transparent">
                <button type="button" className="close mt-0 position-absolute top--30 right--10" data-dismiss="modal" aria-label="Close"><i className="ti-close text-white font-xssss"></i></button>
                <div className="modal-body p-0">
                    <div className="card w-100 border-0 rounded-3 overflow-hidden bg-gradiant-bottom bg-gradiant-top">
                        <div className="owl-carousel owl-theme dot-style3 story-slider owl-dot-nav nav-none">
                            <div className="item"><img src="/assets/images/story-5.jpg" alt="image" /></div>
                            <div className="item"><img src="/assets/images/story-6.jpg" alt="image" /></div>
                            <div className="item"><img src="/assets/images/story-7.jpg" alt="image" /></div>
                            <div className="item"><img src="/assets/images/story-8.jpg" alt="image" /></div>
                            
                        </div>
                    </div>
                    <div className="form-group mt-3 mb-0 p-3 position-absolute bottom-0 z-index-1 w-100">
                        <input type="text" className="style2-input w-100 bg-transparent border-light-md p-3 pe-5 font-xssss fw-500 text-white" defaultValue="Write Comments" />               
                        <span className="feather-send text-white font-md text-white position-absolute" style={{bottom: '35px', right: '30px'}}></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="modal-popup-chat">
        <div className="modal-popup-wrap bg-white p-0 shadow-lg rounded-3">
            <div className="modal-popup-header w-100 border-bottom">
                <div className="card p-3 d-block border-0 d-block">
                    <figure className="avatar mb-0 float-left me-2">
                        <img src="/assets/images/user-12.png" alt="image" className="w35 me-1" />
                    </figure>
                    <h5 className="fw-700 text-primary font-xssss mt-1 mb-1">Hendrix Stamp</h5>
                    <h4 className="text-grey-500 font-xsssss mt-0 mb-0"><span className="d-inline-block bg-success btn-round-xss m-0"></span> Available</h4>
                    <a href="#" className="font-xssss position-absolute right-0 top-0 mt-3 me-4"><i className="ti-close text-grey-900 mt-2 d-inline-block"></i></a>
                </div>
            </div>
            <div className="modal-popup-body w-100 p-3 h-auto">
                <div className="message"><div className="message-content font-xssss lh-24 fw-500">Hi, how can I help you?</div></div>
                <div className="date-break font-xsssss lh-24 fw-500 text-grey-500 mt-2 mb-2">Mon 10:20am</div>
                <div className="message self text-right mt-2"><div className="message-content font-xssss lh-24 fw-500">I want those files for you. I want you to send 1 PDF and 1 image file.</div></div>
                <div className="snippet pt-3 ps-4 pb-2 pe-3 mt-2 bg-grey rounded-xl float-right" data-title=".dot-typing"><div className="stage"><div className="dot-typing"></div></div></div>
                <div className="clearfix"></div>
            </div>
            <div className="modal-popup-footer w-100 border-top">
                <div className="card p-3 d-block border-0 d-block">
                    <div className="form-group icon-right-input style1-input mb-0"><input type="text" placeholder="Start typing.." className="form-control rounded-xl bg-greylight border-0 font-xssss fw-500 ps-3" /><i className="feather-send text-grey-500 font-md"></i></div>
                </div>
            </div>
        </div> 
    </div>

</div>
    </div>
  )
}

export default Notifications;