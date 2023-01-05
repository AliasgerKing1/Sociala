import React from "react";
import Account from "./Account";
import MorePages from "./MorePages";
import NewsFeed from "./NewsFeed";
function LeftSection() {
  return (
    <div>
      <nav className="navigation scroll-bar">
        <div className="container ps-0 pe-0">
          <div className="nav-content">
            <NewsFeed />

            <MorePages />

            <Account />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default LeftSection;
