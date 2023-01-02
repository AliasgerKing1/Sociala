import React from "react";

function MorePages() {
  return (
    <div>
      <div className="nav-wrap bg-white bg-transparent-card rounded-xxl shadow-xss pt-3 pb-1 mb-2">
        <div className="nav-caption fw-600 font-xssss text-grey-500">
          <span>More </span>Pages
        </div>
        <ul className="mb-3">
          <li>
            <a
              href="default-email-box.html"
              className="nav-content-bttn open-font"
            >
              <i className="font-xl text-current feather-inbox me-3"></i>
              <span>Email Box</span>
              <span className="circle-count bg-warning mt-1">584</span>
            </a>
          </li>
          <li>
            <a href="default-hotel.html" className="nav-content-bttn open-font">
              <i className="font-xl text-current feather-home me-3"></i>
              <span>Near Hotel</span>
            </a>
          </li>
          <li>
            <a href="default-event.html" className="nav-content-bttn open-font">
              <i className="font-xl text-current feather-map-pin me-3"></i>
              <span>Latest Event</span>
            </a>
          </li>
          <li>
            <a
              href="default-live-stream.html"
              className="nav-content-bttn open-font"
            >
              <i className="font-xl text-current feather-youtube me-3"></i>
              <span>Live Stream</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MorePages;
