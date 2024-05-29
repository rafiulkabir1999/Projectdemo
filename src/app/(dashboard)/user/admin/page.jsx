"use client";
import { Select } from "@mui/base";
import { ArrowRight, ArrowUpward, Info } from "@mui/icons-material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import React from "react";
import { Chart } from "react-google-charts";

function Dashboard() {
  // const data = [
  //   ["Year", "Sales"],
  //   ["2013", 1000],
  //   ["2014", 1170],
  //   ["2015", 660],
  //   ["2016", 1030],
  // ];

  const data = [
    ["Task", "Hours per Day"],
    ["Work", 8],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 8],
    ["Other", 2],
  ];
  const barchartdata = [
    ["City", "2010 Population", "2000 Population"],
    ["New York City, NY", 8175000, 8008000],
    ["Los Angeles, CA", 3792000, 3694000],
    ["Chicago, IL", 2695000, 2896000],
    ["Houston, TX", 2099000, 1953000],
    ["Philadelphia, PA", 1526000, 1517000],
  ];
  const options = {
    title: "My Daily Activities",
    pieHole: 0.4, // This creates the "donut" effect
    legend: { position: "bottom" },
  };

  const barchartoptions = {
    title: "Population of Largest U.S. Cities",
    chartArea: { width: "50%" },
    hAxis: {
      title: "Total Population",
      minValue: 0,
    },
    vAxis: {
      title: "City",
    },
  };
  return (
    // <div>
    //   <div className="w-full flex pt-2 justify-between items-center mb-4">
    //     <div className="flex flex-col">
    //       <div className="space-x-2 text-xs flex items-center py-2">
    //         <p>Dashboard</p> <ArrowRight /> <p>Phone Analytics</p>
    //       </div>
    //       <p className="text-2xl">Phone Analytics</p>
    //     </div>
    //     <div className="flex gap-2">
    //       <div className="">
    //         {/* < htmlFor="">label</    */}
    //         <select className="p-2 border rounded-md">
    //           <option value="" className="p-2">
    //             {" "}
    //             month
    //           </option>
    //           <option value="" className="p-2">
    //             year
    //           </option>
    //           <option value="" className="p-2">
    //             day
    //           </option>
    //         </select>
    //       </div>
    //       <MoreHorizIcon />
    //     </div>
    //   </div>
    //   <hr />

    //   <div className="py-2">
    //     <p className="py-6 font-bold">Summery</p>

    //     <div className="flex gap-6">
    //       <div className="border-2 rounded-xl p-4 grow">
    //         <div className="flex items-center gap-2">
    //           <p className="py-2 font-semibold opacity-70">Call Volume</p>{" "}
    //           <Info />
    //         </div>
    //         <div className="flex">
    //           <div className="">
    //             <p className="py-1 text-xl font-bold opacity-65">
    //               2134234 <span className="text-xs font-normal">calls</span>
    //             </p>
    //             <div className="flex text-xs items-center gap-2">
    //               <div className="flex">
    //                 <p className="bg-green-300 p-border-2 rounded-xl text-green-600 font-bold">
    //                   <ArrowUpward className="text-sm" /> 21 %
    //                 </p>
    //                 <p className="opacity-50 font-semibold">vs Last Month</p>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="">
    //             <div></div>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="border-2 rounded-xl p-4 grow">
    //         <div className="flex items-center gap-2">
    //           <p className="py-2 font-semibold opacity-70">Call Volume</p>{" "}
    //           <Info />
    //         </div>
    //         <div className="flex">
    //           <div className="">
    //             <p className="py-1 text-xl font-bold opacity-65">
    //               2134234 <span className="text-xs font-normal">calls</span>
    //             </p>
    //             <div className="flex text-xs items-center gap-2">
    //               <p className="bg-green-300 p-2 rounded-md text-green-600 font-bold">
    //                 <ArrowUpward className="text-sm" /> 21 %
    //               </p>
    //               <p className="opacity-50 font-semibold">vs Last Month</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="border-2 rounded-xl p-4 grow">
    //         <div className="flex items-center gap-2">
    //           <p className="py-2 font-semibold opacity-70">Call Volume</p>{" "}
    //           <Info />
    //         </div>
    //         <div className="flex">
    //           <div className="">
    //             <p className="py-1 text-xl font-bold opacity-65">
    //               2134234 <span className="text-xs font-normal">calls</span>
    //             </p>
    //             <div className="flex text-xs items-center gap-2">
    //               <p className="bg-green-300 p-2 rounded-md text-green-600 font-bold">
    //                 <ArrowUpward className="text-sm" /> 21 %
    //               </p>
    //               <p className="opacity-50 font-semibold">vs Last Month</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="border">
    //       <Chart
    //         width={"500px"}
    //         height={"300px"}
    //         chartType="LineChart"
    //         loader={<div>Loading Chart</div>}
    //         data={data}
    //         options={{
    //           // title: "Company Performance",
    //           hAxis: { textPosition: "none" }, // Hides x-axis labels
    //           vAxis: {
    //             textPosition: "none", // Hides y-axis labels
    //             gridlines: { color: "transparent" }, // Hides y-axis gridlines
    //           }, // Hides y-axis labels
    //           curveType: "function",
    //           legend: "none",
    //         }}
    //         // rootProps={{ "data-testid": "1" }}
    //       />
    //     </div>
    //   </div>
    // </div>

    <div className="grid grid-cols-2 gap-x-10">
      <div className=" border shadow-md">
        <p className="text-blue-500 text-xs p-3">Recare</p>
        <Chart
          chartType="PieChart"
          width="100%"
          height="200px"
          data={data}
          options={options}
        />
      </div>
      <div className=" border shadow-md">
        <p className="text-blue-500 text-xs p-3">Recare</p>
        <Chart
          chartType="BarChart"
          width="100%"
          height="200px"
          data={barchartdata}
          options={barchartoptions}
        />
      </div>
    </div>
  );
}

export default Dashboard;
