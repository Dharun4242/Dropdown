import React from "react";
import UserDropdown from "./UserDropdown";

const Navbar = () => {
  const user = {
    name: "Dharun",
    email: "dharun@gmail.com",
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-gray-300 rounded-lg">
      <ul className="flex gap-6 font-semibold">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Categories</li>
        <li className="cursor-pointer">Products</li>
      </ul>

      <UserDropdown user={user} />
    </nav>
  );
};

export default Navbar;
