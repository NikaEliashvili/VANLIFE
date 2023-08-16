import React from "react";
import { MenuContext } from "./Menu";

export default function MenuItem({ children }) {
  const { open, toggleOpen } = React.useContext(MenuContext);
  return (
    <div className="menu-item" onClick={toggleOpen}>
      {children}
    </div>
  );
}
