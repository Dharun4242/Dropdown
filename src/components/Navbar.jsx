import React from "react";
import UserDropdown from "./UserDropdown";
import NavbarItem from "./NavbarItem.jsx";

const Navbar = ({ user }) => {
  return (
    <nav className="bg-gray-800 text-white px-4 py-3 flex justify-between items-center">
      <div className="flex gap-6 items-center text-white">
        <NavbarItem>About</NavbarItem>
        <NavbarItem>Products</NavbarItem>
        <NavbarItem>Categories</NavbarItem>
      </div>
      <UserDropdown user={user} />
    </nav>
  );
};

export default Navbar;
