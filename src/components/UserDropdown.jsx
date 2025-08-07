import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from "./Dropdown";
import Avatar from "./Avatar";

const UserDropdown = ({ user }) => {
  if (!user) return null;

  return (
    <Dropdown>
      <DropdownTrigger>
        <Avatar
          fallback={user.name[0]}
          className="bg-green-500 hover:bg-green-700 transition-colors cursor-pointer"
        />
      </DropdownTrigger>

      <DropdownContent>
        <div className="flex items-center gap-3 mb-3 border-b pb-2">
          <Avatar fallback={user.name[0]} className="bg-green-500" />
          <div>
            <p className="font-bold text-base">{user.name}</p>
            <p className="text-sm text-gray-500">{user.email}</p>
          </div>
        </div>

        <div className="space-y-2">
          <DropdownItem>Subscriptions</DropdownItem>
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Sign Out</DropdownItem>
        </div>
      </DropdownContent>
    </Dropdown>
  );
};

export default UserDropdown;
