"use client";
import React from "react";
// import Select from "react-select";
function Pageination() {
  const options = [
    {
      label: "label",
      vlaue: 1,
    },
  ];
  return (
    <div className="flex justify-between py-6">
      <div className="">
        {/* <Select options={options} placeholder="Quantify"></Select> */}
      </div>
      <div className="flex gap-2 ">
        <button className="border size-8 rounded-md font-bold p-1 text-sm text-center hover:bg-black hover:text-white">
          1
        </button>
        <button className="border size-8 rounded-md font-bold p-1 text-sm text-center hover:bg-black hover:text-white">
          2
        </button>
        <button className="border size-8 rounded-md font-bold p-1 text-sm text-center hover:bg-black hover:text-white">
          3
        </button>
        <button className="border size-8 rounded-md font-bold p-1 text-sm text-center hover:bg-black hover:text-white">
          4
        </button>
      </div>
    </div>
  );
}

export default Pageination;
