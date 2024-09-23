"use client";
import React from "react";

const Account: React.FC = () => {
  return (
    <div className="flex items-center justify-center flex-col border-t">
      <div className="w-[95%] tablet:w-[90%] mt-10 tablet:mt-20 flex justify-between">
        <p className="text-2xl tablet:text-4xl font-serif">My Account</p>
        <button className="font-serif hover:text-blue-600">Logout</button>
      </div>

      <div className="w-[95%] tablet:w-[90%] mt-2 flex justify-between border-t">
        <div className="tablet:w-[60%] tablet:mt-10">
          <p className="text-xl tablet:text-2xl font-serif">Order History</p>
          
        </div>

        <div className="tablet:w-[40%] tablet:mt-10">
          <p className="text-xl tablet:text-2xl font-serif">Account Details</p>
        </div>
      </div>
    </div>
  );
};

export default Account;
