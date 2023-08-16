import React from "react";
import { CgMenu } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { MenuContext } from "./Menu";

export default function MenuButton({ children }) {
  const { open, toggleOpen } = React.useContext(MenuContext);

  return (
    <div onClick={toggleOpen} data-menu="dropdown-menu">
      {open ? (
        <AiOutlineClose className="aiClose-icon" />
      ) : (
        <CgMenu className="cgMenu-icon" data-menu="dropdown-menu" />
      )}
    </div>
  );
}
