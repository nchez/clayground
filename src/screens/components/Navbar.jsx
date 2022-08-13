import React from "react";
import "../../App.css";

export default function Navbar() {
  return (
    <div style={{ marginTop: "5px" }}>
      <div className="navbar-list">
        <div className="navbar-item">
          <a href="/">Home</a>
        </div>
        <div className="dropdown-wrapper">
          <div className="navbar-item">
            <a href="/user">Profile</a>
          </div>
          <div class="dropdown-content">
            <div className="dropdown-item">
              <a href="/user/pieces">Pieces</a>
            </div>
            <div className="dropdown-item">
              <a href="/user/pieces/create">Create</a>
            </div>
            <div className="dropdown-item">
              <a href="/user/pieces/update">Update</a>
            </div>
          </div>
        </div>
        <div className="navbar-item">
          <a href="/gallery">Gallery</a>
        </div>
        <div className="navbar-item">
          <a href="/about">About</a>
        </div>
      </div>
    </div>
  );
}
