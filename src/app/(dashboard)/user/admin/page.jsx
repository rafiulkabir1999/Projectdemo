import { Select } from "@mui/base";
import { ArrowRight, ArrowUpward, Info } from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";

function Dashboard() {
  return (
    <div>
      <div className="w-full flex pt-2 justify-between items-center mb-4">
        <div className="flex flex-col">
          <div className="space-x-2 text-xs flex items-center py-2">
            <p>Dashboard</p> <ArrowRight /> <p>Phone Analytics</p>
          </div>
          <p className="text-2xl">Phone Analytics</p>
        </div>
        <div className="flex gap-2">
          <div className="">
            {/* < htmlFor="">label</    */}
            <select className="p-2 border rounded-md">
              <option value="" className="p-2">
                {" "}
                month
              </option>
              <option value="" className="p-2">
                year
              </option>
              <option value="" className="p-2">
                day
              </option>
            </select>
          </div>
          <MoreHorizIcon />
        </div>
      </div>
      <hr />

      <div className="py-2">
        <p className="py-6 font-bold">Summery</p>

        <div className="flex gap-6">
          <div className="border-2 rounded-xl p-4 grow">
            <div className="flex items-center gap-2">
              <p className="py-2 font-semibold opacity-70">Call Volume</p>{" "}
              <Info />
            </div>
            <div className="flex">
              <div className="">
                <p className="py-1 text-xl font-bold opacity-65">
                  2134234 <span className="text-xs font-normal">calls</span>
                </p>
                <div className="flex text-xs items-center gap-2">
                  <p className="bg-green-300 p-border-2 rounded-xl text-green-600 font-bold">
                    <ArrowUpward className="text-sm" /> 21 %
                  </p>
                  <p className="opacity-50 font-semibold">vs Last Month</p>
                </div>
              </div>
            </div>
          </div>

          <div className="border-2 rounded-xl p-4 grow">
            <div className="flex items-center gap-2">
              <p className="py-2 font-semibold opacity-70">Call Volume</p>{" "}
              <Info />
            </div>
            <div className="flex">
              <div className="">
                <p className="py-1 text-xl font-bold opacity-65">
                  2134234 <span className="text-xs font-normal">calls</span>
                </p>
                <div className="flex text-xs items-center gap-2">
                  <p className="bg-green-300 p-2 rounded-md text-green-600 font-bold">
                    <ArrowUpward className="text-sm" /> 21 %
                  </p>
                  <p className="opacity-50 font-semibold">vs Last Month</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 rounded-xl p-4 grow">
            <div className="flex items-center gap-2">
              <p className="py-2 font-semibold opacity-70">Call Volume</p>{" "}
              <Info />
            </div>
            <div className="flex">
              <div className="">
                <p className="py-1 text-xl font-bold opacity-65">
                  2134234 <span className="text-xs font-normal">calls</span>
                </p>
                <div className="flex text-xs items-center gap-2">
                  <p className="bg-green-300 p-2 rounded-md text-green-600 font-bold">
                    <ArrowUpward className="text-sm" /> 21 %
                  </p>
                  <p className="opacity-50 font-semibold">vs Last Month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
