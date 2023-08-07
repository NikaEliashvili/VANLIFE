import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="logo">
        #VANLIFE
      </Link>
      <Link to="/about">About</Link>
      <Link to="/vans">vans</Link>
    </div>
  );
}
