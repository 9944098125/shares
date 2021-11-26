import React from "react";
import "./index.css";

export default function Header() {
  return (
    <nav className="nav">
      <h1 className="nav-head">Category Dashboard</h1>
      <div className="profile-container">
        <div className="head-container">
          <h3 className="welcome-head">Welcome back!</h3>
          <h3 className="name">Amanda Warner</h3>
        </div>
        <img
          src="https://res.cloudinary.com/dakda5ni3/image/upload/v1637851090/Screenshot_19_hoaumi.png"
          alt="profile"
          className="header-img"
        />
      </div>
    </nav>
  );
}
