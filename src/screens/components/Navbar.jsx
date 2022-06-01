import React from "react";
import "../../App.css";

export default function Navbar() {
  return (
    <div style={{ marginTop: "5px" }}>
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/">Home</a>
        </li>
        <div className="dropdown-wrapper">
          <li className="navbar-item">
            <a href="/user">Profile</a>
          </li>
          <div class="dropdown-content">
            <li className="dropdown-item">
              <a href="/user/pieces">Pieces</a>
            </li>
            <li className="dropdown-item">
              <a href="/user/pieces/create">Create</a>
            </li>
            <li className="dropdown-item">
              <a href="/user/pieces/update">Update</a>
            </li>
          </div>
        </div>
        <li className="navbar-item">
          <a href="/gallery">Gallery</a>
        </li>
        <li className="navbar-item">
          <a href="/about">About</a>
        </li>
      </ul>
    </div>
  );
}
