import React from "react";

const NavbarItem = ({ children }) => {
  return (
    <button className="text-white hover:text-blue-600 font-medium transition-colors">
      {children}
    </button>
  );
};

export default NavbarItem;
