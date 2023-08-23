import React from "react";
import "../Styles/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="skateheader">
      <div className="sm-links">
        <Link to="https://www.facebook.com/DD214Chronicle">
          <img alt="facebook" src={require("./fb.png")} className="fb"/>
        </Link>
      </div>
      <h1 className="skate1">The DD 214 Chronicle</h1>
      <h2 className="skate2">For Veterans and Those Who Love Them</h2>
      
    </div>
  );
}
