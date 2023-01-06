import React from 'react';
import { Link } from 'react-router-dom'

function FooterBar() {
  return (
    <div>
         <div className="app-footer border-0 shadow-lg bg-primary-gradiant">
            <Link to="/home" className="nav-content-bttn nav-center">
              <i className="feather-home"></i>
            </Link>
            <Link to="/video" className="nav-content-bttn">
              <i className="feather-package"></i>
            </Link>
            <Link to="/livestream"
              className="nav-content-bttn"
              data-tab="chats"
            >
              <i className="feather-layout"></i>
            </Link>
            <Link to="/shop" className="nav-content-bttn">
              <i className="feather-layers"></i>
            </Link>
            <Link to="/setting" className="nav-content-bttn">
              <img
                src="/assets/images/female-profile.png"
                alt="user"
                className="w30 shadow-xss"
              />
            </Link>
          </div>
    </div>
  )
}

export default FooterBar;