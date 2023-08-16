import React from "react";
import vanlifeLogo from "../images/VANLIFE-logo.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Menu from "../Menu/index";
import { FaRegUser } from "react-icons/fa6";

export default function Header() {
  const isLogged = localStorage.getItem("loggedin") || false;
  const [isMenu, setIsMenu] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    function handleWidth() {
      if (window.innerWidth < 701) {
        setIsMenu(true);
      } else {
        setIsMenu(false);
      }
    }
    window.addEventListener("resize", handleWidth);

    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  function signout() {
    localStorage.removeItem("loggedin");
    navigate("/login");
  }
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src={vanlifeLogo} alt="#VANLIFE" className="vanlife-logo" />
      </Link>
      {isMenu ? (
        <Menu>
          <Menu.Button>Menu</Menu.Button>
          <Menu.Dropdown>
            <Menu.Item>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "isActive" : null)}
              >
                Home
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "isActive" : null)}
              >
                About
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink
                to="/vans"
                className={({ isActive }) => (isActive ? "isActive" : null)}
              >
                Vans
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              <NavLink
                to="/host"
                className={({ isActive }) => (isActive ? "isActive" : null)}
              >
                Host
              </NavLink>
            </Menu.Item>
            <Menu.Item>
              {isLogged ? (
                <a className="sign-out" onClick={signout}>
                  Sing Out
                </a>
              ) : (
                <NavLink
                  to="login"
                  className={({ isActive }) =>
                    isActive ? "login-link isActive" : "login-link "
                  }
                >
                  <FaRegUser className="login-icon" />
                </NavLink>
              )}
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      ) : (
        <>
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
              <FaRegUser className="login-icon" />
            </NavLink>
          )}
        </>
      )}
      {/*
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
      )} */}
    </header>
  );
}
