import React from "react";
import vanlifeLogo from "../images/VANLIFE-logo.svg";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <h3>&#169; 2023</h3>
        <img src={vanlifeLogo} alt="#VANLIFE" />
      </footer>
    </>
  );
}
