import React from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";

function NewPatient() {
  return (
    <div className="border rounded w-[80%]">
      <div className="bg-gray-200 p-2 flex gap-2 font-bold">
        <Link href={`/user/admin/patientmanagement`}>
          <KeyboardBackspaceIcon className="size-6 " />
        </Link>
        <p>New Patient 1</p>
      </div>
      <form action="" className="p-6  shadow-md ">
        <div className="grid grid-cols-2 gap-x-10 gap-y-6 p-6 bg-gray-100/50">
          <Input label="First Name" />
          <Input label="Last Name" />
          <Input label="Email" />
          <Input label="Date Of Birth" />
          <Input label="Phone Number" />
          <Input label="Phone Number" />
          <Input label="Phone Number" />
          <Input label="Phone Number" />
          <Input label="Phone Number" />
          <Input label="Phone Number" />
          <Input label="Phone Number" />
          <Input label="Phone Number" />
        </div>

        <div
          className="px-6 pb-6 flex justify-end  bg-gray-100/50
        "
        >
          <button className="p-2 w-36 bg-blue-500 border hover:bg-white hover:border hover:text-blue-500 text-white text-sm rounded px-6">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

const Input = ({ label, type }) => {
  return (
    <div className="flex flex-col gap-1 opacity-70 relative">
      <label
        htmlFor=""
        className="text-xs font-bold px-2 absolute -top-2 bg-white mx-2"
      >
        {label}
      </label>
      <input
        type="text"
        className=" outline-none border p-1.5 rounded-sm  text-sm"
      />
    </div>
  );
};

export default NewPatient;
