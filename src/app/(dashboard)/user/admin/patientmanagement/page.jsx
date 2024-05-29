"use client";
import React from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Pageination from "@/app/components/dashboard/Pageination";
import SearchIcon from "@mui/icons-material/Search";
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import Link from "next/link";
import { Chart } from "react-google-charts";
import CallIcon from "@mui/icons-material/Call";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TextsmsIcon from "@mui/icons-material/Textsms";
import ContactEmergencyOutlinedIcon from "@mui/icons-material/ContactEmergencyOutlined";
import InfoIcon from "@mui/icons-material/Info";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import EditNotificationsIcon from "@mui/icons-material/EditNotifications";
import DoneIcon from "@mui/icons-material/Done";
import {
  AccessAlarm,
  ThreeDRotation,
  AttachMoney,
  DateRange,
} from "@mui/icons-material";

function PatientManagement({ openModal }) {
  const [details, setDetails] = React.useState(false);
  const [Form, setOpenForm] = React.useState(false);
  const openForm = () => {
    setOpenForm((state) => !state);
  };
  const data = [
    ["Year", "Sales"],
    ["2013", 1000],
    ["2014", 1170],
    ["2015", 660],
    ["2016", 1030],
  ];

  const CloseDetails = () => {
    setDetails(false);
  };
  return (
    <div className="space-y-2 relative">
      <div className="flex justify-between">
        {/* <div className="border rounded-md text-sm opacity-65">
          <input
            type="text"
            className="outline-none  p-1.5 rounded"
            placeholder="search patient name"
          />
          <span className="bg-gray-400 h-full p-2 text-white rounded-r-md cursor-pointer hover:opacity-70">
            <SearchIcon />
          </span>
        </div> */}
        <Link href={`/user/admin/patientmanagement/new`}>
          <button
            onClick={openModal}
            className="bg-white border border-orange-400 text-orange-400 p-1.5 px-4 text-sm opacity-65 hover:bg-orange-400  hover:text-white"
          >
            Add New Patient
          </button>
        </Link>
      </div>

      <div>
        <table className="w-full text-xs ">
          <thead>
            <tr className=" text-gray-600 border-b-2 border-gray-500">
              <th className="p-2 text-left">Time</th>
              <th className="p-2 text-left">Patient</th>
              <th className="p-2">Provider</th>
              <th className="p-2 text-left">Aptt Status</th>
              <th className="p-2 ">Sched Production</th>
              <th className="p-2 text-left">Unsched Production</th>
              <th className="p-2 text-left">Unsched Family</th>
              <th className="p-2 text-left">AR Balance</th>
              <th className="p-2 text-left">Next Appointment</th>
              <th className="p-2 text-left">NP</th>
              <th className="p-2 ">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2 w-16 text-[9px] font-semibold opacity-65">
                08:00 AM 10:00 AM
              </td>
              <td className="p-2">
                <div className="">
                  <div className="flex gap-2">
                    <div className="bg-blue-500 hover:bg-blue-600 cursor-pointer size-8 rounded-full text-center text-white text-xs font-bold p-2">
                      MB
                    </div>
                    <div className="flex flex-col text-xs text-gray-600">
                      <p
                        onClick={() => setDetails(true)}
                        className="text-blue-400 hover:text-blue-600 cursor-pointer font-bold py-1"
                      >
                        Mr . Abul Kalam
                      </p>
                      <div className="text-[8px] opacity-65  max-w-[150px]">
                        {/* <p>
                          <span>D0592,</span>
                          <span>D0592,</span>
                          <span>D0592,</span>
                          <span>D0592,</span>
                          <span>D0592,</span>
                          <span>D0592,</span>
                        </p> */}
                        D05345, D05345, D05345, D05345, D05345, D05345, D05345,
                      </div>
                      <p className="text-[9px] p-0 opacity-60 font-semibold">
                        Last Pano : <span>1 year 0 month</span>
                      </p>
                      <p className="text-[9px] p-0 opacity-60 font-semibold">
                        Last FMX : <span>1 year 0 month</span>
                      </p>
                      <p className="text-[9px] p-0 opacity-60 font-semibold">
                        Last BMX : <span>1 year 0 month</span>
                      </p>
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-semibold opacity-60 p-2">Dr. Jhon Cleark</td>
              <td>
                <div className="flex flex-col gap-2 py-2 text-center">
                  <div className="flex gap-1 items-center justify-center">
                    <InfoIcon className="size-6 opacity-65" />
                    <p className="text-red-500 font-bold">Scheduled</p>
                  </div>
                  <span className="opacity-65">
                    Reminder Send <br /> No Response Yet
                  </span>
                  <span className="text-orange-400 opacity-65 font-semibold text-xs">
                    <ContactEmergencyOutlinedIcon className="text-orange-400" />{" "}
                    1 Form Incomplete
                  </span>
                </div>
              </td>
              <td className="text-center opacity-65 font-semibold text-xs">
                450$
              </td>
              <td className="text-center opacity-65 font-semibold text-xs">
                450$
              </td>
              <td className="text-center opacity-65 font-semibold text-xs">
                0
              </td>
              <td className="text-center opacity-65 text-red-500 font-bold text-xs">
                $50
              </td>
              <td className="text-center opacity-65 font-semibold ">
                jul 13, 2022
              </td>
              <td className="text-center opacity-65 font-semibold text-xs">
                Yes
              </td>

              <td>
                {/* <div
                  onClick={() => setDetails(true)}
                  className="flex justify-center cursor-pointer hover:text-gray-500"
                >
                  <RemoveRedEyeIcon />
                </div> */}

                <div className="flex gap-2 m-2">
                  <CallIcon className="bg-green-600 rounded-full p-1 text-white cursor-pointer hover:bg-green-700" />
                  <TextsmsIcon className="bg-green-600 rounded-full p-1 text-white cursor-pointer hover:bg-green-700" />
                  <MailOutlineIcon />
                </div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-2 w-16 text-[9px] font-semibold opacity-65">
                08:00 AM 10:00 AM
              </td>
              <td className="p-2">
                <div className="">
                  <div className="flex gap-2">
                    <div className="bg-blue-500 hover:bg-blue-600 cursor-pointer size-8 rounded-full text-center text-white text-xs font-bold p-2">
                      MB
                    </div>
                    <div className="flex flex-col text-xs text-gray-600">
                      <p
                        onClick={() => setDetails(true)}
                        className="text-blue-400 hover:text-blue-600 cursor-pointer font-bold py-1"
                      >
                        Mr . Abul Kalam
                      </p>
                      <div className="text-[8px] opacity-65  max-w-[150px]">
                        {/* <p>
                          <span>D0592,</span>
                          <span>D0592,</span>
                          <span>D0592,</span>
                          <span>D0592,</span>
                          <span>D0592,</span>
                          <span>D0592,</span>
                        </p> */}
                        D05345, D05345, D05345, D05345, D05345, D05345, D05345,
                      </div>
                      <p className="text-[9px] p-0 opacity-60 font-semibold">
                        Last Pano : <span>1 year 0 month</span>
                      </p>
                      <p className="text-[9px] p-0 opacity-60 font-semibold">
                        Last FMX : <span>1 year 0 month</span>
                      </p>
                      <p className="text-[9px] p-0 opacity-60 font-semibold">
                        Last BMX : <span>1 year 0 month</span>
                      </p>
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-semibold opacity-60 p-2">Dr. Jhon Cleark</td>
              <td>
                <div className="flex flex-col gap-2 py-2 text-center">
                  <div className="flex gap-1 items-center justify-center">
                    <InfoIcon className="size-6 opacity-65" />
                    <p className="text-red-500 font-bold">Scheduled</p>
                  </div>
                  <span className="opacity-65">
                    Reminder Send <br /> No Response Yet
                  </span>
                  <span className="text-orange-400 opacity-65 font-semibold text-xs">
                    <ContactEmergencyOutlinedIcon className="text-orange-400" />{" "}
                    1 Form Incomplete
                  </span>
                </div>
              </td>
              <td className="text-center opacity-65 font-semibold text-xs">
                450$
              </td>
              <td className="text-center opacity-65 font-semibold text-xs">
                450$
              </td>
              <td className="text-center opacity-65 font-semibold text-xs">
                0
              </td>
              <td className="text-center opacity-65 text-red-500 font-bold text-xs">
                $50
              </td>
              <td className="text-center opacity-65 font-semibold ">
                jul 13, 2022
              </td>
              <td className="text-center opacity-65 font-semibold text-xs">
                Yes
              </td>

              <td>
                {/* <div
                  onClick={() => setDetails(true)}
                  className="flex justify-center cursor-pointer hover:text-gray-500"
                >
                  <RemoveRedEyeIcon />
                </div> */}

                <div className="flex gap-2 m-2">
                  <CallIcon className="bg-green-600 rounded-full p-1 text-white cursor-pointer hover:bg-green-700" />
                  <TextsmsIcon className="bg-green-600 rounded-full p-1 text-white cursor-pointer hover:bg-green-700" />
                  <MailOutlineIcon />
                </div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-2 w-16 text-[9px] font-semibold opacity-65">
                08:00 AM 10:00 AM
              </td>
              <td className="p-2">
                <div className="">
                  <div className="flex gap-2">
                    <div className="bg-blue-500 hover:bg-blue-600 cursor-pointer size-8 rounded-full text-center text-white text-xs font-bold p-2">
                      MB
                    </div>
                    <div className="flex flex-col text-xs text-gray-600">
                      <p
                        onClick={() => setDetails(true)}
                        className="text-blue-400 hover:text-blue-600 cursor-pointer font-bold py-1"
                      >
                        Mr . Abul Kalam
                      </p>
                      <div className="text-[8px] opacity-65  max-w-[150px]">
                        {/* <p>
                          <span>D0592,</span>
                          <span>D0592,</span>
                          <span>D0592,</span>
                          <span>D0592,</span>
                          <span>D0592,</span>
                          <span>D0592,</span>
                        </p> */}
                        D05345, D05345, D05345, D05345, D05345, D05345, D05345,
                      </div>
                      <p className="text-[9px] p-0 opacity-60 font-semibold">
                        Last Pano : <span>1 year 0 month</span>
                      </p>
                      <p className="text-[9px] p-0 opacity-60 font-semibold">
                        Last FMX : <span>1 year 0 month</span>
                      </p>
                      <p className="text-[9px] p-0 opacity-60 font-semibold">
                        Last BMX : <span>1 year 0 month</span>
                      </p>
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-semibold opacity-60 p-2">Dr. Jhon Cleark</td>
              <td>
                <div className="flex flex-col gap-2 py-2 text-center">
                  <div className="flex gap-1 items-center justify-center">
                    <InfoIcon className="size-6 opacity-65" />
                    <p className="text-red-500 font-bold">Scheduled</p>
                  </div>
                  <span className="opacity-65">
                    Reminder Send <br /> No Response Yet
                  </span>
                  <span className="text-orange-400 opacity-65 font-semibold text-xs">
                    <ContactEmergencyOutlinedIcon className="text-orange-400" />{" "}
                    1 Form Incomplete
                  </span>
                </div>
              </td>
              <td className="text-center opacity-65 font-semibold text-xs">
                450$
              </td>
              <td className="text-center opacity-65 font-semibold text-xs">
                450$
              </td>
              <td className="text-center opacity-65 font-semibold text-xs">
                0
              </td>
              <td className="text-center opacity-65 text-red-500 font-bold text-xs">
                $50
              </td>
              <td className="text-center opacity-65 font-semibold ">
                jul 13, 2022
              </td>
              <td className="text-center opacity-65 font-semibold text-xs">
                Yes
              </td>

              <td>
                {/* <div
                  onClick={() => setDetails(true)}
                  className="flex justify-center cursor-pointer hover:text-gray-500"
                >
                  <RemoveRedEyeIcon />
                </div> */}

                <div className="flex gap-2 m-2">
                  <CallIcon className="bg-green-600 rounded-full p-1 text-white cursor-pointer hover:bg-green-700" />
                  <TextsmsIcon className="bg-green-600 rounded-full p-1 text-white cursor-pointer hover:bg-green-700" />
                  <MailOutlineIcon />
                </div>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-2 w-16 text-[9px] font-semibold opacity-65">
                08:00 AM 10:00 AM
              </td>
              <td className="p-2">
                <div className="">
                  <div className="flex gap-2">
                    <div className="bg-blue-500 hover:bg-blue-600 cursor-pointer size-8 rounded-full text-center text-white text-xs font-bold p-2">
                      MB
                    </div>
                    <div className="flex flex-col text-xs text-gray-600">
                      <p
                        onClick={() => setDetails(true)}
                        className="text-blue-400 hover:text-blue-600 cursor-pointer font-bold py-1"
                      >
                        Mr . Abul Kalam
                      </p>
                      <div className="text-[8px] opacity-65  max-w-[150px]">
                        {/* <p>
                          <span>D0592,</span>
                          <span>D0592,</span>
                          <span>D0592,</span>
                          <span>D0592,</span>
                          <span>D0592,</span>
                          <span>D0592,</span>
                        </p> */}
                        D05345, D05345, D05345, D05345, D05345, D05345, D05345,
                      </div>
                      <p className="text-[9px] p-0 opacity-60 font-semibold">
                        Last Pano : <span>1 year 0 month</span>
                      </p>
                      <p className="text-[9px] p-0 opacity-60 font-semibold">
                        Last FMX : <span>1 year 0 month</span>
                      </p>
                      <p className="text-[9px] p-0 opacity-60 font-semibold">
                        Last BMX : <span>1 year 0 month</span>
                      </p>
                    </div>
                  </div>
                </div>
              </td>
              <td className="font-semibold opacity-60 p-2">Dr. Jhon Cleark</td>
              <td>
                <div className="flex flex-col gap-2 py-2 text-center">
                  <div className="flex gap-1 items-center justify-center">
                    <InfoIcon className="size-6 opacity-65" />
                    <p className="text-red-500 font-bold">Scheduled</p>
                  </div>
                  <span className="opacity-65">
                    Reminder Send <br /> No Response Yet
                  </span>
                  <span className="text-orange-400 opacity-65 font-semibold text-xs">
                    <ContactEmergencyOutlinedIcon className="text-orange-400" />{" "}
                    1 Form Incomplete
                  </span>
                </div>
              </td>
              <td className="text-center opacity-65 font-semibold text-xs">
                450$
              </td>
              <td className="text-center opacity-65 font-semibold text-xs">
                450$
              </td>
              <td className="text-center opacity-65 font-semibold text-xs">
                0
              </td>
              <td className="text-center opacity-65 text-red-500 font-bold text-xs">
                $50
              </td>
              <td className="text-center opacity-65 font-semibold ">
                jul 13, 2022
              </td>
              <td className="text-center opacity-65 font-semibold text-xs">
                Yes
              </td>

              <td>
                {/* <div
                  onClick={() => setDetails(true)}
                  className="flex justify-center cursor-pointer hover:text-gray-500"
                >
                  <RemoveRedEyeIcon />
                </div> */}

                <div className="flex gap-2 m-2">
                  <CallIcon className="bg-green-600 rounded-full p-1 text-white cursor-pointer hover:bg-green-700" />
                  <TextsmsIcon className="bg-green-600 rounded-full p-1 text-white cursor-pointer hover:bg-green-700" />
                  <MailOutlineIcon />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <Pageination />
      </div>

      <div
        className={`absolute overflow-hidden transition-all ease-in-out duration-700 ${
          details ? "w-96" : "w-0"
        } ${
          details ? "block" : "hidden"
        } p-6 border rounded-xl h-[90vh] top-0 right-0 z-40 shadow-xl bg-primary`}
      >
        <div className="text-right flex justify-between opacity-65">
          <div className="flex gap-2">
            <div className="size-8 bg-gray-400 rounded-full"></div>
            <div className="">
              <div className="text-left text-xs space-y-1">
                {" "}
                <p className="font-bold text-md">Patient Name</p>
                <p>ID : 189005 . Hustone</p>
                <p>
                  Female <span className="text-green-400">Active</span>
                </p>
              </div>
              <div className="flex gap-2 m-2">
                <CallIcon className="bg-green-600 rounded-full p-1 text-white cursor-pointer hover:bg-green-700" />
                <TextsmsIcon className="bg-green-600 rounded-full p-1 text-white cursor-pointer hover:bg-green-700" />
                <MailOutlineIcon />
              </div>
            </div>
          </div>
          <span
            onClick={CloseDetails}
            className="hover:opacity-75 cursor-pointer"
          >
            <CancelPresentationIcon />
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 pt-6">
          <div className=" p-4 rounded text-sm flex flex-col space-y-1 border-red-200 border-2">
            <p className="text-xs opacity-50">Last Visit</p>
            <p className="font-bold">Feb 03 2024</p>
            <p className="text-xs opacity-60 font-semibold ">Friday 07:67 pm</p>
            <p className="text-xs opacity-60 font-semibold">Uncategorize</p>
            <p className="text-xs opacity-60 text-red-500 font-semibold">
              Broken
            </p>
          </div>
          <div className=" p-4 rounded text-sm flex flex-col space-y-1 border-green-200 border-2">
            <p className="text-xs opacity-50">Next Visit</p>
            <p className="font-bold">Feb 03 2024</p>
            <p className="text-xs opacity-60 font-semibold ">Friday 07:67 pm</p>
            <p className="text-xs opacity-60 font-semibold text-sky-600">
              Hygiene
            </p>
            <p className="text-xs opacity-60  font-semibold">Schedule</p>
          </div>
        </div>
        <div className="pt-6 p-2">
          <div className="flex justify-center  p-2">
            <div className="text-orange-400 border-b-2 border-orange-400 grow text-center">
              <p>Activity</p>
            </div>
            <div className="grow   text-center">
              <p>info</p>
            </div>
          </div>
          <div className="py-4 space-y-2">
            <div className="flex flex-col text-xs space-x-4 border p-1.5 rounded">
              <div className="flex justify-between space-x-4">
                <div className=" space-x-4">
                  <span className="font-bold">
                    <ContactEmergencyOutlinedIcon className="text-orange-400" />
                  </span>
                  <span className="opacity-70 font-bold">3 pending Forms</span>
                </div>
                <span onClick={openForm} className="">
                  <KeyboardArrowDownIcon className="opacity-65 hover:opacity-90 cursor-pointer" />
                </span>
              </div>

              {Form && (
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="opacity-65">
                      Sample Form
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="opacity-65">
                      Sample Form 2
                    </label>
                  </div>
                  <div className="flex gap-2">
                    <input type="checkbox" name="" id="" />
                    <label htmlFor="" className="opacity-65">
                      Dental Form
                    </label>
                  </div>

                  <div className="flex gap-4 py-3 ">
                    <button className="bg-orange-400 flex items-center text-white px-3 py-2 w-32 hover:bg-orange-600">
                      <DoneIcon />
                      <p className="opacity-70">Assign</p>
                    </button>
                    <button className="bg-orange-400 flex items-center text-white px-3 py-2 w-32 hover:bg-orange-600">
                      <EditNotificationsIcon />
                      <p className="opacity-70">Remind</p>
                    </button>
                  </div>
                </div>
              )}
            </div>
            <Details title="Hygine Overdue (4/10/2022">
              <DateRange className="text-orange-400" />
            </Details>
            <Details title="EHR Balance Due: $450">
              <AttachMoney className="text-orange-400" />
            </Details>
            <Details title="Some Random Text" />
          </div>
        </div>
      </div>
    </div>
  );
}

const Details = ({ title, children }) => {
  return (
    <div className=" text-xs space-x-4 border p-1.5 rounded">
      <span className="font-bold">{children}</span>
      <span className="opacity-70 font-bold ">{title}</span>
    </div>
  );
};

export default PatientManagement;
