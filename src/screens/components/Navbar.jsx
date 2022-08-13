import React from "react";
import { useRecoilValue } from "recoil";
import "../../App.css";
import { useSignOut } from "../../auth/hooks/useSignOut";
import { userAtom } from "../../store/auth/userAtom";

export default function Navbar() {
  const user = useRecoilValue(userAtom);

  const signOut = useSignOut();

  return (
    <div style={{ marginTop: "5px" }}>
      <img src={user.profile_picture} width={50} />
      {!!user && <>Welcome {user.email}</>}
      <div className="navbar-list">
        <div className="navbar-item">
          <a href="/">Home</a>
        </div>
        <div className="dropdown-wrapper">
          <div className="navbar-item">
            <a href="/user">Profile</a>
          </div>
          <div className="dropdown-content">
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

        <div className="navbar-item">
          <a onClick={signOut}>Sign Out</a>
        </div>
      </div>
    </div>
  );
}
