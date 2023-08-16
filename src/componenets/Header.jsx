import React from "react";
import vanlifeLogo from "../images/VANLIFE-logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  const isLogged = localStorage.getItem("loggedin") || false;
  const navigate = useNavigate();

  function signout() {
    localStorage.removeItem("loggedin");
    navigate("/login");
  }
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={vanlifeLogo} alt="#VANLIFE" className="vanlife-logo" />
      </Link>

      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "isActive" : null)}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "isActive" : null)}
      >
        About
      </NavLink>
      <NavLink
        to="/vans"
        className={({ isActive }) => (isActive ? "isActive" : null)}
      >
        Vans
      </NavLink>

      <NavLink
        to="/host"
        className={({ isActive }) => (isActive ? "isActive" : null)}
      >
        Host
      </NavLink>
      {isLogged ? (
        <button className="sign-out" onClick={signout}>
          Sing Out
        </button>
      ) : (
        <NavLink
          to="login"
          className={({ isActive }) =>
            isActive ? "login-link isActive" : "login-link "
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="avatar"
            className="login-icon"
            viewBox="0 0 50 50"
          >
            <path d="M24 8c-4.42 0-8 3.58-8 8 0 4.41 3.58 8 8 8s8-3.59 8-8c0-4.42-3.58-8-8-8zm0 20c-5.33 0-16 2.67-16 8v4h32v-4c0-5.33-10.67-8-16-8z"></path>
            <path fill="none" d="M0 0h48v48H0z"></path>
          </svg>
        </NavLink>
      )}
    </header>
  );
}
