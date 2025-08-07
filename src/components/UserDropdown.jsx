import React from "react";
import Dropdown from "./Dropdown";
import Avatar from "./Avatar";

const UserDropdown = ({ user }) => {
  return (
    <Dropdown
      trigger={
        <Avatar
          fallback={user.name[0]}
          className="bg-green-500 hover:bg-green-700 transition-colors cursor-pointer"
        />
      }
    >
      <div>
        <Avatar fallback={user.name[0]} className="bg-green-500" />
        <div>
          <p className="font-bold">{user.name}</p>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      <ul className="space-y-2">
        <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
          Subscriptions
        </li>
        <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
          Settings
        </li>
        <li className="cursor-pointer hover:bg-gray-100 p-2 rounded">
          Sign Out
        </li>
      </ul>
    </Dropdown>
  );
};

export default UserDropdown;
