import React from "react";
import Link from "next/link";
import AccessibleIcon from "@mui/icons-material/Accessible";
import DashboardIcon from "@mui/icons-material/Dashboard";
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
    <div className="w-64 bg-gray-100/50 min-h-screen fixed pt-6 text-sm">
      <div className="text-sm text-center px-6">
        <Link
          href="/user/admin"
          className="flex  gap-4 items-center pt-4 opacity-70 font-bold "
        >
          <DashboardIcon />
          <p>Dashboard</p>
        </Link>
      </div>
      <div className="flex flex-col gap-y-4">
        <Link
          href="/user/admin/patientmanagement"
          className="text-sm text-center flex justify-between items-center opacity-75 font-bold px-6 py-2 hover:bg-gray-200"
        >
          <div className="flex justify-between items-center gap-x-3.5">
            <AccessibleIcon />
            <p>Patient Management</p>
          </div>
          {/* <KeyboardArrowDown className="opacity-80 font-bold" /> */}
        </Link>
        {/* <Link
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
        </Link> */}
      </div>
    </div>
  );
}

export default Sidenav;
