import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import LoginIcon from "@mui/icons-material/Login";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Link from "next/link";
function Header() {
  return (
    <div className="bg-black flex justify-between text-white fixed w-full z-50">
      <div className="px-4 py-4">
        <p>Brand Name</p>
      </div>
      <div className="px-4 py-4 space-x-4 flex">
        <div className="flex gap-2">
          <PlaceIcon className="text-gray-100 opacity-65" />
          <p className="text-sm">Location</p>
        </div>
        <div className="flex gap-2">
          <NotificationsIcon className="text-gray-100 opacity-65" />
          <p className="text-sm">Notification</p>
        </div>
        <Link
          href="/login"
          className="flex gap-2 group group-hover:bg-secondery group-hover:ring group-hover:text-secondery"
        >
          <LoginIcon className="text-gray-100 opacity-65 rounded-full group-hover:p-.5 group-hover:text-secondery " />
          <p className="text-sm group-hover:text-secondery">Login</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;
