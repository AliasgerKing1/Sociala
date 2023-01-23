import React from 'react';
import Header from '../../../shared/Header/Header';
import LeftSection from '../../../shared/left/LeftSection/LeftSection';
import Contact from '../../../shared/very_right/Contact/Contact';
import Group from '../../../shared/very_right/Group/Group';
import Pages from '../../../shared/very_right/Pages/Pages';
import FooterBar from "../../../shared/FooterBar/FooterBar";

function HotelDetails() {
  return (
    <div>
<div className="color-theme-blue mont-font right-comment-none">

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
            
            <div className="middle-sidebar-bottom ps-0 pe-0">
                <div className="middle-sidebar-left pe-0">
                    <div className="row">
                        <div className="col-xl-12 col-xxl-12 col-lg-12">
                        {/* <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="/assets/images/p-1.jpg" alt="product-image" className="d-block w-100" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Luxurious Valley</h5>
        <p>Explore Beuty of Wrold and comfort</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="/assets/images/p-2.jpg" alt="product-image" className="d-block w-100" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
    <img src="/assets/images/p-3.jpg" alt="product-image" className="d-block w-100" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Luxurious Valley</h5>
        <p>Explore Beuty of Wrold and comfort.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div> */}
  
                            {/* <div className="product-slider owl-nav-link owl-carousel owl-theme">
                                <div className="owl-items"><img src="/assets/images/p-1.jpg" alt="product-image" className="rounded-3" /></div>
                                <div className="owl-items"><img src="/assets/images/p-2.jpg" alt="product-image" className="rounded-3" /></div>
                                <div className="owl-items"><img src="/assets/images/p-3.jpg" alt="product-image" className="rounded-3" /></div>
                            </div> */}
                        </div>               
                    </div>
                    <div className="row">
                        <div className="col-xl-8 col-xxl-9 col-lg-8">
                            <div className="card d-block mt-4 border-0 shadow-xss bg-white p-lg-5 p-4">
                                <span className="font-xsssss fw-700 ps-3 pe-3 lh-32 text-uppercase rounded-3 ls-2 bg-primary-gradiant d-inline-block text-white ">Featured</span>
                                <h2 className="fw-700 font-lg mt-3 mb-2">House Party Graynight Mood In Siver Colony, London</h2>
                                <p className="font-xsss fw-500 text-grey-500 lh-30 pe-5 mt-3 me-5">ultrices justo eget, sodales orci. Aliquam egestas libero ac turpis pharetra, in vehicula lacus scelerisque. Vestibulum ut sem laoreet, feugiat tellus at, hendrerit arcu.</p>
                                
                                <div className="clearfix"></div>
                                <div className="star d-block w-100 text-left mt-2">
                                    <img src="/assets/images/star.png" alt="star" className="w15 float-left" />
                                    <img src="/assets/images/star.png" alt="star" className="w15 float-left" />
                                    <img src="/assets/images/star.png" alt="star" className="w15 float-left" />
                                    <img src="/assets/images/star.png" alt="star" className="w15 float-left" />
                                    <img src="/assets/images/star-disable.png" alt="star" className="w15 float-left me-2" />
                                </div>
                                <p className="review-link font-xssss fw-600 text-grey-500 lh-3 mb-0">(456 ratings ) 2 customer review</p>
                                <div className="clearfix"></div>
                                <h5 className="mt-4 mb-4 d-inline-block font-xssss fw-600 text-grey-500 me-2"><i className="btn-round-sm bg-greylight ti-ruler-pencil text-grey-500 me-1"></i> 200 sq</h5>
                                <h5 className="mt-4 mb-4 d-inline-block font-xssss fw-600 text-grey-500 me-2"><i className="btn-round-sm bg-greylight ti-rss-alt text-grey-500 me-1"></i> WiFi</h5>
                                <h5 className="mt-4 mb-4 d-inline-block font-xssss fw-600 text-grey-500"><i className="btn-round-sm bg-greylight ti-credit-card text-grey-500 me-1"></i> Card</h5>
                                <div className="clearfix"></div>

                                <a href="#" className="btn-round-lg ms-3 d-inline-block rounded-3 bg-greylight"><i className="feather-share-2 font-sm text-grey-700"></i></a>
                                <a href="#" className="btn-round-lg ms-2 d-inline-block rounded-3 bg-danger"><i className="feather-bookmark font-sm text-white"></i> </a>
                                <a href="#" className="bg-primary-gradiant border-0 text-white fw-600 text-uppercase font-xssss float-left rounded-3 d-inline-block mt-0 p-2 lh-34 text-center ls-3 w200">BOOK NOW</a>
                            </div>
                            

                            <div className="card d-block border-0 rounded-3 overflow-hidden p-4 shadow-xss mt-4 alert-success">
                                <h2 className="fw-700 font-sm mb-3 mt-1 ps-1 text-success mb-4">Ameneties</h2>
                                <h4 className="font-xssss fw-500 text-grey-600 mb-3 pl-35 position-relative lh-24"><i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>Create awesome animated splash screens for any Excel project such as animation with password access to a work book, loading animation.</h4>
                                <h4 className="font-xssss fw-500 text-grey-600 mb-3 pl-35 position-relative lh-24"><i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>After completing this course you'll be confident to create any subtle to complex animation that will turn any project a professional work and surely you'll become an awesome developer and designer</h4>
                                <h4 className="font-xssss fw-500 text-grey-600 mb-3 pl-35 position-relative lh-24"><i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>Create awesome animated splash screens for any Excel project such as animation with password access to a work book, loading animation.</h4>
                                <h4 className="font-xssss fw-500 text-grey-600 mb-3 pl-35 position-relative lh-24"><i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>After completing this course you'll be confident to create any subtle to complex animation that will turn any project a professional work and surely you'll become an awesome developer and designer</h4>
                                <h4 className="font-xssss fw-500 text-grey-600 mb-3 pl-35 position-relative lh-24"><i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>Create awesome animated splash screens for any Excel project such as animation with password access to a work book, loading animation.</h4>
                                <h4 className="font-xssss fw-500 text-grey-600 mb-3 pl-35 position-relative lh-24"><i className="ti-check font-xssss btn-round-xs bg-success text-white position-absolute left-0 top-5"></i>After completing this course you'll be confident to create any subtle to complex animation that will turn any project a professional work and surely you'll become an awesome developer and designer</h4>

                            </div>
                            <div className="card d-block border-0 rounded-3 overflow-hidden p-4 shadow-xss mt-4">
                                <h2 className="fw-700 font-sm mb-3 mt-1 ps-1 mb-3">Description</h2>
                                <p className="font-xssss fw-500 lh-28 text-grey-600 mb-0 ps-2">After creating more than a dozen courses on Microsoft Access databases and programming in VBA, many students have contacted me with discussions on specific problems and scenarios.  From these discussions, I have created videos reviewing the details of the most useful techniques that everyone will eventually need.  I have made sure that every detail of these techniques is recorded in the videos!  BUT you should be somewhat familiar with VBA since there are lots of coding examples in the course. <br />                                        There are MANY tips and tricks in this workshop that you will not find an ANY of my other courses! <br />  I also include a specific database design challenge from a student and then go over the details of how I would handle it. <br /> If you are willing to take the time to go through this course you could easily be much more productive with Microsoft Access in just a few hours! </p>
                            </div>

                            <div className="card d-block border-0 rounded-3 overflow-hidden p-4 shadow-xss mt-4">
                                <h2 className="fw-700 font-sm mb-3 mt-1 ps-1 mb-3">Gallery</h2>
                                <div className="row ps-3 pe-3">
                                    <div className="col-sm-4 col-xss-4 pe-1 ps-1 mb-2"><a href="/assets/images/p-1.jpg" data-lightbox="roadtrip"><img src="/assets/images/p-1.jpg" alt="image" className="img-fluid w-100 rounded-3" /></a></div>
                                    <div className="col-sm-4 col-xss-4 pe-1 ps-1 mb-2"><a href="/assets/images/p-2.jpg" data-lightbox="roadtrip"><img src="/assets/images/p-2.jpg" alt="image" className="img-fluid w-100 rounded-3" /></a></div>
                                    <div className="col-sm-4 col-xss-4 pe-1 ps-1 mb-2"><a href="/assets/images/p-3.jpg" data-lightbox="roadtrip"><img src="/assets/images/p-3.jpg" alt="image" className="img-fluid w-100 rounded-3" /></a></div>
                                    <div className="col-sm-4 col-xss-4 pe-1 ps-1 mb-2"><a href="/assets/images/p-4.jpg" data-lightbox="roadtrip"><img src="/assets/images/p-4.jpg" alt="image" className="img-fluid w-100 rounded-3" /></a></div>
                                    <div className="col-sm-4 col-xss-4 pe-1 ps-1 mb-2"><a href="/assets/images/p-5.jpg" data-lightbox="roadtrip"><img src="/assets/images/p-5.jpg" alt="image" className="img-fluid w-100 rounded-3" /></a></div>
                                    <div className="col-sm-4 col-xss-4 pe-1 ps-1 mb-2"><a href="/assets/images/p-6.jpg" data-lightbox="roadtrip"><img src="/assets/images/p-6.jpg" alt="image" className="img-fluid w-100 rounded-3" /></a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-xxl-3 col-lg-4 ps-0">
                            <div className="card w-100 border-0 mt-4 mb-4 p-lg-4 p-3 shadow-xss position-relative rounded-3 bg-white">
                                <div className="section full mb-4 p-4 bg-light theme-dark-bg theme-light-bg rounded-3">
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <h2 className="display2-size lh-1 m-0 text-grey-900 fw-700">4.3</h2>
                                        </div>
                                        <div className="col-12 text-center">
                                            <h4 className="font-xssss text-grey-600 fw-600 mt-2">Based on 433 rating</h4>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-7 pe-1 mt-0">
                                            <div className="star d-inline text-left">
                                                <img src="/assets/images/star.png" alt="star" className="w15" />
                                                <img src="/assets/images/star.png" alt="star" className="w15" />
                                                <img src="/assets/images/star.png" alt="star" className="w15" />
                                                <img src="/assets/images/star.png" alt="star" className="w15" />
                                                <img src="/assets/images/star.png" alt="star" className="w15" />
                                            </div>
                                        </div>
                                        <div className="col-5 ps-1 text-right"><h4 className="font-xssss mt-1 fw-700 text-grey-800">Support</h4></div>
                                    </div>
                                    <div className="row mt-1">
                                        <div className="col-7 pe-1 mt-0">
                                            <div className="star d-inline text-left">
                                                <img src="/assets/images/star.png" alt="star" className="w15" />
                                                <img src="/assets/images/star.png" alt="star" className="w15" />
                                                <img src="/assets/images/star.png" alt="star" className="w15" />
                                                <img src="/assets/images/star-disable.png" alt="star" className="w15" />
                                                <img src="/assets/images/star-disable.png" alt="star" className="w15" />
                                            </div>
                                        </div>
                                        <div className="col-5 ps-1 text-right"><h4 className="font-xssss mt-1 fw-700 text-grey-800">Clean</h4></div>
                                    </div>
                                    <div className="row mt-1">
                                        <div className="col-7 pe-1 mt-0">
                                            <div className="star d-inline text-left">
                                                <img src="/assets/images/star.png" alt="star" className="w15" />
                                                <img src="/assets/images/star.png" alt="star" className="w15" />
                                                <img src="/assets/images/star-disable.png" alt="star" className="w15" />
                                                <img src="/assets/images/star-disable.png" alt="star" className="w15" />
                                                <img src="/assets/images/star-disable.png" alt="star" className="w15" />
                                            </div>
                                        </div>
                                        <div className="col-5 ps-1 text-right"><h4 className="font-xssss mt-1 fw-700 text-grey-800">Speed</h4></div>
                                    </div>
                                    <div className="row mt-1">
                                        <div className="col-7 pe-1 mt-0">
                                            <div className="star d-inline text-left">
                                                <img src="/assets/images/star.png" alt="star" className="w15" />
                                                <img src="/assets/images/star.png" alt="star" className="w15" />
                                                <img src="/assets/images/star.png" alt="star" className="w15" />
                                                <img src="/assets/images/star.png" alt="star" className="w15" />
                                                <img src="/assets/images/star-disable.png" alt="star" className="w15" />
                                            </div>
                                        </div>
                                        <div className="col-5 ps-1 text-right"><h4 className="font-xssss mt-1 fw-700 text-grey-800">Quality</h4></div>
                                    </div>
                                    <div className="row mt-1">
                                        <div className="col-7 pe-1 mt-0">
                                            <div className="star d-inline text-left">
                                                <img src="/assets/images/star.png" alt="star" className="w15" />
                                                <img src="/assets/images/star.png" alt="star" className="w15" />
                                                <img src="/assets/images/star.png" alt="star" className="w15" />
                                                <img src="/assets/images/star.png" alt="star" className="w15" />
                                                <img src="/assets/images/star-disable.png" alt="star" className="w15" />
                                            </div>
                                        </div>
                                        <div className="col-5 ps-1 text-right"><h4 className="font-xssss mt-1 fw-700 text-grey-800">Delivery</h4></div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-2 text-left">
                                        <figure className="avatar float-left mb-0"><img src="/assets/images/user-7.png" alt="image" className="float-right shadow-none w40 me-2" /></figure>
                                    </div>
                                    <div className="col-10 ps-4">
                                        <div className="content">
                                            <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">Goria Coast</h6>
                                            <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">July 26 at 8:20 PM</h6>
                                            <div className="star d-block w-100 text-left">
                                                <img src="/assets/images/star.png" alt="star" className="w10" />
                                                <img src="/assets/images/star.png" alt="star" className="w10" />
                                                <img src="/assets/images/star.png" alt="star" className="w10" />
                                                <img src="/assets/images/star.png" alt="star" className="w10" />
                                                <img src="/assets/images/star-disable.png" alt="star" className="w10" />
                                            </div>                            
                                            <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags. </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-2 text-left">
                                        <figure className="avatar float-left mb-0"><img src="/assets/images/user-6.png" alt="image" className="float-right shadow-none w40 me-2" /></figure>
                                    </div>
                                    <div className="col-10 ps-4">
                                        <div className="content">
                                            <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">Goria Coast</h6>
                                            <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">July 26 at 8:20 PM</h6>
                                            <div className="star d-block w-100 text-left">
                                                <img src="/assets/images/star.png" alt="star" className="w10" />
                                                <img src="/assets/images/star.png" alt="star" className="w10" />
                                                <img src="/assets/images/star.png" alt="star" className="w10" />
                                                <img src="/assets/images/star.png" alt="star" className="w10" />
                                                <img src="/assets/images/star-disable.png" alt="star" className="w10" />
                                            </div>                            
                                            <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags. </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-2 text-left">
                                        <figure className="avatar float-left mb-0"><img src="/assets/images/user-5.png" alt="image" className="float-right shadow-none w40 me-2" /></figure>
                                    </div>
                                    <div className="col-10 ps-4">
                                        <div className="content">
                                            <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">Goria Coast</h6>
                                            <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">July 26 at 8:20 PM</h6>
                                            <div className="star d-block w-100 text-left">
                                                <img src="/assets/images/star.png" alt="star" className="w10" />
                                                <img src="/assets/images/star.png" alt="star" className="w10" />
                                                <img src="/assets/images/star.png" alt="star" className="w10" />
                                                <img src="/assets/images/star.png" alt="star" className="w10" />
                                                <img src="/assets/images/star-disable.png" alt="star" className="w10" />
                                            </div>                            
                                            <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags. </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-2 text-left">
                                        <figure className="avatar float-left mb-0"><img src="/assets/images/user-3.png" alt="image" className="float-right shadow-none w40 me-2" /></figure>
                                    </div>
                                    <div className="col-10 ps-4">
                                        <div className="content">
                                            <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">Goria Coast</h6>
                                            <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">July 26 at 8:20 PM</h6>
                                            <div className="star d-block w-100 text-left">
                                                <img src="/assets/images/star.png" alt="star" className="w10" />
                                                <img src="/assets/images/star.png" alt="star" className="w10" />
                                                <img src="/assets/images/star.png" alt="star" className="w10" />
                                                <img src="/assets/images/star.png" alt="star" className="w10" />
                                                <img src="/assets/images/star-disable.png" alt="star" className="w10" />
                                            </div>                            
                                            <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">Enjoyed this a lot and well done. We are an early stage digitally native vertical brand, making travel bags. </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="row"><a href="#" className="d-block p-2 lh-32 text-center bg-greylight fw-600 font-xssss text-grey-900 rounded-3">Add a Review</a></div>
                            </div>
                            <div className="card w-100 border-0 mt-4 mb-4 p-4 shadow-xss position-relative rounded-3 bg-white">
                                <h2 className="fw-700 font-sm mb-4 mt-1 ps-1 mb-3">Ask a Question</h2>
                                <form action="#">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <input type="text" className="form-control style2-input bg-color-none text-grey-700" defaultValue="Name" />                        
                                            </div>        
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form-group mb-3">
                                                <input type="text" className="form-control style2-input bg-color-none text-grey-700" defaultValue="Email" />                        
                                            </div>        
                                        </div>

                                        <div className="col-12">
                                            <div className="form-group mb-3 md-mb-2">
                                                <textarea className="w-100 h125 style2-textarea p-3 form-control">Message</textarea>
                                            </div>
                                            <a href="#" className="bg-primary-gradiant border-0 text-white fw-600 text-uppercase font-xssss float-left rounded-3 d-block mt-0 w-100 p-2 lh-34 text-center ls-3 ">Contact US</a>
                                        </div>
                                    </div>
                                    
                                </form>
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

export default HotelDetails;