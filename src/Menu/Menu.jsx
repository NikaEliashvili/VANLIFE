import React from "react";
import useToggle from "../hooks/useToggle";

const MenuContext = React.createContext();
export { MenuContext };

export default function Menu({ children, onOpen }) {
  const [open, toggleOpen] = useToggle();
  console.log(open);

  return (
    <MenuContext.Provider value={{ open, toggleOpen }}>
      <div className="menu">{children}</div>
    </MenuContext.Provider>
  );
}