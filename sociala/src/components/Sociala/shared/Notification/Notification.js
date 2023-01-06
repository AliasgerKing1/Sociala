import React from 'react'

function Notification() {
  return (
    <div>
        <div className="modal bottom side fade" id="Modalstries" tabIndex="-1" role="dialog" style={{ overflowY: 'auto'}}>
         <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content border-0 bg-transparent">
                <button type="button" className="close mt-0 position-absolute top--30 right--10" data-bs-dismiss="modal" aria-label="Close"><i className="ti-close text-dark font-xssss"></i></button>
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
                        <span className="feather-send text-white font-md text-white position-absolute" style={{bottom: '35px',right : '30px'}}></span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Notification;