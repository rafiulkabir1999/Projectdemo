import React from "react";
import Link from "next/link";
import {
  Analytics,
  ArrowDownward,
  Fax,
  ForwardToInbox,
  KeyboardArrowDown,
  LocationCity,
  MessageOutlined,
  Payment,
  Person,
  Phone,
  Reviews,
  Settings,
  SignalCellularAlt,
  VerticalSplitOutlined,
} from "@mui/icons-material";
import { FormGroup } from "@mui/material";
function Sidenav() {
  return (
    <div className="w-64 bg-gray-100/50 min-h-screen fixed pt-6 space-y-4 text-sm">
      <div className="text-sm text-center px-6">
        <div className="flex gap-4 items-center pt-4 opacity-70 font-bold">
          <LocationCity />
          <p> Office Location</p>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <Link
          href="/user/admin/account"
          className="text-sm text-center flex justify-between items-center opacity-75 font-bold px-6"
        >
          <div className="flex justify-between items-center gap-x-3.5">
            <Settings />
            <p>Account</p>
          </div>
          <KeyboardArrowDown className="opacity-80 font-bold" />
        </Link>
        <Link
          href="/user/admin/messaging"
          className="text-sm text-center flex justify-between items-center opacity-75 font-bold px-6"
        >
          <div className="flex justify-between items-center gap-x-3.5">
            <MessageOutlined />
            <p>Messaging</p>
          </div>
          <KeyboardArrowDown className="opacity-80 font-bold" />
        </Link>
        <Link
          href="/user/admin/account"
          className="text-sm text-center flex justify-between items-center opacity-75 font-bold px-6"
        >
          <div className="flex justify-between items-center gap-x-3.5">
            <Person />
            <p>Customers</p>
          </div>
          <KeyboardArrowDown className="opacity-80 font-bold" />
        </Link>
        <Link
          href="/user/admin/account"
          className="text-sm text-center flex justify-between items-center opacity-75 font-bold px-6"
        >
          <div className="flex justify-between items-center gap-x-3.5">
            <Phone />
            <p>Phone</p>
          </div>
          <KeyboardArrowDown className="opacity-80 font-bold" />
        </Link>
        <Link
          href="/user/admin/account"
          className="text-sm text-center flex justify-between items-center opacity-75 font-bold px-6"
        >
          <div className="flex justify-between items-center gap-x-3.5">
            <Payment />
            <p>Payments</p>
          </div>
          <KeyboardArrowDown className="opacity-80 font-bold" />
        </Link>
        <Link
          href="/user/admin/account"
          className="text-sm text-center flex justify-between items-center opacity-75 font-bold px-6"
        >
          <div className="flex justify-between items-center gap-x-3.5">
            <ForwardToInbox />
            <p>Email Marketing</p>
          </div>
          <KeyboardArrowDown className="opacity-80 font-bold" />
        </Link>
        <Link
          href="/user/admin/account"
          className="text-sm text-center flex justify-between items-center opacity-75 font-bold px-6"
        >
          <div className="flex justify-between items-center gap-x-3.5">
            <Reviews />
            <p>Reviews</p>
          </div>
          <KeyboardArrowDown className="opacity-80 font-bold" />
        </Link>
        <Link
          href="/user/admin/account"
          className="text-sm text-center flex justify-between items-center opacity-75 font-bold px-6"
        >
          <div className="flex justify-between items-center gap-x-3.5">
            <VerticalSplitOutlined />
            <p>Forms</p>
          </div>
          <KeyboardArrowDown className="opacity-80 font-bold" />
        </Link>
        <Link
          href="/user/admin/account"
          className="text-sm text-center flex justify-between items-center opacity-75 font-bold px-6 bg-gray-200 p-2"
        >
          <div className="flex justify-between items-center gap-x-3.5">
            <SignalCellularAlt />
            <p>Analytics</p>
          </div>
          <KeyboardArrowDown className="opacity-80 font-bold" />
        </Link>
        <Link
          href="/user/admin/account"
          className="text-sm text-center flex justify-between items-center opacity-75 font-bold px-6"
        >
          <div className="flex justify-between items-center gap-x-3.5">
            <Fax />
            <p>Fax</p>
          </div>
          <KeyboardArrowDown className="opacity-80 font-bold" />
        </Link>
      </div>
    </div>
  );
}

export default Sidenav;
