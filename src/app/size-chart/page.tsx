"use client";
import React from "react";
import HeaderCart from "../card/HeaderCart";

const SizeChart: React.FC = () => {
  return (
    <div className="w-full">
      <HeaderCart pageName="Size Chart" />
      <div className="w-full tablet:w-[95%] ml-0 tablet:ml-[2.55%] mt-10 tablet:mt-20 mb-10 tablet:mb-20 overflow-x-auto">
        <table className="min-w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border border-gray-300">Size</th>
              <th className="px-4 py-2 border border-gray-300">Neck</th>
              <th className="px-4 py-2 border border-gray-300">Chest</th>
              <th className="px-4 py-2 border border-gray-300">Waist</th>
              <th className="px-4 py-2 border border-gray-300">Sleeve</th>
            </tr>
          </thead>
          <tbody>
            {sizeChartData.map((row, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2 border border-gray-300">{row.size}</td>
                <td className="px-4 py-2 border border-gray-300">{row.neck}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {row.chest}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {row.waist}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {row.sleeve}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
};

const sizeChartData = [
  {
    size: "S",
    neck: "14-14½″",
    chest: "34-36″",
    waist: "28-30″",
    sleeve: "32-33″",
  },
  {
    size: "M",
    neck: "15-15½″",
    chest: "38-40″",
    waist: "32-34″",
    sleeve: "33-34″",
  },
  {
    size: "L",
    neck: "16-16½″",
    chest: "42-44″",
    waist: "36-38″",
    sleeve: "34-35″",
  },
  {
    size: "XL",
    neck: "17-17½″",
    chest: "46-48″",
    waist: "40-42″",
    sleeve: "35-36″",
  },
  {
    size: "2XL",
    neck: "18-18½″",
    chest: "50-52″",
    waist: "44-46″",
    sleeve: "36-37″",
  },
  {
    size: "3XL",
    neck: "19-19½″",
    chest: "54-56″",
    waist: "48-50″",
    sleeve: "37-38″",
  },
  {
    size: "4XL",
    neck: "20½-21″",
    chest: "58-60″",
    waist: "53-55″",
    sleeve: "38-38½″",
  },
  {
    size: "5XL",
    neck: "22-22½″",
    chest: "62-64″",
    waist: "58-60″",
    sleeve: "38½-39″",
  },
];

export default SizeChart;
